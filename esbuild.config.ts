import { build } from 'esbuild'

await build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.js',
  minify: true,
  keepNames: false,
  platform: 'node',
  bundle: true,
  target: 'es2022',
  treeShaking: true,
  format: 'esm',
  packages: 'external',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  drop: ['console', 'debugger'],
  legalComments: 'none',
  sourcemap: false
})
