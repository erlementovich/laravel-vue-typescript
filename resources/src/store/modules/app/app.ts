import {VuexModule, Module, getModule} from 'vuex-module-decorators'
import store from '@/store'
import {DeviceType, IAppState} from "@/store/modules/app/app.type";
import {getStorageItem} from "@/utils/localStorage";

@Module({dynamic: true, store, name: 'app'})
class App extends VuexModule implements IAppState {
    public sidebar = {
        opened: getStorageItem('sidebarStatus'),
    }

    public device = DeviceType.Desktop
    public size = getStorageItem('windowSize')
}

export const AppModule = getModule(App)
