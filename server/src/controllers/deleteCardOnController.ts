import Deck from '../models/Deck'
import { Request, Response } from 'express'

export async function deleteCardOnController(req: Request, res: Response) {
  const index = req.params.index
  const deckId = req.params.deckId
  const deck = await Deck.findById(deckId)
  if (!deck) return res.status(400).send('no deck of this id exists')
  deck.cards.splice(parseInt(index), 1)
  await deck.save()
  res.json(deck)
}
