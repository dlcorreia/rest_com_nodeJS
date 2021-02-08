module.exports = app => {
  app.get('/', (req, res) => res.send('Você está na página inicial'));
  app.get('/atendimentos', (req, res) => res.send('Você está na página de atendimentos'));

  app.post('/atendimentos', (req, res) => {
    console.log('A requisição enviou: ', req.body);
    res.send('Você está na rota de atendimentos e realizando um POST')
  });
}

