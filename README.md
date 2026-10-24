# @x12i/agentra-sdk usage example

Node.js / TypeScript SDK for sending events.

This consuming application demonstrates **track and flush one analytics event with an offline http fixture** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- A consumer needs the following capability: Node.js / TypeScript SDK for sending events.
- Application code needs the agentra-sdk client surface while the implementation or remote service remains a separate dependency.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/agentra-sdk)
- [Implementation monorepo](https://github.com/x12i/agentra)
- [Reviewed package source](https://github.com/x12i/agentra/tree/772e50e64925e6359e42172d4dcf11d4aa795763/packages/sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Offline HTTP fixture

The example calls the actual published client. Its HTTP responses are explicit in-process fixtures, and no network request reaches a service. It demonstrates request construction, response consumption, and the assertions in the source. Running against a live service also requires its endpoint, credentials and supported server version.
