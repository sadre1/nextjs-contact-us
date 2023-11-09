import mongoose,{Schema} from "mongoose";
const contactSchema = new Schema({
    fullname:{
        type:String,
        required:[true ,"Name is Required."],
        trim:true,
        minLength:[2,"Name must be larger then 2 chracters"],
        maxLength:[50,"Name must be under 50 characters"]
    },
    email:{
        type:String ,
        require:[true,"email is required"],
        match:[/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
              "Invalid email Id"],      
    },
    message:{
        type:String,
        requred:[true,"message is required"],

    },
    date:{
        type:Date,
        default:Date.now
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact",
contactSchema);

export default Contact;