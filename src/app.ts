// eslint-disable-next-line @typescript-eslint/no-var-requires
import getWallets from './handlers/getWallets'

const level: any = require('level')
const print: any = require('print-message')

import env from 'dotenv'
import {
  isEnvFile,
} from './utils'
import { getCount, getWallet } from './handlers'
import { Wallet } from './models'

const loaded = env.config()

const app = async (query: { command?: string, arg?: string }): Promise<void> => {
  let db = null

  try {
    if (!isEnvFile(loaded)) {
      return
    }
    db = level(process.env.DB_LOCATION)

    switch (query.command) {
      case 'f':
        const wallet: Wallet| {result: string} = await getWallet(db, query.arg!)

        if ('member_wallet' in wallet) {
          print([
            `Wallet Address: ${ wallet.member_wallet.wallet_address }`,
            `Wallet Coin Balance: ${ wallet.member_wallet.coin_balance }`,
          ])
        }
        print([
          'Result Row:',
          JSON.stringify(wallet)
        ], {
          border: false,
          marginTop: 1,
          marginBottom: 3,
          color: 'green',
        })
        break
      case 'c':
        const count: number = await getCount(db)
        print([
          `Found Number of Wallets`,
          `Wallets: ${count} pcs.`
        ])
        break
      case 'l':
        const file = await getWallets(db)
        print([
          `Please open file ${file}`
        ])
        break
      default:
        break
    }

  } catch (e) {
    console.error(e.message)
  }
}

export default app
