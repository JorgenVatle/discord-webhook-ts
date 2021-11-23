import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import * as Webhook from '../types/Webhook';

export default class DiscordWebhook {

    /**
     * Discord Webhook URL
     */
    private client: AxiosInstance;

    /**
     * Discord Webhook constructor
     */
    public constructor(webhookUrl: string) {
        this.client = Axios.create({
          baseURL: webhookUrl,
        });
    }

    /**
     * Execute the current webhook.
     */
    public execute(options: Webhook.input.POST) {
        return this.client.request({
            method: 'POST',
            data: options,
        })
    }

    /**
     * Modify the current webhook.
     */
    public modify(options: Webhook.input.PATCH) {
        return this.client.request({
            method: 'PATCH',
            data: options,
        });
    }

    /**
     * Get the current webhook.
     */
    public get(): AxiosPromise<Webhook.response.GET> {
        return this.client.request({
            method: 'GET',
        })
    }

    /**
     * Check whether or not the current webhook is valid.
     */
    public isValid(): Promise<boolean> {
        return this.get()
            .then(() => true)
            .catch(() => false);
    }

}