---
title: 在GitHub的个人博客站点上修改域名为个人域名
date: 2023-09-21
categories:
	- 博客搭建
tags:
	- 教程
---

### 环境信息：

博客搭建模板：VuePress

搭建站点：GitHub

### 操作流程：

1. 准备好个人域名
2. 在个人域名配置管理页面添加**CNAME 记录**，使当前域名指向GitHub中的个人博客地址，注意此时是使用二级域名指向的目标地址，如果想使用**裸域(example.com)**指向目标地址，不建议使用CNAME 记录进行指向，请使用 **ALIAS 记录或其他记录**。
   
    ![Untitled](/assets/images/在GitHub的个人博客站点上修改域名为个人域名/Untitled.png)
    
3. 在GitHub的网站部署仓库中，打开Settings，找到Pages选项，在Custom domain 中按照在域名管理系统中的指向设置自定义域名即可。
   
    ![Untitled](/assets/images/在GitHub的个人博客站点上修改域名为个人域名/Untitled1.png)
    
    ---
    
    ![Untitled](/assets/images/在GitHub的个人博客站点上修改域名为个人域名/Untitled2.png)