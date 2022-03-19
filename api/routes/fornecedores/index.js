const router = require('express').Router();

router.use('/', (resquisicao, resposta) => {
    resposta.send("ok");
})

module.exports = router;