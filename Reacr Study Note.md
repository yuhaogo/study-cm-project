# CMD: #
fsutil file createnew d:\a.txt 0  //生成指定大小文件---需要管理员权限


# jquery: #
- a.localeCompare(b) //本地排序--配合sort(fn);


# fis3 #
- 1. 打包会有缓存 遇到奇怪问题先清缓存

# 前端构建站点原则 #

- VCD--View Controller Data



# npm 替换淘宝镜像 #
- $ npm install -g cnpm --registry=https://registry.npm.taobao.org
- $ npm config set registry https://registry.npm.taobao.org

# npm 查找全局安装包版本 #
- npm ls -g 

- ## 定位到目录 ##
- | depth=1---代办展开目录一层
- |（1||2）1标准输出，2错误信息
- |>/dev/null 重定向到/dev/null 目录
- | |竖线代表通道 上一个命令的结果作为下一个命令的内容
- |grep generator检索 generator关键字
- npm ls -g --depth=1 （1||2）>/dev/null | grep generator-
- 
#  nodejs 相关 #
- express 快速创建nodejs 项目
- node server.js --env=dist  预览发布后的文件内容

//主动缓存css,js 等静态文件
app.use(express.static(path.join(__dirname, 'public'),{ maxAge: 3600000 * 24 * 365 }));



# 需掌握(搭建项目基础) #
- grunt
- glup
- 

# 需掌握(快速构建项目) #
- webpack 相关
- loaders{	
-   exclude 排除
-   loader  从右到左执行
- }
- 
- 
# react 相关 #
- var objarr=[xxx];
- objarr=(function method(objarr){ //自执行函数
- 	...xxxxx
- 	return objarr
- })(objarr)

=()=>{}lambda 表达式
constructor //获取props  states

react 中 引用图片  <img src={require(xxxx.png)} />

# githup #
	yuhaogo
	3355232aa

# Yeoman 构建 #
	yo react-webpack //构建react+wabpack项目

# 调试 #

	debugger;

# 批处理 #
@echo off
cd /d %~dp0 //批处理所在盘符+目录

# webpack 相关 #

模拟数据配置api地址
devServer:{
	proxy:{
	      '/api/*':{
	        target: 'http://127.0.0.1:91',
	        changeOrigin: true,
	        secure: false
	      }
	    }
}