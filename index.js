module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-template-curly-in-string': 'error',// 不允许常规字符串包含看起来像模板字面占位符的内容
    'no-unexpected-multiline': 'warn',// 不允许混淆多行表达式
  },
}