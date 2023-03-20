# création de l'application

```bash
npm create vite@latest jardin --template
cd jardin
npm install

npm i react-router react-router-dom styled-components nanostores @nanostores/react
npm i -D @types/styled-components
npm i react-responsive ckeditor4-react

npm run dev
```

add directories

```bash
mkdir src/components
mkdir src/types
mkdir src/style
mkdir src/lib
mkdir src/data
```

Github

```bash
echo "# jardin" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/podspods/jardin.git
git push -u origin main
```

installation firebase authentification

```js
npm i @firebase/auth
```

stockage des données sur une base noSql

firestore

```js
npm i @firebase/firestore
```
