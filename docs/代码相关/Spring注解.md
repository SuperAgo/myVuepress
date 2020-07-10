---
title: 'Spring注解'
tags: 
  - Spring注释
categories:
  - 编程
date: 2019-08-05 11:40:00
---
## @Controller与@RestController的区别
1.使用@RestController注解相当于同时在Controller上使用了@Controller+@ResponsBody注解（或者Controller上使用@Controller注解+方法块上使用@ResponseBody注解）；  
2.只在Controller上使用@RestController注解只能返回return中的内容无法返回jsp/html页面(配置的视图解析器 InternalResourceViewResolver不起作用)
3.若想使Controller返回视图则需使用@Controller注解；同时需要返回数据则需在对应方法上加注@ResponseBody