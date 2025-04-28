import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { getModelToken } from "@nestjs/sequelize";
import { RolesService } from "../../roles/roles.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../models/user.model";
import { Role } from "../../roles/models/role.model";
import { userStab } from "./stubs/users.stub";

describe("Users service", () => {
  let usersService: UsersService;
  const mockUsersModel = {
    create: jest.fn().mockImplementation(userStab),
    findOne: jest.fn().mockImplementation(userStab),
    findAll: jest.fn().mockImplementation(() => [userStab()]),
    findByPk: jest.fn().mockImplementation(userStab),
    destroy: jest.fn(),
  };
  const mockRolesModel = {
    findOne: jest.fn().mockImplementation((value: string) => "USER"),
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        RolesService,
        {
          provide: getModelToken(User),
          useValue: mockUsersModel,
        },
        {
          provide: getModelToken(Role),
          useValue: mockRolesModel,
        },
      ],
    }).compile();
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("createUser", () => {
    describe("when create User is called", () => {
      let createUsersDto: CreateUserDto;
      let newUser: User;
      beforeEach(async () => {
        createUsersDto = {
          name: userStab().name!,
          email: userStab().email!,
          password: userStab().password!,
          value: "user",
        };
        newUser = await usersService.create(createUsersDto);
        console.log(newUser);
      });
      it("should be create new user", async () => {
        expect(newUser).toMatchObject({
          ...userStab(),
        });
      });
    });
  });

  describe("getOneUser", () => {
    describe("when getOneUser is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findOne(userStab().id!)).toEqual(userStab());
      });
    });
  });

  describe("getAllUsers", () => {
    describe("when getAllUsers is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findAll()).toEqual([userStab()]);
      });
    });
  });
});
