# egg-codis
Egg [node-codis](http://github.com/wefrond/node-codis) 插件.

[English Document](http://github.com/wefront/egg-codis/blob/master/README.md)

## 开启插件

应用层开启插件。

```js
// config/plugin.js
exports.codis = {
  enable: true,
  package: 'egg-codis',
};
```

## 详细配置

应用层配置插件。

```js
// {app_root}/config/config.default.js
exports.codis = {
  zkServers: '127.0.0.1:6701',
  zkCodisProxyDir: '/zk/codis/db_test_node/proxy',
  codisPassword: 'your codis password',
  loadBalancing: true // 是否启用负载均衡
};
```

查看 [https://github.com/wefront/node-codis#constructor](https://github.com/wefront/node-codis/blob/master/README-zh.md#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0) 获取更多配置信息。

当 `loadBalancing` 为 `true` 的时候，在egg框架内部，插件将会随机的选择codis客户端进行数据存取。

插件初始化之后在应用层就可以使用 `app.codis` 来进行数据库操作了。

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
