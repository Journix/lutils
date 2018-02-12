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
    // sort1: function(arr) {
    //     var a = arr.filter(function(ele, index) {
    //         return index === arr.indexOf(ele);
    //     })
    // },
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
        let narr = arr.concat();
        return narr.sort(function(){
            return Math.random() - 0.5  // or  0.5-Math.random()
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
     * 时间处理函数
     * @param  {[type]} date ["2017-09-18 04:13:14"]
     * @return {[type]}      [description]
     */
    handleTime: function (date) {
        // 0:01-5:00凌晨 5:01-12:00上午 12:01-21:00下午 21:01-24:00夜晚
        let newDate = date.split(" ");
        let day = newDate[0];
        let time = newDate[1];
        let baseTime = new Date(date).getTime();
        let timeDuration = [{
            start: "00:01:00",
            end: "05:00:59",
            chinese: "凌晨"
        },{
            start: "05:01:00",
            end: "12:00:59",
            chinese: "上午"
        },{
            start: "12:00:00",
            end: "21:00:59",
            chinese: "下午"
        },{
            start: "21:01:00",
            end: "24:00:00",
            chinese: "夜晚"
        }]
        for (var i = 0; i < timeDuration.length; i++) {
            let item = timeDuration[i];
            let timeStart = new Date(day + " " + item.start).getTime();
            let timeEnd = new Date(day + " " + item.end).getTime();
            if (baseTime >= timeStart && baseTime <= timeEnd) {
                return {
                    day,
                    time,
                    timeDurationCH: item.chinese
                }
            }
        }
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
        var body = document.querySelector('boby'); // 有时候，只是锁定html，无法达到效果，所以同时锁定body
        var cls = 'layout-scroll-fixed';
        if (type === '1') {
            this.addClass(html, cls);
            this.addClass(body, cls);
        } else if (type === '0') {
            this.removeClass(html, cls);
            this.removeClass(body, cls);
        }
    },
    /**
     * 计算年龄
     * @param  {[type]} birth [description]
     * @param  {[type]} end   [description]
     * @return {[type]}       [description]
     */
    getDeltaAge: function(birth, end) {
        //格式化时间，IOS下 - - bug
        if (/\d{4}-\d{2}-\d{2}/.test(birth)) {
            birth = birth.replace(/\-/g, "/");
        }
        if (/\d{4}-\d{2}-\d{2}/.test(end)) {
            end = end.replace(/\-/g, "/");
        }
        birth = new Date(birth);
        end = new Date(end);
        var deltaYear, deltaMonth, deltaDate, psgType;
        var startDate = birth.getDate();
        var startMonth = birth.getMonth();
        var startYear = birth.getFullYear();
        var endDate = end.getDate();
        var endMonth = end.getMonth();
        var endYear = end.getFullYear();
        //总的月份差
        var monthDelta = (endYear * 12 + endMonth) - (startYear * 12 + startMonth);
        var dayDelta = endDate - startDate;
        if (dayDelta < 0) {
            monthDelta = monthDelta - 1;
            deltaDate = dayDelta + 30;
        } else {
            deltaDate = dayDelta;
        }

        deltaYear = Math.floor(monthDelta / 12);
        deltaMonth = monthDelta - deltaYear * 12;

        if (deltaYear > 12) {
            psgType = 'ADT';
        } else if (deltaYear >= 2 && deltaYear <= 12) {
            psgType = 'CHD'
        } else if (deltaYear < 2) {
            psgType = 'INF'
        }


        return {
            year: deltaYear || 0,
            month: deltaMonth || 0,
            date: deltaDate || 0,
            psgType: psgType || 'ADT'
        }
    },
    /**
     * 通过身份证获取生日
     * @param  {[type]} id [身份证号]
     * @return {[type]}    [description]
     */
    getBirthById: function(id) {
        return id.substring(6, 10) + "-" + id.substring(10, 12) + "-" + id.substring(12, 14);
    },
    /**
     * 判断是否有某个class
     * @param  {[type]}  obj [description]
     * @param  {[type]}  cls [description]
     * @return {Boolean}     [description]
     */
    hasClass: function (obj, cls) {
        return obj.classList.contains('cls')
    },
    hasClass1: function(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    /**
     * 添加class
     * @param {[type]} obj [description]
     * @param {[type]} cls [description]
     */
    addClass: function(obj, cls) {
        if (!this.hasClass(obj, cls)) obj.className += " " + cls;
    },
    /**
     * 删除class
     * @param  {[type]} obj [description]
     * @param  {[type]} cls [description]
     * @return {[type]}     [description]
     */
    removeClass: function(obj, cls) {
        if (this.hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    },
    /**
     * 通过ua判断是不是m站
     */
    isMweb: function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        var isM = false;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                isM = true;
                break;
            }
        }
        return isM;
    },
    /**
     * 拓展array indexof方法
     * @return {[type]} [description]
     */
    arrayIndexof: function () {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (elt) {
                var len = this.length >>> 0;
                var from = Number(arguments[1]) || 0;
                from = (from < 0) ? Math.ceil(from) : Math.floor(from);
                if (from < 0) from += len;
                for (; from < len; from++) {
                    if (from in this && this[from] === elt) return from;
                }
                return -1;
            };
        };
    },
    /**
     * 去掉左边空格
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    trimLeft: function (string) {
        return string.replace(/^\s*/g,"");
    },
    /**
     * 去掉右边空格
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    trimRight: function (string) {
        return string.replace(/\s*$/g,"");
    },
    /**
     * 去掉前后空格
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    trimRound: function (string) {
        return string.replace(/(^\s*)|(\s*$)/g,"")
    },
    /**
     * 去掉所有空格
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    trimAll: function (string) {
        return name.replace(/\s+/g,"")
    },
    /**
     * 获取cookie值
     * @param  {[type]} name [需要获取的cookie的key值]
     * @return {[type]}      [description]
     */
    getCookie: function (name) {
        var arr = document.cookie.split('; '),
            len = arr.length;

        for (var i = 0; i < len; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return decodeURIComponent(arr2[1]);
            }
        }
        return null;
    },
    /**
     * 翻转文本
     * @param  {[type]} string [description]
     * @return {[type]}        [description]
     */
    reverseString: function (string) {
        return string.split('').reverse().join('')
    },
    /**
     * 6位日期缩写：180108
     */
    getDateAbb: function () {
        return (time.getFullYear() + '').substring(2,4) + (time.getMonth() + 1 + '').padStart(2, '0') + (time.getDate() + '').padStart(2, '0')
    },
    /**
     * 双重非运算操作符，代替Math.floor()，其优势在于运行更快
     * @return {[type]} [description]
     */
    mathFloor: function (num) {
        return ~~num;
    },
    /**
     * loading 进度 下面的延时计时器模拟ajax请求
     * @return {[type]} [description]
     */
    loadingProcess: function () {
        let timer = window.setInterval(() => {
            if (this.prg >= 100) {
                // 到达终点，关闭定时器
                window.clearInterval(timer);
                this.prg = 100;
            } else {  // 未到终点，进度自增
                if(!(this.prg == 95 && !this.ajaxtrue)) {
                    this.prg += 5;
                }
            }
            console.log(this.prg,'prg')
        }, 100);

        // window.setTimeout(() => {
        //     this.ajaxtrue = true;
        // }, 10000)
    },
    /**
     * 二维数组转为一维数组
     * 数组循环的方式
     * @type {[type]}
     */
    arrayTile1: function (arr) {
        var reduced = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                reduced.push(arr[i][j]);
            }
        }
        return reduced;
    },
    /**
     * 二维数组转为一维数组
     * concat的方式
     * @type {[type]}
     */
    arrayTile2: function (arr) {
        var reduced = [];
        for (var i = 0; i < arr.length; i++){
            reduced = reduced.concat(arr[i]);
        }
        return reduced;
    },
    /**
     * 二维数组转为一维数组
     * @type {[type]}
     */
    arrayTile: function (arr) {
        // const arr=[[1,2,3],[3,4],[5]];
        return [].concat.apply([],arr);
        // return Array.prototype.concat.apply([], arr)
    },
    /**
     * [arrayTile3 description]
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    arrayTile3: function (arr) {
        // var arr1 = (arr + '').split(',');//将数组转字符串后再以逗号分隔转为数组
        var arr1 = arr.toString().split(',');//将数组转字符串后再以逗号分隔转为数组
        var arr2 = arr1.map(function(x){
            return Number(x);
        });
        return arr2;
    },
    /**
     * 使用递归来把多维数组转为一维数组
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    arrayTile4: function (arr) {
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                arrayTile4(arr[i]);
            }else{
                newArr.push(arr[i]);
            }
        }
    },
    /**
     * 多维数组转为一维数组
     * 递归 + reduce
     * @return {[type]} [description]
     */
    arrayTile5: function () {
        arr.reduce(
            (acc,val) => acc.concat(Array.isArray(val)? arrayTile5(val):val),[]
        )
    },
    /**
     * 获取链接里面的参数
     * @param {[type]} param [description]
     */
    GetQueryString: function (param) { //param为要获取的参数名 注:获取不到是为null
        var currentUrl = window.location.href; //获取当前链接
        var arr = currentUrl.split("?");//分割域名和参数界限
        if (arr.length > 1) {
            arr = arr[1].split("&");//分割参数
            for (var i = 0; i < arr.length; i++) {
                var tem = arr[i].split("="); //分割参数名和参数内容
                if (tem[0] == param) {
                    return tem[1];
                }
            }
            return null;
        }
        else {
            return null;
        }
    }
}
