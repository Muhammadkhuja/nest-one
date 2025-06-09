import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const respone = await request(app.getHttpServer())
      .post("/auth/singin")
      .send({
        email: "hello9@gmail.com",
        password: "kimdsn_1pq",
        value: "superadmin",
      });
    token = respone.body.token;
    console.log("token", token);
  });
  it("/users (GET) --> 200 ok", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });
  it(`/users (GET) --> 401 "Unauthoruzed", erro`, () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

  it("auth/singup (POST) --> 201", async () => {
    return request(app.getHttpServer()).post("/auth/singup").send({
      name: "Kimdurrvoad2",
      email: "hello92@gmail.com",
      password: "kimdsn_1pq12",
      value: "superadmin",
    })
    .expect("Content-Type", /json/)
    .expect(201)
    .expect({
        message: "Bunady email foydalanuvchi mavjud",
        error: "Bad Request" ,
        
    })
  })

  afterAll(async () => {
    await app.close();
  });
});
