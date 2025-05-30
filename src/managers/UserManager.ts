import { AxiosInstance } from 'axios';
import { User } from '../entities/User.js';
import { CachedManager } from './CachedManager.js';

export class UserManager extends CachedManager<User> {
    constructor(private readonly client: AxiosInstance) {
        super();
    }

    async fetchUser(userID: number) {
        const res = await this.client.get<User>(`/user/${userID}`);
        return res.data;
    }
}
