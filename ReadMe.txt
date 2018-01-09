Simple landing site for a winter music fest «Baikal live». 

Stack:
- GIT
- npm
- Webpack 3 (http://webpack.js.org)
- Bootstrap 4 (http://getbootstrap.com)
- SCSS
- JS/jQuery

Do not forget to run $ npm install before starting work

About Webpack:
1) We use:
    - url-loader
    - file-loader
    - sass-loader
    - postcss-loader with autoprefixer
    - FontAwesome loader
    - Source map
    - Extract test plugin
    - NoEmitOnErrorsPlugin
    - Babel JS

2) Standart start:
    - $ webpack

3) Start Webpack-dev-server + Hot Module Replacement:
    - before start we need make small changes at webpack.config.js, for correct work of "Hot Module Replacement". We need disable/comment Extract test plugin (loader & plugin) and uncomment standrat css/scss plugins.
    - for start: $ webpack-dev-server --inline --hot
    - open on the browser: localhost:8080
