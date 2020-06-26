import { Command } from 'commander'
import app from './app'

const start = async (): Promise<void> => {
  const program = new Command()

  program.
    on('--help', () => {
      console.log('')
      console.log(`
      Usage: node index.js -f elmo
             node index.js -l     
             node index.js -c     
    `)
    }).
    option('-f --find <wallet>', 'Find Wallet from LevelDB').
    option('-l --list', 'Find Wallet List from LevelDB').
    option('-c --count', 'View Number of wallets in LevelDB').
    parse(process.argv)

  const {
    find,
    list,
    count,
  } = program

  let query: {
    command?: string
    arg?: string
  } = {}

  if (find) {
    query.command = 'f'
    query.arg = find
  }
  if (list) {
    query.command = 'l'
  }
  if (count) {
    query.command = 'c'
  }
  if (!query.command) {
    console.log(`
    arguments are required.
    Usage: node index.js -f [target]  -> Find target Wallet
           node index.js -l           -> View List of Wallet
           node index.js -c           -> Show Number of Wallets
    help: node index.js --help
    `)
    return
  }

  return await app(query)
}

start().catch(e => console.error(e))
