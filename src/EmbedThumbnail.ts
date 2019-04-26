export default interface EmbedThumbnail {
    /**
     * Source URL of the thumbnail.
     * (Only supports http(s) and attachments)
     */
    url: string;

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