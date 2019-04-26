import Axios, { AxiosInstance } from 'axios';
import Webhook from '../types/Webhook';

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
            url: webhookUrl,
        });
    }

    /**
     * Execute a webhook request.
     *
     * @param options
     */
    public execute(options: Webhook) {
        return this.client.request({
            method: 'POST',
            data: options,
        })
    }

}