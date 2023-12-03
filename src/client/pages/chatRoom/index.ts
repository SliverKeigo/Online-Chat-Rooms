import "./index.css";
import {io} from 'socket.io-client'
import {UserData} from '@/service/UserService'

// 定义 prevDate 变量
let prevDate: number;
const url = new URL(location.href)
const userName = url.searchParams.get('user_name') as string
const roomName = url.searchParams.get('room_name') as string
if (!userName || !roomName) {
  location.href = "/main/main.html"
}

type  UserMsg = {
  userData: UserData,
  msg: string,
  time: Date
}

// 1. 建立连接 => node server
const clientIo = io();
console.log(userName, roomName)
clientIo.emit('join', {userName, roomName})

const textInput = document.getElementById('textInput') as HTMLInputElement
const textSubmit = document.getElementById('textSubmit') as HTMLButtonElement
const chatBoard = document.getElementById('chatBoard') as HTMLDivElement
const hearRoomName = document.getElementById('headRoomName') as HTMLParagraphElement
hearRoomName.innerText = roomName || '-'
let userID = ''

const backBtn = document.getElementById('backBtn') as HTMLButtonElement
// 创建一个监听器
textSubmit
  .addEventListener('click', () => {
    // 取得输入框的内容
    const text: string | null = textInput.value
    if (!(text == '')) {
      // chat event
      clientIo.emit('chat', text)
    }
  })

// 创建一个监听器 监听返回按钮
backBtn
  .addEventListener('click', () => {
    // 点击按钮之后回到主页面
    location.href = "/main/main.html"
  })
clientIo.on("chat", (data: UserMsg) => {
  MessageHandler(data)
})

clientIo.on("join", (msg) => {
  clientIo.emit("join", msg)
  joinRoomHandler(msg)
})

clientIo.on("leave", (msg) => {
  joinRoomHandler(msg)
})

clientIo.on("userId", (id) => {
  userID = id
})

function MessageHandler(data: UserMsg) {
  // 获取当前时间 定义成全局变量
  const date = new Date(data.time)
  const time = `${date.getHours()}:${date.getMinutes()}`
  const divBox = document.createElement('div')
  divBox.classList.add('flex', 'mb-4', 'items-end')
  console.log(data)
  if (data.userData.id === userID) {
    divBox.classList.add('justify-end')
    divBox.innerHTML = `
      <div class="flex justify-end mb-4 items-end">
      <p class="text-xs text-gray-700 mr-4">  ${time}</p>
      <div>
        <p class="text-xs text-white mb-1 text-right">${data.userData.userName}</p>  
        <p class="mx-w-[50%] break-all bg-white px-4 py-2 rounded-bl-full rounded-br-full rounded-tl-full">${data.msg}</p>
      </div>
      <div>
  `
  } else {
    divBox.classList.add('justify-start')
    // 不是自己发的消息放在左边
    divBox.innerHTML = `
 <div class="flex justify-end mb-4 items-start">
    <p class="text-xs text-gray-700">  ${time}</p>
    <div>
      <p class="text-xs text-gray-700 mb-1 text-left">${data.userData.userName}</p>
      <p class="mx-w-[50%] break-all bg-gray-800 px-4 py-2 rounded-tr-full rounded-br-full rounded-tl-full text-white">
        ${data.msg}
      </p>
    </div>
      </div>
`
  }

  chatBoard.append(divBox)

  // 输入消息清空输入框
  textInput.value = ''
  // 发送信息之后屏幕自动往下推
  chatBoard.scrollTop = chatBoard.scrollHeight
}

function joinRoomHandler(msg: string) {

  const divBox = document.createElement('div')
  divBox.classList.add('flex', 'justify-center', 'mb-4', 'items-end')
  divBox.innerHTML = `
  <div class="flex flex-col items-center">
    <p class="text-gray-700 text-center text-sm">
      ${msg}
    </p>
  </div>
`
  chatBoard.append(divBox)
  chatBoard.scrollTop = chatBoard.scrollHeight
}
