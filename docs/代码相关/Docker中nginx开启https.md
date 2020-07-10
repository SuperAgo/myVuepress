---
title: Docker中nginx开启https
tags:
  - Docker
  - Nginx
  - HTTPS
  - SSL／TLS
categories:
  - 编程
date: 2019-09-18 14:11:00
---
打开网页老是显示不安全，强迫症的我最终决定开启https.  
由于使用的是阿里云，所以直接在阿里云上申请了ssl，比较简单这里就不多赘述。  
## 1.申请ssl备案通过后

![upload successful](/images/pasted-1.png)
点击下载，选择nginx版本

![upload successful](/images/pasted-2.png)
## 2.nginx配置
首先将下载的pem文件和key文件上传至服务器nginx文件夹下（方便自己记忆的文件夹/映射文件夹）
然后打开nginx的配置文件  
新增如下配置，开启http请求自动重定向至https
```
server {
        listen       80;
        server_name  XXXXX;
        return 301 https://$server_name$request_uri;   #将所有http请求通过rewrite重定向到https。
    }
```
然后添加
```
server {
       listen	443 ssl;
       server_name  XXXXX;

	   #ssl on
      ssl_certificate /etc/ssl/XXXXXX.pem;   #将domain name.pem替换成您证书的文件名。
	   ssl_certificate_key /etc/ssl/XXXXXX.key;   #将domain name.key替换成您证书的密钥文件名。
	   ssl_session_timeout 5m;
	   ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。
	   ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。
	   ssl_prefer_server_ciphers on;
```

根据不同网站对不同浏览器的支持，`ssl_ciphers`与`ssl_protocols`可以斟酌配置  

---
<u>[SSL／TLS 系列中有**五种**协议](#1)</u><sup>1</sup>：SSL v2，SSL v3，TLS v1.0，TLS v1.1和TLS v1.2：  
- SSL v2 是不安全的，不能使用。此协议版本非常糟糕，即使它们位于完全不同的服务器（DROWN 攻击）上也可以用来攻击具有相同名称的RSA 密钥和站点。
- 当与 HTTP（POODLE 攻击）一起使用时，SSL v3 是不安全的，当与其他协议一起使用时，SSL v3 是弱的。它也是过时的，不应该被使用。
- TLS v1.0 也是不应该使用的传统协议，但在实践中通常仍然是必需的。其主要弱点（BEAST）在现代浏览器中得到缓解，但其他问题仍然存在。
- TLS v1.1 和 v1.2 都没有已知的安全问题，只有 v1.2 提供了现代的加密算法。
---

根据nginx版本不同,  
**nginx1.15.0更新日志  
Changes with nginx 1.15.0                                        05 Jun 2018
    *) Change: the "ssl" directive is deprecated; the "ssl" parameter of the
       "listen" directive should be used instead.  **  
so，nginx1.15.0前ssl开启使用 
```
listen	443
ssl on
```
1.15.0之后使用
```
listen 443 ssl
```
否则会报```the "ssl" directive is deprecated, use the "listen ... ssl" directive instead in /etc/nginx/nginx.conf```错误
如果是没有使用docker直接使用的nginx到这一步就可以重启nginx然后通过https访问了。
## 3.docker映射修改
由于我是用的是docker的nginx容器，所以需要修改一下映射命令（之前的文章有写）
加上新的ssl文件夹和443端口映射（443端口一定要加上，否则还是访问不了）
```
docker run --name nginx80 -d -p 443:443 -p 80:80 -v /data/nginx/html:/etc/nginx/html -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf  -v /data/nginx/logs:/var/log/nginx -v /data/nginx/conf.d:/etc/nginx/conf.d -v /data/nginx/ssl:/etc/nginx/ssl -d nginx:latest
```
然后就可以愉快的使用https访问自己的网站啦！

## 参考

<span id="1">
[1]<a href="https://blog.myssl.com/ssl-and-tls-deployment-best-practices/" _blank>HTTPS 安全最佳实践（一）之SSL/TLS部署</a>
</span>