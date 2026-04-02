[![Build](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/build.yml)
[![Security Audit](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/audit-dependencies.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/audit-dependencies.yml)
[![Quality checks](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/quality-checks.yml/badge.svg?branch=main)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/quality-checks.yml)
[![Dependabot](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/richardm/2025-hello-typescript-node/actions/workflows/dependabot/dependabot-updates)

# Scaffolding for a minimal TypeScript ESM / Node.js 22+ / Express 5 / Eslint 9 / Prettier project

## How to use

1. Ensure Node.js 22+ is installed in your workspace (I recommend using `nvm`)
2. From GitHub repo, click "Use this template" to create a new project from this template.
3. Add your application code to the `src` directory

## Why us this template?

I created this in January 2025 because I was tired of scaffolding new projects from scratch and wanteds a modern baseline I could use for new projects.

This is an **opinionated** template using my current default tech stack: TypeScript 6, Node.js 22 / 24, Express 5, Eslint 9 (flat config), Prettier, Vitest, GitHub Actions.

## Changelog

- [x] Remove support for Node.js 18 and below due to End-of-Life (completed June 2025)
- [x] Remove support for Node.js 23 due to End-of-Life (completed June 2025)
- [x] Add support for Node.js 24 (Current) (completed June 2025)
- [ ] [Remove Node.js 20](https://github.com/richardm/2025-hello-typescript-node/issues/83) due to end of maintenance phase. (in progress April 2026)
- [ ] Add support for Node.js 26 (coming soon)

## Supported Node.js versions

I recommend using the latest LTS version of Node.js in production; however this repo runs matrix builds ensuring compatibility with the following Node.js versions (as of April 2026):

- Node.js 22 (Maintenance)
- Node.js 24 (Active)

## Security

Since 2025, we have seen a surge in npm supply chain vulnerabilities, especially via targeting insecure GitHub Actions and stealing credentials for maintainers of open source packages. I strongly recommend using fully isolated cloud VMs for development to avoid accidentally installing rogue npm dependencies on your main computer. However, this repo provides hardened security defaults to reduce the risk if you do develop locally.

- [x] Uses pnpm with hardened defaults (see `.npmrc`), including disabling install scripts, requiring dependencies (and transitive dependencies) to be 3+ days old.
- [ ] Uses [pinned hashes](https://github.blog/changelog/2025-08-15-github-actions-policy-now-supports-blocking-and-sha-pinning-actions) for all GitHub Actions (see `.github/workflows`)
- [x] Pinned hashes enforced by GitHub (Security -> Actions -> General -> enable "Require full-length SHA")
- [ ] Add [OSSF Scorecard action](https://github.com/marketplace/actions/ossf-scorecard-action) and configure GitHub repo. See: [#84](https://github.com/richardm/2025-hello-typescript-node/issues/84)

## Project Goals

- [x] Require Node 22+
- [x] Express 5
- [x] TypeScript 5
- [x] Support TypeScript ESM
- [x] Use eslint for consistency
- [x] Use Prettier for formatting
- [x] Provide a VSCode `.devcontainer`
- [ ] Vitest for unit tests
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
