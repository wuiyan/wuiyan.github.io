---
title: Java日期时间格式化的规则解析
date: 2024-12-10
categories:
	- Java
tags:
	- 知识点
---
### 格式说明

在Java中表示日期和时间格式时，通常采用英文缩写的方式来对于日期和时间进行显示或解析，不同的英文字母表示的含义各不相同，甚至在一些日期或时间的表示位置上大小写不同也会导致结果出现变化，下面是关于日期时间格式显示和解析的总结。

> 基准形式：`年-月-日 时:分:秒`
> 表示形式：`yyyy-MM-dd hh:mm:ss`

日期时间格式有多种多样的表示方式，对于不同的定义或类库都有不同的实现，本文的描述是基于上述较为常用的形式来进行探讨和总结。

### 日期格式

##### 年（Year）：使用 Y 或者 y 表示

- Y：表示周年，周年是以周来进行计算的单位，通常与周数一同使用，表示当前周处于哪一年，适用于出现一个周跨两个年的情况，此时会根据当前周的大部分日子属于哪一年来判断此周属于哪一年
- y：表示日历年，即实际使用的年份，通常使用的便是这种形式

##### 月（Month）：使用 M 表示

- M：表示数字月份，1-12月，在个位数月份时会直接显示对应的数字，而不是在前方追加0
- MM：表示两位数月份，01-12月，在个位数月份时会在前方追加占位用的0

> 不同位数的日期表示形式在显示的时候仅仅是有无添加相应的占位符，需注意的是在通过指定格式来解析日期字符串时，若待解析的日期字符串和指定解析格式位数不同，则会出现解析错误

##### 日（Day）：使用 D 或者 d表示

- D：表示在当前年份中的天数，表示形式为：1-365天
- DDD：表示在当前年份中的天数，表示形式为：001-365天，始终为三位数
- d：表示当前月份中的天数，表示形式为：1-31天
- dd：表示当前月份中的天数，表示形式为01-31天，通常使用此种方式表示天数

### 时间格式

##### 时（Hour）：使用 H 或者 h 表示

- H：表示24小时制，表示形式为：0-23时
- HH：表示24小时制，表示形式为：00-23时，始终为两位数
- h：表示12小时制，表示形式为：1-12时
- hh：表示12小时制，表示形式为01-12时，始终为两位数，使用十二小时制，需要有时期标识（AM/PM）来表示上午和下午，这样才能够完整的显示当前时间

##### 分（Minute）：使用 m 表示

- m：表示分钟，1-59分
- mm：表示分钟，01-59分，始终为两位数

##### 秒（Seconds）：使用 s 表示

- s：表示秒，1-59秒
- ss：表示秒，01-59秒，始终为两位数

### 其他格式

##### 毫秒（Milliseconds）：使用 S 表示

- SSS：表示毫秒数，通常使用三位表示，形式为：000-999

> 含有毫秒的格式展示为：`yyyy-MM-dd HH:mm:ss.SSS` 使用 `.` 来作为秒和毫秒之间的分隔

##### 时期（AM/PM）：使用 a 表示

- a：表示时期标识，展示形式为：AM（上午）/ PM（下午）

> 含有时期的表示形式可以为：`yyyy-MM-dd hh:mm:ss a` 时间和时期之间通过空格区分

##### 时区：使用 Z 或者 z 表示

- Z：表示时区的偏移量、如+0800、-0500
- z：表示时区的字符缩写，如：CST、GMT，以空格作为分隔符号，追加在最后方


##### 周（Week）：使用 W 或者 w 表示

- W：表示当前月份中的周数，表示为：1-52/53周
- w：表示当前年份中的周数，表示为：1-4周

> 以周为单位进行表示：`YYYY-ww E` ，以 - 作为分隔符，国内使用情况较少，E用来表示具体的星期几


### 应用案例

Java中较为常用的格式化类有许多，实现方式也相当多种方式

个人常用的有两种： `SimpleDateFormat`（适用于老版 Java）、`DateTimeFormatter`（推荐，支持Java 8+）

##### `SimpleDateFormat`（适用于老版 Java）


```java
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatExample {
    public static void main(String[] args) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date now = new Date();
        String formattedDate = sdf.format(now);
        System.out.println(formattedDate);
    }
}
```


#####  `DateTimeFormatter`（推荐，支持Java 8+）

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeFormatterExample {
    public static void main(String[] args) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String formattedDate = now.format(formatter);
        System.out.println(formattedDate);
    }
}
```


### 常用的格式

1. **完整日期时间（24小时制）：** `yyyy-MM-dd HH:mm:ss`
2. **仅日期：** `yyyy-MM-dd`
3. **仅时间（24小时制）：** `HH:mm:ss`
4. **带时区的日期时间：** `yyyy-MM-dd HH:mm:ss z`


### 总结

在进行日期和时间格式的展示或解析时，应了解各个字符的含义以及不同大小写和数量的情况下对于最终的展示效果或者解析结果有着什么样的影响，根据具体业务需求选择正确的格式组合。


### **通用的日期时间格式化字符含义**

以下字符是通用的，适用于Java的日期时间类，如`SimpleDateFormat`、`DateTimeFormatter`等。

| 字符  | 含义       | 示例           |
| --- | -------- | ------------ |
| `Y` | 周年       | `2025`       |
| `y` | 日历年      | `2025`       |
| `M` | 月（1-12）  | `1`, `12`    |
| `d` | 日（1-31）  | `1`, `31`    |
| `H` | 24小时制的小时 | `0`, `23`    |
| `h` | 12小时制的小时 | `1`, `12`    |
| `m` | 分钟（0-59） | `0`, `59`    |
| `s` | 秒（0-59）  | `0`, `59`    |
| `S` | 毫秒       | `123`        |
| `a` | 上午/下午标识  | `AM`, `PM`   |
| `z` | 时区名称     | `PST`, `CST` |
| `Z` | 时区偏移量    | `+0800`      |
