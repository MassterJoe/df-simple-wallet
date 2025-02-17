import { IsEnum, IsOptional, IsString } from "class-validator";

import { Currency } from "../../../enums/Currency";

export default class CreateWalletRequest{
    userId: string;
    accountNumber: string;
    tier: number;
    dailyTransactionLimit: number;
    
    @IsOptional()
    @IsEnum(Currency, { message: `Currency can either be ${Object.values(Currency).join(", ")}` })
        currency?: Currency;

    @IsString({ message: "Wallet name is required" })
        walletName: string;

    @IsOptional()
        walletTag?: string;
}
