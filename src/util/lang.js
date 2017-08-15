/**
 * @file lang
 * @author wuqi03(wuqi03@baidu.com)
 * @time 17/8/12
 */

/**
 * 数组map polyfill
 *
 * @param {Array} arr 原数组
 * @param {Function=} callback map的执行方法
 * @param {Object=} thisArg fn中的this指向
 * @return {Array}
 */
export function map(arr, callback, thisArg) {
    let len = arr.length;
    let result = new Array(len);

    for (let i = 0; i < len; i++) {
        let item = arr[i];

        result[i] = callback.call(thisArg, item, i, arr);
    }

    return result;
}

