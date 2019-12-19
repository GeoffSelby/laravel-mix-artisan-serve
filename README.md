# Laravel Mix Artisan Serve

[![Latest Version on NPM][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Total Downloads][ico-downloads]][link-downloads]

This extension allows you to automatically serve your Laravel app with `php artisan serve` with Laravel Mix.  
Please make sure that you are using `laravel-mix` version 4.0 or higher.

> This package only runs when the `--watch` flag is passed such as with the default `npm run watch` command from a default Laravel install.

## Usage

You can install the package with npm or yarn:

```bash
npm install laravel-mix-artisan-serve --save-dev
```

```bash
yarn add laravel-mix-artisan-serve --dev
```

Then require the extension in your Mix configuration:

```js
const mix = require('laravel-mix');

require('laravel-mix-artisan-serve');
...
```

Enable the extension by calling `.serve()` at the end of your Mix chain:

```js
mix.sass('resources/sass/app.scss', 'public/css').serve();
```

> This will serve your Laravel application at http://localhost:8000 by default.

If you need to customize the host or port, you may pass an object to `.serve()`:

```js
mix.sass('resources/sass/app.scss', 'public/css').serve({
  host: '127.0.0.1',
  port: '3000',
});
```

And you're done!

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Adam Wathan](https://adamwathan.me) (Adam is the inspiration behind this package (https://twitter.com/adamwathan/status/1205840365120561153))

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-downloads]: https://img.shields.io/npm/dt/laravel-mix-artisan-serve.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-version]: https://img.shields.io/npm/v/laravel-mix-artisan-serve.svg?style=flat-square
[link-downloads]: https://npmjs.com/package/laravel-mix-artisan-serve
[link-npm]: https://npmjs.com/package/laravel-mix-artisan-serve
