import { Service } from "typedi";

@Service()
export class UserRepository {
  getAll = () => {
    console.log("Getting all the users");
  };
}
