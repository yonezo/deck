<!-- sectionTitle: Code Reading -->

## Code Reading

---

機能単位で読む方法や、コードが実行される順番で読み進める方法などがありますが、今回は後者の方法で進める。

<br />

※本当に初歩的な解説になると思いますが、今後他人が書いたコードを読み解くための良い練習になると思うので、お付き合いください。

---

## Commands

https://github.com/excalidraw/excalidraw#commands

| Command               | Description                       |
| --------------------- | --------------------------------- |
| `npm install`         | Install the dependencies          |
| `npm start`           | Run the project                   |
| `npm run fix`         | Reformat all files with Prettier  |
| `npm test`            | Run tests                         |
| `npm run test:update` | Update test snapshots             |
| `npm run test:code`   | Test for formatting with Prettier |

---

## npm scripts

<br />

https://github.com/excalidraw/excalidraw/blob/master/package.json

```json
{
  "scripts": {
    "build-node": "node ./scripts/build-node.js",
    "build:app:docker": "REACT_APP_DISABLE_SENTRY=true react-scripts build",
    "build:app": "REACT_APP_GIT_SHA=$NOW_GITHUB_COMMIT_SHA react-scripts build",
    "build:version": "node ./scripts/build-version.js",
    "build": "npm run build:app && npm run build:version",
    "eject": "react-scripts eject",
    "fix:code": "npm run test:code -- --fix",
    "fix:other": "npm run prettier -- --write",
    "fix": "npm run fix:other && npm run fix:code",
    "locales-coverage": "node scripts/build-locales-coverage.js",
    "locales-coverage:description": "node scripts/locales-coverage-description.js",
    "prettier": "prettier \"**/*.{css,scss,json,md,html,yml}\" --ignore-path=.eslintignore",
    "start": "react-scripts start",
    "test:all": "npm run test:typecheck && npm run test:code && npm run test:other && npm run test:app -- --watchAll=false",
    "test:app": "react-scripts test --passWithNoTests",
    "test:code": "eslint --max-warnings=0 --ignore-path .gitignore --ext .js,.ts,.tsx .",
    "test:debug": "react-scripts --inspect-brk test --runInBand --no-cache",
    "test:other": "npm run prettier -- --list-different",
    "test:typecheck": "tsc",
    "test:update": "npm run test:app -- --updateSnapshot --watchAll=false",
    "test": "npm run test:app"
  }
}
```

---

## react-scripts start

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/package.json

<br />

```json
{
  "bin": {
    "react-scripts": "./bin/react-scripts.js"
  }
}
```

---

## react-scripts.js

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/bin/react-scripts.js

---

## start.js

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/start.js#L117-L160

---

## webpack.config.js

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js

---

## paths.js

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/paths.js#L89

---

## index.tsx

https://github.com/excalidraw/excalidraw/blob/master/src/index.tsx

---

## まとめ

- 基本的には index.js や index.ts などから読み進めれば問題ない
- npm scripts や webpack の設定によっては、実行される順序が変わる
- React のコードだからといって、安易に App.tsx などから読み出さないように。index でいつもと違う処理が入っている場合があるため

---

## 補足

このあとコードを追っていくために breakpoint とか活用すると便利！

https://elijahmanor.com/blog/cra-debug-vscode
