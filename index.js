const mix = require('laravel-mix');

class Serve {
  name() {
    return 'serve';
  }
}

mix.extend('serve', new Serve());
