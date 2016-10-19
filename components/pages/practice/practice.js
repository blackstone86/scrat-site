'use strict';

// 引用其他模块
var foo = require('pages/foo');
// 引用当前目录下的文件
// var conf = require('./conf.js');
var conf = require('practice-conf');

exports.getMarkdown = function(){
    var fooHtml = foo.getHTML(); 
    var config = conf.getConf();
    // console.log(config);
    return __inline('doc.md') + fooHtml;
};