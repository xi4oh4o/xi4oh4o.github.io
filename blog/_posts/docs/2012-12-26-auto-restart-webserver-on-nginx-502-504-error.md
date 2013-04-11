---
layout: post
title: "Nginx 502 & 504 Error Auto Restart PHP-FPM"
description: "web server 502 & 504 error auto restart shell script"
category: "docs"
tags: [linux, docs, SA]
published: true
---

自动监控Nginx 502 Bad Gateway 和 504 Gateway Time-out 错误自动重启php-fpm进程并记录日志

    #!/bin/bash
    MY_URL="http://moefou.org"
    RESULT_502=`curl -I $MY_URL|grep "HTTP/1.1 502"`
    RESULT_504=`curl -I $MY_URL|grep "HTTP/1.1 504"`
    if [ -n "$RESULT_502" ]; then
    killall php-fpm;php-fpm
    date>>/data/logs/web_error.log;echo "502 Bad Gateway">>/data/logs/web_error.log
    elif [ -n "$RESULT_504" ]; then
    killall php-fpm;php-fpm
    date>>/data/logs/web_error.log;echo "504 Gateway Time-out">>/data/logs/web_error.log
    fi

##### 执行crontab -e
添加下面内容

    #Auto Fix WebServer 502 & 504 Error
    * * * * * root /data/task/auto_restart_webserver.sh >/dev/null 2>&1
    
Gits Links: [auto_restart_webserver.sh](https://gist.github.com/4378447)