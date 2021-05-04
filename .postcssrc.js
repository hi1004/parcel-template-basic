// ESM는 브라우저에서 동작하는 환경
// CommonJS는 node.js 환경

// import autoprefixer from 'autoprefixer'
/* const autoprefixer = require('autoprefixer'); */


// export
/* module.exports = {
    plugins: [
        autoprefixer
    ]
} */

module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}