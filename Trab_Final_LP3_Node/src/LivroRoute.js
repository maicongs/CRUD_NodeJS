const LivroController = require('./LivroController');

module.exports = (app) => {
    app.post('/livro', LivroController.post);
    app.put('/livro/:id', LivroController.put);
    app.delete('/livro/:id', LivroController.delete);
    app.get('/livro', LivroController.get);
    app.get('/livro/:id', LivroController.getById);
}
