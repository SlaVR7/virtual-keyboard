# Virtual Keyboard Application

This is a simple virtual keyboard application built using JavaScript, HTML, and CSS.

## Technology Stack:

- HTML
- CSS
- JavaScript
- Webpack
- ESLint with airbnb style

## Features:

- pressing a key on a physical keyboard highlights the key on the virtual keyboard
- if several buttons are pressed, all the pressed buttons are highlighted on the virtual keyboard
- the virtual keyboard is able to switch between two language layouts
- keystrokes are animated
- clicks on the buttons with a mouse on the virtual keyboard and pressing keys on a physical keyboard inputting symbols to the text area located on the page above the virtual keyboard.

## Deployment

You can see the deployment of the project at [https://slavr7.github.io/virtual-keyboard/](https://slavr7.github.io/virtual-keyboard/)

## Installation and Usage

To run this project locally, follow these steps:

1. Clone this repository.
2. Run 'npm install'.
3. Run 'npm start'.

## Screenshot

![Screenshot 1](screenshot.png)

## Available Scripts

- **'npm run build':** This script triggers the Webpack bundler to build your project in production mode. It sets the Node environment to production.
- **'npm run build:dev':** This script instructs Webpack to build your project in development mode, optimizing it for development and debugging.
- **'npm run watch':** This script runs Webpack in watch mode, which continuously monitors your project files for changes and rebuilds it automatically when changes are detected.
- **'npm start':** This script starts a development server using Webpack's built-in development server, allowing you to preview and test your project locally.
- **'npm run lint':** This script runs ESLint, a code analysis tool, on the code located in the src directory of your project. It automatically fixes code style and syntax issues using the --fix option, ensuring that your code conforms to defined coding standards and maintains consistency.


