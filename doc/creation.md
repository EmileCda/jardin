# création de l'application

```bash
npm create vite@latest jardin --template
cd jardin
npm install

npm i react-router react-router-dom styled-components nanostores @nanostores/react
npm i -D @types/styled-components

npm run dev
```

add directories

```bash
mkdir src/components
mkdir src/types
mkdir src/style
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
