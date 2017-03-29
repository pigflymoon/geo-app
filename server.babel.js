import express from 'express'
import path from 'path';

const app = express()

app.use('/', express.static('public'))

// 通常用于加载静态资源
// app.use(express.static(__dirname + '/public'))

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.listen(process.env.PORT || 3000);


