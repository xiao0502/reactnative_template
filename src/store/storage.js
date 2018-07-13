import {action, observable} from "mobx";

class StorageState {
    @observable storage = {};

    @action addStorage(key, val) {
        this.storage.key = val;
    }
}
export default new StorageState()
