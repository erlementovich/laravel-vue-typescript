import {IUser, UserResponseType} from "@/entity/user/user.types";

export class User implements IUser {
    readonly id!: number;
    readonly login!: string;
    readonly user_fio!: string;


    constructor(data: UserResponseType | null) {
        if (data !== null) {
            this.id = data.id;
            this.login = data.login;
            this.user_fio = data.user_fio;
        }
    }
}
