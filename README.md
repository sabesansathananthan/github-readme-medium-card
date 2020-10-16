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

# GitHub Medium Post Cards

Copy-paste this into your markdown content, and that's it. Simple!

Change the `?username=` value to your Medium's username.

```md
![Sabesan96's Medium Post](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=sabesan96&theme=dracula)
```

### Themes

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `?theme=THEME_NAME` parameter like so :-

```md
![Sabesan96's Medium Post](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=sabesan96&theme=dracula)
```

#### All inbuilt themes :-

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

![Sabesan96's Medium Post](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=sabesan96&theme=dracula)

### How to use

- Go to your repository

- Add the following section to your **README.md** file. replace `USERNAME` with your real medium username (without @ sign)

```
[![USERNAME](https://github-readme-medium-card.vercel.app/getMediumBlogs?username=USERNAME)](https://medium.com/@USERNAME)
```

### Options

You can customize the appearance of your `medium cards` for your use case, following are the list of options available:

| Option       | Default Value | Description                                                                             | Required |
| ------------ | ------------- | --------------------------------------------------------------------------------------- | -------- |
| `?username=` | `""`          | Your Medium username                                                                    | Yes      |
| `&limit=`    | `5`           | Maximum number of medium post cards you want to show on your readme, all feeds combined | No       |
| `&theme=`    | `light`       | your medium blog post cards alignment could be `dark` or `light` or `dracula`           | NO       |

### Deploy your own

Deploy this code to your vercel account.[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/sabesansathananthan/github-readme-medium-card)

### Contribute

Contribute to this repository by opening a Pull Request to this repository. Refer to the [CONTRIBUTING](./CONTRIBUTING.md) file for direction.

### License

[MIT License](./LICENSE)
Copyright (c) 2020 [Sathananthan Sabesan](https://github.com/sabesansathananthan)
