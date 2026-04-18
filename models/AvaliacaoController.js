const { Avaliacao, Pedido } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { nota, pedidoId } = req.body;

      const pedido = await Pedido.findByPk(pedidoId);
      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
      }

      const avaliacao = await Avaliacao.create({ nota, pedidoId });

      return res.json(avaliacao);
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao criar avaliação' });
    }
  },

  async index(req, res) {
    const avaliacoes = await Avaliacao.findAll({
      include: ['pedido']
    });

    return res.json(avaliacoes);
  }
};
