const User = require("../models/User");
const axios = require("axios");
const bcrypt = require("bcryptjs");

module.exports = {
  async index(req, res) {
    const user = await User.find();
    return res.json(user);
  },
  async store(req, res) {
    let { email, senha, cpf, idade, nome } = req.body;

    let user = await User.findOne({ email });

    senha = bcrypt.hashSync(senha, 5);

    if (!user) {
      user = User.create({
        email,
        senha,
        nome,
        cpf,
        idade
      });
      user
        ? res.status(201).json({ message: "Usuário criado com sucesso" })
        : res.status(400).json({ message: "Erro ao cadastrar usuário" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  },

  async update(req, res) {
    const { email, senha, cpf, nome, idade } = req.body;

    if (await User.findOne({ email })) {
      let values = { email, senha, cpf, nome, idade };

      let updates = {};

      for (var prop in values) {
        if (values[prop] != null && prop != "email") {
          updates[prop] = values[prop];
        }
      }

      if (updates.senha != undefined) {
        updates.senha = bcrypt.hashSync(updates.senha, 5);
      }

      let user = User.updateOne({ email }, updates, (err, result) => {});

      user
        ? res.status(201).json({
            message: `Dados: [${Object.keys(updates)}] atualizados com sucesso`
          })
        : res.status(400).json({ message: "Erro ao atualizar informações" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  },

  async destroy(req, res) {
    const { email } = req.query;

    if (await User.findOne({ email })) {
      let user = await User.deleteOne({ email });

      user
        ? res.status(201).json({ message: "Usuário Excluído" })
        : res.status(400).json({ message: "Erro ao excluir usuário" });
    } else {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
  }
};
