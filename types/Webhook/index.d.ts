import IndexD from '../Embed';
import Attachment from '../Attachment';

interface BaseWebhook {
    /**
     * Webhook username override
     */
    username?: string;

    /**
     * Whether or not this notification should be read as text to speech.
     */
    tts?: boolean;
}

interface ContentWebhook {
    /**
     * Message contents.
     * (Max 2000 characters)
     */
    content: string;
}

interface FileWebhook {
    /**
     * Contents of a file being sent.
     */
    file: Attachment;
}

interface EmbedsWebhook {
    /**
     * Embedded "rich" content.
     */
    embeds: IndexD[];
}

/**
 * Discord webhook execution content.
 *
 * @link https://discordapp.com/developers/docs/resources/webhook#execute-webhook
 */
type Webhook = BaseWebhook & ContentWebhook | FileWebhook | EmbedsWebhook;

export default Webhook;