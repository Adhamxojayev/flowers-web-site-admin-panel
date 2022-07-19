const { fetchAll, fetch } = require('../../lib/postgres.js')
const { GETNEWS, ADDNEWS} = require('./query.js')

const GET = async ({newsId}) => {
    try {
      
        return await fetchAll(GETNEWS, newsId)

    } catch (error) {
        console.error(error);
    }
}

const POST = async ({filename}, {title, description}) => {
    try {
        return await fetch(ADDNEWS, filename, title, description)

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    GET, POST
}