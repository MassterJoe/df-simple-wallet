import { dataSource } from "../../config/postgres";
import WalletLimit from "../models/postgres/WalletLimit";


export const WalletLimitRepository = dataSource.getRepository(WalletLimit).extend({
    async add(WalletLimit: Partial<WalletLimit>): Promise<WalletLimit> {
        return this.save(WalletLimit);
    },
    async findById(id: number): Promise<WalletLimit> {
        return this.findOne({ where: { id } });
    },
    async findByTier(tier: number): Promise<WalletLimit> {
        return this.findOne({ where: { tier } });
    },
    async list(): Promise<WalletLimit[]> {
        return this.find({ order: { id: "ASC" } });
    },
    async updateWalletLimit(id: number, updates?: Partial<WalletLimit>): Promise<void> {
        await this.update({ id }, updates);
    },
    async deleteWalletLimit(id: number) {
        const limit = await this.findById(id);
        return this.remove(limit);
    },


});

