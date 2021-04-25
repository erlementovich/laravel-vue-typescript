/* eslint-disable @typescript-eslint/interface-name-prefix */
import Vue, { VueConstructor } from 'vue';
declare module 'vue/types/vue' {
    interface Vue {
        activeErrorMessages: string[];
        isValid: boolean;
    }

    interface VueConstructor {
        activeErrorMessages: string[];
        isValid: boolean;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        activeErrorMessages?: string[];
        isValid?: boolean;
    }
}
