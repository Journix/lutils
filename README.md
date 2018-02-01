# lutils --工具集函数

## API
- sort: 效率最高的排序方式
- bubbleSort: 冒泡排序
- selectionSort: 选择排序
- insertionSort: 插入排序
- randomSort: 随机排序

- formatTime(time, type, lan): 时间转换函数 (例： 3600s --> 1h 或 1小时)
    - time 需要转换的时间值
    - type 传入的时间类型，接受ms|s|m|h
    - lan 输出语言形式
        - 0 中文 天|小时|分|秒
        - 1 英文 d|h|m|s

- handleTime
    - date 入参格式为"2017-09-18 04:13:14"，可判断时间段

- isObjHasAssign: 判断object是否拥有assign方法，如果不存在，就拓展该方法
- htmlLock(type): 为html添加layout-scroll-fixed类名，同时添加
- unorderArr: 传入一个数组，返回一个打乱顺序的数组
```
.layout-scroll-fixed{
    height: 100%;
    overflow: hidden;
}
```
样式，以解决有弹框弹出，页面后面仍可以滑动的问题，或者处理特定此类需求。
- getDeltaAge(birth, end): 计算年龄函数
- getBirthById(id): 通过身份证获取生日
- hasClass(obj, cls): 判断是否有某个class名
- addClass(obj, cls): 添加class
- removeClass(obj, cls): 删除class
- isMweb: 通过ua判断是不是m站
- arrayIndexof: 拓展array indexof方法
- trimLeft(string): 去掉左边空格
- trimRight(string): 去掉右边空格
- trimRound(string): 去掉前后空格
- trimAll(string): 去掉所有空格
- getCookie(name): 获取cookie值
- reverseString: 翻转文本
- getDateAbb: 6位日期缩写，如：180108

- loadingProcess: loading百分比进度

- 各种实现数组降维的方法

## gist

- base64toBob&AxiosUploadFile.js
    - base64转文件，axios上传文件（适用于裁剪头像上传）

- header.html
    - html head 部分解析及最佳实践

- uploadfile.html
    - 用fileReader上传文件