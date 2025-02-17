
import { Service } from "typedi";

import CreateWalletRequest from "../models/payload/requests/CreateWalletRequest";
import wallet from "../models/postgres/Wallet";
import { WalletLimitRepository } from "../repositories/WalletLimitRepository";
import { WalletRepository } from "../repositories/WalletRepository";

@Service()
export default class WalletService {
    constructor(){}

    private async generateAccountNumber(): Promise<string> {
        const totalNumberOfExistingAccounts = await WalletRepository.count();
        const generateAccountNumber = `${10000000001 + totalNumberOfExistingAccounts}`;

        return generateAccountNumber;
    }

    private async getUserAccountLimit(tier: number): Promise<number>{
        const accountLimit = await WalletLimitRepository.findByTier(tier);
        const { dailyTransactionLimit } = accountLimit;

        return dailyTransactionLimit;
    }

    public async createWallet(req: CreateWalletRequest): Promise<wallet>{
        const accountNumber = await this.generateAccountNumber();
        const dailyTransactionLimit = await this.getUserAccountLimit(req.tier);
        
        const wallet = await WalletRepository.add({ ...req, accountNumber, dailyTransactionLimit });

        return wallet;
    }

    public async listWallets(userId: string, showBalances: boolean = false): Promise<wallet[]>{
        const allWallets = await WalletRepository.list({ where: { userId } });

        const wallets = showBalances ?
            await Promise.all(
                allWallets.map((wallet) => {
                // code to retrieve balances
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    return { ...wallet, availableBalance: 0, bookBalance: 0 };
                })
            )
            : allWallets;
            
        return wallets;
    }

}

