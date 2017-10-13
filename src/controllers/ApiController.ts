import axios, { AxiosError, AxiosResponse } from 'axios'
import { Request, Response, Router } from 'express'
import { baseURL } from '../config/constants'
import { html } from '../helpers/html'
import { tableManager } from '../index'
import TableManager, { emptyTable, ITable } from '../models/TableManager'
const router: Router = Router()

/*
 * get table name
 * */
router.get('/', async (req: Request, res: Response) => {
  const tableNames = tableManager.getList()

  res.send(html(`
    <p>diastrofismo</p>
        `))
})

/*
 * send new pixel
 * */
router.get('/image/send/:value', async (req: Request, res: Response) => {
  const value: number  = +req.params.value
  res.json(value)
})

router.get('/image/send/:index/:value', async (req: Request, res: Response) => {
  const index: number = +req.params.index
  const value: number  = +req.params.value
  const data = {index, value}
  console.log(data)
  res.json(data)
})


/*
 * get image data
 * TODO: get rid of update
 * */
router.get('/image/current.png', async (req: Request, res: Response) => {
  res.json('gives you a image')
  })

export const ApiController: Router = router
