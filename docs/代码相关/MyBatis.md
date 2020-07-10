---
title: MyBatis
tags: 
  - MyBatis
categories:
  - 编程
date: 2019-07-28 19:49:00
---
## #{}和${}的区别。
#{}是预编译处理，${}是字符串替换。  
Mybatis在处理#{}时，会将sql中的#{}替换为?号，调用PreparedStatement的set方法来赋值；  
Mybatis在处理{}替换成变量的值。  
使用#{}可以有效的防止SQL注入，提高系统安全性。
## 如何获取自动生成的(主)键值。
insert 方法总是返回一个int值 - 这个值代表的是插入的行数。  
而自动生成的键值在 insert 方法执行完后可以被设置到传入的参数对象中。  
示例：  
```
<insert id="insert" parameterType="Spares" 
        useGeneratedKeys="true" keyProperty="id">
	INSERT INTO spares 
		(spares_id, spares_name, spares_type_id, spares_spec)
	VALUES 
		(#{id}, #{name}, #{typeId}, #{spec})
</insert>
```