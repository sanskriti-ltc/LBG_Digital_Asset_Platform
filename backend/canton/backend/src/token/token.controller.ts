import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TokenService } from './token.service';
import { MintDto, PurchaseDto, RedeemDto, TransferDto } from './token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get()
  async getParties() {
    const parties = await this.tokenService.getParties();
    return parties;
  }

  @Get("listUsers")
  async listUsers() {
    const parties = await this.tokenService.listUsers();
    return parties;
  }

  @Get('getUserDetails')
  async listUserRights() {
    const parties = await this.tokenService.listUserRights('lloydsBank');
    return parties;
  }

  @Get(':partyId')
  async getPartyDetails(@Param('partyId') partyId: string) {
    const partyDetails = await this.tokenService.getPartyDetails(partyId);
    return partyDetails;
  }

  @Get('listUserContracts')
  async getUserContracts() {
    const contracts = await this.tokenService.getUserContracts();
    return contracts;
  }
  
  @Post('mint')
  async mintToken(@Body() mintDto: MintDto) {
    return this.tokenService.mintToken(mintDto);
  }

  // @Post('transfer')
  // async transferToken(@Body() transferDto: TransferDto) {
  //   return this.tokenService.transferToken(transferDto);
  // }

  // @Post('redeem')
  // async redeemToken(@Body() redeemDto: RedeemDto) {
  //   return this.tokenService.redeemToken(redeemDto);
  // }

  // @Post('purchase')
  // async purchaseToken(@Body() purchaseDto: PurchaseDto) {
  //   return this.tokenService.purchaseToken(purchaseDto);
  // }
}