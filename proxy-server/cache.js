export class CacheProvider {
    constructor() {
        this.cache = {}
        this.expiration_time_offset = 60;
    };

    get(key) {
        const entry = this.cache[key];

        if (entry == null) {
            return null;
        }

        const now = new Date(Date.now());

        if (entry.expiration_time.getTime() < now.getTime()) {
            delete this.cache[key]
            return null;
        }

        return entry.value;
    }

    set(key, value) {
        const new_entry = {
            value: value,
            expiration_time: new Date(Date.now() + this.expiration_time_offset * 1000)
        }

        this.cache[key] = new_entry;
    }
}