/**
 * Embed object.
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object
 */
import EmbedFooter from './EmbedFooter';
import EmbedImage from './EmbedImage';
import EmbedThumbnail from './EmbedThumbnail';
import EmbedVideo from './EmbedVideo';
import EmbedProvider from './EmbedProvider';
import EmbedAuthor from './EmbedAuthor';
import EmbedField from './EmbedField';

export default interface Embed {
    /**
     * Title of the embed.
     * Up to 256 characters.
     */
    title?: string;

    /**
     * Embed type.
     * (Always "rich" for webhook embeds)
     */
    type?: 'rich';

    /**
     * Description of the embed.
     * Up to 2048 characters.
     */
    description?: string;

    /**
     * ISO8601 timestamp of the embed content.
     */
    timestamp?: string;

    /**
     * color code of the embed.
     */
    color: number;

    /**
     * Footer information.
     */
    footer?: EmbedFooter;

    /**
     * Image information.
     */
    image?: EmbedImage;

    /**
     * Thumbnail information.
     */
    thumbnail?: EmbedThumbnail;

    /**
     * Video information.
     */
    video?: EmbedVideo;

    /**
     * Provider information.
     */
    provider?: EmbedProvider;

    /**
     * Author information.
     */
    author?: EmbedAuthor;

    /**
     * Fields information.
     * Up to 25 fields.
     */
    fields?: EmbedField[];
}

