<h1 align="center">
  <img src="./assets/facebook-logo.png" alt="icon" width="200"></img>
  <br>
  <b>Mini Facebook</b>
</h1>

<p align="center">A Mini Social Network, with the idea from <b>Facebook</b>.</p>

<!-- Badges -->
<p align="center">
  <a href="https://github.com/QuanBlue/mini-facebook/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/QuanBlue/mini-facebook" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/QuanBlue/mini-facebook" alt="last update" />
  </a>
  <a href="https://github.com/QuanBlue/mini-facebook/network/members">
    <img src="https://img.shields.io/github/forks/QuanBlue/mini-facebook" alt="forks" />
  </a>
  <a href="https://github.com/QuanBlue/mini-facebook/stargazers">
    <img src="https://img.shields.io/github/stars/QuanBlue/mini-facebook" alt="stars" />
  </a>
  <a href="https://github.com/QuanBlue/mini-facebook/issues/">
    <img src="https://img.shields.io/github/issues/QuanBlue/mini-facebook" alt="open issues" />
  </a>
  <a href="https://github.com/QuanBlue/mini-facebook/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/QuanBlue/mini-facebook.svg" alt="license" />
  </a>
</p>

<p align="center">
  <b>
      <a href="https://github.com/QuanBlue/mini-facebook">Documentation</a> •
      <a href="https://github.com/QuanBlue/mini-facebook/issues/">Report Bug</a> •
      <a href="https://github.com/QuanBlue/mini-facebook/issues/">Request Feature</a>
  </b>
</p>

<br/>

<details open>
<summary><b>📖 Table of Contents</b></summary>

-  [Key Features](#key-features)
-  [Tech Stack](#tech-stack)
-  [Getting Started](#getting-started)
   -  [Project Structure](#project-structure)
   -  [Prerequisites](#prerequisites)
   -  [Environment Variables](#environment-variables)
   -  [Installation](#installation)
-  [Roadmap](#roadmap)
-  [FAQ](#faq)
-  [Contributors](#contributors)
-  [Credits](#credits)
-  [License](#license)
</details>

# Key Features

-  **Sign In/ Up:** allow user to create and login to their account with: their own account or Gmail
-  **Profile:** user can update their information and customize their profile
-  **Posts:** user can create posts with status and images
-  **Post interact:** Interact with other posts such as like, comment
-  **Chat:** communicate with other users via chat box or chatbot
-  **Open network:** user can send friend request to other users and interact with them such as: unfriend, block

# Tech Stack

-  **Frontend:**
   -  <u>UI framework</u>: NextJS
   -  <u>CSS framework</u>: Tailwind CSS
   -  <u>Language</u>: TypeScript
-  **Backend:**
   -  <u>Language</u>: Python
   -  <u>Framework</u>: Django
   -  <u>Database</u>: PostgreSQL
-  **Operations:**
   -  <u>Deploy</u>:
      -  Front-end: Netlify
      -  Back-end: Render
   -  <u>CI/CD</u>: Github Actions
   -  <u>Monitoring</u>: Prometheus, Grafana

# Getting Started

## Project Structure

```txt
$ tree src
src
├── common
│   ├── components
│   │   └── marketing
│   │       ├── Card
│   │       │   ├── Card.module.css
│   │       │   ├── Card.tsx
│   │       │   └── index.ts
│   │       ├── Footer
│   │       │   ├── Footer.module.css
│   │       │   ├── Footer.tsx
│   │       │   └── index.ts
│   │       └── SimpleGrid
│   │           ├── SimpleGrid.module.css
│   │           ├── SimpleGrid.tsx
│   │           └── index.ts
│   └── styles
│       └── globals.css
├── modules
│   └── home
│       ├── Home.module.css
│       ├── Home.tsx
│       └── index.ts
└── pages
    ├── _app.tsx
    ├── api
    │   └── hello.ts
    └── index.tsx
```

## Prerequisites

-  **Python:** `>= 3.10.7`. Install [here](https://www.python.org/downloads/).
-  **Nodejs:** >= 18.17.0

## Environment Variables

To run this project, you need to add the following environment variables to your `.env` file in `/`:

-  **App configs:** Create `.env` file in `./`

   ...and add the following environment variables to it:

   Example:

   ```sh
   ... # environment variables
   ```

You can also check out the file `.env.example` to see all required environment variables.

> **Note**: If you want to use this example environment, you need to rename it to `.env`.

## Installation

```bash
# Clone this repository
git clone https://github.com/QuanBlue/mini-facebook
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

# Roadmap

-  [ ] Sign In/ Up
   -  [ ] User account (username, password)
   -  [ ] Gmail
-  [ ] Profile
   -  [ ] Init after Sign Up
   -  [ ] Update Profile
-  [ ] Posts
   -  [ ] Create: status, images
   -  [ ] Interaction:
      -  [ ] Like
      -  [ ] Comment
-  [ ] Chat (socket)
   -  [ ] Between users
   -  [ ] Chatbot (OpenAI API)
-  [ ] Friend request, unfriend, block
-  [ ] CI/CD

# FAQ

1. **Responsive design to the parent instead of viewport**
   -  Use: Container Queries
   -  Ref: https://github.com/tailwindlabs/tailwindcss-container-queries

# Contributors

<a href="https://github.com/QuanBlue/mini-facebook/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=QuanBlue/mini-facebook" />
</a>

Contributions are always welcome!

# Credits

This software uses the following open source packages:

-  Next.js enterprise projects structure [here](https://blog.dennisokeeffe.com/blog/2021-12-06-nextjs-enterprise-project-structure)
-  Next.js [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
-  Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)

# License

Distributed under the MIT License. See <a href="./LICENSE">`LICENSE`</a> for more information.

---

> Bento [@quanblue](https://bento.me/quanblue) &nbsp;&middot;&nbsp;
> GitHub [@QuanBlue](https://github.com/QuanBlue) &nbsp;&middot;&nbsp; Gmail quannguyenthanh558@gmail.com
