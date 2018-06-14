/*
* @Author: 
* @Date:   
* @Last 
* @Last Modified time: 
*/

'use strict';

var _mm = require('util/mm.js');

var _index = {
    // 获取购物车数量
    getAllCategory : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/category/get_all_category.do'),
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _index;