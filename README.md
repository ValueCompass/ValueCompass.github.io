Value Compass
======
Value Compass is a minimal blog theme for Jekyll.

* * *

Table of Contents
-----------------
*   [Features](#features)
*   [Deployment](#deployment)
*   [Posts](#posts)


* * *

### Features

* 100% responsive and clean theme

* Optimized for mobile devices

* Minimal design

* Valid HTML5 code

* Post sharing


* * *



### Deployment

To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` or `bundle exec jekyll serve` to start the Jekyll server.

I would recommend checking the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

* * *

### Posts

To create a new post, you can create a new markdown file inside the \_posts directory by following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files).

      ---
      layout: post
      title: Time to give gifts to everyone
      date: 2018-08-23 16:04:00 +0300
      image: 03.jpg
      tags: Life
      ---


You can set the tags and the post image.

Add post images to **/images/** directory.

For tags, try to not add space between two words, for example, `Ruby on Rails`, could be something like (`ruby-on-rails`, `Ruby_on_Rails`, or `Ruby-on-Rails`).

* * *





### 添加paper页面
参照_posts文件夹中的md文件
例如
```javascript
layout: post  
title: Value FULCRA - Mapping Large Lnguage Modeuls to the Multidimensional Spectrum of Basic Human Values
authors: Jing Yao, Xiaoyuan Yi, Xiting Wang, Yifan Gong, Xing Xie
paper_url: https://arxiv.org/abs/2311.10766  
date: 2023-11-15 0
image: images/posts/basic_value_space.png          // paper详情页中的图片
coverImage: images/posts/Weight-of-the-heart.png   // 用于首页中的封面图（设计了四张风格类似的图片，可任选）
tags: Alignment Dataset
status: latest 
permalink: /value_fulcra
```


### 添加talk页面
参照_talks文件夹中的md文件
例如
```javascript
layout: talks
title: "TEDxBeijing演讲 | 价值观罗盘——以科技之光，照亮人机共生之路"
date: 2024-05-23 0
image: images/talks/talk2/stodownload.png     // 文章封面图，有video时，作为video封面图
video: images/talks/talk2/1.mp4               // 展示video,没有不用写
permalink: /talks/TEDxBeijing
talk_url: "https://mp.weixin.qq.com/s?__biz=MzAwMTA3MzM4Nw==&mid=2649499917&idx=1&sn=09a98f428bbf1b6fff724d369dd08d2a&chksm=82c7c089b5b0499fb53214311350faacea5de741d3a4fc2611fec975ff9c533a0cc6e1811144&mpshare=1&scene=1&srcid=0607K3ZsjpwsJcgkawO8lSG2&sharer_shareinfo=6c79bf1d5b2ed02bf884e73866e0e001&sharer_shareinfo_first=6c79bf1d5b2ed02bf884e73866e0e001#rd"   // 文章详情链接
```

### 更新resource page
修改_resources文件夹中的md文本
