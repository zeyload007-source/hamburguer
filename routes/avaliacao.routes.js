const AvaliacaoController = require('./controllers/AvaliacaoController');
const PedidoController = require('./controllers/PedidoController');
const ProdutoController = require('./controllers/ProdutoController');
const EntregaController = require('./controllers/EntregaController');

routes.post('/avaliacoes', AvaliacaoController.create);
routes.get('/avaliacoes', AvaliacaoController.index);

// Outras rotas
routes.get('/pedidos', PedidoController.index);
routes.get('/produtos', ProdutoController.index);
routes.get('/entregas', EntregaController.index);
