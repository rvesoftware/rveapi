import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  console.log("ENTRO");
  try {
    const { title, desc } = req.body;

    let newNote = await Note({
      title: "Untitled",
      desc: "",
    });

    await newNote.save();

    res.send(newNote);
  } catch (err) {
    console.log(err);
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});

    res.send(notes);
  } catch (err) {
    console.log(err);
  }
};

export const updateNote = async (req, res) => {
  try {
    console.log(req.body);
    const { title, desc } = req.body;

    const noteId = req.params.id;
    const note = await Note.findById(noteId);

    if (note) {
      note.title = title;
      note.desc - desc;
      const updateNote = await note.save();
      res.send(updateNote);
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteNote = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  res.json({
      message: 'Product were deleted successfully'
  });
};

