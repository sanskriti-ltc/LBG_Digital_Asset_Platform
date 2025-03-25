import { Controller, Post, Body } from '@nestjs/common';
import { TokenService } from './token.service';
import { MintDto, PurchaseDto, RedeemDto, TransferDto } from './token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('mint')
  async mintToken(@Body() mintDto: MintDto) {
    return this.tokenService.mintToken(mintDto);
  }

  @Post('transfer')
  async transferToken(@Body() transferDto: TransferDto) {
    return this.tokenService.transferToken(transferDto);
  }

  @Post('redeem')
  async redeemToken(@Body() redeemDto: RedeemDto) {
    return this.tokenService.redeemToken(redeemDto);
  }

  @Post('purchase')
  async purchaseToken(@Body() purchaseDto: PurchaseDto) {
    return this.tokenService.purchaseToken(purchaseDto);
  }
}