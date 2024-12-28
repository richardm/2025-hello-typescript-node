#!/usr/bin/env -S npx tsx

// This uses npx tsx to run this as a shell script
console.log('argv:', process.argv.slice(2));

// Run: `./scripts/example.ts hello world`
// Output: argv: [ 'hello', 'world' ]
