const ENV     = process.env.NODE_ENV
const CSSNANO = require('cssnano')({preset: 'default'})

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        (ENV === 'production') ? CSSNANO : null,
    ],
}