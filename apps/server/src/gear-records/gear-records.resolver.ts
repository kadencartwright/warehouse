import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { GearRecordsService } from "./gear-records.service";
import { GearRecord } from "./entities/gear-record.entity";
import { CreateGearRecordInput } from "./dto/create-gear-record.input";
import { UpdateGearRecordInput } from "./dto/update-gear-record.input";

@Resolver(() => GearRecord)
export class GearRecordsResolver {
  constructor(private readonly gearRecordsService: GearRecordsService) {}

  @Mutation(() => GearRecord)
  createGearRecord(
    @Args("createGearRecordInput") createGearRecordInput: CreateGearRecordInput
  ) {
    return this.gearRecordsService.create(createGearRecordInput);
  }

  @Query(() => [GearRecord], { name: "gearRecords" })
  findAll() {
    return this.gearRecordsService.findAll();
  }

  @Query(() => GearRecord, { name: "gearRecord" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.gearRecordsService.findOne(id);
  }

  @Mutation(() => GearRecord)
  updateGearRecord(
    @Args("updateGearRecordInput") updateGearRecordInput: UpdateGearRecordInput
  ) {
    return this.gearRecordsService.update(
      updateGearRecordInput.id,
      updateGearRecordInput
    );
  }

  @Mutation(() => GearRecord)
  removeGearRecord(@Args("id", { type: () => Int }) id: number) {
    return this.gearRecordsService.remove(id);
  }
}
