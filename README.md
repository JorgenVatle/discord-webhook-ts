# Discord Webhook Types
Predefined TypeScript types and documentation for Discord webhook requests.

This package contains type definitions for all properties you can pass to a 
[Discord webhook execution request](https://discordapp.com/developers/docs/resources/webhook#execute-webhook), 
along with descriptions for each property.

## Installation
Pull in the package from npm:
```bash
npm install discord-webhook-ts
``` 

## Usage (JavaScript users)
Pull in the webhook client and enjoy auto-completion from your IDE.
```js
import DiscordWebhook from 'discord-webhook-ts';

// Pass in your Discord webhook URL.
const DiscordClient = new DiscordWebhook('https://discordapp.com/api/webhooks/4752...');

DiscordWebhook.execute({
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
}).then((response) => {
    console.log('Successfully sent webhook.')
});
```

## Usage (TypeScript users)
Pull in and attach the Discord [`WebhookBody`](types/Webhook/index.d.ts) interface to your request object.
```typescript
import DiscordWebhook from 'discord-webhook-ts';
import WebhookBody from 'discord-webhook-ts/types/Webhook';

// Pass in your Discord webhook URL.
const DiscordClient = new DiscordWebhook('https://discordapp.com/api/webhooks/4752...');

const requestBody: WebhookBody = {
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
}

DiscordClient.execute(requestBody); // -> Promise<AxiosResponse>
```

## Contributing
Contributions are more than welcome! If you spot a missing or incorrectly formatted or documented property, 
just submit a pull request.

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.