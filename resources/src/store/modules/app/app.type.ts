export enum DeviceType {
    Mobile,
    Desktop,
}

export interface IAppState {
    device: DeviceType
    sidebar: {
        opened: boolean
    }
    size: string
}
