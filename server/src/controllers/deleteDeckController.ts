import Deck from '../models/Deck'
import { Request, Response } from 'express'

export async function deleteDeckController(req: Request, res: Response) {
  const deckIdToDelete = req.params.deckId
  await Deck.findByIdAndDelete(deckIdToDelete)
  res.json({ message: `Successfully deleted the entry, ID: ${deckIdToDelete}` })
}
