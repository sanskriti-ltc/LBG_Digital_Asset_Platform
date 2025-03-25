"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.ts/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.Purchase = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({buyer: damlTypes.Party.decoder, purchaseAmount: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    buyer: damlTypes.Party.encode(__typed__.buyer),
    purchaseAmount: damlTypes.Int.encode(__typed__.purchaseAmount),
  };
}
,
};



exports.Redeem = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({redeemAmount: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    redeemAmount: damlTypes.Int.encode(__typed__.redeemAmount),
  };
}
,
};



exports.Transfer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newOwner: damlTypes.Party.decoder, transferAmount: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
    transferAmount: damlTypes.Int.encode(__typed__.transferAmount),
  };
}
,
};



exports.Mint = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newAmount: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    newAmount: damlTypes.Int.encode(__typed__.newAmount),
  };
}
,
};



exports.Token = damlTypes.assembleTemplate(
{
  templateId: '29d3e5d9d4c715c5860232caa62c95b21592cc7e4200cc2763a60e97f9a8ac84:Token:Token',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, symbol: damlTypes.Text.decoder, amount: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    symbol: damlTypes.Text.encode(__typed__.symbol),
    amount: damlTypes.Int.encode(__typed__.amount),
  };
}
,
  Mint: {
    template: function () { return exports.Token; },
    choiceName: 'Mint',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Mint.decoder; }),
    argumentEncode: function (__typed__) { return exports.Mint.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Token).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Token).encode(__typed__); },
  },
  Transfer: {
    template: function () { return exports.Token; },
    choiceName: 'Transfer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Transfer.decoder; }),
    argumentEncode: function (__typed__) { return exports.Transfer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Token).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Token).encode(__typed__); },
  },
  Redeem: {
    template: function () { return exports.Token; },
    choiceName: 'Redeem',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Redeem.decoder; }),
    argumentEncode: function (__typed__) { return exports.Redeem.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Token).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Token).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Token; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Purchase: {
    template: function () { return exports.Token; },
    choiceName: 'Purchase',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Purchase.decoder; }),
    argumentEncode: function (__typed__) { return exports.Purchase.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Token).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Token).encode(__typed__); },
  },
}

);


damlTypes.registerTemplate(exports.Token, ['29d3e5d9d4c715c5860232caa62c95b21592cc7e4200cc2763a60e97f9a8ac84', '29d3e5d9d4c715c5860232caa62c95b21592cc7e4200cc2763a60e97f9a8ac84']);

