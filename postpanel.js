
let mongoose = require('mongoose');

let PostSchema = mongoose.Schema({
    Task: {
        type: String,
    },
    categories: {
        type: String,
    },
    Create: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },

})

let post = mongoose.model("Post", PostSchema);


module.exports = post;