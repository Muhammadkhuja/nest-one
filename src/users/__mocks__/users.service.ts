import { userStab } from "../test/stubs/users.stub";


export const UsersService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(userStab()),
    findAll: jest.fn().mockResolvedValue([userStab()]),
    findOne: jest.fn().mockResolvedValue(userStab()),
    remove: jest.fn().mockReturnValue({message: "Foydalanuvchi yoq" })
})