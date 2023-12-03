import "./index.css";

const nameInput = document.getElementById("nameInput") as HTMLInputElement
const nameSelect = document.getElementById("nameSelect") as HTMLSelectElement
const startChat = document.getElementById("startChat") as HTMLButtonElement

startChat.onclick = () => {
  const userName = nameInput.value
  const roomName = nameSelect.value
  if (!roomName || !userName) {
    return
  }

  location.href = `/chatRoom/chatRoom.html?user_name=${userName}&room_name=${roomName}`
}

