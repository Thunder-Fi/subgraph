import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AgreementStatusUpdate,
  OwnershipTransferred
} from "../generated/ThunderFi/ThunderFi"

export function createAgreementStatusUpdateEvent(
  agreementId: BigInt,
  seller: Address,
  purchaser: Address,
  timestamp: BigInt,
  status: BigInt
): AgreementStatusUpdate {
  let agreementStatusUpdateEvent = changetype<AgreementStatusUpdate>(
    newMockEvent()
  )

  agreementStatusUpdateEvent.parameters = new Array()

  agreementStatusUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "agreementId",
      ethereum.Value.fromUnsignedBigInt(agreementId)
    )
  )
  agreementStatusUpdateEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  agreementStatusUpdateEvent.parameters.push(
    new ethereum.EventParam("purchaser", ethereum.Value.fromAddress(purchaser))
  )
  agreementStatusUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  agreementStatusUpdateEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromUnsignedBigInt(status))
  )

  return agreementStatusUpdateEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
