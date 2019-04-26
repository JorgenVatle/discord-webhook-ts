import Attachment from '../../Attachment';

/**
 * Embed Footer Structure
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export default interface EmbedFooter {

    /**
     * Footer text.
     */
    text: string;

    /**
     * URL of the footer icon.
     * Only supports HTTP(s) and attachments
     */
    icon_url?: string | Attachment;

    /**
     * A proxied URL of the footer icon.
     */
    proxy_icon_url?: string;

}