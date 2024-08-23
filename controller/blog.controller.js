const Blogs = require('../models/blogs.model')

class BlogController {
    static getAllBlogs = async (req, res, next) => {
        let blogs_data;

        try {
            blogs_data = await Blogs.find()
        } catch (err) {
            return console.log(err);
        }

        if (!blogs_data) {
            return res.status(401).json({ message: 'No Blogs found' })
        }

        return res.status(200).json({ blogs_data })

    }
}

module.exports = BlogController