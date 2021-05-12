// ==UserScript==
// @name         斗鱼网页版夜间模式
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  protect your eyes
// @author       『邪王真眼』
// @match        *://www.douyu.com/*
// @grant        none
// @icon         https://www.douyu.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
	window.onload = function(){
		console.log("匹配成功");
	}
    
    //检查div是否存在
    function ifDivExist(divName){
        var a = document.getElementsByClassName(divName)[0];
        a = Boolean(a);
        return a;
    }
    
    //设置div颜色
    function setDark(divName,color){
        var a = document.getElementsByClassName(divName)[0];
        a.style.backgroundColor = color;
    }
    
    //div数组
    //亮1
    var divArr = [
        "Title",
        "layout-Player-toolbar",
        "Header-wrap"
    ];
    //底色
    var divArr2 = [
        "layout-Main"
    ];

    /*
    //标志位数组初始化
    //var flagArr = new Array();
    //var flagArr2 = new Array();

    for(var i=0;i<divArr.length;i++){
        flagArr[i] = 0;
    }
    */

    //主循环
    var n = 0;
    setInterval(function(){
        //颜色：亮1
        for(var i=0;i<divArr.length;i++){
            //flag标志位为0 且 div存在
            //if(flagArr[i]==0 && ifDivExist(divArr[i])){
            if(ifDivExist(divArr[i])){
                setDark(divArr[i],"rgb(42,43,47)");
                //flagArr[i]=1;
                console.log(n);
                console.log("【"+divArr[i]+"】的颜色已更改为：【rgb(42,43,47)】");
            }
        }
        //颜色:底色
        for(i=0;i<divArr2.length;i++){
            if(ifDivExist(divArr2[i])){
                setDark(divArr2[i],"rgb(35,36,39)");
                //flagArr2[i]=1;
                console.log(n);
                console.log("【"+divArr2[i]+"】的颜色已更改为：【rgb(35,36,39)】");
            }
        }
        n++;
    },1000);
})();
