---
layout: post
title: "Linux Ext3 Recover"
description: "linux ext3 recover,linux recover,ext3 recover"
category: "docs"
tags: [linux, docs]
published: true
---

{% include JB/setup %}

[![terminal](http://lrrlva.bay.livefilestore.com/y1p7q_LrBhYjLBWM13q-nzGPvd3sP45GS6uBT-K2I04oeLsPkf-iDaHTKMOdVdulya2P36E4mGBsX4_Db_SykClo-w6TsL31Isa/ext3grep-recover-step1.PNG?psid=1)](http://lrrlva.bay.livefilestore.com/y1plTgO23klJFcAyugA6Q7uyVdnAu0V9DYaRGsV9wig5YLW3rvrze_wR2Ne2LBEFdU3-FHtWtXDo7ihl3W8D_4SrxqAVtek2HIh/ext3grep-recover-step1.PNG?psid=1)

  由于今天重新部署VPS，意外的rm -rf了data目录,数据库全放在这里、于是似乎大家都没有备份,只有来尝试恢复了

Diahosting默认的文件系统是ext3、可以借助ext3grep尝试恢复,详细的说明大家可以去参考软件[HP](http://carlo17.home.xs4all.nl/howto/undelete_ext3.html)

    wget http://ext3grep.googlecode.com/files/ext3grep-0.10.2.tar.gz
    tar zxvf ext3grep-0.10.2.tar.gz
    cd ext3grep-0.10.2
    ./configure
    make 
    make install
然后执行
    
    ext3grep /dev/xvda --ls --inode 2 //这里/dev/后写你的分区
看block大小,需要时间不等。结束后就会出现如上图的画面.

注意这行 12 13 d 1498497 D 1278587846 Thu Jul 8 07:17:26 2010 drwxr-xr-x data
这是被我误删的文件目录,位于根的data文件夹、

这里如果你要继续查看data文件夹下的文件时,可以使用

    ext3grep /dev/xvda --ls --inode 1498497 //注意这里节点,我改为了data文件夹的,依次类推
发现了需要恢复的文件时,使用如下命令,比如经过多次ls节点后发现/data/mysql/3306/my.cnf是我需要恢复的文件,请使用下面命令

    ext3grep /dev/xvda --restore-file data/mysql/3306/my.cnf //出现Restoring data/mysql/3306/my.cnf 则表示成功
这里在介绍几种方式：
使用--dump-names

    ext3grep /dev/xvda --dump-names|grep data|tee filename.txt //可以把包含data的文件输出到filename.txt中
使用--restore-all
    ext3grep /dev/xvda --restore-all //可以恢复全部被删除的文件
使用--restore-all + --after

    ext3grep /dev/xvda --restore-all --after '1278587846' //1278587846是上图data的Deletion time,
    此时应只恢复这个时间点被删除的内容