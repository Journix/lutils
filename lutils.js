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
    sort1: function (arr) {
        var a = array.filter(function(ele, index) {
            return index === array.indexOf(ele);
        })
    },
    /**
     * 效率最高的排序方式
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    sort: function (arr) {
        var result = {};
        var newArr = [];
        for (var i = 0; i < arr.length; i++)　 {
            if (!result[arr[i]]) {
                newArr.push(arr[i]);
                result[arr[i]] = 1
            }
        }
        return newArr
    }
}