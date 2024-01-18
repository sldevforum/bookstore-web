# BookStore Web Application

## Setup Guideline

Check Node.js version

```shell
node --version
```

Check npm version

```Shell
npm --version
```

Check Angular version

```Shell
ng version
```

Fix Windows Powershell Policy Issue

```Shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Install latest Angular version

```Shell
npm install --global @angular/cli@next
```

## Commands used to create the web app

Create new Angular project

```Shell
ng new bookstore-web
```

Install Angular Material package

```Shell
ng add @angular/material
```

Install Tailwind CSS package

```Shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Config Tailwind CSS

```TS
  content: [
    "./src/**/*.{html,ts}",
  ],
```

Add Tailwind CSS to styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run Angular project

```Shell
ng serve
ng serve --open
```

Create new components

```Shell
ng generate component components/books-list
ng generate component components/bookform
```

Create http services

```Shell
ng g s http
```

📌 **Update these files in order**

🔹app.component  
🔹app.routes  
🔹books-list  
🔹bookform  
🔹interfaces/book.ts  
🔹app.config  
🔹books-list  
🔹bookform
