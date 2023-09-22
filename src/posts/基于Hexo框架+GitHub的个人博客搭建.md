---
title: 基于Hexo框架+GitHub的个人博客搭建
date: 2023-03-14 
categories:
	- 博客搭建
tags:
	- 教程
---

### 一、准备工作

##### 1、注册GitHub账号

GitHub官网：https://github.com/

邮箱：163邮箱可以，~~QQ邮箱不确定，可自行测试。~~ 可使用QQ邮箱。

**注册完成后需要注意几点：1、记住用户名，2、记住密码，3、记住注册邮箱。**

作用：用于为博客的远程部署提供域名和静态网页访问功能等。

##### 2、安装node.js

node.js官网：[Node.js (nodejs.org)](https://nodejs.org/zh-cn/)

最好下载稳定版，安装一般无脑下一步就好，默认设置就可以。

```
# 安装完后在 cmd的命令行窗口 使用下列命令检测node是否安装完成，注意不要忽略空格
node -v
```

作用：用于提供hexo博客框架的运行环境，版本不能太低，不然可能不支持。

##### 3、安装Git

Git官网：[Git (git-scm.com)](https://git-scm.com/)

下载安装版就好，也是可以无脑下一步，安装完成后在桌面右键，可以看到右键菜单多了两个选项，即代表安装成功。

作用：用于管理和连接远程仓库，是一个相当不错的分布式版本控制系统，在这里用来上传本地博客到云端仓库。

##### 4、网页翻译插件

因为GitHub是全英文界面，如果英文不好可以使用插件或者翻译工具来帮助自己理接页面内容。对自己英语水平有自信可以无视这一步。

### 二、搭建本地博客

##### 1、安装hexo框架

hexo官网：[Hexo](https://hexo.io/zh-cn/)

这里需要用到刚刚下载的Git工具在命令行中进行操作，但本质上也只是复制粘贴命令，不需要担心。

1.1、新建博客文件夹

为博客新建一个空文件夹，名称随意，记住所在位置路径，之后都要在这里面执行命令。

**在空文件夹内右键——>选中 Git Bash Here ——>进入命令行界面**

依次输入下列命令即可完成hexo博客的搭建

**注：Git工具不支持Ctrl+C快捷键复制，请统一用右键选择复制粘贴**

```
npm install hexo-cli -g		# 通过npm命令全局安装hexo-cli包，这个是hexo框架的主体
npm install hexo-deployer-git --save	#此插件用来向github上传时使用
hexo init blog		# 使用hexo框架初始化个人博客
cd blog				# 进入初始化的个人博客文件夹进行下一步操作
npm install			# 使用npm命令安装相应的依赖
hexo generate		# 生成网页
hexo server			# 启动网页服务
```

若一切正常没什么明显报错或卡死的情况下，你就成功在本地搭建了属于自己的博客，可以通过 http://localhost:4000 去访问了。

**注：此博客只有到 hexo本地服务运行时才可访问。**

当然，意外很有可能发生，下面有一些可能的意外情况的处理方法：

##### 2、意外情况处理

2.1、如果在使用npm开头的命令卡死时，大概率是因为npm下载默认是从外网下载，速度和稳定性都很感人，这时候可以试下临时换源，在npm命令后缀下列参数就好。

```
npm install hexo-cli -g --registry=https://registry.npm.taobao.org 
# 使用国内的淘宝源，速度比较快。
```

2.2、如果在hexo init bolg 初始化博客时卡死，也很有可能是因为网速问题，但这时候不能直接加后缀，是不支持的，将上述命令用下列命令代替就好，下列命令就是所需要执行的步骤。

```
git clone https://gitee.com/weilining/hexo-starter.git blog
cd blog
git submodule init
git submodule update
npm install --registry=https://registry.npm.taobao.org 
hexo generate		
hexo server
```

2.3、如果在npm安装依赖包的时候有警告弹出，一般能不管他就不去管他，^_^

### 三、远程部署到GitHub

##### 1、通过Git工具的ssh连接GitHub

**配置Git 用户名和邮箱**

```
git config --global user.name "此处填写你注册时的用户名"
git config --global user.email "此处填写你注册时的邮箱"
# 一般只要不报错，可以跳过下面寻找.gitconfig文件
```

**在 git bash here 中创建一个ssh密钥**

```
 指令：cd ~/.ssh	# 进入 .ssh文件夹下，如果没有可在用户文件夹下手动创建后进入
 指令：ssh-keygen -t rsa -C "自己的邮箱"  
 之后连续回车三次就好，不需要进行其他设置。
```

之后在 .ssh文件夹下生成两个文件： id_rsa id_rsa.pub 

注意：pub文件放置的，就是我们的公开的ssh密钥，也是我们之后要用到的ssh密钥。

**将ssh密钥添加到GitHub中**

用文本编辑器打开 id_rsa.pub  文件，复制文件里面的所有内容。

进去GitHub的个人主页——>进入设置界面——>进入SSH and GPG 页面——>选择New ssh key

——>将复制的密钥填进去，保存确认就好，有可能需要密码验证，输入确认就好。

**在Git bash here命令窗口中**，输入下列命令

```
ssh -T git@github.com # 检测连接是否成功，等待有信息反馈后输入yes并回车，在行末尾会显示你的用户名
```



##### 2、新建GitHub仓库并设置pags

至此Git工具和GitHub的连接就已经基本完成，之后就要准备将GitHub的上传仓库配置好。

在GitHub个人主页点击新建仓库——>仓库名称需要注意，**用户名.github.io** 要按照这个格式填写

——>在Add a README file 前的勾打上——>点击生成仓库。

**注：仓库名一定要按照格式起，比如用户名为 wuyan 则仓库名为 wuyan.github.io**



进入新建的仓库，在上方找到仓库设置——>选择左侧的Pages选项——>点击Choose a theme

——>**选择分支为main 路径为root后点击 Save 保存即可。**



##### 3、修改hexo的配置文件

在**自己生成的的博客文件夹**下找到 _config.yml 文件，将文件最后的内容按照下列格式修改，repo的位置填写在GitHub仓库的SSH的连接，位置：个人仓库——>Code——>SSH——>复制链接，粘贴即可

```
deploy:
	type: 'git'
	repo: git@github.com:用户名/用户名.github.io.git	# 这两行需要自行添加
	branch: main
```

附：实在找不到文件位置的，可使用文件搜索工具进行查找。

推荐工具：Everything ，链接：[voidtools](https://www.voidtools.com/zh-cn/)



### 四、上传网站并测试

到这一步基本上所有的步骤都已进行完毕，只要将本地博客上传到GitHub即可。

在博客根目录启动 git Bash Here 命令行窗口，运行下列命令上传到GitHub仓库

```
hexo deploy  # 部署到仓库
```

上传完成后就可以在GitHub中看到自己的网页文件，可以通过 **用户名.github.io**  去访问自己的网页了，到此整体博客就搭建完成了，如果上传卡死，可以用Ctrl + C 组合键取消后重试，直至文件全部上传成功。



<!--最后祝有志者事竟成！-->