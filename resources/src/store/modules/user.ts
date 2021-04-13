import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import store from '@/store'
import {IUserState} from "@/store/modules/user.type"

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
    public token = ''
    public name = ''
    public avatar = ''
    public introduction = ''
    public roles: string[] = []
    public email = ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Mutation
    private SET_NAME(name: string) {
        this.name = name
    }

    @Mutation
    private SET_AVATAR(avatar: string) {
        this.avatar = avatar
    }

    @Mutation
    private SET_INTRODUCTION(introduction: string) {
        this.introduction = introduction
    }

    @Mutation
    private SET_ROLES(roles: string[]) {
        this.roles = roles
    }

    @Mutation
    private SET_EMAIL(email: string) {
        this.email = email
    }

    @Action
    public async Login(userInfo: { username: string, password: string }) {
    }

    @Action
    public ResetToken() {
    }

    @Action
    public async GetUserInfo() {

    }

    @Action
    public async ChangeRoles(role: string) {

    }

    @Action
    public async LogOut() {

    }
}

export const UserModule = getModule(User)
