import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.model";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { Op } from "sequelize";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyModel: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    // return this.companyModel.create(CreateCompanyDto)
    const company = await this.companyModel.create(createCompanyDto);
    return company;
  }

  async findAllCompanies(): Promise<Company[]> {
    return this.companyModel.findAll();
  }
  async findOneCompanies(id: number): Promise<Company | null> {
    return this.companyModel.findByPk(id);
  }

  async updateCompany(
    id: number,
    UpdateCompanyDto: UpdateCompanyDto
  ): Promise<Company | null> {
    const updateCompany = await this.companyModel.update(UpdateCompanyDto, {
      where: { id },
      returning: true,
    });

    return updateCompany[1][0];
  }

  async deleteCompany(id: number) {
    const deleteCompany = await this.companyModel.destroy({ where: { id } });
    if (deleteCompany > 0) {
      return "Company o'chirildi ";
    }
    return "aqlin yetmasa nega o'chirasan a";
  }

  async findbyname(name: string): Promise<Company[]> {
    return this.companyModel.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }
}
