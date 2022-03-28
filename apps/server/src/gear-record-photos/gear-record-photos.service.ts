import { Inject, Injectable } from "@nestjs/common";
import { createWriteStream } from "fs";
import { Repository } from "typeorm";
import { GEAR_RECORD_PHOTO_REPOSITORY } from "../constants";
import { CreateGearRecordPhotoInput } from "./dto/create-gear-record-photo.input";
import { UpdateGearRecordPhotoInput } from "./dto/update-gear-record-photo.input";
import { GearRecordPhoto } from "./entities/gear-record-photo.entity";

@Injectable()
export class GearRecordPhotosService {
  constructor(
    @Inject(GEAR_RECORD_PHOTO_REPOSITORY)
    private readonly gearRecordPhotoRepository: Repository<GearRecordPhoto>
  ) {}

  async create(createGearRecordPhotoInput: CreateGearRecordPhotoInput) {
    const { createReadStream } = createGearRecordPhotoInput.photo;
    const filename = `${createGearRecordPhotoInput.gearRecordId}-${(
      Math.random() + 1
    )
      .toString(36)
      .substring(2)}`;
    const uploadIsSuccessful = await new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );

    if (uploadIsSuccessful) {
      this.gearRecordPhotoRepository.create({
        fileName: filename,
        gearRecord: { id: createGearRecordPhotoInput.gearRecordId },
      });
      return true;
    } else {
      return false;
    }
  }

  async findAll() {
    return await this.gearRecordPhotoRepository.find();
  }

  async findOne(id: number) {
    return await this.gearRecordPhotoRepository.findOne(id);
  }

  async update(
    id: number,
    updateGearRecordPhotoInput: UpdateGearRecordPhotoInput
  ) {
    return await this.gearRecordPhotoRepository.update(
      { id },
      updateGearRecordPhotoInput
    );
  }

  async remove(id: number) {
    const record = await this.gearRecordPhotoRepository.findOne({ id });
    return this.gearRecordPhotoRepository.delete(record);
  }
}
