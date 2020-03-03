const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  senha: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
