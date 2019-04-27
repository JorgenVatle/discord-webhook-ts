import Webhook from './index';

const contentRequest: Webhook.input.POST = {
    content: 'Some message',
};

const embedRequest: Webhook.input.POST = {
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

const fileRequest: Webhook.input.POST = {
    file: 'some plaintext file',
};