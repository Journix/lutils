# lutils
工具集函数

1.排序

2.冒泡排序、选择排序、插入排序、随机排序

3.formatTime

时间转换函数，支持传入统一的时间值，转换为英文或中文便于理解的展示方式；

例： 3600s ==> 1h 或 1小时

4.isObjHasAssign

判断object有没有assign方法，若没有，则添加该方法

5.htmlLock

为html添加layout-scroll-fixed类名，同时添加
`.layout-scroll-fixed{
    height: 100%;
    overflow: hidden;
}`
样式，以解决有弹框弹出，页面后面仍可以滑动的问题，或者处理特定此类需求。

6.getDeltaAge

计算年龄函数

7.class Functions

hasClass: 判断是否含有某个class名
addClass: 添加class
removeClass: 删除class

8.isMweb

判断是否为M站
