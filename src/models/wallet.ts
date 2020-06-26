export default interface Wallet {
  tx_id: string
  member_id: string
  vs_code: string
  country_code: string
  currency_code: string
  member_role: string
  custom_one_time_remittance_limit?: number
  custom_one_time_withdraw_limit?: number
  custom_one_day_remittance_limit?: number
  custom_one_day_withdraw_limit?: number
  one_day_remittance_sum?: number
  one_day_remittance_date?: object
  one_day_withdraw_sum?: number
  one_day_withdraw_date?: object
  member_wallet: {
    wallet_address: string
    coin_balance: number
    cash_balance?: number
    coin_limit?: number
  }
  frozen: boolean
  created_time: string
  deleted: boolean
  description?: string
}
