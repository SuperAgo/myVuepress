---
title: 第八章 WinSock的I/O模型
tags:
  - 网络应用程序设计
categories:
  - 复习
date: 2020-09-24 16:24:00
---
### 1.用于非阻塞套接字的5种“套接字I/O模型”是什么
select（选择）、WSAAsyncSelect（异步选择）、WSAEventSelect（事件选择）、Overlapped I/O（重叠式I/O）、以及Completion port（完成端口）