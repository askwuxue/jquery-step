# pageintro.js

一个简单的页面引导 jQuery 插件，可以为你的网站和项目提供新功能介绍和逐步的用户引导功能。

![Demo screenshot](http://git.oschina.net/uploads/images/2017/0329/175626_f36068f0_568.gif "Demo screenshot")

## 编译方法

先安装依赖包：

	npm install

构建：

	npm run build

最后，你可以在 `lib` 目录下找到输出的文件

## 示例

``` javascript
var options = {
  container: 'body',
  spacing: 20,
  actions: {
    next: {
      text: 'Next',
      class: 'your custom button class'
    },
    finish: {
      text: 'Finish',
      class: 'your custom button class'
    }
  },
  entries: [
    {
      selector: '#example',
      text: 'this is example',
      onEnter: function () {
        console.log('enter');
      },
      onExit: function () {
        console.log('exit');
      }
    }, {
      selector: '#step1',
      text: 'text for step 1'
    }, {
      selector: '#step2',
      text: 'text for step 2'
    }
  ]
}
PageIntro.init(options);
PageIntro.start();
```

## 用法

### PageIntro.init()

初始化页面向导插件，你需要在这里指定相关配置参数。

### PageIntro.start()

开始显示当前页面引导

### PageIntro.finish()

结束并隐藏当前页面引导

