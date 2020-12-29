function getMysql() {
	return "\n" +
		"##本单元目标\n" +
		"\t一、为什么要学习数据库\n" +
		"\t二、数据库的相关概念      \n" +
		"\t\tDBMS、DB、SQL\n" +
		"\t三、数据库存储数据的特点\n" +
		"\t四、初始MySQL\n" +
		"\t\tMySQL产品的介绍        \n" +
		"\t\tMySQL产品的安装          ★        \n" +
		"\t\tMySQL服务的启动和停止     ★\n" +
		"\t\tMySQL服务的登录和退出     ★      \n" +
		"\t\tMySQL的常见命令和语法规范      \n" +
		"\t五、DQL语言的学习   ★              \n" +
		"\t\t基础查询        ★             \n" +
		"\t\t条件查询  \t   ★\t\t\t\n" +
		"\t\t排序查询  \t   ★\t\t\t\t\n" +
		"\t\t常见函数        ★               \n" +
		"\t\t分组函数        ★              \n" +
		"\t\t分组查询\t\t   ★\t\t\t\n" +
		"\t\t连接查询\t \t★\t\t\t\n" +
		"\t\t子查询       √                  \n" +
		"\t\t分页查询       ★              \n" +
		"\t\tunion联合查询\t√\t\t\t\n" +
		"\t\t\n" +
		"\t六、DML语言的学习    ★             \n" +
		"\t\t插入语句\t\t\t\t\t\t\n" +
		"\t\t修改语句\t\t\t\t\t\t\n" +
		"\t\t删除语句\t\t\t\t\t\t\n" +
		"\t七、DDL语言的学习  \n" +
		"\t\t库和表的管理\t √\t\t\t\t\n" +
		"\t\t常见数据类型介绍  √          \n" +
		"\t\t常见约束  \t  √\t\t\t\n" +
		"\t八、TCL语言的学习\n" +
		"\t\t事务和事务处理                 \n" +
		"\t九、视图的讲解           √\n" +
		"\t十、变量                      \n" +
		"\t十一、存储过程和函数   \n" +
		"\t十二、流程控制结构       \n" +
		"\n" +
		"##数据库的好处\n" +
		"\t1.持久化数据到本地\n" +
		"\t2.可以实现结构化查询，方便管理\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"##数据库相关概念\n" +
		"\t1、DB：数据库，保存一组有组织的数据的容器\n" +
		"\t2、DBMS：数据库管理系统，又称为数据库软件（产品），用于管理DB中的数据\n" +
		"\t3、SQL:结构化查询语言，用于和DBMS通信的语言\n" +
		"\n" +
		"##数据库存储数据的特点\n" +
		"\t1、将数据放到表中，表再放到库中\n" +
		"\t2、一个数据库中可以有多个表，每个表都有一个的名字，用来标识自己。表名具有唯一性。\n" +
		"\t3、表具有一些特性，这些特性定义了数据在表中如何存储，类似java中 “类”的设计。\n" +
		"\t4、表由列组成，我们也称为字段。所有表都是由一个或多个列组成的，每一列类似java 中的”属性”\n" +
		"\t5、表中的数据是按行存储的，每一行类似于java中的“对象”。\n" +
		"\n" +
		"\n" +
		"\n" +
		"##MySQL产品的介绍和安装\n" +
		"\n" +
		"###MySQL服务的启动和停止\n" +
		"\t方式一：计算机——右击管理——服务\n" +
		"\t方式二：通过管理员身份运行\n" +
		"\tnet start 服务名（启动服务）\n" +
		"\tnet stop 服务名（停止服务）\n" +
		"\n" +
		"\n" +
		"###MySQL服务的登录和退出   \n" +
		"\t方式一：通过mysql自带的客户端\n" +
		"\t只限于root用户\n" +
		"\n" +
		"\t方式二：通过windows自带的客户端\n" +
		"\t登录：\n" +
		"\tmysql 【-h主机名 -P端口号 】-u用户名 -p密码\n" +
		"\n" +
		"\t退出：\n" +
		"\texit或ctrl+C\n" +
		"\n" +
		"\n" +
		"\t\n" +
		"\t\n" +
		"\t\n" +
		"###MySQL的常见命令 \n" +
		"\n" +
		"\t1.查看当前所有的数据库\n" +
		"\tshow databases;\n" +
		"\t2.打开指定的库\n" +
		"\tuse 库名\n" +
		"\t3.查看当前库的所有表\n" +
		"\tshow tables;\n" +
		"\t4.查看其它库的所有表\n" +
		"\tshow tables from 库名;\n" +
		"\t5.创建表\n" +
		"\tcreate table 表名(\n" +
		"\n" +
		"\t\t列名 列类型,\n" +
		"\t\t列名 列类型，\n" +
		"\t\t。。。\n" +
		"\t);\n" +
		"\t6.查看表结构\n" +
		"\tdesc 表名;\n" +
		"\n" +
		"\n" +
		"\t7.查看服务器的版本\n" +
		"\t方式一：登录到mysql服务端\n" +
		"\tselect version();\n" +
		"\t方式二：没有登录到mysql服务端\n" +
		"\tmysql --version\n" +
		"\t或\n" +
		"\tmysql --V\n" +
		"\n" +
		"\n" +
		"\n" +
		"###MySQL的语法规范\n" +
		"\t1.不区分大小写,但建议关键字大写，表名、列名小写\n" +
		"\t2.每条命令最好用分号结尾\n" +
		"\t3.每条命令根据需要，可以进行缩进 或换行\n" +
		"\t4.注释\n" +
		"\t\t单行注释：#注释文字\n" +
		"\t\t单行注释：-- 注释文字\n" +
		"\t\t多行注释：/* 注释文字  */\n" +
		"\t\n" +
		"\t\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"###SQL的语言分类\n" +
		"\tDQL（Data Query Language）：数据查询语言\n" +
		"\t\tselect \n" +
		"\tDML(Data Manipulate Language):数据操作语言\n" +
		"\t\tinsert 、update、delete\n" +
		"\tDDL（Data Define Languge）：数据定义语言\n" +
		"\t\tcreate、drop、alter\n" +
		"\tTCL（Transaction Control Language）：事务控制语言\n" +
		"\t\tcommit、rollback\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"\n" +
		"###SQL的常见命令\n" +
		"\n" +
		"\tshow databases； 查看所有的数据库\n" +
		"\tuse 库名； 打开指定 的库\n" +
		"\tshow tables ; 显示库中的所有表\n" +
		"\tshow tables from 库名;显示指定库中的所有表\n" +
		"\tcreate table 表名(\n" +
		"\t\t字段名 字段类型,\t\n" +
		"\t\t字段名 字段类型\n" +
		"\t); 创建表\n" +
		"\n" +
		"\tdesc 表名; 查看指定表的结构\n" +
		"\tselect * from 表名;显示表中的所有数据\n" +
		"\n" +
		"\n" +
		"\n" +
		"##DQL语言的学习\n" +
		"###进阶1：基础查询\n" +
		"\t语法：\n" +
		"\tSELECT 要查询的东西\n" +
		"\t【FROM 表名】;\n" +
		"\n" +
		"\t类似于Java中 :System.out.println(要打印的东西);\n" +
		"\t特点：\n" +
		"\t①通过select查询完的结果 ，是一个虚拟的表格，不是真实存在\n" +
		"\t② 要查询的东西 可以是常量值、可以是表达式、可以是字段、可以是函数\n" +
		"\n" +
		"###进阶2：条件查询\n" +
		"\t条件查询：根据条件过滤原始表的数据，查询到想要的数据\n" +
		"\t语法：\n" +
		"\tselect \n" +
		"\t\t要查询的字段|表达式|常量值|函数\n" +
		"\tfrom \n" +
		"\t\t表\n" +
		"\twhere \n" +
		"\t\t条件 ;\n" +
		"\n" +
		"\t分类：\n" +
		"\t一、条件表达式\n" +
		"\t\t示例：salary>10000\n" +
		"\t\t条件运算符：\n" +
		"\t\t> < >= <= = != <>\n" +
		"\t\n" +
		"\t二、逻辑表达式\n" +
		"\t示例：salary>10000 && salary<20000\n" +
		"\t\n" +
		"\t逻辑运算符：\n" +
		"\n" +
		"\t\tand（&&）:两个条件如果同时成立，结果为true，否则为false\n" +
		"\t\tor(||)：两个条件只要有一个成立，结果为true，否则为false\n" +
		"\t\tnot(!)：如果条件成立，则not后为false，否则为true\n" +
		"\n" +
		"\t三、模糊查询\n" +
		"\t示例：last_name like 'a%'\n" +
		"\n" +
		"###进阶3：排序查询\t\n" +
		"\t\n" +
		"\t语法：\n" +
		"\tselect\n" +
		"\t\t要查询的东西\n" +
		"\tfrom\n" +
		"\t\t表\n" +
		"\twhere \n" +
		"\t\t条件\n" +
		"\t\n" +
		"\torder by 排序的字段|表达式|函数|别名 【asc|desc】\n" +
		"\n" +
		"\t\n" +
		"###进阶4：常见函数\n" +
		"\t一、单行函数\n" +
		"\t1、字符函数\n" +
		"\t\tconcat拼接\n" +
		"\t\tsubstr截取子串\n" +
		"\t\tupper转换成大写\n" +
		"\t\tlower转换成小写\n" +
		"\t\ttrim去前后指定的空格和字符\n" +
		"\t\tltrim去左边空格\n" +
		"\t\trtrim去右边空格\n" +
		"\t\treplace替换\n" +
		"\t\tlpad左填充\n" +
		"\t\trpad右填充\n" +
		"\t\tinstr返回子串第一次出现的索引\n" +
		"\t\tlength 获取字节个数\n" +
		"\t\t\n" +
		"\t2、数学函数\n" +
		"\t\tround 四舍五入\n" +
		"\t\trand 随机数\n" +
		"\t\tfloor向下取整\n" +
		"\t\tceil向上取整\n" +
		"\t\tmod取余\n" +
		"\t\ttruncate截断\n" +
		"\t3、日期函数\n" +
		"\t\tnow当前系统日期+时间\n" +
		"\t\tcurdate当前系统日期\n" +
		"\t\tcurtime当前系统时间\n" +
		"\t\tstr_to_date 将字符转换成日期\n" +
		"\t\tdate_format将日期转换成字符\n" +
		"\t4、流程控制函数\n" +
		"\t\tif 处理双分支\n" +
		"\t\tcase语句 处理多分支\n" +
		"\t\t\t情况1：处理等值判断\n" +
		"\t\t\t情况2：处理条件判断\n" +
		"\t\t\n" +
		"\t5、其他函数\n" +
		"\t\tversion版本\n" +
		"\t\tdatabase当前库\n" +
		"\t\tuser当前连接用户\n" +
		"\n" +
		"\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"二、分组函数\n" +
		"\n" +
		"\n" +
		"\t\tsum 求和\n" +
		"\t\tmax 最大值\n" +
		"\t\tmin 最小值\n" +
		"\t\tavg 平均值\n" +
		"\t\tcount 计数\n" +
		"\t\n" +
		"\t\t特点：\n" +
		"\t\t1、以上五个分组函数都忽略null值，除了count(*)\n" +
		"\t\t2、sum和avg一般用于处理数值型\n" +
		"\t\t\tmax、min、count可以处理任何数据类型\n" +
		"\t    3、都可以搭配distinct使用，用于统计去重后的结果\n" +
		"\t\t4、count的参数可以支持：\n" +
		"\t\t\t字段、*、常量值，一般放1\n" +
		"\t\n" +
		"\t\t   建议使用 count(*)\n" +
		"\n" +
		"\n" +
		"##进阶5：分组查询\n" +
		"\t语法：\n" +
		"\tselect 查询的字段，分组函数\n" +
		"\tfrom 表\n" +
		"\tgroup by 分组的字段\n" +
		"\t\n" +
		"\t\n" +
		"\t特点：\n" +
		"\t1、可以按单个字段分组\n" +
		"\t2、和分组函数一同查询的字段最好是分组后的字段\n" +
		"\t3、分组筛选\n" +
		"\t\t\t针对的表\t位置\t\t\t关键字\n" +
		"\t分组前筛选：\t原始表\t\tgroup by的前面\t\twhere\n" +
		"\t分组后筛选：\t分组后的结果集\tgroup by的后面\t\thaving\n" +
		"\t\n" +
		"\t4、可以按多个字段分组，字段之间用逗号隔开\n" +
		"\t5、可以支持排序\n" +
		"\t6、having后可以支持别名\n" +
		"\n" +
		"##进阶6：多表连接查询\n" +
		"\n" +
		"\t笛卡尔乘积：如果连接条件省略或无效则会出现\n" +
		"\t解决办法：添加上连接条件\n" +
		"\t\n" +
		"一、传统模式下的连接 ：等值连接——非等值连接\n" +
		"\n" +
		"\n" +
		"\t1.等值连接的结果 = 多个表的交集\n" +
		"\t2.n表连接，至少需要n-1个连接条件\n" +
		"\t3.多个表不分主次，没有顺序要求\n" +
		"\t4.一般为表起别名，提高阅读性和性能\n" +
		"\t\n" +
		"二、sql99语法：通过join关键字实现连接\n" +
		"\n" +
		"\t含义：1999年推出的sql语法\n" +
		"\t支持：\n" +
		"\t等值连接、非等值连接 （内连接）\n" +
		"\t外连接\n" +
		"\t交叉连接\n" +
		"\t\n" +
		"\t语法：\n" +
		"\t\n" +
		"\tselect 字段，...\n" +
		"\tfrom 表1\n" +
		"\t【inner|left outer|right outer|cross】join 表2 on  连接条件\n" +
		"\t【inner|left outer|right outer|cross】join 表3 on  连接条件\n" +
		"\t【where 筛选条件】\n" +
		"\t【group by 分组字段】\n" +
		"\t【having 分组后的筛选条件】\n" +
		"\t【order by 排序的字段或表达式】\n" +
		"\t\n" +
		"\t好处：语句上，连接条件和筛选条件实现了分离，简洁明了！\n" +
		"\n" +
		"\t\n" +
		"三、自连接\n" +
		"\n" +
		"案例：查询员工名和直接上级的名称\n" +
		"\n" +
		"sql99\n" +
		"\n" +
		"\tSELECT e.last_name,m.last_name\n" +
		"\tFROM employees e\n" +
		"\tJOIN employees m ON e.`manager_id`=m.`employee_id`;\n" +
		"\n" +
		"sql92\n" +
		"\n" +
		"\t\n" +
		"\tSELECT e.last_name,m.last_name\n" +
		"\tFROM employees e,employees m \n" +
		"\tWHERE e.`manager_id`=m.`employee_id`;\n" +
		"\n" +
		"\n" +
		"##进阶7：子查询\n" +
		"\n" +
		"含义：\n" +
		"\n" +
		"\t一条查询语句中又嵌套了另一条完整的select语句，其中被嵌套的select语句，称为子查询或内查询\n" +
		"\t在外面的查询语句，称为主查询或外查询\n" +
		"\n" +
		"特点：\n" +
		"\n" +
		"\t1、子查询都放在小括号内\n" +
		"\t2、子查询可以放在from后面、select后面、where后面、having后面，但一般放在条件的右侧\n" +
		"\t3、子查询优先于主查询执行，主查询使用了子查询的执行结果\n" +
		"\t4、子查询根据查询结果的行数不同分为以下两类：\n" +
		"\t① 单行子查询\n" +
		"\t\t结果集只有一行\n" +
		"\t\t一般搭配单行操作符使用：> < = <> >= <= \n" +
		"\t\t非法使用子查询的情况：\n" +
		"\t\ta、子查询的结果为一组值\n" +
		"\t\tb、子查询的结果为空\n" +
		"\t\t\n" +
		"\t② 多行子查询\n" +
		"\t\t结果集有多行\n" +
		"\t\t一般搭配多行操作符使用：any、all、in、not in\n" +
		"\t\tin： 属于子查询结果中的任意一个就行\n" +
		"\t\tany和all往往可以用其他查询代替\n" +
		"\t\n" +
		"##进阶8：分页查询\n" +
		"\n" +
		"应用场景：\n" +
		"\n" +
		"\t实际的web项目中需要根据用户的需求提交对应的分页查询的sql语句\n" +
		"\n" +
		"语法：\n" +
		"\n" +
		"\tselect 字段|表达式,...\n" +
		"\tfrom 表\n" +
		"\t【where 条件】\n" +
		"\t【group by 分组字段】\n" +
		"\t【having 条件】\n" +
		"\t【order by 排序的字段】\n" +
		"\tlimit 【起始的条目索引，】条目数;\n" +
		"\n" +
		"特点：\n" +
		"\n" +
		"\t1.起始条目索引从0开始\n" +
		"\t\n" +
		"\t2.limit子句放在查询语句的最后\n" +
		"\t\n" +
		"\t3.公式：select * from  表 limit （page-1）*sizePerPage,sizePerPage\n" +
		"\t假如:\n" +
		"\t每页显示条目数sizePerPage\n" +
		"\t要显示的页数 page\n" +
		"\n" +
		"##进阶9：联合查询\n" +
		"\n" +
		"引入：\n" +
		"\tunion 联合、合并\n" +
		"\n" +
		"语法：\n" +
		"\n" +
		"\tselect 字段|常量|表达式|函数 【from 表】 【where 条件】 union 【all】\n" +
		"\tselect 字段|常量|表达式|函数 【from 表】 【where 条件】 union 【all】\n" +
		"\tselect 字段|常量|表达式|函数 【from 表】 【where 条件】 union  【all】\n" +
		"\t.....\n" +
		"\tselect 字段|常量|表达式|函数 【from 表】 【where 条件】\n" +
		"\n" +
		"特点：\n" +
		"\n" +
		"\t1、多条查询语句的查询的列数必须是一致的\n" +
		"\t2、多条查询语句的查询的列的类型几乎相同\n" +
		"\t3、union代表去重，union all代表不去重\n" +
		"\n" +
		"\n" +
		"##DML语言\n" +
		"\n" +
		"###插入\n" +
		"\n" +
		"语法：\n" +
		"\tinsert into 表名(字段名，...)\n" +
		"\tvalues(值1，...);\n" +
		"\n" +
		"特点：\n" +
		"\n" +
		"\t1、字段类型和值类型一致或兼容，而且一一对应\n" +
		"\t2、可以为空的字段，可以不用插入值，或用null填充\n" +
		"\t3、不可以为空的字段，必须插入值\n" +
		"\t4、字段个数和值的个数必须一致\n" +
		"\t5、字段可以省略，但默认所有字段，并且顺序和表中的存储顺序一致\n" +
		"\n" +
		"###修改\n" +
		"\n" +
		"修改单表语法：\n" +
		"\n" +
		"\tupdate 表名 set 字段=新值,字段=新值\n" +
		"\t【where 条件】\n" +
		"修改多表语法：\n" +
		"\n" +
		"\tupdate 表1 别名1,表2 别名2\n" +
		"\tset 字段=新值，字段=新值\n" +
		"\twhere 连接条件\n" +
		"\tand 筛选条件\n" +
		"\n" +
		"\n" +
		"###删除\n" +
		"\n" +
		"方式1：delete语句 \n" +
		"\n" +
		"单表的删除： ★\n" +
		"\tdelete from 表名 【where 筛选条件】\n" +
		"\n" +
		"多表的删除：\n" +
		"\tdelete 别名1，别名2\n" +
		"\tfrom 表1 别名1，表2 别名2\n" +
		"\twhere 连接条件\n" +
		"\tand 筛选条件;\n" +
		"\n" +
		"\n" +
		"方式2：truncate语句\n" +
		"\n" +
		"\ttruncate table 表名\n" +
		"\n" +
		"\n" +
		"两种方式的区别【面试题】\n" +
		"\t\n" +
		"\t#1.truncate不能加where条件，而delete可以加where条件\n" +
		"\t\n" +
		"\t#2.truncate的效率高一丢丢\n" +
		"\t\n" +
		"\t#3.truncate 删除带自增长的列的表后，如果再插入数据，数据从1开始\n" +
		"\t#delete 删除带自增长列的表后，如果再插入数据，数据从上一次的断点处开始\n" +
		"\t\n" +
		"\t#4.truncate删除不能回滚，delete删除可以回滚\n" +
		"\n" +
		"\n" +
		"##DDL语句\n" +
		"###库和表的管理\n" +
		"库的管理：\n" +
		"\n" +
		"\t一、创建库\n" +
		"\tcreate database 库名\n" +
		"\t二、删除库\n" +
		"\tdrop database 库名\n" +
		"表的管理：\n" +
		"\t#1.创建表\n" +
		"\t\n" +
		"\tCREATE TABLE IF NOT EXISTS stuinfo(\n" +
		"\t\tstuId INT,\n" +
		"\t\tstuName VARCHAR(20),\n" +
		"\t\tgender CHAR,\n" +
		"\t\tbornDate DATETIME\n" +
		"\t\t\n" +
		"\t\n" +
		"\t);\n" +
		"\n" +
		"\tDESC studentinfo;\n" +
		"\t#2.修改表 alter\n" +
		"\t语法：ALTER TABLE 表名 ADD|MODIFY|DROP|CHANGE COLUMN 字段名 【字段类型】;\n" +
		"\t\n" +
		"\t#①修改字段名\n" +
		"\tALTER TABLE studentinfo CHANGE  COLUMN sex gender CHAR;\n" +
		"\t\n" +
		"\t#②修改表名\n" +
		"\tALTER TABLE stuinfo RENAME [TO]  studentinfo;\n" +
		"\t#③修改字段类型和列级约束\n" +
		"\tALTER TABLE studentinfo MODIFY COLUMN borndate DATE ;\n" +
		"\t\n" +
		"\t#④添加字段\n" +
		"\t\n" +
		"\tALTER TABLE studentinfo ADD COLUMN email VARCHAR(20) first;\n" +
		"\t#⑤删除字段\n" +
		"\tALTER TABLE studentinfo DROP COLUMN email;\n" +
		"\t\n" +
		"\t\n" +
		"\t#3.删除表\n" +
		"\t\n" +
		"\tDROP TABLE [IF EXISTS] studentinfo;\n" +
		"\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"###常见类型\n" +
		"\n" +
		"\t整型：\n" +
		"\t\t\n" +
		"\t小数：\n" +
		"\t\t浮点型\n" +
		"\t\t定点型\n" +
		"\t字符型：\n" +
		"\t日期型：\n" +
		"\tBlob类型：\n" +
		"\n" +
		"\n" +
		"\n" +
		"###常见约束\n" +
		"\n" +
		"\tNOT NULL\n" +
		"\tDEFAULT\n" +
		"\tUNIQUE\n" +
		"\tCHECK\n" +
		"\tPRIMARY KEY\n" +
		"\tFOREIGN KEY\n" +
		"\n" +
		"##数据库事务\n" +
		"###含义\n" +
		"\t通过一组逻辑操作单元（一组DML——sql语句），将数据从一种状态切换到另外一种状态\n" +
		"\n" +
		"###特点\n" +
		"\t（ACID）\n" +
		"\t原子性：要么都执行，要么都回滚\n" +
		"\t一致性：保证数据的状态操作前和操作后保持一致\n" +
		"\t隔离性：多个事务同时操作相同数据库的同一个数据时，一个事务的执行不受另外一个事务的干扰\n" +
		"\t持久性：一个事务一旦提交，则数据将持久化到本地，除非其他事务对其进行修改\n" +
		"\n" +
		"相关步骤：\n" +
		"\n" +
		"\t1、开启事务\n" +
		"\t2、编写事务的一组逻辑操作单元（多条sql语句）\n" +
		"\t3、提交事务或回滚事务\n" +
		"\n" +
		"###事务的分类：\n" +
		"\n" +
		"隐式事务，没有明显的开启和结束事务的标志\n" +
		"\n" +
		"\t比如\n" +
		"\tinsert、update、delete语句本身就是一个事务\n" +
		"\n" +
		"\n" +
		"显式事务，具有明显的开启和结束事务的标志\n" +
		"\n" +
		"\t\t1、开启事务\n" +
		"\t\t取消自动提交事务的功能\n" +
		"\t\t\n" +
		"\t\t2、编写事务的一组逻辑操作单元（多条sql语句）\n" +
		"\t\tinsert\n" +
		"\t\tupdate\n" +
		"\t\tdelete\n" +
		"\t\t\n" +
		"\t\t3、提交事务或回滚事务\n" +
		"###使用到的关键字\n" +
		"\n" +
		"\tset autocommit=0;\n" +
		"\tstart transaction;\n" +
		"\tcommit;\n" +
		"\trollback;\n" +
		"\t\n" +
		"\tsavepoint  断点\n" +
		"\tcommit to 断点\n" +
		"\trollback to 断点\n" +
		"\n" +
		"\n" +
		"###事务的隔离级别:\n" +
		"\n" +
		"事务并发问题如何发生？\n" +
		"\n" +
		"\t当多个事务同时操作同一个数据库的相同数据时\n" +
		"事务的并发问题有哪些？\n" +
		"\n" +
		"\t脏读：一个事务读取到了另外一个事务未提交的数据\n" +
		"\t不可重复读：同一个事务中，多次读取到的数据不一致\n" +
		"\t幻读：一个事务读取数据时，另外一个事务进行更新，导致第一个事务读取到了没有更新的数据\n" +
		"\t\n" +
		"如何避免事务的并发问题？\n" +
		"\n" +
		"\t通过设置事务的隔离级别\n" +
		"\t1、READ UNCOMMITTED\n" +
		"\t2、READ COMMITTED 可以避免脏读\n" +
		"\t3、REPEATABLE READ 可以避免脏读、不可重复读和一部分幻读\n" +
		"\t4、SERIALIZABLE可以避免脏读、不可重复读和幻读\n" +
		"\t\n" +
		"设置隔离级别：\n" +
		"\n" +
		"\tset session|global  transaction isolation level 隔离级别名;\n" +
		"查看隔离级别：\n" +
		"\n" +
		"\tselect @@tx_isolation;\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"##视图\n" +
		"含义：理解成一张虚拟的表\n" +
		"\n" +
		"视图和表的区别：\n" +
		"\t\n" +
		"\t\t使用方式\t占用物理空间\n" +
		"\t\n" +
		"\t视图\t完全相同\t不占用，仅仅保存的是sql逻辑\n" +
		"\t\n" +
		"\t表\t完全相同\t占用\n" +
		"\n" +
		"视图的好处：\n" +
		"\n" +
		"\n" +
		"\t1、sql语句提高重用性，效率高\n" +
		"\t2、和表实现了分离，提高了安全性\n" +
		"\n" +
		"###视图的创建\n" +
		"\t语法：\n" +
		"\tCREATE VIEW  视图名\n" +
		"\tAS\n" +
		"\t查询语句;\n" +
		"###视图的增删改查\n" +
		"\t1、查看视图的数据 ★\n" +
		"\t\n" +
		"\tSELECT * FROM my_v4;\n" +
		"\tSELECT * FROM my_v1 WHERE last_name='Partners';\n" +
		"\t\n" +
		"\t2、插入视图的数据\n" +
		"\tINSERT INTO my_v4(last_name,department_id) VALUES('虚竹',90);\n" +
		"\t\n" +
		"\t3、修改视图的数据\n" +
		"\t\n" +
		"\tUPDATE my_v4 SET last_name ='梦姑' WHERE last_name='虚竹';\n" +
		"\t\n" +
		"\t\n" +
		"\t4、删除视图的数据\n" +
		"\tDELETE FROM my_v4;\n" +
		"###某些视图不能更新\n" +
		"\t包含以下关键字的sql语句：分组函数、distinct、group  by、having、union或者union all\n" +
		"\t常量视图\n" +
		"\tSelect中包含子查询\n" +
		"\tjoin\n" +
		"\tfrom一个不能更新的视图\n" +
		"\twhere子句的子查询引用了from子句中的表\n" +
		"###视图逻辑的更新\n" +
		"\t#方式一：\n" +
		"\tCREATE OR REPLACE VIEW test_v7\n" +
		"\tAS\n" +
		"\tSELECT last_name FROM employees\n" +
		"\tWHERE employee_id>100;\n" +
		"\t\n" +
		"\t#方式二:\n" +
		"\tALTER VIEW test_v7\n" +
		"\tAS\n" +
		"\tSELECT employee_id FROM employees;\n" +
		"\t\n" +
		"\tSELECT * FROM test_v7;\n" +
		"###视图的删除\n" +
		"\tDROP VIEW test_v1,test_v2,test_v3;\n" +
		"###视图结构的查看\t\n" +
		"\tDESC test_v7;\n" +
		"\tSHOW CREATE VIEW test_v7;\n" +
		"\n" +
		"##存储过程\n" +
		"\n" +
		"含义：一组经过预先编译的sql语句的集合\n" +
		"好处：\n" +
		"\n" +
		"\t1、提高了sql语句的重用性，减少了开发程序员的压力\n" +
		"\t2、提高了效率\n" +
		"\t3、减少了传输次数\n" +
		"\n" +
		"分类：\n" +
		"\n" +
		"\t1、无返回无参\n" +
		"\t2、仅仅带in类型，无返回有参\n" +
		"\t3、仅仅带out类型，有返回无参\n" +
		"\t4、既带in又带out，有返回有参\n" +
		"\t5、带inout，有返回有参\n" +
		"\t注意：in、out、inout都可以在一个存储过程中带多个\n" +
		"###创建存储过程\n" +
		"语法：\n" +
		"\n" +
		"\tcreate procedure 存储过程名(in|out|inout 参数名  参数类型,...)\n" +
		"\tbegin\n" +
		"\t\t存储过程体\n" +
		"\n" +
		"\tend\n" +
		"\n" +
		"类似于方法：\n" +
		"\n" +
		"\t修饰符 返回类型 方法名(参数类型 参数名,...){\n" +
		"\n" +
		"\t\t方法体;\n" +
		"\t}\n" +
		"\n" +
		"注意\n" +
		"\n" +
		"\t1、需要设置新的结束标记\n" +
		"\tdelimiter 新的结束标记\n" +
		"\t示例：\n" +
		"\tdelimiter $\n" +
		"\n" +
		"\tCREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名  参数类型,...)\n" +
		"\tBEGIN\n" +
		"\t\tsql语句1;\n" +
		"\t\tsql语句2;\n" +
		"\n" +
		"\tEND $\n" +
		"\n" +
		"\t2、存储过程体中可以有多条sql语句，如果仅仅一条sql语句，则可以省略begin end\n" +
		"\n" +
		"\t3、参数前面的符号的意思\n" +
		"\tin:该参数只能作为输入 （该参数不能做返回值）\n" +
		"\tout：该参数只能作为输出（该参数只能做返回值）\n" +
		"\tinout：既能做输入又能做输出\n" +
		"\n" +
		"\n" +
		"#调用存储过程\n" +
		"\tcall 存储过程名(实参列表)\n" +
		"##函数\n" +
		"\n" +
		"\n" +
		"###创建函数\n" +
		"\n" +
		"学过的函数：LENGTH、SUBSTR、CONCAT等\n" +
		"语法：\n" +
		"\n" +
		"\tCREATE FUNCTION 函数名(参数名 参数类型,...) RETURNS 返回类型\n" +
		"\tBEGIN\n" +
		"\t\t函数体\n" +
		"\t\n" +
		"\tEND\n" +
		"\n" +
		"###调用函数\n" +
		"\tSELECT 函数名（实参列表）\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"###函数和存储过程的区别\n" +
		"\n" +
		"\t\t\t关键字\t\t调用语法\t返回值\t\t\t应用场景\n" +
		"\t函数\t\tFUNCTION\tSELECT 函数()\t只能是一个\t\t一般用于查询结果为一个值并返回时，当有返回值而且仅仅一个\n" +
		"\t存储过程\tPROCEDURE\tCALL 存储过程()\t可以有0个或多个\t\t一般用于更新\n" +
		"\n" +
		"\n" +
		"##流程控制结构\n" +
		"\n" +
		"###系统变量\n" +
		"一、全局变量\n" +
		"\n" +
		"作用域：针对于所有会话（连接）有效，但不能跨重启\n" +
		"\n" +
		"\t查看所有全局变量\n" +
		"\tSHOW GLOBAL VARIABLES;\n" +
		"\t查看满足条件的部分系统变量\n" +
		"\tSHOW GLOBAL VARIABLES LIKE '%char%';\n" +
		"\t查看指定的系统变量的值\n" +
		"\tSELECT @@global.autocommit;\n" +
		"\t为某个系统变量赋值\n" +
		"\tSET @@global.autocommit=0;\n" +
		"\tSET GLOBAL autocommit=0;\n" +
		"\n" +
		"二、会话变量\n" +
		"\n" +
		"作用域：针对于当前会话（连接）有效\n" +
		"\n" +
		"\t查看所有会话变量\n" +
		"\tSHOW SESSION VARIABLES;\n" +
		"\t查看满足条件的部分会话变量\n" +
		"\tSHOW SESSION VARIABLES LIKE '%char%';\n" +
		"\t查看指定的会话变量的值\n" +
		"\tSELECT @@autocommit;\n" +
		"\tSELECT @@session.tx_isolation;\n" +
		"\t为某个会话变量赋值\n" +
		"\tSET @@session.tx_isolation='read-uncommitted';\n" +
		"\tSET SESSION tx_isolation='read-committed';\n" +
		"\n" +
		"###自定义变量\n" +
		"一、用户变量\n" +
		"\n" +
		"声明并初始化：\n" +
		"\n" +
		"\tSET @变量名=值;\n" +
		"\tSET @变量名:=值;\n" +
		"\tSELECT @变量名:=值;\n" +
		"赋值：\n" +
		"\n" +
		"\t方式一：一般用于赋简单的值\n" +
		"\tSET 变量名=值;\n" +
		"\tSET 变量名:=值;\n" +
		"\tSELECT 变量名:=值;\n" +
		"\n" +
		"\n" +
		"\t方式二：一般用于赋表 中的字段值\n" +
		"\tSELECT 字段名或表达式 INTO 变量\n" +
		"\tFROM 表;\n" +
		"\n" +
		"使用：\n" +
		"\n" +
		"\tselect @变量名;\n" +
		"\n" +
		"二、局部变量\n" +
		"\n" +
		"声明：\n" +
		"\n" +
		"\tdeclare 变量名 类型 【default 值】;\n" +
		"赋值：\n" +
		"\n" +
		"\t方式一：一般用于赋简单的值\n" +
		"\tSET 变量名=值;\n" +
		"\tSET 变量名:=值;\n" +
		"\tSELECT 变量名:=值;\n" +
		"\n" +
		"\n" +
		"\t方式二：一般用于赋表 中的字段值\n" +
		"\tSELECT 字段名或表达式 INTO 变量\n" +
		"\tFROM 表;\n" +
		"\n" +
		"使用：\n" +
		"\n" +
		"\tselect 变量名\n" +
		"\n" +
		"\n" +
		"\n" +
		"二者的区别：\n" +
		"\n" +
		"\t\t\t作用域\t\t\t定义位置\t\t语法\n" +
		"用户变量\t当前会话\t\t会话的任何地方\t\t加@符号，不用指定类型\n" +
		"局部变量\t定义它的BEGIN END中 \tBEGIN END的第一句话\t一般不用加@,需要指定类型\n" +
		"\n" +
		"###分支\n" +
		"一、if函数\n" +
		"\t语法：if(条件，值1，值2)\n" +
		"\t特点：可以用在任何位置\n" +
		"\n" +
		"二、case语句\n" +
		"\n" +
		"语法：\n" +
		"\n" +
		"\t情况一：类似于switch\n" +
		"\tcase 表达式\n" +
		"\twhen 值1 then 结果1或语句1(如果是语句，需要加分号) \n" +
		"\twhen 值2 then 结果2或语句2(如果是语句，需要加分号)\n" +
		"\t...\n" +
		"\telse 结果n或语句n(如果是语句，需要加分号)\n" +
		"\tend 【case】（如果是放在begin end中需要加上case，如果放在select后面不需要）\n" +
		"\n" +
		"\t情况二：类似于多重if\n" +
		"\tcase \n" +
		"\twhen 条件1 then 结果1或语句1(如果是语句，需要加分号) \n" +
		"\twhen 条件2 then 结果2或语句2(如果是语句，需要加分号)\n" +
		"\t...\n" +
		"\telse 结果n或语句n(如果是语句，需要加分号)\n" +
		"\tend 【case】（如果是放在begin end中需要加上case，如果放在select后面不需要）\n" +
		"\n" +
		"\n" +
		"特点：\n" +
		"\t可以用在任何位置\n" +
		"\n" +
		"三、if elseif语句\n" +
		"\n" +
		"语法：\n" +
		"\n" +
		"\tif 情况1 then 语句1;\n" +
		"\telseif 情况2 then 语句2;\n" +
		"\t...\n" +
		"\telse 语句n;\n" +
		"\tend if;\n" +
		"\n" +
		"特点：\n" +
		"\t只能用在begin end中！！！！！！！！！！！！！！！\n" +
		"\n" +
		"\n" +
		"三者比较：\n" +
		"\t\t\t应用场合\n" +
		"\tif函数\t\t简单双分支\n" +
		"\tcase结构\t等值判断 的多分支\n" +
		"\tif结构\t\t区间判断 的多分支\n" +
		"\n" +
		"\n" +
		"###循环\n" +
		"\n" +
		"语法：\n" +
		"\n" +
		"\n" +
		"\t【标签：】WHILE 循环条件  DO\n" +
		"\t\t循环体\n" +
		"\tEND WHILE 【标签】;\n" +
		"\t\n" +
		"特点：\n" +
		"\n" +
		"\t只能放在BEGIN END里面\n" +
		"\n" +
		"\t如果要搭配leave跳转语句，需要使用标签，否则可以不用标签\n" +
		"\n" +
		"\tleave类似于java中的break语句，跳出所在循环！！！\n" +
		"\t\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n" +
		"\n";
	
}