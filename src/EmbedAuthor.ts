import Attachment from './Attachment';

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