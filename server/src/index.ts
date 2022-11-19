import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
require('dotenv').config()

// import routes
import deckRouter from './routes/deckRoutes'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log(`Listening on port ${process.env.PORT}`)
    app.listen(process.env.PORT || 5000)
  })
  .catch(() => {})

app.use('/decks', deckRouter)
