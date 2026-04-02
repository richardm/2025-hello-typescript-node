import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node20'], // Specify your Node.js version
  outfile: 'dist/index.js',
  minify: process.env.NODE_ENV === 'production',
  sourcemap: true,
  // Recommended for Node apps: don't bundle node_modules
  packages: 'external', 
}).catch(() => process.exit(1));
