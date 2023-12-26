<div align="center">
<br>
  <a href="https://per-notes.web.app/"><img width="100" height="100" src="./public/android-chrome-512x512.png"></a>
  <br><br>
  <h1>Pernotes</h1>
  <p>Manage personal notes easily</p>
  <br>
  
  [**View the Web**](https://per-notes.web.app/)
</div>

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
  - [Getting Started](#getting-started)
  - [Development](#development)
  - [Production](#production)
  - [Linting & Formatting](#linting--formatting)

## Description

[`^ back to top ^`](#table-of-contents)

**Pernotes** is a web application that aims to simplify personal notes management. The application allows users to create, edit, delete and archive notes easily, providing a search feature for quick access to needed information. This project aims to deliver an intuitive and efficient user experience in composing and storing personal notes. It is built for Dicoding Submission - [Belajar Membuat Aplikasi Web dengan React](https://www.dicoding.com/academies/403).

## Live Demo

[`^ back to top ^`](#table-of-contents)

Check out the web version of **Pernotes** here: [per-notes.web.app](https://per-notes.web.app/)

## Features

[`^ back to top ^`](#table-of-contents)

- **Note Creation**: Quickly and easily create notes.
- **Flexible Editing**: Edit notes freely as needed.
- **Note Deletion**: Delete unnecessary notes.
- **Note Archiving**: Archive notes to store important ones.
- **Fast Search**: Find notes quickly using the search feature.
- **Intuitive Interface**: User-friendly design for a comfortable experience.

## Tech Stack

[`^ back to top ^`](#table-of-contents)

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frontend Library: [React 18](https://react.dev)
- Frontend Build Tool: [Vite](https://vitejs.dev)
- CSS Framework: [Tailwind CSS 3](https://tailwindcss.com)
- Tailwind CSS Component Library: [DaisyUI](https://daisyui.com)
- CI/CD Platform: [Github Actions](https://github.com/features/actions)
- Hosting Platform: [Firebase](https://firebase.google.com/)
- Linter: [ESLint](https://eslint.org)
- Code Formatter: [Prettier](https://prettier.io)

## Run Locally

[`^ back to top ^`](#table-of-contents)

### Getting Started

- Make sure you have [Node.js](https://nodejs.org) & [Yarn](https://yarnpkg.com) installed on your computer.

- Clone the repo.

  ```bash
  https://github.com/fhasnur/pernotes.git
  ```

  ```bash
  cd pernotes
  ```
- Install the dependencies.

  ```bash
  yarn install
  ```

### Development

Run the development server.

```bash
yarn dev
```

### Production

Build the app.

```bash
yarn build
```

Locally preview the production build.

```bash
yarn preview
```

### Linting & Formatting

If you want to fix ESLint error or format the code, you can run this command.

```bash
yarn lint:fix
```

```bash
yarn prettier:fix
```
