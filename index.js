require('dotenv').config()
const { OpenAI } = require ('openai')
//importamos o express
const express = require('express')
//construímos o objeto que viabiliza a especificação de endpoints
const app = express()
//aplicamos o middleware de transformação JSON
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const openai = new OpenAI(OPENAI_API_KEY)

//especificamos o endpoint de interesse
//POST /pergunte-ao-chatgpt
app.post('/pergunte-ao-chatgpt', (req, res) => {
  //desestruturamos o corpo da requisição, pegando apenas o prompt
  const { prompt } = req.body
  //apenas devolvemos o prompt ao cliente, realizando um teste breve
  res.json({seuPrompt: prompt})
})

//colocamos o servidor em execução na porta 4000
const PORT = 4000
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))