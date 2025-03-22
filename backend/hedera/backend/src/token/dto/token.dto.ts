import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenDto {
  @ApiProperty({ description: 'Name of the token', example: 'TokenA' })
  tokenName: string;

  @ApiProperty({ description: 'Symbol of the token', example: 'TKA' })
  symbol: string;

  @ApiProperty({ description: 'Value of the token', example: 100 })
  tokenValue: number;
}

export class MintTokenDto {
  @ApiProperty({ description: 'ID of the token to mint', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Amount of tokens to mint', example: 1000 })
  amount: number;
}

export class BurnTokenDto {
  @ApiProperty({ description: 'ID of the token to burn', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Amount of tokens to burn', example: 100 })
  amount: number;

  @ApiProperty({ description: 'Sender of the tokens', example: '0.0.56789' })
  sender: string;
}

export class PurchaseTokenDto {
  @ApiProperty({ description: 'ID of the token to purchase', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Amount of tokens to purchase', example: 500 })
  amount: number;

  @ApiProperty({ description: 'Purchaser account ID', example: '0.0.56789' })
  sender: string;
}

export class RedeemTokenDto {
  @ApiProperty({ description: 'ID of the token to redeem', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Amount of tokens to redeem', example: 300 })
  amount: number;

  @ApiProperty({ description: 'Redeemer account ID', example: '0.0.56789' })
  sender: string;
}

export class AssociateTokenDto {
  @ApiProperty({ description: 'ID of the token to associate', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Account ID to associate the token with', example: '0.0.56789' })
  sender: string;
}

export class DissociateTokenDto {
  @ApiProperty({ description: 'ID of the token to dissociate', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Account to dissociate the token from', example: '0.0.56789' })
  account: string;

  @ApiProperty({ description: 'Amount of tokens to dissociate', example: 100 })
  amount: number;

  @ApiProperty({ description: 'Sender account ID', example: '0.0.12345' })
  sender: string;
}

export class TransferTokenDto {
  @ApiProperty({ description: 'ID of the token to transfer', example: '12345' })
  tokenId: string;

  @ApiProperty({ description: 'Receiver account ID', example: '0.0.67890' })
  receiver: string;

  @ApiProperty({ description: 'Sender account ID', example: '0.0.12345' })
  sender: string;

  @ApiProperty({ description: 'Amount of tokens to transfer', example: 200 })
  amount: number;
}

export class GetAccountAssetDto {
  @ApiProperty({ description: 'Sender account ID', example: '0.0.12345' })
  sender: string;

  @ApiProperty({ description: 'ID of the token', example: '12345' })
  tokenId: string;
}

export class GetAssetsDto {
  @ApiProperty({ description: 'Sender account ID', example: '0.0.12345' })
  sender: string;
}

export class GetBalanceDto {
  @ApiProperty({ description: 'Sender account ID', example: '0.0.12345' })
  sender: string;
}

export class GetAccountBalanceDto {
  @ApiProperty({ description: 'Account ID for balance inquiry', example: '0.0.67890' })
  account: string;
}

export class GetAccountAssetsDto {
  @ApiProperty({ description: 'Account ID to retrieve assets for', example: '0.0.67890' })
  account: string;
}

export class GetTransactionHistoryDto {
  @ApiProperty({ description: 'Account ID for transaction history inquiry', example: '0.0.67890' })
  account: string;
}


