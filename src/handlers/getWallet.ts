import {
  addNullToBuffer,
  removeUselessToString,
  toJson,
} from '../utils'
import Wallet from '../models/wallet'

const getWallet = async (
  db: any, target: string): Promise<Wallet | { result: string }> => {
  try {
    const bufferedTarget = addNullToBuffer(
      process.env.CHANNEL_NAME!,
      process.env.CHAINCODE!,
      target,
    )
    return toJson(
      removeUselessToString(
        await db.get(bufferedTarget),
      ))
  } catch (e) {
    if (e.notFound) {
      return {
        result: 'Not Found',
      }
    }
  }
  return {
    result: 'Not Found',
  }
}

export default getWallet
