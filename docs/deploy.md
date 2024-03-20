# 最基础的建站方式

## 进入服务器

```sh
ssh username@hostname
```

例子:

```sh
ssh root@192.168.1.10
```

## 克隆项目

进入服务器，选择一个目录，克隆项目

```sh
git clone <project>
```

进入项目，构建项目

```json
  // ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
```

使用命令

```sh
npm run docs:build
```

## 配置 nginx

使用命令下载 Nginx:

```sh
sudo yum install -y nginx
```

查看安装版本：

```sh
#查看nginx安装版本，-V可以看到nginx的安装的文件路径
nginx -V

# 查看安装的nginx的版本
rpm -qa | grep nginx
```

Nginx 启动、设置开机自启、查看运行状态、停止命令:

```sh
systemctl start nginx
systemctl enable nginx
systemctl status nginx
systemctl stop nginx
```

配置文件:

```sh
#编辑Nginx配置文件
vim /etc/nginx/nginx.conf

#检测配置文件语法是否正确
nginx -t

#重新加载Nginx配置
nginx -s reload
```

<!-- TODO... -->
