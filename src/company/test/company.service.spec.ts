import { Test, TestingModule } from "@nestjs/testing";
import { CompanyController } from "../company.controller";
import { CompanyService } from "../company.service";

describe("Company controller testing", () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        {
          provide: CompanyService,
          useValue: {
            findAll: jest.fn(),
            create: jest.fn(),
            findOne: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    companyController = moduleRef.get<CompanyController>(CompanyController);
    companyService = moduleRef.get<CompanyService>(CompanyService);
    jest.clearAllMocks();
  });

  it("Company controller should be defined", () => {
    expect(companyController).toBeDefined();
  });

  it("Company service should be defined", () => {
    expect(companyService).toBeDefined();
  });
});
