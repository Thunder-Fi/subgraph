// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AgreementStatusUpdate extends ethereum.Event {
  get params(): AgreementStatusUpdate__Params {
    return new AgreementStatusUpdate__Params(this);
  }
}

export class AgreementStatusUpdate__Params {
  _event: AgreementStatusUpdate;

  constructor(event: AgreementStatusUpdate) {
    this._event = event;
  }

  get agreementId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get purchaser(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get status(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ThunderFi__agreementsResult {
  value0: BigInt;
  value1: string;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Address;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: string,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Address,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }

  getStatus(): BigInt {
    return this.value0;
  }

  getAgreementURL(): string {
    return this.value1;
  }

  getPaymentToken(): Address {
    return this.value2;
  }

  getAmount(): BigInt {
    return this.value3;
  }

  getCreationTimestamp(): BigInt {
    return this.value4;
  }

  getExpiryTimestamp(): BigInt {
    return this.value5;
  }

  getSeller(): Address {
    return this.value6;
  }

  getPurchaser(): Address {
    return this.value7;
  }
}

export class ThunderFi__getAgreementResultValue0Struct extends ethereum.Tuple {
  get status(): BigInt {
    return this[0].toBigInt();
  }

  get agreementURL(): string {
    return this[1].toString();
  }

  get paymentToken(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get creationTimestamp(): BigInt {
    return this[4].toBigInt();
  }

  get expiryTimestamp(): BigInt {
    return this[5].toBigInt();
  }

  get seller(): Address {
    return this[6].toAddress();
  }

  get purchaser(): Address {
    return this[7].toAddress();
  }
}

export class ThunderFi extends ethereum.SmartContract {
  static bind(address: Address): ThunderFi {
    return new ThunderFi("ThunderFi", address);
  }

  PLATFORM_FEE(): BigInt {
    let result = super.call("PLATFORM_FEE", "PLATFORM_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PLATFORM_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PLATFORM_FEE", "PLATFORM_FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TXN_TOKEN(): Address {
    let result = super.call("TXN_TOKEN", "TXN_TOKEN():(address)", []);

    return result[0].toAddress();
  }

  try_TXN_TOKEN(): ethereum.CallResult<Address> {
    let result = super.tryCall("TXN_TOKEN", "TXN_TOKEN():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  agreements(param0: BigInt): ThunderFi__agreementsResult {
    let result = super.call(
      "agreements",
      "agreements(uint256):(uint256,string,address,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ThunderFi__agreementsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toAddress()
    );
  }

  try_agreements(
    param0: BigInt
  ): ethereum.CallResult<ThunderFi__agreementsResult> {
    let result = super.tryCall(
      "agreements",
      "agreements(uint256):(uint256,string,address,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ThunderFi__agreementsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toAddress()
      )
    );
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getAgreement(_id: BigInt): ThunderFi__getAgreementResultValue0Struct {
    let result = super.call(
      "getAgreement",
      "getAgreement(uint256):((uint256,string,address,uint256,uint256,uint256,address,address))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<ThunderFi__getAgreementResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getAgreement(
    _id: BigInt
  ): ethereum.CallResult<ThunderFi__getAgreementResultValue0Struct> {
    let result = super.tryCall(
      "getAgreement",
      "getAgreement(uint256):((uint256,string,address,uint256,uint256,uint256,address,address))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ThunderFi__getAgreementResultValue0Struct>(value[0].toTuple())
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  whitelisted(param0: Address): boolean {
    let result = super.call("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whitelisted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _txnToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _decimals(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateAgreementCall extends ethereum.Call {
  get inputs(): CreateAgreementCall__Inputs {
    return new CreateAgreementCall__Inputs(this);
  }

  get outputs(): CreateAgreementCall__Outputs {
    return new CreateAgreementCall__Outputs(this);
  }
}

export class CreateAgreementCall__Inputs {
  _call: CreateAgreementCall;

  constructor(call: CreateAgreementCall) {
    this._call = call;
  }

  get _agreementCID(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _purchaser(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _paymentToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _expiry(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateAgreementCall__Outputs {
  _call: CreateAgreementCall;

  constructor(call: CreateAgreementCall) {
    this._call = call;
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class RejectAgreementCall extends ethereum.Call {
  get inputs(): RejectAgreementCall__Inputs {
    return new RejectAgreementCall__Inputs(this);
  }

  get outputs(): RejectAgreementCall__Outputs {
    return new RejectAgreementCall__Outputs(this);
  }
}

export class RejectAgreementCall__Inputs {
  _call: RejectAgreementCall;

  constructor(call: RejectAgreementCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RejectAgreementCall__Outputs {
  _call: RejectAgreementCall;

  constructor(call: RejectAgreementCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RescindAgreementCall extends ethereum.Call {
  get inputs(): RescindAgreementCall__Inputs {
    return new RescindAgreementCall__Inputs(this);
  }

  get outputs(): RescindAgreementCall__Outputs {
    return new RescindAgreementCall__Outputs(this);
  }
}

export class RescindAgreementCall__Inputs {
  _call: RescindAgreementCall;

  constructor(call: RescindAgreementCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RescindAgreementCall__Outputs {
  _call: RescindAgreementCall;

  constructor(call: RescindAgreementCall) {
    this._call = call;
  }
}

export class SettleAgreementCall extends ethereum.Call {
  get inputs(): SettleAgreementCall__Inputs {
    return new SettleAgreementCall__Inputs(this);
  }

  get outputs(): SettleAgreementCall__Outputs {
    return new SettleAgreementCall__Outputs(this);
  }
}

export class SettleAgreementCall__Inputs {
  _call: SettleAgreementCall;

  constructor(call: SettleAgreementCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SettleAgreementCall__Outputs {
  _call: SettleAgreementCall;

  constructor(call: SettleAgreementCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
