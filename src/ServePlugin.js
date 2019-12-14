const command = require('node-cmd');

class ServePlugin {
  constructor(config) {
    this.serveConfig = config;
  }

  apply(compiler) {
    compiler.hooks.watchRun.tap('ServePlugin', compilation => {
      console.log(
        `Serving application at: http://${this.serveConfig.host}:${this.serveConfig.port}`,
      );
      command.get(
        `php artisan serve --host ${this.serveConfig.host} --port ${this.serveConfig.port}`,
        (err, stdout, stderr) => {
          console.log(err ? stderr : stdout);
        },
      );
    });
  }
}

module.exports = ServePlugin;
