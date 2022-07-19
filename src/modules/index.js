const auth = require('./admin/router.js')
const categories = require('./categories/router.js')
const product = require('./products/router.js')
const news = require('./news/router.js')


module.exports = [
    auth, 
    categories, 
    product, 
    news
]