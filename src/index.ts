import Axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import Webhook from '../types/Webhook';
import Embed from '../types/Embed';
import EmbedThumbnail from '../types/Embed/Thumbnail';
import EmbedVideo from '../types/Embed/Video';
import EmbedProvider from '../types/Embed/Provider';
import EmbedImage from '../types/Embed/Image';
import EmbedFooter from '../types/Embed/Footer';
import EmbedField from '../types/Embed/Field';
import EmbedAuthor from '../types/Embed/Author';

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

export {
    EmbedAuthor,
    EmbedField,
    EmbedFooter,
    EmbedImage,
    EmbedProvider,
    EmbedThumbnail,
    EmbedVideo,
    Embed,
    Webhook,
}