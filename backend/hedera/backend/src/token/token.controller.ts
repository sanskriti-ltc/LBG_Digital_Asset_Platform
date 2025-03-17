import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) { }

  @Post('create')
  createToken(@Body() body: { tokenName: string; symbol: string; tokenValue:number}) {
    return this.tokenService.createToken(body);
  }

  @Post('mint')
  mintToken(@Body() body: { tokenId: string; amount: number; }) {
    return this.tokenService.mintToken(body);
  }

  @Post('burn')
  burnToken(@Body() body: { tokenId:string; amount: number; sender: string }) {
    return this.tokenService.burnToken(body);
  }

  @Post('purchase')
  purchaseToken(@Body() body: { tokenId:string; amount: number; sender: string }) {
    return this.tokenService.purchaseToken(body);
  }

  @Post('redeem')
  redeemToken(@Body() body: { tokenId:string; amount: number; sender: string }) {
    return this.tokenService.redeemToken(body);
  }

  @Post('associate')
  associateToken(@Body() body: { tokenId: string; sender: string; }) {
    return this.tokenService.associateToken(body);
  }

  @Post('dissociate')
  dissociateToken(@Body() body: { tokenId: string; account: string; sender: string; amount: number }) {
    return this.tokenService.dissociateToken(body);
  }

  @Post('transfer')
  transferToken(@Body() body: { tokenId: string; receiver: string; sender: string, amount: number }) {
    return this.tokenService.transferToken(body);
  }


  @Get('asset')
  getAccountAsset(@Query('sender') sender: string, @Query('tokenId') tokenId: string) {
    return this.tokenService.getAsset(sender, tokenId);
  }

  @Get('assets')
  getAssets(@Query('sender') sender: string) {
    return this.tokenService.getAssets(sender);
  }

  @Get('balance')
  getBalance(@Query('sender') sender: string) {
    return this.tokenService.getBalance(sender);
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