import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyModelServiceBase } from "./base/myModel.service.base";

@Injectable()
export class MyModelService extends MyModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
