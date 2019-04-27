import Embed from '../Embed';
import Attachment from '../Attachment';
import User from '../User';

declare namespace input {
    /**
     * Modify a webhook
     */
    export interface PATCH {

        /**
         * Update the default name of the webhook.
         */
        name?: string;

        /**
         * Update the default avatar of the webhook.
         */
        avatar?: string;

        /**
         * Move the webhook to another channel.
         * Snowflake
         */
        channel_id?: string;
    }

    interface Base {

        /**
         * Webhook username override.
         */
        username?: string;

        /**
         * Webhook avatar override.
         */
        avatar_url?: string;

        /**
         * Whether or not this notification should be read as text to speech.
         */
        tts?: boolean;
    }

    interface Content {
        /**
         * Message contents.
         * Max 2000 characters
         */
        content: string;
    }

    interface File {
        /**
         * Contents of a file being sent.
         */
        file: Attachment | string;
    }

    interface Embeds {
        /**
         * Embedded "rich" content.
         */
        embeds: Embed[];
    }

    /**
     * Discord webhook execution content.
     *
     * @link https://discordapp.com/developers/docs/resources/webhook#execute-webhook
     */
    export type POST = Base & Content | File | Embeds;

}

declare namespace response {
    /**
     * GET a webhook.
     *
     * @link https://discordapp.com/developers/docs/resources/webhook#get-webhook
     */
    export interface GET {
        /**
         * ID of the current webhook.
         * Snowflake
         */
        id: string;

        /**
         * ID of the channel this webhook belongs to.
         * Snowflake
         */
        channel_id: string;

        /**
         * ID of the guild this webhook belongs to.
         * Snowflake
         */
        guild_id: string;

        /**
         * User that created this webhook.
         */
        user?: User,

        /**
         * Name of the current webhook.
         */
        name: string;

        /**
         * Avatar of the current webhook.
         */
        avatar: string;

        /**
         * Secure token of the current webhook.
         */
        token: string;
    }
}