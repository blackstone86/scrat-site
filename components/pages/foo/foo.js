// 使用__inline函数嵌入其他资源，如果
// 是图片，构建后会替换为base64字符串
var tpl = __inline('foo.tpl');
var iconBase64 = __inline('imgs/favicon.ico');
// 使用__uri函数定位资源，构建后会替换
// 为部署后的绝对路径
var icon = __uri('imgs/favicon.ico');   

//像nodejs那样导出API
exports.getHTML = function(){
    // console.log(icon);
    // console.log(iconBase64);
    return tpl;
};