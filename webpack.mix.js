let mix = require('laravel-mix');

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

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/react/components/QRScan.js','public/js/react')
   .react('resources/js/react/app.js','public/js/react')
   .react('resources/js/react/components/Body.js','public/js/react')
   .sass('resources/sass/app.scss', 'public/css');
