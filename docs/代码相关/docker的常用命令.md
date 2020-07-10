---
title: docker的常用命令
tags:
  - Docker
categories:
  - 编程
date: 2020-06-10 12:54:00
---
## Docker容器信息

```
docker version # docker版本  
docker info # docker配置信息   
docker -- help # docker帮助命令    
```

## 镜像命令
### 镜像查看

```
docker images # 列出本地主机上的镜像   
 -a  # 列出本所有的镜像（含中间映像层）  
 -q  # 只显示镜像ID
 -qa  # 含中间映像层ID   
 --digests # 显示镜像摘要信息(DIGEST列)  
 --no-trunc # 显示镜像完整信息  

docker history -H redis # 显示指定镜像的历史创建；
  
-H # 镜像大小和日期，默认为true；    
--no-trunc  # 显示完整的提交记录；  
-q  # 仅列出提交记录ID
```

### 镜像搜索

```
docker search 镜像名 # 列出远程仓库上的镜像  
docker search --filter=stars=600 mysql # 只显示 starts>=600 的镜像 
docker search --no-trunc mysql # 显示镜像完整 DESCRIPTION 描述 
docker search  --automated mysql # 只列出 AUTOMATED=OK 的镜像  
```

### 镜像下载

```
docker pull 镜像名 # 下载远程仓库上的镜像到本地(默认最新)  
docker pull -a redis # 下载仓库所有Redis镜像  
docker pull bitnami/redis # 下载私人仓库镜像
```
### 镜像删除

```
docker rmi 镜像名 # 单个镜像删除    
docker rmi -f 镜像名 # 强制删除(针对基于镜像有运行的容器进程)   
docker rmi -f redis tomcat nginx # 多个镜像删除，不同镜像间以空格间隔  
docker rmi -f $(docker images -q) # 删除本地全部镜像 
```

### 镜像构建

```
cd /docker/dockerfile
vim mycentos  # 编写dockerfile
docker build -f /docker/dockerfile/mycentos -t mycentos:1.1 # 构建docker镜像
```

## 容器命令

```
docker run [OPTIONS] IMAGE [COMMAND][ARG...] # 新建并启动容器  

docker run -it --name mycentos     
 -i # 以交互模式运行容器；  
 -t # 为容器重新分配一个伪输入终端；  
 --name # 为容器指定一个名称  
```

```
docker attach 容器id # 进入正在运行的容器并以命令行进行交互
exit # 停止容器退出 
ctrl+P+Q # 不停止容器退出  
docker exec -t 容器id # 不进入正在运行的容器直接在终端以命令行进行交互
```


```
docker ps [OPTIONS] # 列出所有**正在运行**的容器  
 -a  # 列出所有正在运行的/历史运行的容器  
 -l # 列出上一个运行的容器  
 -n 2 # 列出上2个运行的容器  
 -q  # 静默模式，只显示容器id  
 -s # 显示运行容器总文件大小  
 --no-trunc # 不截断输出  
```

```
docker start 容器名/id # 启动容器  
docker restart 容器名/容器id # 重启容器    
docker stop 容器名/容器id # 停止容器    
docker kill 容器名/容器id # 强制停止容器   
docker rm 容器名/容器id # 删除已停止容器  
docker rm -f 容器名/容器id # 强制停止并删除容器  
docker rm -v 容器名/容器id # 删除容器，并删除容器挂载的数据卷
# 一次删除多个容器   
docker rm -f ${docker ps -a -q}       
docker ps -a -q | xargs docker rm 
```
### 重要
```
docker run -d 容器 # 一次删除多个容器启动守护式容器   
docker logs -f -t --tail 5 容器id # 一次删除多个容器查看容器日志 
 -t # 一次删除多个容器是加入时间戳  
 -f # 一次删除多个容器跟随最新的日志打印  
 --tail 5 # 一次删除多个容器显示最后5条  
 
docker top 容器id  # 一次删除多个容器查看容器内运行的进程  
docker inspect 容器id # 一次删除多个容器查看容器内部细节    
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' redis # 一次删除多个容器获取正在运行的容器redis的 IP  
docker cp 容器id:/[container_path]  /[local_path] # 一次删除多个容器从容器内拷贝文件到主机上    
docker cp [local_path] 容器id:/[container_path]/ # 一次删除多个容器将主机文件copy至容器    
docker cp [local_path] 容器id:/[container_path] # 一次删除多个容器将主机文件copy至容器，目录重命名为[container_path]（注意与非重命名copy的区别）
```