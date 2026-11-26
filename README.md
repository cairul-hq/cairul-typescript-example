# Cairul TypeScript example

A TypeScript command-line app that prints `Hello, world!` or greets a name you pass in. Use Node.js 24.12 or newer and npm.

```sh
npm ci
npm start
npm start -- "Ada Lovelace"
npm run typecheck
npm test
```

`npm run test:unit` runs the tests in `test/unit/` against the greeting function.
`npm run test:e2e` runs the tests in `test/e2e/`, which launch the CLI and check its output.

## Use the Cairul plan

Open this checkout in a harness with Cairul configured. Run `npx cairul-mcp` from
the project root if you need to register a project-local stdio server.

Ask your agent to work on a GitHub issue from `cairul-hq/cairul-typescript-example`.
Cairul selects the plan in `.cairul/plans.yaml` and uses the Vitest plugin declared
in `.cairul/plugins.yaml`. The **Verification** phase runs two `vitest.run` checks,
one for the `unit` project and one for the `e2e` project.

The plan instructs the agent to implement the issue, open a pull request against
the default branch with `Closes #<issue-number>` in its description, pass
Verification, merge the pull request, and confirm that GitHub closed the issue.
