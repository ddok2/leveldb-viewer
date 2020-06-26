import fs from 'fs'
import { Data } from '../models'

const removeChannelChaincode = (str: string): string => {
  const pattern =
    process.env.CHANNEL_NAME + '\u0000' +
    process.env.CHAINCODE + '\u0000'
  if (str.startsWith(pattern)) {
    return str.replace(pattern, '')
  }
  return str
}

const writeFile = (list: string[]) => {
  const fileName = `wallets-${ Date.now() }.txt`
  const writer = fs.createWriteStream(fileName,
    { flags: 'a' })

  for (let wallet of list) {
    writer.write(wallet + '\n')
  }
  writer.end()

  return fileName
}

export default async (db: any) => {
  const wallets: string[] = []

  await new Promise(resolve => {
    db.createReadStream().on('data', (data: Data) => {
      if (data.value.includes('wallet_address')) {
        wallets.push(removeChannelChaincode(data.key))
      }
    }).on('end', () => {
      resolve()
    })
  })

  return writeFile(wallets)
}
