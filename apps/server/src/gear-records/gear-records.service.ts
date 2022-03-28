import { Injectable } from "@nestjs/common";
import { CreateGearRecordInput } from "./dto/create-gear-record.input";
import { UpdateGearRecordInput } from "./dto/update-gear-record.input";

@Injectable()
export class GearRecordsService {
  create(createGearRecordInput: CreateGearRecordInput) {
    return "This action adds a new gearRecord";
  }

  findAll() {
    return `This action returns all gearRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gearRecord`;
  }

  update(id: number, updateGearRecordInput: UpdateGearRecordInput) {
    return `This action updates a #${id} gearRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} gearRecord`;
  }
}
