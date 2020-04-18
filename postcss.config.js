const ENV     = process.env.NODE_ENV
const CSSNANO = require('cssnano')({preset: 'default'})
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './resources/**/*.js',
        './resources/**/*.css',
        './*.html',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        (ENV === 'production') ? CSSNANO : null,
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
}