const { default: mongoose } = require("mongoose")
//import URI from .env
const URI = process.env.MONGODB_URI



mongoose.set('strictQuery', false); 
mongoose.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
},err =>{
    if (err) throw err
    console.log('connected to MongoDB !!')
})
 


/* const dbConnect = () => {
    mongoose.set('strictQuery', false); mongoose.connect(URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },err =>{
        if (err) throw err
        console.log('connected to MongoDB !!')
    })
}

module.exports = dbConnect */