import { Max, Min } from "class-validator";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "wallet_limits" })
export default class WalletLimit {
    @Column()
    @PrimaryGeneratedColumn()
        id?: number;

    @Column({ type: "integer", default: 1 })
    @Min(1, { message: "Account Tier is not valid" })
    @Max(3, { message: "Account Tier is not valid" })
    @Index({ unique: true })
        tier: number;

    @Column({ type: "decimal", default: 1 })
        dailyTransactionLimit: number;

    @Column({ type: "decimal", default: 1 })
        totalBalanceLimit: number;
        
    @CreateDateColumn()
    @Index()
        createdAt?: string;

    @UpdateDateColumn()
    @Index()
        lastUpdatedAt?: Date;
}