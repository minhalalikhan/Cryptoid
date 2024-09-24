export type token = 'Bitcoin' | 'Ethereum' | 'Polygon' | 'Solana';

export type WalletInfo = {

    Wallet_public_name: string,
    wallet_public_id: string,
    wallet_token: token,
    wallet_balance: number
}

