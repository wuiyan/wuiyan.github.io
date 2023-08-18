---
title: 防火墙常用命令
date: 2023-3-15 22:54:45
categories:
	- Linux
tags:
	- FireWall
---
##### 启动|关闭|重启防火墙

```shell
systemctl status firewalld.service
# 查看防火墙状态

systemctl start firewalld.service 
# 启动防火墙

systemctl stop firewalld.service 
# 关闭防火墙

```

##### 防火墙配置命令

```shell
firewall-cmd --query-port=80/tcp
# 查看某个端口是否开启

firewall-cmd --add-port=端口号/协议 --permanent     
# 例：firewall-cmd --add-port=80/tcp --permanent，永久添加80端口

firewall-cmd --remove-port=端口号/通讯协议 --permanent
# 例：firewall-cmd --remove-port=8080/tcp --permanent，永久关闭8080端口

firewall-cmd --reload                          
#重新载入配置，比如添加规则之后，需要执行此命令
```

##### 附录

```shell
#zone --作用域
#add-port-88/tcp -- 添加端口,格式为:端口/通讯协议
#permanent --永久生效,没有此参数重启后失败
  firewall-cmd --zone=public --add-port-3306/tcp --permanent
#开启3306号端口后,workbench 或naivcat 就能连接到Mysql 数据库了


```

