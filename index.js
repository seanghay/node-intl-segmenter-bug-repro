const values = [...new Intl.Segmenter("km", { granularity: "word" }).segment('ម៉ាស្ទ័រ សុគី ស៊ុប')]
console.log(values)
console.log('length=' + values.length)