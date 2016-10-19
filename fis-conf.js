// 利用package.json文件定义项目名和版本
var meta = require('./package.json');

/**
 * scrat version v0.8.0
 * name            必须设置
 * version         必须设置
 * comboPattern    建议设置，便于区分哪些是合并请求 默认值 /??%s，建议/co??%s 或 /combo??%s
 * cache           按需设置，建议生产环境开启，即使scrat release -o开启，也是按配置来执行
 * alias           按需设置，设置非主文件模块，包括js，css等
 * combo           不设置，只能通过scrat release -p开启
 * urlPattern      一般不设置，默认值 /c/%s
 * hash            不设置，scrat release 自动计算
 * deps            不设置，scrat release 自动计算
 * project.exclude 建议设置，一般不将源码node_modules迁移到发布目录
 * urlPrefix       与framework.urlPattern搭配使用
 */
// 项目名称
fis.config.set('name', meta.name);
// 项目版本号
fis.config.set('version', meta.version);
// scrat.js框架开启localstorage缓存
fis.config.set('framework.cache', false);
// 静态资源加载路径模式
fis.config.set('framework.urlPattern', '/public/c/%s');
// 设置url前缀
fis.config.set('urlPrefix', '/public');
// 定义别名 
fis.config.set('framework.alias.practice-conf', 'components/pages/practice/conf.js');
fis.config.set('framework.alias.foo_plus', 'components/pages/foo/foo_plus.css');
// 设置combo
fis.config.set('framework.combo', true);
// 指定combo的url格式
fis.config.set('framework.comboPattern', '/combo??%s');
// 排除源码目录下的node_modules目录，不对其进行构建 构建指将源码迁移到发布目录下
fis.config.set('project.exclude', ['node_modules/**']);

// 对md、tpl后缀的文件指定用fis-optimizer-html-minifier插件进行压缩
fis.config.set('modules.optimizer.md', 'html-minifier');
fis.config.set('modules.optimizer.tpl', 'html-minifier');

// fis-lint-jshint插件配置
fis.config.set('settings.lint.jshint', {
    // 在jshint基础上加上了i18n配置，将报错信息翻译成中文
    i18n: 'zh-CN',
    // 在jshint基础上加上了ignored配置，排除框架文件、第三方模块
    ignored: [
        'views/lib/**',
        'component_modules/**'
    ],
    // 其他配置项请直接参阅jshint官网说明
    predef: [
        'define',
        'Handlebars',
        '__FRAMEWORK_CONFIG__',
        'ga'
    ],
    bitwise: true,
    camelcase: true,
    eqeqeq: true,
    forin: true,
    immed: true,
    indent: 4,
    newcap: true,
    noarg: true,
    noempty: true,
    nonew: true,
    undef: true,
    strict: true,
    boss: true,
    trailing: true,
    eqnull: true,
    browser: true,
    devel: true,
    jquery: true,
    node: true,
    white: false
});

// 使用pngquant把png图片压缩为png8，减少质量
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

// markdown的标题id前缀
fis.config.set('settings.parser.marked.headerPrefix', 'user-content-');

// fis-optimizer-html-minifier插件配置
fis.config.set('settings.optimizer.html-minifier', {
    // fis直接将此配置传递给html-minfier模块
    // 因此相关配置项请直接参阅html-minifier文档
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: true
});