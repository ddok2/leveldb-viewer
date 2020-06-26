# LevelDB Viewer

[![Build Status](https://scrutinizer-ci.com/g/ddok2/leveldb-viewer/badges/build.png?b=master)](https://scrutinizer-ci.com/g/ddok2/leveldb-viewer/build-status/master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ddok2/leveldb-viewer/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ddok2/leveldb-viewer/?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ddok2/leveldb-viewer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ddok2/leveldb-viewer/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/ddok2/leveldb-viewer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ddok2/leveldb-viewer/alerts/)

Just amuse myself.

## Installing

```bash
git clone https://github.com/ddok2/leveldb-viewer

cd leveldb-viewer

yarn # or npm i

# make env file
cp .env.example .env

# npm run build && node build/index.js
yarn start # or npm start

```

## Run
```bash
# Usage: 
# Find Wallet
$ node index.js -f elmo # find elmo from leveldb

┌────────────────────────┐
│ Wallet Address: elmo   │
│ Wallet Coin Balance: 0 │
└────────────────────────┘

 Result Row: 
 {"docType":"","tx_id":"init","member_id":"elmo","vs_code":"EXC","country_code":"GHA","currency_code":"GHC","member_role":"EX","member_level":"Admin","custom_one_time_remittance_limit":0,"custom_one_time_withdraw_limit":0,"custom_one_day_remittance_limit":0,"custom_one_day_withdraw_limit":0,"one_day_remittance_sum":0,"one_day_remittance_date":{"year":0,"month":0,"day":0},"one_day_withdraw_sum":0,"one_day_withdraw_date":{"year":0,"month":0,"day":0},"member_wallet":{"wallet_address":"elmo","coin_balance":0,"cash_balance":0,"coin_limit":0},"frozen":false,"created_time":"2020-06-25T03:53:32Z","deleted":false,"description":""} 

# See Wallet Counts
$ node index.js -c

┌─────────────────────────┐
│ Found Number of Wallets │
│ Wallets: 7605 pcs.      │
└─────────────────────────┘



# Save Wallet ID File from leveldb
$ node index.js -l

┌────────────────────────────────────────────┐
│ Please open file wallets-1593139164138.txt │
└────────────────────────────────────────────┘

$ cat wallets-1593139164138.txt

...
```


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

