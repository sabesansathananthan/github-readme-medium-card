<p align="center">
 
 <h2 align="center">GitHub Readme Medium Card :card_index:</h2>
 <p align="center">Get dynamically generated Meduim post cards on your readmes!</p>
</p>

  <p align="center">
    <a href="https://github.com/sabesansathananthan/github-readme-medium-card/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/sabesansathananthan/github-readme-medium-card?color=0088ff" />
    </a>
    <a href="https://github.com/sabesansathananthan/github-readme-medium-card/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/sabesansathananthan/github-readme-medium-card?color=0088ff" />
    </a>
  </p>

  <p align="center">
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/sabesansathananthan/github-readme-medium-card/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/sabesansathananthan/github-readme-medium-card/issues/new/choose">Request Feature</a>
  </p>
  <p align="center">
    <a href="/translations/readme.fr.md">Français </a>
    ·
    <a href="/translations/readme.cn.md">简体中文</a>
    ·
    <a href="/translations/readme.es.md">Español</a>
    ·
    <a href="/translations/readme.de.md">Deutsch</a>
    ·
    <a href="/translations/readme.ja.md">日本語</a>
    ·
    <a href="/translations/readme.pt-br.md">Português Brasileiro</a>
    ·
    <a href="/translations/readme.it.md">Italiano</a>
    ·
    <a href="/translations/readme.kr.md">한국어</a>
  </p>
</p>
<p align="center">Loved the project? Please consider <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=A7DQHGNRFKHHE&currency_code=USD">donating</a> to help it improve!

# Features

- [GitHub Medium Post Cards](#github-meadium-card)
- [Themes](#themes)
- [Customization](#customization)
- [Deploy Yourself](#deploy)

<h1 id="github-meadium-card"> GitHub Medium Post Cards </h1>

Copy-paste this into your markdown content, and that's it. Simple!

Change the `?username=` value to your Medium's username.

```md
![Sabesan96's Medium Post](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=sabesan96&theme=dracula)
```

<h3 id="themes">Themes</h3>

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `?theme=THEME_NAME` parameter like so :-

```md
![Sabesan96's Medium Post](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=sabesan96&theme=dracula)
```

#### All inbuilt themes :-

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

<img src="https://res.cloudinary.com/sabesansathananthan/image/upload/v1602860822/github-readme-medium-card/themes_zafpel.jpg" alt="GitHub Readme Stat Themes" width="600px"/>

You can look at a preview for [all available themes](./themes/README.md) or checkout the [theme config file](./themes/index.js) & **you can also contribute new themes** if you like :D

<h3 id="customization">Customization</h3>

You can customize the appearance of your `medium cards` however you want with URL params.

#### Common Options:

| Option       | Default Value | Description                                                                                   | Required |
| ------------ | ------------- | --------------------------------------------------------------------------------------------- | -------- |
| `?username=` | `""`          | Your Medium username                                                                          | Yes      |
| `&limit=`    | `10`          | Maximum number of medium post cards you want to show on your readme, all feeds combined       | No       |
| `&theme=`    | `light`       | your medium blog post cards alignment could be any theme mentiond [here](./themes/README.md). | NO       |

<h2 id="deploy">Deploy on your own Vercel instance</h2>

Since the GitHub API only allows 5k requests per hour, my `https://github-readme-medium-card.vercel.app/getMediumBlogs` could possibly hit the rate limiter. If you host it on your own Vercel server, then you don't have to worry about anything. Click on the deploy button to get started!

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/sabesansathananthan/github-readme-medium-card)

<details>
 <summary><b> Guide on setting up Vercel  🔨 </b></summary>

1. Go to [vercel.com](https://vercel.com/)
1. Click on `Log in`
   ![](https://files.catbox.moe/tct1wg.png)
1. Sign in with GitHub by pressing `Continue with GitHub`
   ![](https://files.catbox.moe/btd78j.jpeg)
1. Sign into GitHub and allow access to all repositories, if prompted
1. Fork this repo
1. Go back to your [Vercel dashboard](https://vercel.com/dashboard)
1. Select `Import Project`
   ![](https://files.catbox.moe/qckos0.png)
1. Select `Import Git Repository`
   ![](https://files.catbox.moe/pqub9q.png)
1. Select root and keep everything as is, just add your environment variable named PAT_1 (as shown), which will contain a personal access token (PAT), which you can easily create [here](https://github.com/settings/tokens/new) (leave everything as is, just name it something, it can be anything you want)
   ![](https://files.catbox.moe/0ez4g7.png)
1. Click deploy, and you're good to go. See your domains to use the API!

</details>

## :sparkling_heart: Support the project

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously, this takes time. You can use this service for free.

However, if you are using this project and happy with it or just want to encourage me to continue creating stuff, there are few ways you can do it :-

- Giving proper credit when you use github-readme-medium-card on your readme, linking back to it :D
- Starring and sharing the project :rocket:
- [![paypal.me/sabesan](https://ionicabizau.github.io/badges/paypal.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=A7DQHGNRFKHHE&currency_code=USD) - You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:

Thanks! :heart:

---

![https://vercel.com](https://res.cloudinary.com/anuraghazra/image/upload/v1597827714/powered-by-vercel_1_ug4uro.svg)

Contributions are welcome! <3

Made with :heart: and JavaScript.

---

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

---

### Reference

Most of the themes' color codes define from [Github Readme Stats](https://github.com/anuraghazra/github-readme-stats)
