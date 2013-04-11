---
layout: post
category: docs
tags : [vim, docs]
title: "MacVim Configuration"
description:  "macvim configuration zencoding vim"
published: true
---
{% include JB/setup %}

# My VIM

### Step.1
Installation VIM Pathogen

[Pathogen](https://github.com/tpope/vim-pathogen)

Install to `~/.vim/autoload/pathogen.vim`.

Add this to vimrc:
`execute pathogen#infect()`

### Step.2
Installation VIM Nerdtree Tabs

[Nerdtree-tab](https://github.com/jistr/vim-nerdtree-tabs)

    cd ~/.vim/bundle
    git clone https://github.com/jistr/vim-nerdtree-tabs.git
    
### Step.3
Installation ZenCoding

[ZenCoding-vim](https://github.com/mattn/zencoding-vim/)

    cd ~/.vim/bundle
    git clone http://github.com/mattn/zencoding-vim.git
    
### Step.4
Installation delimitMate

[delimitMate](https://github.com/Raimondi/delimitMate)

### Step.5
the .vimrc

    cd ~/.vim/bundle
    git clone https://github.com/Raimondi/delimitMate
    
    if has("gui_running")
    set go=aAce              " 去掉难看的工具栏和滑动条
    set transparency=10      " 透明背景
    set guifont=Monaco:h13   " 设置默认字体为monaco
    set showtabline=2        " 开启自带的tab栏
    set columns=140          " 设置宽
    set lines=40             " 设置长
    syn on                   " 语法支持
    set bs=2                 " 在insert模式下用退格键删除
    set showmatch            " 代码匹配
    set expandtab
    set shiftwidth=4
    set tabstop=4
    set softtabstop=4
    set number
    set fileencodings=ucs-bom,utf-8,utf-16,cp9936,gb18030,big5,euc-jp,euc-kr,latin1   
    set foldmethod=syntax
    syntax enable
    set background=dark
    colorscheme solarized
    execute pathogen#infect()
    autocmd vimenter * NERDTree
    else
    
    set guifont=Monaco:h13
    set expandtab
    set shiftwidth=4
    set tabstop=4
    set softtabstop=4
    set fileencodings=ucs-bom,utf-8,utf-16,cp9936,gb18030,big5,euc-jp,euc-kr,latin1
    syn on                   " 语法支持
    set bs=2                 " 在insert模式下用退格键删除
    set showmatch            " 代码匹配
    syntax enable
    execute pathogen#infect()
    endif
