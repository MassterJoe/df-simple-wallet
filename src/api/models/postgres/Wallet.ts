import { Currency } from "src/api/enums/Currency";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "wallets" })
export default class wallet {
    @Column()
    @PrimaryGeneratedColumn()
        id?: number;
    
    @Column()
    @Index()
        userId: string;
    
    
    @Column()
    @Index()
        accountNumber: string;

    @Column({
        type: "enum",
        enum: Currency,
        default: Currency.NGN
    })
    @Index()
        currency?: Currency;

    @Column()
        name: string;
    
    @Column({ nullable: true })
        tag?: string;

    @Column({ type: "decimal", default: 0 })
        dailyTransactionLimit: number;

    @Column({ default: true })
    @Index()
        isActive?: boolean;

    @Column({ default: true })
    @Index()
        isEnabled?: boolean;
    
    @CreateDateColumn()
    @Index()
        createdAt?: string;
    
    @UpdateDateColumn()
    @Index()
        lastUpdatedAt?: Date;
    
    bookBalance: number;
    availableBalance: number;
}
