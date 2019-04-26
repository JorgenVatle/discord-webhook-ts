import Attachment from '../../Attachment';

/**
 * Embed Image Structure
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export default interface EmbedImage {
    /**
     * Source URL of the image.
     * (Only supports http(s) and attachments)
     */
    url: string | Attachment;

    /**
     * A proxied URL of the thumbnail.
     */
    proxy_url?: string;

    /**
     * Height of the thumbnail.
     */
    height?: number;

    /**
     * Width of the thumbnail.
     */
    width?: number;
}