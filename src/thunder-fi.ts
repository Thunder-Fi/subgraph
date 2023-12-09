import {
  AgreementStatusUpdate as AgreementStatusUpdateEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/ThunderFi/ThunderFi"
import {
  AgreementStatusUpdate,
  OwnershipTransferred
} from "../generated/schema"

export function handleAgreementStatusUpdate(
  event: AgreementStatusUpdateEvent
): void {
  let entity = new AgreementStatusUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.purchaser = event.params.purchaser
  entity.timestamp = event.params.timestamp
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
