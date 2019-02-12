# iTunes Artwork Finder

![](https://img.shields.io/badge/version-1.1.1-green.svg)
![](https://img.shields.io/github/license/coder-ysj/jayyan.net-itunes.svg)

基于 [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)、[Egg.js](https://eggjs.org) 和 [Nuxt.js](https://zh.nuxtjs.org) 开发。  
设计灵感来自 [Design Code](https://designcode.io) 网站。

## 主要功能

- 📺 下载高清影视剧海报 - 追剧党
- 🎵 下载高清音乐专辑封面 - 音乐达人
- 📱 下载高清 App 图标 - 产品爱好者

## 附加功能

- 可切换不同国家及地区
- 可任意选择分辨率下载
- 批量下载
- 主题切换
- 中英文语言

## 写给开发者的话

本项目的数据支持来自于 Apple 开放的 iTunes Search API，提供包括应用程序、电子书、音乐、影视剧等 iTunes Store 支持的数据搜索结果，且没有次数限制。但根据我的使用体验，发现这个 API 有时不够稳定，前端对接也并不友好，所以本项目也额外开发了一个 Node 服务用于转发搜索结果，消耗了本可以避免的硬件资源。

所以，如果您希望对接 iTunes Search API，望自行租购服务器部署相关的解决方案，勿调用本项目的私人 API，本人使用的服务器配置完全不能应付大流量使用，望理解。

## 部署

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000/itunes/
$ yarn run dev

# build for production and launch server
$ yarn run build
$ pm2 start npm --name "jayyan.net-itunes" -- start
```

## 打赏项目

若您支持这个项目，或是希望提供赞助，欢迎您给予一定的现金打赏，这些费用我将用于升级服务器配置，并开发出更多更实用的功能。如果您有相关建议或意见反馈，欢迎提 PR，我会在第一时间作出回复。

<img src="https://raw.githubusercontent.com/coder-ysj/jayyan.net-itunes/master/static/reward.JPG" width="200px" />
