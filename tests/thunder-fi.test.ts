import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { AgreementStatusUpdate } from "../generated/schema";
import { AgreementStatusUpdate as AgreementStatusUpdateEvent } from "../generated/ThunderFi/ThunderFi";
import { handleAgreementStatusUpdate } from "../src/thunder-fi";
import { createAgreementStatusUpdateEvent } from "./thunder-fi-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let purchaser = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let timestamp = BigInt.fromI32(234);
    let status = BigInt.fromI32(234);
    let newAgreementStatusUpdateEvent = createAgreementStatusUpdateEvent(
      seller,
      purchaser,
      timestamp,
      status
    );
    handleAgreementStatusUpdate(newAgreementStatusUpdateEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AgreementStatusUpdate created and stored", () => {
    assert.entityCount("AgreementStatusUpdate", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AgreementStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "AgreementStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "purchaser",
      "0x0000000000000000000000000000000000000001"
    );
    assert.fieldEquals(
      "AgreementStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    );
    assert.fieldEquals(
      "AgreementStatusUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "status",
      "234"
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
