import { dataSource } from "../../config/postgres";
import wallet from "../models/postgres/Wallet";


export const WalletRepository = dataSource.getRepository(wallet).extend({
    async add(wallet: Partial<wallet>): Promise<wallet> {
        return this.save(wallet);
    },
    async findById(id: number): Promise<wallet> {
        return this.findOne({ where: { id } });
    },

    async list(filter: any = {}): Promise<wallet[]> {
        return this.find({ ...filter, order: { id: "ASC" } });
    },
    async updateWallet(id: number, updates?: Partial<wallet>): Promise<void> {
        await this.update({ id }, updates);
    },
    async deleteWallet(id: number) {
        const wallet = await this.findById(id);
        return this.remove(wallet);
    },


});

