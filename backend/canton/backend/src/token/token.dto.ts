import { ContractId } from "@daml/types";
import { Token } from "@daml.ts/ledger-0.0.1/lib/Token/module";
import { ApiProperty } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty({ description: 'Template ID of the contract' })
  templateId: string;

  @ApiProperty({ description: 'Issuer of the token' })
  issuer: string;

  @ApiProperty({ description: 'Owner of the token' })
  owner: string;

  @ApiProperty({ description: 'Symbol of the token' })
  symbol: string;

  @ApiProperty({ description: 'Amount of the token' })
  amount: string;

  @ApiProperty({ description: 'Name of the token' })
  name: string;

  @ApiProperty({ description: 'Value of the token' })
  tokenValue: string;

  @ApiProperty({ description: 'Additional payload' })
  payload?: {};
}

export class MintDto {
  @ApiProperty({ description: 'Issuer of the token' })
  issuer: string;

  @ApiProperty({ description: 'Contract ID of the token' })
  tokenCid: ContractId<Token>;

  @ApiProperty({ description: 'Amount to mint' })
  newAmount: string;
}

export class TransferDto {
  @ApiProperty({ description: 'Owner of the token' })
  owner: string;

  @ApiProperty({ description: 'Contract ID of the token' })
  tokenCid: ContractId<Token>;

  @ApiProperty({ description: 'New owner of the token' })
  newOwner: string;

  @ApiProperty({ description: 'Amount to transfer' })
  transferAmount: string;
}

export class RedeemDto {
  @ApiProperty({ description: 'Owner of the token' })
  owner: string;

  @ApiProperty({ description: 'Contract ID of the token' })
  tokenCid: ContractId<Token>;

  @ApiProperty({ description: 'Amount to redeem' })
  redeemAmount: string;
}

export class PurchaseDto {
  @ApiProperty({ description: 'Owner of the token' })
  owner: string;

  @ApiProperty({ description: 'Contract ID of the token' })
  tokenCid: ContractId<Token>;

  @ApiProperty({ description: 'Buyer of the token' })
  buyer: string;

  @ApiProperty({ description: 'Amount to purchase' })
  purchaseAmount: string;
}

export class CreateUserDto {
  @ApiProperty({ description: 'Name of the user' })
  name: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty({ description: 'Primary party of the user' })
  primaryParty: string;

  // @ApiProperty({ description: 'Optional: Rights assigned to the user' })
  // rights?: [];
}

export class GetUserTokenDto {
  @ApiProperty({ description: 'Name of the user', example: 'lloydsBank' })
  userId: string;
}