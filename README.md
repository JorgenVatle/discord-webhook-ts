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
const discordClient = new DiscordWebhook('https://discordapp.com/api/webhooks/4752...');
```

##### Execute a webhook
```js
discordClient.execute({
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
})
```

##### Get the current webhook information
```js
discordClient.get().then((response) => console.log(response.data))
```

##### Update the current webhook
```js
discordClient.modify({
    name: 'new name',
    avatar: 'https://via.placeholder.com/150',
}).then((response) => {
    console.log('Successfully updated webhook!');
})
```

## Usage (TypeScript users)
Pull in and attach the Discord [`Webhook.input.POST`](src/Types/Webhook/index.d.ts) interface to your request object.
```typescript
import DiscordWebhook, { Webhook } from 'discord-webhook-ts';

// Pass in your Discord webhook URL.
const discordClient = new DiscordWebhook('https://discordapp.com/api/webhooks/4752...');

const requestBody: Webhook.input.POST = {
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

discordClient.execute(requestBody) // -> Promise<AxiosResponse>
```

## Contributing
Contributions are more than welcome! If you spot a missing or incorrectly formatted or documented property, 
just submit a pull request.

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.