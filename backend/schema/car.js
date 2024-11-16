import mongoose from 'mongoose';

const carschema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    tags: [
      { type: String }
    ],
    username: {
      type : String,
      required : true
    },
    datePublished: {
        type: Date,
        default: Date.now,
      },
    lastUpdated: {
        type: Date,
        default: Date.now,
      }
});

const car = mongoose.model('car', carschema);

export default car;
