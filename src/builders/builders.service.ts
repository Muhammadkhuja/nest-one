import { Injectable } from "@nestjs/common";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Builder } from "./models/builder.model";
import { CompanyService } from "../company/company.service";

@Injectable()
export class BuildersService {
  constructor(
    @InjectModel(Builder) private builderModule: typeof Builder,
    private readonly companyService: CompanyService
  ) {}

  create(createBuilderDto: CreateBuilderDto) {
    return this.builderModule.create(createBuilderDto);
  }

  findAll() {
    return this.builderModule.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} builder`;
  }

  update(id: number, updateBuilderDto: UpdateBuilderDto) {
    return `This action updates a #${id} builder`;
  }

  remove(id: number) {
    return `This action removes a #${id} builder`;
  }
}
