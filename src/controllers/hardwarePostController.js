import Post from "../models/Post.js";
  
export const createPost = async (req, res) => {
  
  console.log('ENTRO')
  try{

    const {title, desc} = req.body;

    let newNote = await Note({
      title: 'Untitled',
      desc: '',
    })

    await newNote.save();

    res.send(newNote)
    
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
};