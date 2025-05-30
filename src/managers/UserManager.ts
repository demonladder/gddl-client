import { AxiosInstance } from 'axios';
import { User } from '../entities/User.js';
import { CachedManager } from './CachedManager.js';

export class UserManager extends CachedManager<User> {
    constructor(private readonly client: AxiosInstance) {
        super();
    }

    async fetchUser(userID: number) {
        if (this.cache.has(userID)) {
            return this.cache.get(userID);
        }

        const res = await this.client.get<{ ID: number; Name: string }>(
            `/user/${userID}`,
        );
        this.cache.set(userID, new User(res.data.ID, res.data.Name));
        return res.data;
    }
}
