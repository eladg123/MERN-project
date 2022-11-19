import express, { Request, Response } from 'express'
import Deck from '../models/Deck'

const deckRouter = express.Router()

deckRouter.post('/', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save()
  res.json({ createdDeck })
})

deckRouter.get('/', async (req: Request, res: Response) => {
  const decks = await Deck.find({})
  res.json({ decks })
})

deckRouter.delete('/:deckId', async (req: Request, res: Response) => {
  const deckIdToDelete = req.params.deckId
  await Deck.findByIdAndDelete(deckIdToDelete)
  res.json({ message: `Successfully deleted the entry, ID: ${deckIdToDelete}` })
})

export default deckRouter
