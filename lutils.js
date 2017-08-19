/**
 * [lutils description]
 * 工具集
 * @type {Object}
 */
var lutils = {
    /**
     * 排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sort1: function(arr) {
        var a = array.filter(function(ele, index) {
            return index === array.indexOf(ele);
        })
    },
    /**
     * 效率最高的排序方式
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sort: function(arr) {
        var result = {};
        var newArr = [];
        for (var i = 0; i < arr.length; i++)　 {
            if (!result[arr[i]]) {
                newArr.push(arr[i]);
                result[arr[i]] = 1;
            }
        }
        return newArr
    },
    /**
     * 冒泡排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    bubbleSort: function(arr) {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    d = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = d;
                }
            }
        }
        return array;
    },
    /**
     * 选择排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    selectionSort: function(arr) {
        var len = arr.length;
        var minIndex, temp;
        for (var i = 0; i < len - 1; i++) {
            minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) { //寻找最小的数
                    minIndex = j; //将最小数的索引保存
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    },
    /**
     * 插入排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    insertionSort: function (arr) {
        var len = arr.length;
        var preIndex, current;
        for (var i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while (preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex + 1] = arr[preIndex]; //往后推移一个
                preIndex--;
            }
            arr[preIndex + 1] = current;
        }
        return arr;
    },
    /**
     * 随机排序
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    randomSort: function (arr) {
        return arr.sort(function(){
            return Math.random() - 0.5
        });
    },
    /**
     * 时间转换
     * @param  {[type]} time [传入的时间值]
     * @param  {[type]} type [传入的时间类型]
     * @return {[type]} lan  [输出语言形式]
     */
    formatTime: function(time, type, lan) {
        // ms: 毫秒  s: 秒  m: 分钟  h: 小时
        if (lan === 0) {
            if (type === 'ms') {
                var left = parseInt(time / 1000);
                var day1 = Math.floor(left / (60 * 60 * 24));
                var hour = Math.floor((left - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((left - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(left - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '') + (second ? (second + "秒") : '');
            } else if (type === 's') {
                var day1 = Math.floor(time / (60 * 60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((time - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(time - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '') + (second ? (second + "秒") : '');
            } else if (type === 'm') {
                var day1 = Math.floor(time / (60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60) / 60);
                var minute = Math.floor((time - day1 * 24 * 60 - hour * 60));
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '') + (minute ? (minute + "分") : '');
            } else if (type === 'h') {
                var day1 = Math.floor(time / 24);
                var hour = Math.floor(time - day1 * 24);
                var format = (day1 ? (day1 + "天") : '') + (hour ? (hour + "小时") : '');
            }
        } else if (lan === 1) {
            if (type === 'ms') {
                var left = parseInt(time / 1000);
                var day1 = Math.floor(left / (60 * 60 * 24));
                var hour = Math.floor((left - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((left - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(left - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '') + (second ? (second + "s") : '');
            } else if (type === 's') {
                var day1 = Math.floor(time / (60 * 60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60 * 60) / 3600);
                var minute = Math.floor((time - day1 * 24 * 60 * 60 - hour * 3600) / 60);
                var second = Math.floor(time - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '') + (second ? (second + "s") : '');
            } else if (type === 'm') {
                var day1 = Math.floor(time / (60 * 24));
                var hour = Math.floor((time - day1 * 24 * 60) / 60);
                var minute = Math.floor((time - day1 * 24 * 60 - hour * 60));
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '') + (minute ? (minute + "m") : '');
            } else if (type === 'h') {
                var day1 = Math.floor(time / 24);
                var hour = Math.floor(time - day1 * 24);
                var format = (day1 ? (day1 + "d") : '') + (hour ? (hour + "h") : '');
            }
        }
        return format;
    },
    /**
     * 判断object是否拥有assign方法，如果不存在，就拓展该方法
     * @return {Boolean} [description]
     */
    isObjHasAssign: function() {
        if (!Object.assign) {
            // 定义assign方法
            Object.defineProperty(Object, 'assign', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function(target) { // assign方法的第一个参数
                    'use strict';
                    // 第一个参数为空，则抛错
                    if (target === undefined || target === null) {
                        throw new TypeError('Cannot convert first argument to object');
                    }

                    var to = Object(target);
                    // 遍历剩余所有参数
                    for (var i = 1; i < arguments.length; i++) {
                        var nextSource = arguments[i];
                        // 参数为空，则跳过，继续下一个
                        if (nextSource === undefined || nextSource === null) {
                            continue;
                        }
                        nextSource = Object(nextSource);

                        // 获取改参数的所有key值，并遍历
                        var keysArray = Object.keys(nextSource);
                        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                            var nextKey = keysArray[nextIndex];
                            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            // 如果不为空且可枚举，则直接浅拷贝赋值
                            if (desc !== undefined && desc.enumerable) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                    return to;
                }
            });
        }
    },
    /**
     * 添加HTML layout-scroll-fixed，解决有弹框弹出时，后面页面能够滚动的问题
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    htmlLock: function(type) {
        var html = document.querySelector('html');
        var cls = 'layout-scroll-fixed';
        if (type === '1') {
            this.addClass(html, cls);
        } else if (type === '0') {
            this.removeClass(html, cls);
        }
    }
}
