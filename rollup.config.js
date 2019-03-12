import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json'

export default {
    input: './src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'iife',
            name: "reverse",
            interop: false
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        resolve(),
        typescript({
            typescript: require('typescript'),
        }),
    ],
}