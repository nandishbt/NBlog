import mongoose from 'mongoose'

const favSchema = new mongoose.Schema({
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    }
},{timestamps:true})

const Favourite = mongoose.models.favourites || mongoose.model('Favourite',favSchema)

export default Favourite;