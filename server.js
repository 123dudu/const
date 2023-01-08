const express = require('express')
const app = express()

const trashClassifyData = [
  {name: '废纸', type: '回收垃圾，能卖钱的垃圾'},
  {name: '药瓶', type: '有害垃圾'},
  {name: '水果皮', type: '厨余垃圾'},
  {name: '饮料罐', type: '可回收垃圾'}
]

app.get('/trash-classify-data', (req, res) => {
  //响应头，设置允许跨域
  res.setHeader('Access-Control-Allow-Origin','*')
  //响应头
  res.setHeader('Access-Control-Allow-Headers','*')
  res.json(trashClassifyData)
})

app.listen(3000, () => {
  console.log('垃圾分类小程序 - 后台管理系统正在运行中...')
})