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
    public execute(options: Webhook.POST) {
        return this.client.request({
            method: 'POST',
            data: options,
        })
    }

    /**
     * Modify the current webhook.
     */
    public modify(options: Webhook.PATCH) {
        return this.client.request({
            method: 'PATCH',
            data: options,
        });
    }

    /**
     * Get the current webhook.
     */
    public get(): AxiosPromise<Webhook.GET> {
        return this.client.request({
            method: 'GET',
        })
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