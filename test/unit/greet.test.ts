import { expect, it } from 'vitest';
import { greet } from '../../src/greet.ts';

it('greets the world by default', () => {
  expect(greet()).toBe('Hello, world!');
});

it('greets a named person', () => {
  expect(greet('Ada')).toBe('Hello, Ada!');
});
