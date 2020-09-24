---
title: 第六章 Winlnet编程
tags:
  - 网络应用程序设计
categories:
  - 复习
date: 2020-09-24 14:30:00
---
### 1.MFC WinInet所包含的类有哪些
- CInternetSession类
- 连接类
- 文件类
- CInternetException类
### 2.使用WinInet类编程的一般步骤是什么
- (1)创建CInternetSession类对象，创建并初始化Internet会话
- (2)利用CInternetSession类的QueryOption或SetOption成员函数，可以查询或设置该类内涵的Internet请求选项，这一步是可选的，不需要可以不做
- (3)创建连接类对象，建立CInternetSession对象与网络服务器的连接，也就是应用程序与网络服务器的连接。
- (4)创建文件检索类对象，对服务器进行检索
- (5)如果需要使用异步操作模式，可以重载CInternetSession类的OnStatusCallback函数，并启动应用程序使用状态回调机制，重载相关函数，加入自己的代码
- (6)如果还想更紧密地控制对于服务器文件的访问，可以进一步创建文件类对象实例，完成文件查找或文件读写操作
- (7)创建CInternetException类对象实例，处理错误
- (8)关闭各种类，将资源释放给系统