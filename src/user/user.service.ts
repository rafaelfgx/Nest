import { Injectable } from "@nestjs/common";
import User from "./user.entity";

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: crypto.randomUUID(),
            username: "admin",
            password: "123456"
        }
    ];

    async getByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
