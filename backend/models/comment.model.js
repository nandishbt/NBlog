import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
    replies: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
},{timestamps:true})

const Comment = mongoose.models.comments || mongoose.model('Comment',commentSchema)

export default Comment;