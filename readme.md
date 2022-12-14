Linked issue: https://github.com/nodejs/node/issues/44988

Inconsistent behavior of Node.js `Intl.Segmenter`.

```js
const values = [...new Intl.Segmenter("km", { granularity: "word" }).segment('ម៉ាស្ទ័រ សុគី ស៊ុប')]
console.log(values)
console.log('length=' + values.length)
```

## Platform

```
Darwin Seanghay-Macbook.local 21.6.0 Darwin Kernel Version 21.6.0: Mon Aug 22 20:17:10 PDT 2022; root:xnu-8020.140.49~2/RELEASE_X86_64 x86_64
```


## Node v16.18.0

`node index.js`

```js
[
  {
    segment: 'ម៉ាស្',
    index: 0,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: 'ទ័រ',
    index: 5,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 8,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'សុ',
    index: 9,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: 'គី',
    index: 11,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 13,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'ស៊ុប',
    index: 14,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  }
]
// length=7
```

---

## Node v18.10.0

`node index.js`


```js
[
  {
    segment: 'ម៉ាស្',
    index: 0,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: 'ទ័រ',
    index: 5,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 8,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'សុ',
    index: 9,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: 'គី',
    index: 11,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 13,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'ស៊ុប',
    index: 14,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  }
]
// length=7
```


## Deno

`deno run index.js`

> versions
>```
>deno 1.26.1 (release, x86_64-apple-darwin)
>v8 10.7.193.3
>typescript 4.8.3
>```

```js
[
  { segment: "ម៉ាស្ទ័រ", index: 0, input: "ម៉ាស្ទ័រ សុគី ស៊ុប", isWordLike: true },
  { segment: " ", index: 8, input: "ម៉ាស្ទ័រ សុគី ស៊ុប", isWordLike: false },
  { segment: "សុគី", index: 9, input: "ម៉ាស្ទ័រ សុគី ស៊ុប", isWordLike: true },
  { segment: " ", index: 13, input: "ម៉ាស្ទ័រ សុគី ស៊ុប", isWordLike: false },
  { segment: "ស៊ុប", index: 14, input: "ម៉ាស្ទ័រ សុគី ស៊ុប", isWordLike: true }
]
// length=5
```


## StackBlitz Node v16.14.2

[https://stackblitz.com/edit/node-jcksgw?file=index.js](https://stackblitz.com/edit/node-jcksgw?file=index.js)

```js
[
  {
    segment: 'ម៉ាស្ទ័រ',
    index: 0,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 8,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'សុគី',
    index: 9,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  },
  {
    segment: ' ',
    index: 13,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: false
  },
  {
    segment: 'ស៊ុប',
    index: 14,
    input: 'ម៉ាស្ទ័រ សុគី ស៊ុប',
    isWordLike: true
  }
]
// length=5
```
