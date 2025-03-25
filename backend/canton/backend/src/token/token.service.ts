import { Injectable } from '@nestjs/common';
import { Ledger } from '@daml/ledger';
import { MintDto, TransferDto, RedeemDto, PurchaseDto } from './token.dto';
import { Token } from '../LbgAssetTokenizationDamlModule/LbgAssetTokenization-0.0.1/lib/Token/module'; // Adjust the import path to your generated code

@Injectable()
export class TokenService {
  private ledger: Ledger;

  constructor() {
    this.ledger = new Ledger({ token: 'YOUR_LEDGER_API_TOKEN' });
  }

  async mintToken(mintDto: MintDto) {
    const { issuer, tokenCid, newAmount } = mintDto;
    return this.ledger.exercise(Token.Mint, tokenCid, { newAmount });
  }

  async transferToken(transferDto: TransferDto) {
    const { owner, tokenCid, newOwner, transferAmount } = transferDto;
    return this.ledger.exercise(Token.Transfer, tokenCid, { newOwner, transferAmount });
  }

  async redeemToken(redeemDto: RedeemDto) {
    const { owner, tokenCid, redeemAmount } = redeemDto;
    return this.ledger.exercise(Token.Redeem, tokenCid, { redeemAmount });
  }

  async purchaseToken(purchaseDto: PurchaseDto) {
    const { owner, tokenCid, buyer, purchaseAmount } = purchaseDto;
    return this.ledger.exercise(Token.Purchase, tokenCid, { buyer, purchaseAmount });
  }
}