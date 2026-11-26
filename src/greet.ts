function formatName(name: string): string {
  return name.trim().split(/\s+/)[0];
}

export function greet(name = 'world'): string {
  return `Hello, ${formatName(name)}!`;
}
