import Attachment from '../../Attachment';

/**
 * Embed Author Structure
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export default interface EmbedAuthor {

    /**
     * Name of the author.
     */
    name?: string;

    /**
     * URL of the author.
     */
    url?: string;

    /**
     * URL of the author icon.
     * (Only supports HTTP(s) and attachments)
     */
    icon_url?: string | Attachment;

    /**
     * Proxied URL of the author icon.
     */
    proxy_icon_url?: string;

}