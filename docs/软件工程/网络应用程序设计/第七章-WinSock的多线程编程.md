---
title: 第七章 WinSock的多线程编程
tags:
  - 网络应用程序设计
categories:
  - 复习
date: 2020-09-24 15:00:00
---
### 1.WinSock的两种I/O模式是什么？各有什么优缺点？缺点如何克服？
阻塞模式（同步模式）
- 优点：
  - I/O操作工作情况比较确定，即调用、等待和返回。容易使用，容易编程
- 缺点：
  - 在应付诸如需要建立多个套接字连接来为更多客户机服务的时候，或在数据的收发量不均匀的时候，或在I/O的时间不确定的时候，该模式性能低下，甚至无能为力
  - 解决方法：进一步引入多线程机制

非阻塞模式（异步模式）
- 优点：
  - 能应付诸如需要建立多个套接字连接来为多个客户服务，可以处理数据的收发量不均匀、输入输出的时间不确定等问题
- 缺点：
  - 用非阻塞套接字，需要编写更多代码，因为必须恰当的把握调用I/O函数的时机，尽量减少无功而返的调用，还必须详加分析每个WinScok调用中收到的WSAEWOULDBLOCK错误，采取相应的对策，这种I/O操作的随机性是的非阻塞套接字显得难以操作
  - 解决方法：进一步引入五种“套接字I/O模型”，有助于应该程序通过一种异步方式，同时对一个或多个套接字上进行的通信加以管理
### 2.简述创建MFC的工作线程所必需的步骤
(1)是编程实现控制函数  
(2)是创建并启动工作线程  
(3)创建工作线程的例子  
(4)创建工作线程的一般模式
### 3.简述创建并启动用户界面线程所必需的步骤
(1)从CWinThread类派生出自己的线程类  
(2)改造自己的线程类  
(3)创建并启动用户界面线程
### 4.如何正常终止线程？如何提前终止线程？
正常终止线程：执行完毕时退出控制函数，并返回三个用来表示终止原因的值即可

提前终止线程：从线程内调用AfxEndThread函数，就可以强迫线程终止
