const mix = require('laravel-mix');

mix.react()
.copyDirectory('src/asset', 'build/asset')
.sass('src/sass/app.scss', 'src/css');
