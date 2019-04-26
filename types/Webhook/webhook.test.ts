import Webhook from './index';

const contentRequest: Webhook = {
    content: 'Some message',
};

const embedRequest: Webhook = {
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

const fileRequest: Webhook = {
    file: 'some plaintext file',
};