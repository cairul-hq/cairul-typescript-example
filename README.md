# Cairul TypeScript Demo

This demo uses a small TypeScript Hello World CLI to show how Cairul guides an
agent through a GitHub issue and independently verifies the fix with Vitest.
The CLI deliberately drops part of a multi-word name so you can see a failing
test turn green.

## Quick start

### 1. Install dependencies and reproduce the bug

Use Node.js 24.12 or newer with npm. To have your agent open a pull request,
give it GitHub access to push a branch and open a PR against this repository.

```sh
git clone https://github.com/cairul-hq/cairul-typescript-example.git
cd cairul-typescript-example
npm install
npm start -- "Ada Lovelace"
```

The CLI currently prints:

```text
Hello, Ada!
```

The CLI drops everything after the first word of the name, as described in
[GitHub issue #1](https://github.com/cairul-hq/cairul-typescript-example/issues/1).

If you also run `npm test`, three tests pass and the end-to-end test that
expects `Hello, Ada Lovelace!` fails.

### 2. Connect Cairul to your agent

`npm install` installs the published [`@cairul/mcp`](https://www.npmjs.com/package/@cairul/mcp)
package and the Cairul Vitest plugin. The commands below launch the server
through `npx`. Add Cairul and launch your agent from the repository root so it
can find the [GitHub issue plan](.cairul/plans.yaml) and
[plugin configuration](.cairul/plugins.yaml) in `.cairul/`.

<details>
<summary>Claude Code</summary>

```sh
claude mcp add --scope local --transport stdio cairul -- npx --yes @cairul/mcp
claude
```

Use `/mcp` to check that Cairul is connected. [Claude Code MCP docs](https://code.claude.com/docs/en/mcp)

</details>

<details>
<summary>Codex</summary>

```sh
codex mcp add cairul -- npx --yes @cairul/mcp
codex
```

Use `/mcp` to check that Cairul is connected. [Codex MCP docs](https://developers.openai.com/codex/mcp)

</details>

<details>
<summary>OpenCode</summary>

```sh
opencode mcp add cairul -- npx --yes @cairul/mcp
opencode mcp list
opencode
```

The command registers Cairul in the project's OpenCode configuration.
[OpenCode MCP docs](https://opencode.ai/docs/mcp-servers/)

</details>

### 3. Ask your agent to fix the issue

In the agent session you opened from this project, have the agent read this
quick start for the Cairul workflow. Then send the following prompt.

> Let's address Github Issue #1 for this project.

The agent starts a Cairul journey for the issue, makes the fix, and opens a
linked pull request for review. Cairul independently runs the unit tests in
`test/unit/` and the end-to-end tests in `test/e2e/` through its Vitest plugin.
The agent reports the fix as complete only after both **Verification** checks
pass and Cairul confirms the journey is complete.

### 4. See the fixed greeting

Once the agent finishes, run the same greeting command in the checkout with
the fix.

```sh
npm start -- "Ada Lovelace"
```

The CLI now prints:

```text
Hello, Ada Lovelace!
```

If you also run `npm test`, all four tests now pass, including the end-to-end
test for the full name.

## Documentation

For more on Cairul journeys, plans, and plugins, see the
[Cairul README](https://github.com/cairul-hq/cairul#readme).
