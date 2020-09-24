---
title: 第五章 MFC WinSock类的编程
tags:
  - 网络应用程序设计
categories:
  - 复习
date: 2020-09-24 14:00:00
---
### 1.MFC提供的两个套接字类是什么
CAsyncSocket类和CSocket类
### 2.为什么说CAsyncSocket类是在很低层次上对Windows Sockets API进行了封装？
它的成员函数和Windows Sockets API的函数调用直接对应。一个CAsyncSocket对象代表了一个Windows套接字。它是网络通信的端点。除了把套接字封装成C++的面向对象的形式供程序员使用以外，这个类唯一所增加的抽象就是将那些与套接字相关的Windows消息变为CAsyncSocket类的回调函数。
### 3.为什么说CSocket类是对Windows Sockets API的高级封装？
CSocket类继承了CAsyncSocket类的许多成员函数，用法一致。CSocket类的高级表现在三个方面：
- (1)CSocket结合crchive类来使用套接字
- (2)CSocket管理了通信的许多方面，如字节顺序问题和字符串转换问题
- (3)CSocket类为Windows消息的后台处理提供了阻塞的工作模式
### 4.CSocket类如何通过CArchive对象来进行数据传输？
使用CArchive对象和套接字一起进行数据传输工作，必须使用流式套接字