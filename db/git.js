function getGit() {
	return "# 应用场景\n" +
		"\n" +
		"> * 当线上合并出现冲突，采取线下合并解决冲突\n" +
		"> * 当本地commit后，别人刚好已经提交了新代码，此时push可能产生冲突，要求你合并代码\n" +
		"> * 当你在某分支开发时，线上某个家伙拉了别的分支到该分支，导致你push时产生了冲突，要求你合并代码\n" +
		"\n" +
		"# 解决方案\n" +
		"\n" +
		"> 假设你想hotfix-message合并到dev\n" +
		"> \n" +
		"> 1. git checkout dev\n" +
		"> 2. git merge --no --ff hotfix-message\n" +
		"> 3. 到IDEA解决冲突\n" +
		"> 4. TortoiseGit检查差异（至此分支还显示|merging）\n" +
		"> 5. git commit -m \"Merge branch 'hotfix-message' into dev\"\n" +
		"> 6. git push\n" +
		"> \n" +
		"> **划重点，关键一步是解决冲突后commit总结一下，不然一直|merging**\n" +
		"\n" +
		"# 补充\n" +
		"\n" +
		"> git merge --no --ff是强行关闭fast-forward的方式（参考了GitLab提供的命令代码）\n" +
		"> \n" +
		"> ![图片描述](https://img-blog.csdnimg.cn/img_convert/0ba508422c755e1e69b37dc320802600.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n";
}

