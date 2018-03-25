# Personal Portfolio

This is a recreation and design update for my personal portfolio page.  The page is coded in React and styled using SASS.  The first two sections of the design were inspired by Youtuber Kevin Powell's How to Create a Portfolio Website with CSS Grid & SASS (https://www.youtube.com/playlist?list=PL4-IK0AVhVjNRKd4KBrXHpNtmMvR0qYz4).  However, the design quickly divdrged from his original ideas.

## Getting Started

- Fork or clone the repo into your local directory.
- Type `npm install` to download dependencies listed in `package.json`.
- Use `npm run dev` to start a development webserver.
- Use `npm run build` to have webpack bundle the resources into production ready, compressed files contained in a `dist` directory.
- Use `npm run lint` to initiate `eslint` features to help keep your code clean.

### Prerequisites

This project requires NodeJs at least `v8.7.0` and npm `5.6.0` to guarantee the code will run as is.

## Running tests

Testing is not included in this app as of yet.  Feel free to add your own test suite and modify the `package.json` script `lint` to enable your tests.

## Deployment

Currently, this page is hosted on GitHub Pages.  To easily deploy, you can use the steps in this gist to create a subtree with `dist` and deploy direction to a `gh-pages` branch.

https://gist.github.com/cobyism/4730490

## Built With

* React (https://reactjs.org/) - UI library
* SASS (https://sass-lang.com/) - CSS preprocessor
* webpack (https://webpack.js.org/) - Module bundler

## Author

* **Mark McConnell** - *Creator* - (https://github.com/korrollir)

## Acknowledgments

* Kevil Powell - Awesome ideas for the intro and bio sections of the page.