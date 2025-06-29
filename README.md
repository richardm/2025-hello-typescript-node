[![Build](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/build.yml)
[![Security Audit](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/audit-dependencies.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/audit-dependencies.yml)
[![Quality checks](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/quality-checks.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/quality-checks.yml)
[![Dependabot](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/dependabot/dependabot-updates)

# Scaffolding for a minimal TypeScript ESM / Node.js 20+ / Express 5 / Eslint 9 / Prettier project

**Why?**

- I'm tired of scaffolding projects from scratch and want a modern and up-to-date starting point that I can clone for new projects.
- I have not found AI to be as good at scaffolding projects as it is at generating code within an existing project.
- It's 2025, and it's time to use ESM with the latest versions of everything.

## How to use

1. Install Node.js 20+ (I recommend using `nvm`)
2. Clone this repo
3. Add your application code to the src directory

## Supported Node.js versions

I recommend using the latest LTS version of Node.js in production; however this repo runs matrix builds ensuring compatibility with the following Node.js versions (as of June 2025):

- Node.js 20 (Maintenance)
- Node.js 22 (LTS)
- Node.js 24 (Current)

## Changelog

- [x] Remove support for Node.js 18 and below due to End-of-Life (completed June 2025)
- [x] Remove support for Node.js 23 due to End-of-Life (completed June 2025)
- [x] Add support for Node.js 24 (Current) (completed June 2025)

## Project Goals

- [x] Require Node 20+
- [x] Express 5
- [x] TypeScript 5
- [x] Support TypeScript ESM
- [x] Use eslint for consistency
- [x] Use Prettier for formatting
- [x] Provide a VSCode `.devcontainer`
- [ ] Jest for unit tests
- [ ] (Supertest?) for API tests
- [ ] Pino for logging
- [ ] Adopt Conventional Commits and automatically generate the changelog
- [ ] Provide a GitHub Actions workflow for testing

## Out of Scope

- **Production**: This is intended to be usable in a variety of prod environments (lambda, containers, etc). As a result, Docker and/or PM2 are out of scope for now, but I would be happy to link to reference repos for how to productionize this for a variety of production environments.
- **Backwards compatibility**: This _may_ work work with older versions, but I will not be investing any effort to support those.

## Notes:

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
