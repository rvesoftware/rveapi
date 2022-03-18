import mongoose from "mongoose";

const {Schema} = mongoose;
import {marked} from "marked"
import slugify from "slugify";
import createDomPurify from "dompurify"
import { JSDOM } from "jsdom"

const dompurify = createDomPurify(new JSDOM().window)

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHtml: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    username: {
        type: String
    },
    userphoto: {
        type: String
    },
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    views:{
        type: Number
    },
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

postSchema.pre("validate", function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    if (this.markdown) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }

    next()
})

const Post = mongoose.model('Post', postSchema);
export default Post;