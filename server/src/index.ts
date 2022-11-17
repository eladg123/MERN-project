import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import Deck from './models/Deck'
require('dotenv').config()

const app = express()

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL || '')
  .then(() => {
    console.log(`Listening on port ${process.env.PORT}`)
    app.listen(process.env.PORT || 5000)
  })
  .catch(() => {})

app.post('/decks', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save()
  res.json({ createdDeck })
})
