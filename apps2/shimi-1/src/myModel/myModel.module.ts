import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MyModelModuleBase } from "./base/myModel.module.base";
import { MyModelService } from "./myModel.service";
import { MyModelController } from "./myModel.controller";
import { MyModelResolver } from "./myModel.resolver";

@Module({
  imports: [MyModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [MyModelController],
  providers: [MyModelService, MyModelResolver],
  exports: [MyModelService],
})
export class MyModelModule {}
