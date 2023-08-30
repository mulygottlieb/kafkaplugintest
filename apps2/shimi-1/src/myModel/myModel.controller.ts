import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyModelService } from "./myModel.service";
import { MyModelControllerBase } from "./base/myModel.controller.base";

@swagger.ApiTags("myModels")
@common.Controller("myModels")
export class MyModelController extends MyModelControllerBase {
  constructor(
    protected readonly service: MyModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
