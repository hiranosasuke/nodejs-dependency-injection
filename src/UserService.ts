import { UserRepository } from "./UserRepository";
import { Service } from "typedi";

@Service()
export class UserService {
  userRepo: UserRepository;

  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  logUserData = () => {
    this.userRepo.getAll();
  };
}
