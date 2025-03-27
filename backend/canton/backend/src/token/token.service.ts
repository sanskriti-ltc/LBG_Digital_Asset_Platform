import { Injectable } from '@nestjs/common';
import { Ledger } from '@daml/ledger';
import { MintDto, TransferDto, RedeemDto, PurchaseDto } from './token.dto';
import { Token } from '@daml.ts/ledger-0.0.1/lib/Token';
import { escape } from 'querystring';

@Injectable()
export class TokenService {
  private ledger: Ledger;
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJzYW5kYm94IiwiYXBwbGljYXRpb25JZCI6IkhUVFAtSlNPTi1BUEktR2F0ZXdheSIsImFjdEFzIjpbImxsb3lkc0JhbmsiXX19.JdJGDwUaO6YKcEkClPf9ZbVz41PgfMPTLsNKpSb7W7Y";

  constructor() {
    this.ledger = new Ledger({ token: this.token, httpBaseUrl: 'http://localhost:7575/' });
  }

  async getParties() {
    const response = await this.ledger.listKnownParties();
    return response;
  }

  async listUsers() {
    const response = await this.ledger.listUsers();
    return response;
  }

  async listUserRights(userId: string) {
    const response = await this.ledger.listUserRights();
    console.log(response)
    return response;
  }

  async getPartyDetails(partyId: string)
  // : Promise<PartyDetails> 
  {
    // const response = await this.ledger.getPartyDetails(partyId);
    // return response;
  }

  async getUserContracts(): Promise<any[]> {
    const query = { owner: 'alice' };
    console.log('user called getUserContracts')
    const contracts = await this.ledger.query(Token);
    return contracts;
  }

  async mintToken(mintDto: MintDto) {
    const { issuer, tokenCid, newAmount } = mintDto;
    return this.ledger.exercise(Token.Mint, tokenCid, { newAmount });
  }

  // async transferToken(transferDto: TransferDto) {
  //   const { owner, tokenCid, newOwner, transferAmount } = transferDto;
  //   return this.ledger.exercise(Token.Transfer, tokenCid, { newOwner, transferAmount });
  // }

  // async redeemToken(redeemDto: RedeemDto) {
  //   const { owner, tokenCid, redeemAmount } = redeemDto;
  //   return this.ledger.exercise(Token.Redeem, tokenCid, { redeemAmount });
  // }

  // async purchaseToken(purchaseDto: PurchaseDto) {
  //   const { owner, tokenCid, buyer, purchaseAmount } = purchaseDto;
  //   return this.ledger.exercise(Token.Purchase, tokenCid, { buyer, purchaseAmount });
  // }
}