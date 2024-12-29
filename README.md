![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/richardm/2025-hello-typescript-node/build.yml)
![Security Audit Status](https://img.shields.io/github/actions/workflow/status/richardm/2025-hello-typescript-node/audit-dependencies.yml?label=security)

# Scaffolding for a minimal TypeScript Node.js Express project

**Why?**

- I'm tired of scaffolding projects from scratch and want a modern starting point.
- I have not found AI to be as good at scaffolding projects as it is at generating code within an existing project.

## Globals Dependencies

You will need to install these globally (I recommend using `nvm`):

- Node.js 22+

## Goals:

- TypeScript ESM
- Eslint for consistency
- Prettier for formatting
- Jest for testing
- Express 5

## esbuild Notes

- `esbuild` does not support `emitDecoratorMetadata` in tsconfig.json

## Notes:

- **Scaffolding testing is out of scope for now.** Maybe in a future update.
- Express 5 requires Node.js 18 or higher, but since this is a reference repo for 2025 and onward, I'm using Node.js 22.
- `tsx` does not perform type checking. VS Code can do that for you locally, and your CI/CD pipeline can do that for you during builds.
- Note that `tsx` uses `esbuild` under the hood
- Express 5 was finally released in October 2024, so it may have limited community support.

## References:

- https://expressjs.com/2024/10/15/v5-release.html
- https://www.trevorlasn.com/blog/whats-new-in-express-5
- The VS Code launch.json file is from https://github.com/withKonvSuu/learn-tsx
- https://esbuild.github.io/content-types/#javascript-caveats
- https://esbuild.github.io/content-types/#typescript-caveats
