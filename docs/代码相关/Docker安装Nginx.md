---
title: Docker安装Nginx
tags:
  - Nginx
  - Docker
categories:
  - 编程
date: 2019-09-13 17:36:00
---
## 1.**查看可用的 Nginx 版本**  
可以用```docker search nginx``` 命令来查看可用版本

## 2.**取 Nginx 镜像**  
这里我们拉取官方的最新版本的镜像：```docker pull nginx:latest```  

## 3.**查看本地镜像**  
使用以下命令来查看是否已安装了 nginx：```docker images```
```
docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              c7460dfcab50        2 months ago        126MB
redis               latest              f7302e4ab3a8        7 months ago        98.2MB
```
可以看到我们已经安装了最新版本（latest）的 nginx 镜像。

## 4.**运行容器**  
安装完成后，我们可以使用以下命令来运行 nginx 容器：  
```
docker run --name nginx-test -p 8080:80 -d nginx
```
参数说明：

--name nginx-test：容器名称。  
-p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。  
-d nginx： 设置容器在在后台一直运行。

## 5.**安装成功**
最后我们可以通过浏览器可以直接访问 8080 端口的 nginx 服务。


## 6.**写在后面**
执行完前面的步骤就可以在docker里使用nginx,但是我建议直接从容器里复制一份nginx文件到宿主，这样映射起来更加简洁明了
### 6.1查看容器
`docker ps`
### 6.2进入容器目录
`docker exec -it containerID /bin/bash`
### 6.3列出文件列表
`ls -l`
结果如下
```
root@c7837a1ec864:/# ls -l
total 76
drwxr-xr-x  2 root root 4096 Dec 24 00:00 bin
drwxr-xr-x  2 root root 4096 Nov 10 12:17 boot
drwxr-xr-x  5 root root  340 Apr 16 09:44 dev
drwxr-xr-x  1 root root 4096 Apr 15 08:29 etc
drwxr-xr-x  2 root root 4096 Nov 10 12:17 home
drwxr-xr-x  1 root root 4096 Jan  9 22:20 lib
drwxr-xr-x  2 root root 4096 Dec 24 00:00 lib64
drwxr-xr-x  2 root root 4096 Dec 24 00:00 media
drwxr-xr-x  2 root root 4096 Dec 24 00:00 mnt
drwxr-xr-x  2 root root 4096 Dec 24 00:00 opt
dr-xr-xr-x 95 root root    0 Apr 16 09:44 proc
drwx------  2 root root 4096 Dec 24 00:00 root
drwxr-xr-x  1 root root 4096 Apr 16 09:44 run
drwxr-xr-x  2 root root 4096 Dec 24 00:00 sbin
drwxr-xr-x  2 root root 4096 Dec 24 00:00 srv
dr-xr-xr-x 13 root root    0 Apr 15 05:22 sys
drwxrwxrwt  1 root root 4096 Jan  9 22:20 tmp
drwxr-xr-x  1 root root 4096 Dec 24 00:00 usr
drwxr-xr-x  1 root root 4096 Dec 24 00:00 var

```
看需要复制文件，我直接将整个nginx文件夹复制到了本地
### 6.4复制
`docker cp -a containerID:/nginx /data/nginx`
 然后根据需求进行本地映射