import express from 'express'
import path from 'path';
import http from 'http'
import io from 'socket.io'

const app = express()
const server = http.createServer(app)
const serverIo = io(server)
const port = process.env.PORT || 3000

var numUsers = 0;

var chat = serverIo.of('/chat').on('connection', function (socket) {
    console.log('server side: a user connected with id %s', socket.id);
    var addedUser = false;
    socket.on('new message', function (data) {
        // we tell the client to execute 'new message'
        console.log('user is ', socket.username);
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });
    socket.on('add user', function (username) {
        if (addedUser) return;
        socket.username = username;
        console.log('username :', username);
        ++numUsers;
        socket.emit('login', {
            numUsers: numUsers
        });
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });
})


server.listen(port, function () {
    console.log('Server listening at port %d', port)

});


app.use('/', express.static('public'));

// 通常用于加载静态资源
// app.use(express.static(__dirname + '/public'))

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});





