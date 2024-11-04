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

        const now = new Date(Date.Now());

        if (entry.expiration_time < now) {
            return null;
        }

        return entry.value;
    }

    set(key, value) {
        const new_entry = {
            value: value,
            expiration_time: new Date(Date.Now() + this.expiration_time_offset)
        }

        this.cache[key] = new_entry;
    }
}