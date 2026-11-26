import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { expect, it } from 'vitest';

const cli = fileURLToPath(new URL('../../src/cli.ts', import.meta.url));

it.each([
  { args: [], greeting: 'Hello, world!\n' },
  { args: ['Ada Lovelace'], greeting: 'Hello, Ada Lovelace!\n' },
])('prints $greeting to stdout', ({ args, greeting }) => {
  const stdout = execFileSync(process.execPath, [cli, ...args], { encoding: 'utf8' });

  expect(stdout).toBe(greeting);
});
