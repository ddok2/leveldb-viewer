import { Data } from '../models'

export default (db: any): Promise<number> => {
  const list = new Map<string, string>()

  return new Promise((resolve) => {
    db.createReadStream().on('data', (data: Data) => {
      if (data.value.includes('wallet_address')) {
        list.set(data.key, data.value)
      }
    }).on('end', () => {
      resolve(list.size)
    })
  })
}
