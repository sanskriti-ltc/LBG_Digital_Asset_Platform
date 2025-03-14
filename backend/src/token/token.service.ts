import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Client, TokenCreateTransaction, TokenMintTransaction, TokenBurnTransaction, TokenAssociateTransaction, TokenDissociateTransaction, TransferTransaction, AccountBalanceQuery, TransactionRecordQuery, AccountId, PrivateKey, TokenInfoQuery, TokenType, TokenSupplyType } from '@hashgraph/sdk';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TokenService {
    private getClient(requesterName: string) {
        const accountId = AccountId.fromString(process.env[`${requesterName}_account_operator_id`] as unknown as string);
        const operatorKey = PrivateKey.fromStringED25519(process.env[`${requesterName}_account_operator_key`] as unknown as string);
        const client = Client.forTestnet().setOperator(accountId, operatorKey);
        return {client, accountId, operatorKey};
    }

    async createToken(body: { tokenName: string; symbol: string; requesterName: string }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            let tokenCreateTx = await new TokenCreateTransaction()
                .setTokenName(body.tokenName)
                .setTokenSymbol(body.symbol)
                .setTokenType(TokenType.FungibleCommon)
                .setDecimals(2)
                .setInitialSupply(10000)
                .setTreasuryAccountId(accountId)
                .setSupplyType(TokenSupplyType.Infinite)
                .setSupplyKey(operatorKey)
                .freezeWith(client);

            let tokenCreateSign = await tokenCreateTx.sign(operatorKey);
            let tokenCreateSubmit = await tokenCreateSign.execute(client);
            let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
            let tokenId = tokenCreateRx.tokenId;
            console.log(`- Created token with ID: ${tokenId} \n`);

            if (!tokenId) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.CREATED, message: 'Token created successfully', tokenCreateRx };
        } catch (error) {
            throw new HttpException('Failed to create token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async mintToken(body: { amount: number; requesterName: string }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            const transaction = await new TokenMintTransaction()
                .setAmount(body.amount)
                .execute(client);
            const receipt = await transaction.getReceipt(client);
            if (!receipt.status) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.OK, message: 'Token minted successfully', status: receipt.status.toString() };
        } catch (error) {
            throw new HttpException('Failed to mint token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async redeemToken(body: { tokensToRedeem: number; requesterName: string }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            const transaction = await new TokenBurnTransaction()
                .setAmount(body.tokensToRedeem)
                .execute(client);
            const receipt = await transaction.getReceipt(client);
            if (!receipt.status) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.OK, message: 'Token redeemed successfully', status: receipt.status.toString() };
        } catch (error) {
            throw new HttpException('Failed to redeem token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async associateToken(body: { tokenId: string; account: string; requesterName: string }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            const transaction = await new TokenAssociateTransaction()
                .setAccountId(body.account)
                .setTokenIds([body.tokenId])
                .execute(client);
            const receipt = await transaction.getReceipt(client);
            if (!receipt.status) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.OK, message: 'Token associated successfully', status: receipt.status.toString() };
        } catch (error) {
            throw new HttpException('Failed to associate token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async dissociateToken(body: { tokenId: string; account: string; requesterName: string }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            const transaction = await new TokenDissociateTransaction()
                .setAccountId(body.account)
                .setTokenIds([body.tokenId])
                .execute(client);
            const receipt = await transaction.getReceipt(client);
            if (!receipt.status) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.OK, message: 'Token dissociated successfully', status: receipt.status.toString() };
        } catch (error) {
            throw new HttpException('Failed to dissociate token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async transferToken(body: {
        tokenId: string; fromAccount: string; toAccount: string; requesterName: string
    }) {
        try {
            const {client, accountId, operatorKey} = this.getClient(body.requesterName);
            const transaction = await new TransferTransaction()
                .addTokenTransfer(body.tokenId, body.fromAccount, -1)
                .addTokenTransfer(body.tokenId, body.toAccount, 1)
                .execute(client);
            const receipt = await transaction.getReceipt(client);
            if (!receipt.status) {
                throw new HttpException('Something went wrong', HttpStatus.BAD_REQUEST);
            }
            return { statusCode: HttpStatus.OK, message: 'Token transferred successfully', status: receipt.status.toString() };
        } catch (error) {
            throw new HttpException('Failed to transfer token', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAsset(requesterName: string, tokenId: string) {
        try {
            const {client} = this.getClient(requesterName);

            const tokenInfo = await new TokenInfoQuery()
                .setTokenId(tokenId)
                .execute(client);

            return { statusCode: HttpStatus.OK, message: 'Account asset retrieved successfully', tokenInfo };
        } catch (error) {
            throw new HttpException('Failed to retrieve account asset', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAssets(requesterName: string) {
        try {
            const {client, accountId, operatorKey} = this.getClient(requesterName);
            const query = new AccountBalanceQuery().setAccountId(accountId);
            const balance = await query.execute(client);
            if (!balance.tokens) {
                throw new HttpException('No assets found', HttpStatus.NOT_FOUND);
            }
            return { statusCode: HttpStatus.OK, message: 'Assets retrieved successfully', assets: balance.tokens };
        } catch (error) {
            throw new HttpException('Failed to retrieve assets', HttpStatus.INTERNAL_SERVER_ERROR, { cause: new Error(error) });
        }
    }

    async getBalance(requesterName: string) {
        try {
            const {client, accountId, operatorKey} = this.getClient(requesterName);
            const query = new AccountBalanceQuery().setAccountId(accountId);
            const balance = await query.execute(client);
            return { statusCode: HttpStatus.OK, message: 'Balance retrieved successfully', balance: balance.hbars.toTinybars() };
        } catch (error) {
            throw new HttpException('Failed to retrieve balance', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAccountBalance(account: string) {
        try {
            const client = Client.forTestnet();
            const query = new AccountBalanceQuery().setAccountId(account);
            const balance = JSON.parse(await query.execute(client) as unknown as string);
            delete balance.tokens;            
            return { statusCode: HttpStatus.OK, message: 'Account balance retrieved successfully', balance };
        } catch (error) {
            throw new HttpException('Failed to retrieve account balance', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getAccountAssets(account: string) {
        try {
            const client = Client.forTestnet();
            const query = new AccountBalanceQuery().setAccountId(account);
            const balance = await query.execute(client);
            if (!balance.tokens) {
                throw new HttpException('No assets found', HttpStatus.NOT_FOUND);
            }
            return { statusCode: HttpStatus.OK, message: 'Account assets retrieved successfully', assets: balance.tokens };
        } catch (error) {
            throw new HttpException('Failed to retrieve account assets', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }

    async getTransactionHistory(account: string) {
        try {
            const client = Client.forTestnet();
            // const query = new TransactionRecordQuery().setAccountId(account);
            // const records = await query.execute(client);
            // if (!records.length) {
            //     throw new HttpException('No transactions found', HttpStatus.NOT_FOUND);
            // }
            // return { statusCode: HttpStatus.OK, message: 'Transaction history retrieved successfully', transactions: records };
        } catch (error) {
            throw new HttpException('Failed to retrieve transaction history', HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }
}