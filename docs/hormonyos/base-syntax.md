# ArkTS 基本

## 组成结构

```ts
@Entry // 装饰器
@Component // 装饰器
struct Index { // 自定义组件声明 struct <componentName>
  @State message: string = 'World!' // State 装饰器，声明变量

  build() { // UI描述，用build
    Row() { // 行布局
      Column() { // 列布局
        Text(`Hello, ${this.message}`) // 系统组件-文本
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
        Button('Click me') // 系统组件-按钮
          .onClick(() => { // 事件方法
            this.message = '鸿蒙'
          })
          .height(50) // 属性方法，样式描述
          .width(100)
      }
    }
    .height('100%')
  }
}
```

- 装饰器：用于装饰类、结构、方法以及变量，并赋予其特殊的含义。如上述示例中@Entry、@Component 和@State 都是装饰器，@Component 表示自定义组件，@Entry 表示该自定义组件为入口组件，@State 表示组件中的状态变量，状态变量变化会触发 UI 刷新。
- UI 描述：以声明式的方式来描述 UI 的结构，例如 build()方法中的代码块。
- 自定义组件：可复用的 UI 单元，可组合其他组件，如上述被@Component 装饰的 struct Hello。
- 系统组件：ArkUI 框架中默认内置的基础和容器组件，可直接被开发者调用，比如示例中的 Column、Text、Divider、Button。
- 属性方法：组件可以通过链式调用配置多项属性，如 fontSize()、width()、height()、backgroundColor()等。
- 事件方法：组件可以通过链式调用设置多个事件的响应逻辑，如跟随在 Button 后面的 onClick()。
