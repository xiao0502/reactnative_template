import storageState from './storage'

class RootStore {
    constructor() {
        this.storageState = storageState;
    }
}

export default new RootStore()