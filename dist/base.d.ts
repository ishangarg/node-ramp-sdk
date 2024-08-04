type Config = {
    apiKey: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private apiKey;
    baseUrl: string;
    constructor(config: Config);
    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export {};
