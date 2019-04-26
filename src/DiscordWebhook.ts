import Axios, { AxiosInstance } from 'axios';
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
     * Execute a webhook request.
     */
    public execute(options: Webhook) {
        return this.client.request({
            method: 'POST',
            data: options,
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