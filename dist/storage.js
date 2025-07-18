export class StorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    get(key) {
        return this.storage.getItem(key);
    }
}
