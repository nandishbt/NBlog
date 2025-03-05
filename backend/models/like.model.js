import mongoose from 'mongoose'

const likeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
},{timestamps:true})

const Like = mongoose.models.likes || mongoose.model('Like',likeSchema)

export default Like;