import Embed from './Embed';

/**
 * Discord webhook execution content.
 *
 * @link https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 */
export default interface Webhook {
    /**
     * Message contents.
     * (Max 2000 characters)
     */
    content?: string;

    /**
     * Webhook username override
     */
    username?: string;

    /**
     * Whether or not this notification should be read as text to speech.
     */
    tts?: boolean;

    /**
     * Contents of a file being sent.
     */
    file?: any,

    /**
     * Embedded "rich" content.
     */
    embeds?: Embed[];
}