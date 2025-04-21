import { Injectable } from "@nestjs/common";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Machine } from "./models/machine.model";
import { CompanyService } from "src/company/company.service";

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine) private machineModule: typeof Machine,
    private readonly companyService: CompanyService
  ) {}

  create(createMachineDto: CreateMachineDto) {
    return this.machineModule.create(createMachineDto);
  }

  findAll() {
    return this.machineModule.findAll({include: { all: true }});
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return `This action updates a #${id} machine`;
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}
