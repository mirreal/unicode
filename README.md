## 从 iconfont 引入

* iconfont 的原理
* HTML、css、js 三种使用方式

## 三种表示法

* html
* css
* js

### css

#### 语法

```
\{{16进制的unicode编码}}
```

#### example

```css
.word-ma:before {
    content: "\7801";
}
```

```html
<div class="word-ma"></div>
```

[demo](http://jsbin.com/julumuj/3/edit?html,css,output)

### html

#### 语法

```
&#{{10进制的 unicode 编码}};

&#x{{16进制的 unicode 编码}};
```

#### example

```js
function convertDecToHex(num) {
    return num.toString(16)
}

function convertHexToDec(num) {
    // 只适用于整数
    return parseInt(num, 16)
}
```

* 汉字："码" 30721
    * hex 7801

```html
<div>
    <p>汉字： &#30721;<p>
    <p>汉字： &#x7801;<p>
</div>
```

[demo](http://jsbin.com/xezenet/edit?html,output)

#### HTML 转义

https://www.w3.org/International/questions/qa-escapes

| 字符                        | 16进制   | 十进制    | 转义字符   |
| ------------------------- | ------ | ------ | ------ |
| "                         | &#x22; | &#34;  | &quot; |
| &                         | &#x26; | &#38;  | &amp;  |
| <                         |        | &#60;  | &lt;   |
| >                         |        | &#62;  | &gt;   |
| 不断开空格(non-breaking space) |        | &#160; | &nbsp; |

http://tool.oschina.net/commons?type=2

### js

#### 判断汉字

```js
function isChinese(text) {
    var reg = /^[\u4e00-\u9fff]+$/;
    return reg.test(text);
}
```

#### 语法

```
\u{{16进制的unicode编码}}
```

#### example

```js
console.log('\u7801')

console.log('\uD83D\uDE80') // 🚀
console.log('\u{1f680}') // 🚀

console.log('\u{1f347}') // 🍇
```

[demo](http://jsbin.com/lucoquf/edit?js,console)

#### ECMAScript String

* `\uXXXX` unicode 码 (`\u0000`~`\uFFFF`) 65536
* `\xXX`  [Latin-1 字符](https://zh.wikipedia.org/wiki/ISO/IEC_8859-1) (0x00-0xFF) 向下兼容 ASCII(0x00-0x7F)
* `\u{X}` ... `\u{XXXXXX}` ES6 unicode 码

example:

```js
console.log('\xa9') // ©️
console.log('\u00a9') // ©️
console.log('\u{a9}') // ©️
```

## Unicode 字符集

http://www.unicode.org/versions/Unicode10.0.0/

* 10.0.0
* 2017 June 20
* adds 8,518 characters
* total of 136,690 characters

```js
const convertUnicode = input =>
  input.replace(/\\u(\w\w\w\w)/g, (a, b) =>
    String.fromCharCode(parseInt(b, 16))
  );
```

### JavaScript

* String.prototype.codePointAt()
* String.prototype.charCodeAt()
* fromCharCode

### 颜文字

### emoj

http://www.unicode.org/charts/PDF/U1F300.pdf


## Q & A

#### q: iconfont 的范围 exxx

E000-F8FF 私用区 Private Use Area

#### q: JavaScript 到底使用什么编码方式？

JavaScript 引擎可以在内部自由使用 UCS-2 或 UTF-16。大多数引擎使用的 UTF-16，但无论引擎选择什么，只是实现细节，不会影响语言的特性。

> JavaScript engines are free to use UCS-2 or UTF-16 internally. Most engines that I know of use UTF-16, but whatever choice they made, it’s just an implementation detail that won’t affect the language’s characteristics.

https://mathiasbynens.be/notes/javascript-encoding

## 参考


* http://www.unicode.org/versions/Unicode10.0.0/
* https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84
* http://www.ruanyifeng.com/blog/2014/12/unicode.html
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String
* http://es6.ruanyifeng.com/#docs/string
* https://www.jianshu.com/p/8c2e96b8b05c
* https://lq1228.github.io/front/article/2017/02/17/es6-4.html
* https://segmentfault.com/a/1190000004271352
* https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227724&idx=1&sn=0de640c1a8cae680b1dc599b56029ecb
