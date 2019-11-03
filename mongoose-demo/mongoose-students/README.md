# Express-crud

## 起步

- 初始化
- 模板处理

## 路由设计 
|  请求方法      | 请求路径          | get 参数 |                       post参数 |                             备注
 get            /students                                                                                  渲染首页
 get            /students/new                                                                              渲染添加学生页面
 post            /students/new                                  name,age,gender,hobbies                    处理添加学生请求
 get             /students/edit         id                                                                 渲染编辑页面
 post             /students/edit                                 id，name,age,gender,hobiies                处理编辑请求
 get               /students/delete     id                                                              