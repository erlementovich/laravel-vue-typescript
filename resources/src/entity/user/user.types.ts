export type UserResponseType = {
    readonly id: number;
    readonly login: string;
    readonly user_fio: string;
};

export interface IUser {
    readonly id: number;
    readonly login: string;
    readonly user_fio: string;
}
