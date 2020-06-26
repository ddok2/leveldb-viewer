import { DotenvConfigOutput } from 'dotenv'
import Wallet from '../models/wallet'

const toJson = (str: string): Wallet | { result: string } => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return { result: str }
  }
}

const hasWallet = (target: object | { value: string }): boolean => {
  return (
    !Object.prototype.hasOwnProperty.call(target, 'value') &&
    Object.prototype.hasOwnProperty.call(target, 'member_wallet')
  )
}

const addNullToBuffer = (
  channelName: string,
  chaincodeId: string,
  walletId: string,
): Buffer => {
  return Buffer.from(
    `${ channelName }\u0000${ chaincodeId }\u0000${ walletId }`,
    'utf8',
  )
}

const removeUselessToString = (str: string): string => {
  const pattern = '\u0000\n\u0003\u0001\u0004\u0000\u0012�\u0004'
  const indexOfBrace = str.indexOf('{')

  if (str.startsWith(pattern)) {
    return str.replace(pattern, '')
  }
  if (indexOfBrace > 0) {
    return str.slice(indexOfBrace, str.length)
  }

  return str
}

const isEnvFile = (env: DotenvConfigOutput): boolean => {
  if (env.error) {
    console.error(`
      ".env" file is required.
      No env file in 
      ${ process.cwd() }
      
      Exiting...
      `)
    return false
  }
  return true
}

export {
  toJson,
  hasWallet,
  addNullToBuffer,
  removeUselessToString,
  isEnvFile,
}
