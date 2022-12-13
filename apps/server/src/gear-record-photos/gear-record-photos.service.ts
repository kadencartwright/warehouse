import { Inject, Injectable } from "@nestjs/common";
import { FileSystemService } from "src/file-system/file-system.service";
import { Repository } from "typeorm";
import { GEAR_RECORD_PHOTO_REPOSITORY } from "../constants";
import { CreateGearRecordPhotoInput } from "./dto/create-gear-record-photo.input";
import { UpdateGearRecordPhotoInput } from "./dto/update-gear-record-photo.input";
import { GearRecordPhoto } from "./entities/gear-record-photo.entity";

@Injectable()
export class GearRecordPhotosService {
  constructor(
    @Inject(GEAR_RECORD_PHOTO_REPOSITORY)
    private readonly gearRecordPhotoRepository: Repository<GearRecordPhoto>,
    @Inject(FileSystemService)
    private readonly fileSystemService: FileSystemService
  ) {}

  async create(createGearRecordPhotoInput: CreateGearRecordPhotoInput) {
    const result = await this.fileSystemService.upload(
      createGearRecordPhotoInput.photo.createReadStream()
    );
    if (result.success) {
      this.gearRecordPhotoRepository.create({
        fileName: result.fileName,
        gearRecord: { id: createGearRecordPhotoInput.gearRecordId },
      });
    }
    return result.success;
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
