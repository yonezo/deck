<!-- sectionTitle: Code Reading -->

## Code Reading

---

早速ですが、読み進めるための手ほどきをします

<br />

※ わかっている人には遠回りになるが、きっちり読むためにお付き合いください

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

##

https://github.com/excalidraw/excalidraw/blob/master/src/index.tsx
