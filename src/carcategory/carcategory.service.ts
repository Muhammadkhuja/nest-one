import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateCarCategoryDto } from "./dto/create-carcategory.dto";
import { CarCategory } from "./models/carcategory.model";
import { UpdateCarCategoryDto } from "./dto/update-carcategory.dto";

@Injectable()
export class CarcategoryService {
  constructor(
    @InjectModel(CarCategory) private carcategoryModel: typeof CarCategory
  ) {}

  async createCarcategory(
    createCarcategoryDto: CreateCarCategoryDto
  ): Promise<CarCategory> {
    const carcategory =
      await this.carcategoryModel.create(createCarcategoryDto);
    return carcategory;
  }

  async findAllCarcategory(): Promise<CarCategory[]> {
    return this.carcategoryModel.findAll();
  }

  async findOneCarcategory(id: number): Promise<CarCategory | null> {
    return this.carcategoryModel.findByPk();
  }

  async updateCarcategory(
    id: number,
    UpdateCarCategoryDto: UpdateCarCategoryDto
  ): Promise<CarCategory | null> {
    const updateCarcategory = await this.carcategoryModel.update(UpdateCarCategoryDto, {
        where: {id},
        returning: true,
    })

    return updateCarcategory[1][0];
  }

  async deleteCarcategory(id: number) {
    const deleteCarcategory = await this.carcategoryModel.destroy({where: {id}})
    if (deleteCarcategory > 0) {
        return "Car Category o'chirildi "
    }
    return "O'chmadi !?"
  }
}
