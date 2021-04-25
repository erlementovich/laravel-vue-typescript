import {IUser} from '@/entity/user/user.types';

export interface IAuth {
    user(): IUser;

    fetch(): Promise<void>;

    load(): Promise<any>;

    login(data: { data: any; fetchUser: boolean; staySignedIn: boolean }): Promise<any>;

    register(data: { data: any }): Promise<any>;

    logout(data: any): Promise<void>;
}
