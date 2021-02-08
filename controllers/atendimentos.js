module.exports = app => {
  app.get('/', (req, res) => res.send('Você está na página inicial'));
  app.get('/atendimentos', (req, res) => res.send('Você está na página de atendimentos'));
}

