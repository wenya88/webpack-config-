const path=require('path');
module.exports={
	//入口：有并且可以有多个
	entry:{ 
		main:"./src/main.js"
	},
	//打包环境：开发&生产
	mode:"development",
	//出口：有且只能有一个
	output:{
		filename:"[name]-bundle.js",//输出文件名 [name] 是入口main的文件名 会生成main-bundle.js
		path:path.resolve(__dirname,"../dist"), //输入文件路径
		publicPath:'/'//虚拟路径,如果设置publicPath:'/js' 那在index.html <script src="/js/main-bundle.js"></script>
	},
	//本地服务器
	devServer:{
		contentBase:"dist"//运行那个文件夹下面的文件
	}
}