import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateContractDto, CreateUserDto, MintDto, PurchaseDto, RedeemDto, TransferDto } from './token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}
  
  @Post('create-user')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.tokenService.createUser(createUserDto);
  }

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

  @Get('listUserRights')
  async listUserRights() {
    const parties = await this.tokenService.listUserRights();
    return parties;
  }

  @Get('getUserContracts')
  async getUserContracts() {
    const contracts = await this.tokenService.getUserContracts();
    return contracts;
  }
  
  @Get('generateUserToken')
  async generateUserToken(@Body() reqBody) {
    const token = await this.tokenService.generateUserToken(reqBody.userId);
    return { token };
  }

  @Post('create')
  async createContract(@Body() createContractDto: CreateContractDto) {
    return this.tokenService.createContract(createContractDto);
  }

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

  // @Post('purchase')
  // async purchaseToken(@Body() purchaseDto: PurchaseDto) {
  //   return this.tokenService.purchaseToken(purchaseDto);
  // }
}