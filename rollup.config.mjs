import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json' with { type: 'json' }

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'iife',
            name: 'reverse',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        esbuild({ target: 'es2015' }),
    ],
}
