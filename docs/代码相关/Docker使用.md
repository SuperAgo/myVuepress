---
title: Docker使用
tags:
  - Docker
categories:
  - 编程
date: 2019-09-13 17:07:00
---
## 1.Docker的简介
Docker 是一个开源的应用容器引擎，基于Go语言并遵从Apache2.0协议开源。让开发者可以打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux机器上，也可以实现虚拟化，容器是完全使用沙箱机制，相互之间不会有任何接口。

## 2.Docker的组成：
 - 1 Docker Client 客户端
 - 2 Docker Daemon 守护进程
 - 3 Docker Image 镜像
 - 4 Docker Container 容器
从2017年3月开始Docker在原来的基础上分为两个分支版本: Docker CE 和 Docker EE。Docker CE 即社区免费版，Docker EE 即企业版，强调安全，但需付费使用。

## 3.Docker CE的安装
### 3.1.卸载较旧版本
较旧版本的Docker被称为docker或docker-engine,如果已安装这些，请卸载它们。未安装略过此步骤

```
yum remove -y docker \
              docker-client \
              docker-client-latest \
              docker-common \
              docker-latest \
              docker-latest-logrotate \
              docker-logrotate \
              docker-engine
```

### 3.2.安装所需要的软件

```
yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 3.3.设置Docker的存储库

```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

### 3.4.安装最新版Docker-ce

```
yum install -y docker-ce 
```

**如遇错误提示：**  
错误：软件包：3:docker-ce-18.09.6-3.el7.x86_64 (docker-ce-stable)
需要：container-selinux >= 2.9

执行以下命令,下载container-selinux-2.95的rpm包

```
wget http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.95-2.el7_6.noarch.rpm
```

安装

```
rpm -ivh container-selinux-2.95-2.el7_6.noarch.rpm
```

再次执行安装命令:

```
yum install -y docker-ce
```

### 3.5.启动docker

```
systemctl daemon-reload && systemctl start docker
```

查看docker的版本`docker version `

显示

```
Client:
 Version:           18.09.6
 API version:       1.39
 Go version:        go1.10.8
 Git commit:        481bc77156
 Built:             Sat May  4 02:34:58 2019
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          18.09.6
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.8
  Git commit:       481bc77
  Built:            Sat May  4 02:02:43 2019
  OS/Arch:          linux/amd64
  Experimental:     false
```

即**安装成功**  
**查看更详细的的信息**`docker info`
  
**Docker常用命令** 
 
可以直接在终端输入`docker --help`列出所有docker的用法以及所有命令

**查看本地存在的docker镜像**`docker images`

```

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
nginx               latest              c7460dfcab50        2 months ago        126MB
redis               latest              f7302e4ab3a8        7 months ago        98.2MB
```




