const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/src/main.ts', 'public/js')
    .sourceMaps()
    .webpackConfig({
        resolve: {
            alias: {
                // vue$: path.resolve('vue/dist/vue.runtime.esm.js'),
                '@': path.resolve(__dirname, 'resources/src/'),
            },
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: "sass-loader",
                    options: {
                        data: '@import "@/assets/styles/common/vars.scss";'
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {appendTsSuffixTo: [/\.vue$/]},
                    exclude: /node_modules/,
                }
            ]
        },
    })
    .vue()
    .sourceMaps()
    .browserSync({
        host: process.env.APP_URL,
        proxy: process.env.APP_URL,
    })
    .sass('resources/src/assets/styles/main.scss', 'public/css')
    .sourceMaps();
