import { Company } from "../../models/company.model";

export const companyStub = (): Partial<Company> => {
  return {
    id: 1,
    name: "Company 1",
    phone: "+998901234567",
    email: "info@company1.com",
    address: "1234, Tashkent street",
  };
};
