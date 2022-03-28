import PostSoftware from "../models/PostSoftware.js";
  
export const createPost = async (req, res) => {
  
  console.log('Enter to Create Post')
  try{

    const {title, description, category, image, username, userphoto, sanitizedHtml} = req.body;
    const newPost = new PostSoftware({
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
  console.log("!!!")
  try{
    const post = await PostSoftware.findById(req.params.id);

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
      const posts = await PostSoftware.find({});

      res.send(posts)

    }catch(err){
      console.log(err)
    }
};
  
export const updatePost = async (req, res) => {
  console.log('!!!!')

  try{
    const {title, description, sanitizedHtml, category, image} = req.body.props;
    const postId = req.params.id;
    const post = await PostSoftware.findById(postId);

    console.log(sanitizedHtml)
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
    const post = await PostSoftware.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Post were deleted successfully'
    });
};