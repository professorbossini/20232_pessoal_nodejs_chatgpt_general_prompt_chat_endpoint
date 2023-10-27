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
app.post('/pergunte-ao-chatgpt', async (req, res) => {
  const { prompt } = req.body

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt}],
    model: "gpt-3.5-turbo",
  });
  res.json({completion: completion.choices[0].message.content})
})

//colocamos o servidor em execução na porta 4000
const PORT = 4000
app.listen(PORT, () => console.log(`Em execução na porta ${PORT}`))