import { Injectable, StreamableFile } from "@nestjs/common";
import { createWriteStream, PathLike, ReadStream } from "fs";
import fs from "fs";
import { pipeline } from "stream";
import { join } from "path";
@Injectable()
export class FileSystemService {
  getStream(path: PathLike): StreamableFile {
    return new StreamableFile(fs.createReadStream(path));
  }
  async upload(photoStream: ReadStream) {
    const fileName = this.generateFileName();
    const writeStream = createWriteStream(this.getUploadPath(fileName));
    return new Promise<
      { success: true; fileName: string } | { success: false }
    >(async (resolve) => {
      pipeline(photoStream, writeStream, (err) => {
        err
          ? resolve({ success: false })
          : resolve({ success: true, fileName });
      });
    });
  }
  getUploadPath(fileName: string): PathLike {
    return join(__dirname, "../", "../", "uploads", fileName);
  }
  generateFileName() {
    return `${(Math.random() + 1).toString(36).substring(2)}`;
  }
}
