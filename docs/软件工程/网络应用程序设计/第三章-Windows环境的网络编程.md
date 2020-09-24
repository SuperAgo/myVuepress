---
title: 第三章 Windows环境的网络编程
tags:
  - 网络应用程序设计
categories:
  - 复习
date: 2020-09-17 15:30:00
---
### 1.WinSock 1.1的特点
(1)WinSock 1.1全面继承了Berkeley Sockets规范。  
(2)数据库函数。  
(3)WinSock 1.1扩充了Berkeley Sockets规范。  
(4)WinSock 1.1只支持TCP/IP协议栈。
### 2.WinSock 2.0
在源码和二进制代码方面与WinSock 1.1兼容，只要安装了TCP/IP协议栈，现有的WinSock 1.1兼容的应用程序就可以在WinSock 2.0上不加修改的运行。增强了很多功能：  
(1)支持多种协议。  
(2)引入重叠I/O的概念。  
(3)使用事件对象异步通知。  
(4)服务的质量（Qos）。
(5)套接口组。
(6)扩展的字节顺序转换例程。
(7)分散/聚集方式I/O。
(8)新增了许多函数。
### 3.WinSock规范与Berkeley套接口的区别
- 1.套接口数据类型和该类型的错误返回值
- 2.select()函数和FD_*宏
- 3.错误代码的获得
- 4.指针
- 5.重命名的函数
- 6.WinSock支持的最大套接口数目
- 7.头文件
- 8.原始套接口
- 9.WinSock规范对于消息驱动机制的支持
### 4.WinSock的注册与注销
注册过程：
- (1)调用WSAStartup()函数的格式:`int WSAStartup( WORD wVersionRequested,LPWSADATA lpWSAData);`
- (2)wVersionRequested():指定要使用的WinSock的最高版本号，lpWSAData用来返回WinSockAPI实现细节的WSAData结构变量指针。

注销过程：  
应用程序必须调用WSACleanup()函数，来解除与WinSock.DLL库的绑定，释放WinSock实现分配给应用程序的系统资源，中止对Windows Sockets DLL的使用  
WSACleanup()函数的调用格式`int WSACleanup( void);`