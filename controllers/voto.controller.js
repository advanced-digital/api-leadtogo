const db = require('../models');
const Voto = db.voto;

exports.createVoto = (req, res) =>{
  console.log(req.body);
  const { event, token, user, operador, contact, chat } = req.body;
  const opcao = parseInt(chat.body);
  if (opcao) {
    const voto = new Voto({
      opcao: req.body['chat[body]']
    });
    voto.save((err, voto) => {
      if (err) {
        res.status(500).send({message: err})
      } else {
        console.log('Obrigado pelo seu voto!');
        res.send({message: 'Obrigado pelo seu voto!'})
      }
    })
  } else {
    console.log('Opção não reconhecida. Tente novamente.');
    console.log(req.body);
    res.status(500).send({message: 'Opção não reconhecida. Tente novamente.'})
  }
}

exports.getResultadoVotos = (req, res) => {
  Voto.aggregate (
  [{ $group: { _id: '$opcao', myCount: { $sum:1 } } },
  { $sort:{"_id":1} }]
  ).exec((err, data) => {
    console.log(err);
    console.log(data);
    res.send(data);
  })
}