function CloudDB () {
	return "# **目录**\n" +
		"\n" +
		"[一、怎么作云服务器 ](#%E4%B8%80%E3%80%81%E6%80%8E%E4%B9%88%E4%BD%9C%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%C2%A0)\n" +
		"\n" +
		"[1. 发布静态项目到GitHub](#1.%20%E5%8F%91%E5%B8%83%E9%9D%99%E6%80%81%E9%A1%B9%E7%9B%AE%E5%88%B0GitHub)\n" +
		"\n" +
		"[2. 发布到GitHub上](#2.%20%E5%8F%91%E5%B8%83%E5%88%B0GitHub%E4%B8%8A)\n" +
		"\n" +
		"[3. 打开GitHub的该repository的settings看网址](#3.%20%E6%89%93%E5%BC%80GitHub%E7%9A%84%E8%AF%A5repository%E7%9A%84settings%E7%9C%8B%E7%BD%91%E5%9D%80)\n" +
		"\n" +
		"[4. 打开后url改为首页html即可](#4.%20%E6%89%93%E5%BC%80%E5%90%8Eurl%E6%94%B9%E4%B8%BA%E9%A6%96%E9%A1%B5html%E5%8D%B3%E5%8F%AF)\n" +
		"\n" +
		"[二、怎么作云数据库](#%E4%BA%8C%E3%80%81%E6%80%8E%E4%B9%88%E4%BD%9C%E4%BA%91%E6%95%B0%E6%8D%AE%E5%BA%93)\n" +
		"\n" +
		"[1. 加个db.json](#1.%20%E5%8A%A0%E4%B8%AAdb.json)\n" +
		"\n" +
		"[2. 在js读取或修改json文件即可](#2.%20%E5%9C%A8js%E8%AF%BB%E5%8F%96%E6%88%96%E4%BF%AE%E6%94%B9json%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF)\n" +
		"\n" +
		"[三、基于此的动态博客](#%E4%B8%89%E3%80%81%E5%9F%BA%E4%BA%8E%E6%AD%A4%E7%9A%84%E5%8A%A8%E6%80%81%E5%8D%9A%E5%AE%A2)\n" +
		"\n" +
		"---\n" +
		"\n" +
		"> 为什么用GitHub？因为像阿里云腾讯云都要钱，别跟我说学生价。。用GitHub纯免费，也简单操作。\n" +
		"> \n" +
		"> 缺点：只能部署简单项目。\n" +
		"\n" +
		"# 一、怎么作云服务器\n" +
		"\n" +
		"## 1. 发布静态项目到GitHub\n" +
		"\n" +
		"> 创建一个repository\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204144534954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTE3NjQx,size_16,color_FFFFFF,t_70)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"> 然后create，进入该repository\n" +
		"> \n" +
		"> 接着复制url\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204144701406.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"> 下载个git到本地打开并clone下来\n" +
		"> \n" +
		"> 然后就可以将你的静态项目拷贝到目录下\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204144915715.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTE3NjQx,size_16,color_FFFFFF,t_70)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"> 这里网友分享的一个博客项目。\n" +
		"\n" +
		"## 2. 发布到GitHub上\n" +
		"\n" +
		"> 简单git命令即可:\n" +
		"> \n" +
		"> 更改后git add .\n" +
		"> \n" +
		"> git commit -m \"备注\"\n" +
		"> \n" +
		"> git push\n" +
		"> \n" +
		"> 输入你的GitHub账户密码提交\n" +
		"\n" +
		"## 3. 打开GitHub的该repository的settings看网址\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204145126965.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"## 4. 打开后url改为首页html即可\n" +
		"\n" +
		"> 我的是：\n" +
		"> \n" +
		"> [https://winrh.github.io/blog/index.html](https://winrh.github.io/blog/index.html)\n" +
		"\n" +
		"# 二、怎么作云数据库\n" +
		"\n" +
		"## 1. 加个db.json\n" +
		"\n" +
		"## 2. 在js读取或修改json文件即可\n" +
		"\n" +
		"> （我这里只是简单演示首页进入就执行）\n" +
		"\n" +
		"```javascript hljs\n" +
		"<script type=\"application/javascript\">\n" +
		"  $(function (){\n" +
		"      $.getJSON(\"db.json\", function (data){\n" +
		"        var strHtml = \"123\";\n" +
		"        //清空内容\n" +
		"        $.each(data, function (infoIndex, info){\n" +
		"          strHtml += \"姓名：\" + info[\"name\"] + \"<br>\";\n" +
		"          strHtml += \"性别：\" + info[\"sex\"] + \"<br>\";\n" +
		"          strHtml += \"邮箱：\" + info[\"email\"] + \"<br>\";\n" +
		"          strHtml += \"<hr>\"\n" +
		"        })\n" +
		"        console.log(strHtml);\n" +
		"        //显示处理后的数据\n" +
		"      })\n" +
		"  })\n" +
		"</script>\n" +
		"```\n" +
		"\n" +
		"![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204145357799.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"---\n" +
		"\n" +
		"# 三、基于此的动态博客\n" +
		"\n" +
		"可看：[https://winrh.github.io/#/user/new/main](https://winrh.github.io/#/user/new/main)\n" +
		"\n" +
		"可发博文\n";
}

function WriteInterface() {
	return "> \n" +
		"\n" +
		"> 思路没错，当然，不能用于实际生产。玩玩即可。\n" +
		"> \n" +
		"> 本文基于上篇文章：[【Git】如何用GitHub作云服务器和云数据库](https://blog.csdn.net/qq_32117641/article/details/110641367)\n" +
		"\n" +
		"# 1. 添加addNum.html文件\n" +
		"\n" +
		"> 这里比较丑陋，因为需要html后缀来辨别才能执行js\n" +
		"\n" +
		"```\n" +
		"<script type=\"text/javascript\">\n" +
		"   var sum = 0; \n" +
		"   var str=location.href; //取得整个地址栏\n" +
		"   var num=str.indexOf(\"?\") \n" +
		"   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]\n" +
		"\n" +
		"   var arr=str.split(\"&\"); //各个参数放到数组里\n" +
		"   for(var i=0;i < arr.length;i++){ \n" +
		"    num=arr[i].indexOf(\"=\"); \n" +
		"    if(num>0){ \n" +
		"     name=arr[i].substring(0,num);\n" +
		"     value=arr[i].substr(num+1);\n" +
		"     sum=sum + parseInt(value);\n" +
		"     } \n" +
		"    }\n" +
		"\tdocument.write(sum);\n" +
		"</script>\n" +
		"```\n" +
		"\n" +
		"![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")\n" +
		"\n" +
		"# 2. push上GitHub\n" +
		"\n" +
		"# 3. 调用\n" +
		"\n" +
		"> 原理便是访问html，执行js，生成结果到html的body标签。调用方访问后获取html结果解析出body内容即可。\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201204154921771.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTE3NjQx,size_16,color_FFFFFF,t_70)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n";
}

