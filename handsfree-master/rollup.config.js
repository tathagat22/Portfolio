import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import {babel} from '@rollup/plugin-babel'

export default [
  /**
   * Handsfree.js UMD library
   */
  {
    input: 'src/handsfree.js',
    moduleContext: {
      'node_modules/gsap/TweenLite.js': 'window'
    },

    output: {
      name: 'Handsfree',
      format: 'umd',
      dir: 'build/lib'
    },

    plugins: [
      babel({
        babelHelpers: 'runtime',
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-optional-chaining'
        ]
      }),
      copy({
        targets: [
          {src: 'docs/.vuepress/public/handsfreejs/*', dest: 'build/lib/assets/'}
        ]
      }),
      commonjs({
        include: /node_modules/
      }),
      nodeResolve()
    ]
  }
]