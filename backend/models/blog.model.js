import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        required: true
    },
    photo:{
        type: String,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps:true})

const Blog = mongoose.models.blogs || mongoose.model('Blog',blogSchema)

export default Blog;