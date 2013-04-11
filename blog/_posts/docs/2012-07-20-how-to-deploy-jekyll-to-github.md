---
layout: post
category : docs
tags : [jekyll, docs]
published: true
---
{% include JB/setup %}

#### 你好! 这是我第一次使用jekyll，我想简单的介绍下我将jekyll部署到github pages的过程。
<br />
本文需要你有基本git操作技能.

### *Platform: *

* Github pages
* Jekyll bootstrap


### *Deploy: *

在[Jekyllbootstrap](http://jekyllbootstrap.com)官网已经有了非常详细的如何安装介绍，
目前我使用github pages来托管这些页面，它原生支持jekyll服务，你只需要提交markdown文件便会帮你自动生成静态页面，非常棒XD。

#### 根域访问
直接通过jekyllbootstrap官网介绍的方法，新建一个username.github.com库并push即可。
初次生成时间可能会有延迟

    $ git clone https://github.com/plusjade/jekyll-bootstrap.git username.github.com
    $ cd username.github.com
    $ git remote set-url origin git@github.com:username/username.github.com.git
    $ git push origin master
之后你将能够在 http://username.github.com 访问你的新页面

#### 二级目录
目前我正在使用的方法，新建一个以blog(或其他你需要的名字)命名的repository，并切换至gh-pages分支，并将你clone下来的jekyllbootstrap提交至此分支即可

    $ git clone https://github.com/plusjade/jekyll-bootstrap.git blog
    $ cd blog
    $ git checkout -b gh-pages
    $ git remote set-url origin git@github.com:username/blog.git
    $ git push origin gh-pages
    
你需要修改的地方是你的用户名username部分，其次便是修改 _config.yml 配置文件
如果你想使用二级目录这样的方式访问到这个页面，你只需要修改BASH\_PATH如下

`BASH_PATH : http://xi4oh4o.github.com/blog`

这是我的[\_config.yml](https://github.com/xi4oh4o/blog/blob/gh-pages/_config.yml)文件

#### 自定义域名
在根目录建立一个cname文件，将你想要绑定的域名写在其中即可就像`xhs.me` 
并将你的域名A记录指向到`204.232.175.78`

若使用www.example.com方式，只需要cname写入`www.xhs.me`
并将你的域名CNAME记录改为`username.github.com`即可

#### 参考(英文)
[Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
[Github custom domain](https://help.github.com/articles/my-custom-domain-isn-t-working)
