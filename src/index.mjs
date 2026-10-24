import assert from 'node:assert/strict';
import { createAgentraClient } from '@x12i/agentra-sdk';

const originalFetch = globalThis.fetch;
const batches = [];
const client = createAgentraClient({ endpoint: 'https://agentra.example.invalid', apiKey: 'fixture-only', maxBatchSize: 10 });
try {
  globalThis.fetch = async (url, init) => {
    assert.equal(new URL(url).pathname, '/v1/events/batch');
    batches.push(JSON.parse(init.body));
    return Response.json({ accepted: 1 });
  };
  const tracked = await client.track({ scope: { tenantId: 'demo' }, event: { id: 'event-1', name: 'example.opened', type: 'usage', createdAt: '2026-01-01T00:00:00.000Z' } });
  assert.equal(tracked.eventId, 'event-1');
  assert.equal(batches.length, 0);
  await client.flush();
  assert.equal(batches[0].events[0].event.name, 'example.opened');
  console.log(batches);
} finally { client.shutdown(); globalThis.fetch = originalFetch; }
