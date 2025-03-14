import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('create')
  createToken(@Body() body: { tokenName: string; symbol: string; requesterName: string }) {
    return this.tokenService.createToken(body);
  }

  @Post('mint')
  mintToken(@Body() body: {tokenId: string; amount: number; requesterName: string }) {
    return this.tokenService.mintToken(body);
  }

  @Post('redeem')
  redeemToken(@Body() body: { tokensToRedeem: number; requesterName: string }) {
    return this.tokenService.redeemToken(body);
  }

  @Post('associate')
  associateToken(@Body() body: { tokenId: string; account: string; requesterName: string }) {
    return this.tokenService.associateToken(body);
  }

  @Post('dissociate')
  dissociateToken(@Body() body: { tokenId: string; account: string; requesterName: string }) {
    return this.tokenService.dissociateToken(body);
  }

  @Post('transfer')
  transferToken(@Body() body: { tokenId:string; fromAccount: string; toAccount: string; requesterName: string }) {
    return this.tokenService.transferToken(body);
  }

  
  @Get('asset')
  getAccountAsset(@Query('requesterName') requesterName: string, @Query('tokenId') tokenId: string) {
    return this.tokenService.getAsset(requesterName, tokenId);
  }

  @Get('assets')
  getAssets(@Query('requesterName') requesterName: string) {
    return this.tokenService.getAssets(requesterName);
  }

  @Get('balance')
  getBalance(@Query('requesterName') requesterName: string) {
    return this.tokenService.getBalance(requesterName);
  }

  @Get('account-balance')
  getAccountBalance(@Query('account') account: string) {
    return this.tokenService.getAccountBalance(account);
  }

  @Get('account-assets')
  getAccountAssets(@Query('account') account: string) {
    return this.tokenService.getAccountAssets(account);
  }

  @Get('transaction-history')
  getTransactionHistory(@Query('account') account: string) {
    return this.tokenService.getTransactionHistory(account);
  }
}