import mongoose from 'mongoose';
import config from '../helpers/config.js';

(async () =>{

    try{
        const db = await mongoose.connect(config.mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true,  } );
        console.log('Database is connected to:', db.connection.name);
    }catch(error){
        console.error(error);
    }

})();