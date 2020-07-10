---
title: Tomcat部署多项目
tags:
  - Tomcat
categories:
  - 编程
date: 2019-07-29 12:04:00
---
## 1.单个Tomcat

略。  
 参考[一个tomcat同时部署多个项目](https://www.cnblogs.com/casefour/p/11843582.html)
 


 
## 2.多个Tomcat

   以windows为例    
   安装配置多个tomcat后，不同的tomcat配置不同的端口，打开cmd分别进入各个tomcat的bin文件夹输入命令
        `service.bat install/remove [service_name]/[user username]`  
 进行服务的安装卸载。不同端口服务应起不同的名字，不然会报错。然后在windows的服务里进行设置服务的启停以及开机启动。
 
 
 <p>
<svg class="big-icon" aria-hidden="true">
    <use xlink:href="#icon-Tomcat"></use>
</svg> 
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-Tomcat"></use>
</svg> 
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-Tomcat"></use>
</svg> 
<svg class="big-icon" aria-hidden="true">
    <use xlink:href="#icon-Tomcat"></use>
</svg>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-Tomcat"></use>
</svg> 

</p>