import fetch from "isomorphic-unfetch"

type Config = {
    apiKey: string,
    baseUrl? : string
}

export abstract class Base{
    private apiKey: string;
    public baseUrl: string;

    constructor (config: Config){
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://api.ramp.com/developer/v1/";
    }

    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T>{
        const url = `${this.baseUrl}${endpoint}`

        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`,
            "Accept": "application/json"
        }

        const config = {...options, headers}

        return fetch(url, config).then(response => {
            console.log(response.body)
            return response.json()
        })
    }
}