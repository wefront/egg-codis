# egg-codis

[node-codis](http://github.com/wefrond/node-codis) for egg.

## Install

```bash
$ npm i egg-codis --save
```

## Usage

### enable plugin

```js
// {app_root}/config/plugin.js
exports.codis = {
  enable: true,
  package: 'egg-codis',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.codis = {
  zkServers: '127.0.0.1:6701',
  zkCodisProxyDir: '/zk/codis/db_test_node/proxy',
  codisPassword: 'your codis password',
  loadBalancing: true // Whether to enable load balancing
};
```

See [https://github.com/wefront/node-codis#constructor](https://github.com/wefront/node-codis#constructor) for more detail.

When `loadBalancing` is `true`, Inside the egg framework, the plugin will randomly select the codis client for data access.

After the plugin is initialized, you can use `app.codis` to perform database operations at the application layer.

### example

```js
// {app_root}/app/service/user.ts
import { Service } from 'egg'

export default class UserService extends Service {
  public getUserInfo (username: string) {
    this.app.codis.GET(username, function (err, data) {
      return data
    })
  }
}
```

## License

[MIT](LICENSE)
