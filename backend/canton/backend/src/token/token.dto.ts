import { ContractId } from "@daml/types";
import { Token } from "@daml.ts/ledger-0.0.1/lib/Token/module";

export class MintDto {
  issuer: string;
  tokenCid: ContractId<Token>;
  newAmount: string;
}

export class TransferDto {
  owner: string;
  tokenCid: ContractId<Token>;
  newOwner: string;
  transferAmount: string;
}

export class RedeemDto {
  owner: string;
  tokenCid: ContractId<Token>;
  redeemAmount: string;
}

export class PurchaseDto {
  owner: string;
  tokenCid: ContractId<Token>;
  buyer: string;
  purchaseAmount: string;
}

export class createUserDto {
  name: string;
  userId: string; 
  primaryParty: string;
  rights: [];
}