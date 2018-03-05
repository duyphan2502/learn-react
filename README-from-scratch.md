# How to create React App

#### Create App
```
npx create-react-app my-app
```
This command will create a very simple structure for our React app.

If you wanna learn more about this section, please visit this link [Create React App](https://github.com/facebook/create-react-app)

#### React cli to generate components
Install the cli by issue this command on your terminal:
```
npm install -g react-create
```
For example:
```
react-create component Home
```
For some other options, please visit this link [React Create](https://www.npmjs.com/package/react-create)

#### Install some helpful dependencies
```
npm install --save react-router react-router-dom npm-run-all node-sass-chokidar bootstrap react-bootstrap
```

Modify the `package.json`
```
"scripts": {
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "test": "react-scripts test --env=jsdom",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "eject": "react-scripts eject"
}
```

#### Run your app
```
npm start
```
or you can use `yarn` instead
```
yarn start
```