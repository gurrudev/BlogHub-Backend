const resp = require('./resp')

class BlogController {
    static getAllBlogs = (req, res) =>{
        res.status(200).send(resp)
    }
}

module.exports = BlogController