export class controllerTemplate {
    constructor(model){
        this.model = model;

    }

    create = async (req, res) => {
        try{
            const newItem = new this.model({...req.body})
            await newItem.save();
            res.send(newItem);
        }catch(err){
            console.log(err)
        }
    }

}