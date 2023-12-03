# bruce_nodejs_project_template

## How do I use it?

1. Go to the project directory and install the node_module dependency first.

``
npm install
npm install

2. Start the project locally

```
npm run dev
```

## Compile the project before going online

```
npm run build
```

## Once online, run prod.ts on your machine.

```
npm run start
```

## Total local development process:

1. run `src/index.ts` on the server side. 2.
2. webpack starts compiling (making the main and chatRoom pages). 3.
3. user initiates a request for the url in `dev.ts` in the browser.
4. sever sends back the corresponding page (the client page compiled by webpack).

## The project is mainly divided into:

- (client side) HTML5 pages.

1. `npm run build` -> build client resource
2. process:
   2-1. Webpack compile TS+CSS+main.html -> Main page
   2-2. Webpack compile TS+CSS+chatRoom.html -> chatroom page

- Node Server

3. Start express server
4. Determine the current process.env.NODE_ENV environment:
   NODE_ENV environment: 4-1 For local development, go to `dev.ts`, 4-2 For online environment, go to `process.env.
   4-2 The online environment is `prod.ts`.

5. user requests a page from the browser (client side) to the Node Server:

```
localhost:3000/main
localhost:3000/chatroom

dev.ts -> redirect to main/main.html and chatRoom/chatRoom.html
prod.ts -> direct return to main/main.html and chatRoom/chatRoom.html

``