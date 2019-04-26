/**
 * Embed object.
 *
 * @link https://discordapp.com/developers/docs/resources/channel#embed-object
 */
export default interface Embed {
    /**
     * Title of the embed.
     */
    title?: string;

    /**
     * Embed type.
     * (Always "rich" for webhook embeds)
     */
    type?: 'rich';

    /**
     * Description of the embed.
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
}

