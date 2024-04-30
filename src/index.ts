import "reflect-metadata";
import { UserService } from "./UserService";
import Container from "typedi";

const serviceInstance = Container.get(UserService);

serviceInstance.userRepo.getAll();
