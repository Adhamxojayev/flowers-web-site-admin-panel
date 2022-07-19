const model = require('./model.js')
const upload = require('../../lib/multer.js')

const newsImage = upload.single('newsImage')

const GET = async (req, res) => {
    try {
        const news = await model.GET(req.params)
        if(news){
            res.status(200).json({
                status:200,
                message: "ok",
                data: news
            })
        }else{
            res.status(404).json({
                status:404,
                message: "client error",
                data: null
            })
        }
    } catch (error) {
        console.error(error);
    }
}

const POST = async (req, res) => {
    try {
        const news = await model.POST(req.file, req.body)
        if(news){
            res.status(200).json({
                status:200,
                message: "ok",
                data: news
            })
        }else{
            res.status(404).json({
                status:404,
                message: "client error",
                data: null
            })
        }
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    GET, POST, newsImage
}