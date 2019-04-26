/**
 * Embed Video Structure
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export default interface EmbedVideo {
    /**
     * Source URL of the video.
     */
    url: string;

    /**
     * Height of the video.
     */
    height?: number;

    /**
     * Width of the video.
     */
    width?: number;
}