function GitPull () {
	return "# 一、没git add时git pull报错\n" +
		"\n" +
		"1. git stash save\n" +
		"\n" +
		"> 保存你的副本\n" +
		"\n" +
		"2. git pull\n" +
		"\n" +
		"> 拉取最新信息\n" +
		"\n" +
		"3. git stash pop\n" +
		"\n" +
		"> 加上你的副本（这时可能会有冲突）\n" +
		"\n" +
		"4. git add .\n" +
		"\n" +
		"> 先添加\n" +
		"\n" +
		"5. TortoiseGit查看差异\n" +
		"\n" +
		"> 图形化选择（如果有冲突，可IDEA先项目右键git解决冲突，再回到TortoiseGit查看差异，力求细致不出差错）\n" +
		"\n" +
		"![](https://img-blog.csdnimg.cn/20201127154211333.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMyMTE3NjQx,size_16,color_FFFFFF,t_70)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")​\n" +
		"\n" +
		"6. 有修改则再次git add .，git status查看修改的文件状态\n" +
		"\n" +
		"> 弄完可再次TortoiseGit查看差异，力求细致不出差错\n" +
		"\n" +
		"7. git commit -m \"提交原因\"\n" +
		"8. git push\n" +
		"\n" +
		"---\n" +
		"\n" +
		"# 二、git add后git pull报错\n" +
		"\n" +
		"> 这种情况也是有的，别人疯狂提交，拦都拦不住。\n" +
		"\n" +
		"这个一般会进入vi界面，要你输入merge信息，直接:q!继续后续操作即可。\n" +
		"\n" +
		"---\n" +
		"\n" +
		"# 三、总结\n" +
		"\n" +
		"> 所以一般不git add，等写完要提交再来\n";
}

function compileCannotResolve() {
	var text = "你复制的地址有问题，gitlab换成**服务器地址:端口号**\n";
	var converter = new showdown.Converter();
	var html = converter.makeHtml(text);
	document.getElementById("mycontent").innerHTML = html;
}

function compileGitSVN() {
	var text = "# 一、SVN\n" +
		"\n" +
		"> * Subversion，**集中式**代码管理，即项目文件放服务器，各个开发者**围着服务器**，直接对服务器进行commit、get。\n" +
		"> * 可用TortoiseSVN，操作简单，图形界面不错。\n" +
		"\n" +
		"# 二、Git\n" +
		"\n" +
		"> * **分布式**代码管理，即各开发者可clone完整的git仓库到本地**各自开发**。开发者提交代码到本地仓库，再将本地仓库代码push到远程服务器。因此即使断网，也可在本地操作。\n" +
		"> * 图形界面差，命令语法要求高。\n" +
		"\n" +
		"# 三、使用\n" +
		"\n" +
		"> * 如果是项目经理来统一**协调多个并行项目**的，使用人员涉及美工、产品、测试等的，着力于**项目文件**的版本控制，则SVN可考虑。\n" +
		"> * 如果追求**代码**的版本控制，每个人都可以维护自己专属的版本，则Git可考虑。\n";
	var converter = new showdown.Converter();
	var html = converter.makeHtml(text);
	document.getElementById("mycontent").innerHTML = html;
}

function compileSetPass() {
	var text = "```bash hljs\n" +
		"git config --global credential.helper store\n" +
		"```\n" +
		"\n" +
		"![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== \"点击并拖拽以移动\")\n" +
		"\n" +
		"设置好缓存，然后只需输一次用户名密码，以后就不需要了。\n";
	var converter = new showdown.Converter();
	var html = converter.makeHtml(text);
	document.getElementById("mycontent").innerHTML = html;
}