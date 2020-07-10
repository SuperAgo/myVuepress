---
title: Nginx实现负载均衡的几种方法
tags:
  - Nginx
  - 负载均衡
categories:
  - 编程
date: 2019-09-15 17:57:00
---
## 一、Nginx负载均衡的集中方式介绍  
### 1.1 轮询  
轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除，如下配置后轮训1001服务和1002服务。
```
upstream  localhost-server {
       server    localhost:1001;
       server    localhost:1002;
}
```
### 1.2 权重  
指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能，如下配置后1002服务的访问比率会是1001服务的二倍。
```
upstream  localhost-server {
       server    localhost:1001 weight=1;
       server    localhost:1002 weight=2;
}
```
### 1.3 iphash  
每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用）。
```
upstream  localhost-server {
       ip_hash; 
       server    localhost:1001 weight=1;
       server    localhost:1002 weight=2;
}
```
### 1.4 最少连接  
将请求分配到连接数最少的服务上。
```
upstream  localhost-server {
       least_conn;
       server    localhost:1001 weight=1;
       server    localhost:1002 weight=2;
}
```
### 1.5 fair  
按后端服务器的响应时间来分配请求，响应时间短的优先分配。
```
upstream  localhost-server {
       server    localhost:1001 weight=1;
       server    localhost:1002 weight=2;
       fair;  
}
```
## 二、Nginx配置
以轮训为例，nginx.conf完整代码。
```
worker_processes  1;

events {
    worker_connections  1024;
}


http {
   upstream  localhost-server {
       server    localhost:1001;
       server    localhost:1002;
   }

   server {
       listen       80;
       server_name  localhost;

       location / {
        proxy_pass http://localhost-server;
        proxy_redirect default;
      }

    }

}
```

如果要修改负载均衡算法修改对应upstream模块即可。