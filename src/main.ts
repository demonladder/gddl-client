import axios, { AxiosInstance } from 'axios';
import { UserManager } from './managers/UserManager.js';

interface ClientOptions {
    origin?: string;
}

export default class GDDLClient {
    private readonly client: AxiosInstance;
    public readonly users: UserManager;

    constructor(options: ClientOptions = {}) {
        this.client = axios.create({
            baseURL: options.origin ?? 'https://gdladder.com/api',
            headers: {
                'User-Agent': 'GDDLClient/1.0',
            },
        });

        this.users = new UserManager(this.client);
    }
}
