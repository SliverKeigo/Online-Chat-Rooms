import devServer from "./server/dev";
import prodServer from "./server/prod";
import express from "express";
import {Server} from 'socket.io'
import http from 'http'
import {name} from "@/utils";
import UserService, {UserData} from '@/service/UserService'
import moment from 'moment'


const port = 3000;
const app = express();
const server = http.createServer(app)
const io = new Server(server)
const userService = new UserService()

let n = 1
// 监测连接
io.on('connection', (socket) => {
    socket.emit('userId', socket.id)
    socket.on('join', ({userName, roomName}: { userName: string, roomName: string }) => {
        console.log("------------------------")
        console.log('第', n, '次连接')
        n++
        console.log(userName, roomName)
        console.log(socket.id)
        const user: UserData | null = userService.getUser(socket.id)
        if (user) {
            return
        }
        const userData = userService.userDataInfoHandler(
            socket.id,
            userName,
            roomName
        )
        socket.join(userData.roomName)
        userService.addUser(userData)
        socket.broadcast
            .to(userData.roomName)
            .emit('join', `${userData.userName} 加入了${userData.roomName}聊天室`)
    })
    // 离开聊天室
    socket.on('disconnect', () => {
        const userData = userService.getUser(socket.id)
        const userName = userData?.userName
        if (userName) {
            socket.broadcast
                .to(userData.roomName)
                .emit('leave', `${userName} 离开${userData?.roomName}聊天室`)
        }
        userService.removeUser(socket.id)
    })
    socket.on('chat', (msg) => {
        const time = moment.utc()
        const userData = userService.getUser(socket.id)
        if (userData) {
            io.to(userData.roomName)
                .emit('chat', {userData, msg, time})
        }
        // io.emit('chat',msg)
    })
})
// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
    devServer(app);
} else {
    prodServer(app);
}

console.log("server side", name);

server.listen(port, () => {

    console.log(`The application is running on port ${port}.`);
});
