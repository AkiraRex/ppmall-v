/*
* @Author: Rosen
* @Date:   2017-05-08 15:19:12
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-26 19:36:18
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide           = require('page/common/nav-side/index.js');
var templateBanner    = require('./banner.string');
var templateIndex  = require('./category.string');
var _index            = require('service/index-service.js');
var _mm               = require('util/mm.js');

var page = {
    init : function(){
        this.onLoad();
        this.loadCategory();
    },
    onLoad : function(){
        var bannerHtml  = _mm.renderHtml(templateBanner);
        $('.banner-con').html(bannerHtml);
        // 初始化banner
        var $slider     = $('.banner').unslider({
            dots: true
        });
        // 前一张和后一张操作的事件绑定
        $('.banner-con .banner-arrow').click(function(){
            var forward = $(this).hasClass('prev') ? 'prev' : 'next';
            $slider.data('unslider')[forward]();
        });
    },
    loadCategory : function(){
        var listHtml = '';
        _index.getAllCategory(function(res){
                //console.log('page.index.getAllCategoryg',res);
                listHtml = _mm.renderHtml(templateIndex, {
                    categoryList :  res
                });
                $("#categoryList").html(listHtml);
                console.log(listHtml);
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
    }
}

$(function() {
    page.init();
});