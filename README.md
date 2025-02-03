![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/richardm/2025-hello-typescript-node/build.yml)
![Security Audit Status](https://img.shields.io/github/actions/workflow/status/richardm/2025-hello-typescript-node/audit-dependencies.yml?label=security)

# Scaffolding for a minimal TypeScript Node.js Express project

**Why?**

- I'm tired of scaffolding projects from scratch and want a modern starting point.
- I have not found AI to be as good at scaffolding projects as it is at generating code within an existing project.
- Target the latest versions of all dependencies to maximize long-term compatibility for greenfield development.

## How to use

1. Install Node.js 22+ (I recommend using `nvm`)
2. Clone this repo
3. Add your application code to the src directory

## TODO List

- [x] Require Node 22+
- [x] Express 5
- [x] TypeScript 5
- [x] Support TypeScript ESM
- [x] Use eslint for consistency
- [x] Use Prettier for formatting
- [ ] VSCode devcontainer
- [ ] Jest for unit tests
- [ ] (Supertest?) for API tests
- [ ] Pino for logging

## Out of Scope

- **Production**: This is intended to be usable in a variety of prod environments (lambda, containers, etc). As a result, Docker and/or PM2 are out of scope for now, but I would be happy to link to reference repos for how to productionize this for a variety of production environments.
- **Backwards compatibility**: This *may* work work with older versions, but I will not be investing any effort to support those.

## Notes:

- Express 5 only requires Node.js 18 or higher, which is in maintenance until May 2025. To maximize long-term compatibility for greenfield projects started in 2025, this requires Node.js 22.
- `tsx` does not perform type checking. VS Code can do that for you locally, and your CI/CD pipeline can do that for you during builds.
- Note that `tsx` uses `esbuild` under the hood
- Express 5 was finally released in October 2024, so it may have limited community support.
- `esbuild` does not support `emitDecoratorMetadata` in tsconfig.json

## References:

- https://expressjs.com/2024/10/15/v5-release.html
- https://www.trevorlasn.com/blog/whats-new-in-express-5
- The VS Code launch.json file is from https://github.com/withKonvSuu/learn-tsx
- https://esbuild.github.io/content-types/#javascript-caveats
- https://esbuild.github.io/content-types/#typescript-caveats
