# 创建项目

## 1.创建文件

创建文件，或者在终端中输入命令行：

```sh
$ mkdir <project-name>
```

## 2.初始化项目

::: code-group

```sh [npm]
$ npm init
$ npm install -D vitepress
```

```sh [pnpm]
$ pnpm init
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn init
$ yarn add -D vitepress
```

:::
然后使用 vitepress 的初始化命令生成项目：

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]
$ pnpm exec vitepress init
```

:::
