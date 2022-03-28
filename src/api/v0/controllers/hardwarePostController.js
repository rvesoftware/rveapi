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
    const {title, desc} = req.body;

    const noteId = req.parems.id;
    const note = await Note.findById(noteId);

    if(note){
      note.title = title;
      note.desc - desc;
      const updateNote = await note.save();
      res.send(updateNote)
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