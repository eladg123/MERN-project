import express from 'express'
import { createCardForDeckController } from '../controllers/createCardForDeckController'
import { createDeckController } from '../controllers/createDeckController'
import { deleteCardOnController } from '../controllers/deleteCardOnController'
import { deleteDeckController } from '../controllers/deleteDeckController'
import { getDeckController } from '../controllers/getDeckController'
import { getDecksController } from '../controllers/getDecksController'

const deckRouter = express.Router()

deckRouter.post('/', createDeckController)

deckRouter.get('/', getDecksController)

deckRouter.delete('/:deckId', deleteDeckController)

deckRouter.post('/:deckId/cards', createCardForDeckController)

deckRouter.get('/:deckId', getDeckController)

deckRouter.delete('/:deckId/cards/:index', deleteCardOnController)

export default deckRouter
