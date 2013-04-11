---
layout: post
title: "Mac OS X Using gfwlist"
description: "mac,osx,gfwlist,autopac,Mac自动代理配置,mac auto proxy"
category: "docs"
tags: [osx, docs]
published: true
---

{% include JB/setup %}

### 如何在OSX下配置自动代理
<br />
#### 推荐Github项目 [GenPAC](https://github.com/JinnLynn/GenPAC)
一个基于gfwlist自动生成pac文件的Python脚本
<br />

`git clone git://github.com/JinnLynn/GenPAC.git`  

并且配置config.txt文件，之后`./genpac.py`即可。

由于Lion与之后的OS X系统使用了沙箱机制，自动代理不再支持本地PAC文件，所以你需要在本地建立http，或者将pac文件放置在一个可访问的页面上。


我把他放在Sina App Engine，例如`http://autopac.sinaapp.com/auto.pac` 速度很理想，接着在 系统偏好设置->网络->你的网络连接->高级 中点选**代理**选项卡，并找到 **自动代理配置** 将在线pac文件的URL放置其中保存即可。

至此你的系统网络已经完全拥有gfwlist机制，可以自由的使用twitter等App，所有浏览器也如此。

Tips: 你仍需要一个本地的socks5代理，简单的方式是实现SSH免认证登陆后将`ssh -nNTf -D 1080 youipaddress` 放入/etc/rc.common 即可实现开机无痛代理