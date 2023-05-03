import axios from 'axios';
import { IDbItem } from './interfaces'

export async function getFromDbItemById(id: string): Promise<IDbItem> {
  const dbItem: IDbItem = {
    name: '',
    buyPrice: 0,
    sellPrice: 0
  }
  await axios.get('https://crossoutdb.com/api/v1/item/' + id).then(res => {
    dbItem.name = res.data[0].name
    dbItem.buyPrice = Number(res.data[0].formatBuyPrice)
    dbItem.sellPrice = Number(res.data[0].formatSellPrice)
  })
  return dbItem
}

export function IdsArr(): string[] {
  return [
    '53', //scrapMetal
    '43', //copper
    '85', //wires
    '785', //plastic
    '783', //batteries
    '201', //electronics
    '919', //engravedCasings
    '960', //Sprinter
    '120', //Huntsman
    '88', //WWT1
    '96', //Docker
  ]
}