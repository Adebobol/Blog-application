const Blog = require('./../Model/blogModel')



exports.getAllBlogs = async (req, res) => {
    const Blog = await Blog.find()
    res.status(200).json({
        status: "success",
        data: {
            Blog
        }
    })
}