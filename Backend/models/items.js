import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Items = mongoose.model('items', itemsSchema);
export default Items;