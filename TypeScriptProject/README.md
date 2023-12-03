# bruce_nodejs_project_template

## 如何使用？

1. 進入專案目錄，先安裝node_module依賴

```
npm i
```

2. 本地啟動專案

```
npm run dev
```

## 上線前編譯專案

```
npm run build
```

## 上線後，在機器上執行prod.ts

```
npm run start
```

## 本地開發總流程：
1. 執行server端`src/index.ts`
2. webpack起動編譯（做出main跟chatRoom頁面）
3. 使用者在瀏覽器發起對應`dev.ts`裡的url請求
4. sever回傳對應的頁面（由webpack編譯好的client頁面）


## 專案主要分成：

- （client端）HTML5頁面
1. `npm run build` -> 建立client資源
2. 過程：
    2-1. Webpack編譯TS+CSS+main.html -> Main頁面
    2-2. Webpack編譯TS+CSS+chatRoom.html -> chatroom頁面

- （Server端）Node Server
3. 啟動express server
4. 判斷當前process.env.NODE_ENV環境：
    4-1 本地開發走`dev.ts`，
    4-2 線上環境走`prod.ts`

5. user從瀏覽器(client端)對Node Server請求頁面：
```
localhost:3000/main
localhost:3000/chatroom

dev.ts -> 重定向到main/main.html跟chatRoom/chatRoom.html
prod.ts -> 直接返回main/main.html跟chatRoom/chatRoom.html

```