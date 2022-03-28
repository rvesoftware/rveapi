import Post from "../models/Post.js";
  
export const createPost = async (req, res) => {
  
  console.log('Enter to Create Post')
  try{

    const {title, description, category, image, username, userphoto, sanitizedHtml} = req.body;
    const newPost = new Post({
      title,
      description,
      sanitizedHtml,
      category,
      image,
      username,
      userphoto
  })
  
    await newPost.save();
    res.send(newPost)

  }catch(err){
    console.log(err)
  } 
}
  

export const getOnePost = async (req, res) => {
  try{
    const post = await Post.findById(req.params.id);

    if(post){
      res.send(post);
    }else{
      res.status(404).send({message: 'Post Not Found'})
    }
  }catch(err){
    console.log(err)
  }
}

  export const getAllPosts = async (req, res) => {

    try{
      const posts = await Post.find({});

      res.send(posts)

    }catch(err){
      console.log(err)
    }
};
  
export const updatePost = async (req, res) => {
  try{
    const {title, description, sanitizedHtml, category, image} = req.body;

    const postId = req.params.id;
    const post = await Post.findById(postId);

    if(post){
      post.title = title;
      post.description =  description;
      post.sanitizedHtml = sanitizedHtml;
      post.category =  category;
      post.image = image;
      const updatePost = await post.save();
      res.send(updatePost)
    }
  }catch(err)
  {
    console.log(err)
  }
};
  

  export const deletePost = async (req, res) => {

    const post = await Post.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Post were deleted successfully'
    });

};