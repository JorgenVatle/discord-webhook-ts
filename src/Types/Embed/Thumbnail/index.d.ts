import Attachment from '../../Attachment';

/**
 * Embed Thumbnail Structure
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export default interface EmbedThumbnail {
    /**
     * Source URL of the thumbnail.
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