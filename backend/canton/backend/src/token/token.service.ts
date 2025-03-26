import { Injectable } from '@nestjs/common';
import { Ledger } from '@daml/ledger';
import { MintDto, TransferDto, RedeemDto, PurchaseDto } from './token.dto';
import { Token } from '@daml.ts/ledger/lib/Token';
import { escape } from 'querystring';

@Injectable()
export class TokenService {
  private ledger: Ledger;
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJzYW5kYm94IiwiYXBwbGljYXRpb25JZCI6Ikxsb3lkc0Jhbms6OjEyMjBlZDcxZjIyZDZkNWMyNTM1ODJhYmZkZDRhMzQ1MTk0Mjk0Zjk5YjNhZmJiNWIwZWY4ODYxNzk3MjRiNjMxYzlkIiwiYWN0QXMiOlsibGxveWRzQmFuayJdfX0.ISLaEjS5fqiPLIlJ2BXl--bM0QI7_bmkZZQnSDbJ8QM";

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
    const response = await this.ledger.listUserRights(userId);
    console.log(response)
    return response;
  }

  async getPartyDetails(partyId: string)
  // : Promise<PartyDetails> 
  {
    // const response = await this.ledger.getPartyDetails(partyId);
    // return response;
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