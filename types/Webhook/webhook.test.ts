import DiscordWebhook from './index';

const contentRequest: DiscordWebhook = {
    content: 'Some message',
};

const embedRequest: DiscordWebhook = {
    embeds: [
        {
            title: 'Some title',
            description: 'Some description',
        },
        {
            fields: [
                {
                    name: 'Some field',
                    value: 'Some field value',
                }
            ]
        }
    ]
};

const fileRequest: DiscordWebhook = {
    file: 'some plaintext file',
};