import { JwtService } from "@nestjs/jwt";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { Test } from "@nestjs/testing";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStab } from "./stubs/users.stub";

jest.mock("../users.service");

describe("User controller testing", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = modulRef.get<UsersController>(UsersController);
    usersService = modulRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  test("User service should be defined", () => {
    expect(usersController).toBeDefined();
  });

  describe("Create User testing", () => {
    describe("when create user called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStab().name!,
          email: userStab().email!,
          password: userStab().password!,
          value: "user",
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      it("then it should call userService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });

      it("then it should return user", () => {
        expect(user).toEqual(userStab());
      });
    });
  });

  describe("Find all user", () => {
    describe("when findAll users called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await usersController.findAll();
        console.log(users);
      });
      it("then it should be call userService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });

      test("then it should return users", () => {
        expect(users).toEqual([userStab()]);
      });
    });
  });

  describe("Get users by id", () => {
    describe("when findOne users called", () => {
      let user: User | null;
      let id: number;
      beforeAll(async () => {
        id = userStab().id as number;
        user = await usersController.findOne(id.toString());
        console.log(user);
      });
      it("then it should call userService", () => {
        expect(usersService.findOne).toHaveBeenCalledWith(id);
      });

      test("then it should return users", () => {
        expect(user).toEqual(userStab());
      });
    });
  });

  describe("removed user", () => {
    describe("when removed user id called", () => {
      let result: Object;
      beforeAll(async () => {
        result = await usersController.remove(String(userStab().id));
      });
      test("then it should call userService removed method", () => {
        expect(usersService.remove).toHaveBeenCalledWith(userStab().id);
      });
      test("then it should remove user", () => {
        expect(result).toEqual({ message: "Foydalanuvchi yoq" });
      });
    });
  });
});
