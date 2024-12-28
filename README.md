# A minimal TypeScript Node.js Express project

## Prerequisites:

- Node.js 22+
- TypeScript 5+

## Goals:

- TypeScript ESM
- Eslint for consistency
- Prettier for formatting
- Jest for testing
- Express 5

## esbuild Notes

- `esbuild` does not support `emitDecoratorMetadata` in tsconfig.json

## Notes:

- Express 5 requires Node.js 18 or higher, but since this is a reference repo for 2025 and onward, I'm using Node.js 22.
- `tsx` does not perform type checking. VS Code can do that for you locally, and your CI/CD pipeline can do that for you during builds.
- Note that `tsx` uses `esbuild` under the hood

## References:

FYI: Express 5 came out in October 2024, so it may have limited community support.

- https://expressjs.com/2024/10/15/v5-release.html
- https://www.trevorlasn.com/blog/whats-new-in-express-5
- The VS Code launch.json file is from https://github.com/withKonvSuu/learn-tsx
- https://esbuild.github.io/content-types/#javascript-caveats
- https://esbuild.github.io/content-types/#typescript-caveats
