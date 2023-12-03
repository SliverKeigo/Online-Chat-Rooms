export type UserData = {
  id: string
  userName: string
  roomName: string
}

export default class UserService {
  // 记录使用者的信息
  private userMap: Map<string, UserData>

  constructor() {
    this.userMap = new Map()
  }

  addUser(data: UserData) {
    this.userMap.set(data.id, data)
  }

  removeUser(id: string) {
    if (this.userMap.has(id)) {
      this.userMap.delete(id)
    }
  }

  getUser(id: string): UserData | null {
    const data = this.userMap.get(id)
    if (data) {
      return data
    }
    return null
  }

  userDataInfoHandler(id: string, userName: string, roomName: string): UserData {
    return {
      id,
      userName,
      roomName
    }
  }

}