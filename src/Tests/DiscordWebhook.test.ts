import DiscordWebhook from '../index';
import Config from 'config';

describe('DiscordWebhook', () => {

    it('can validate a webhook URL', async () => {
        const validDiscordInstance = new DiscordWebhook(Config.get('webhookUrl'));
        const invalidDiscordInstance = new DiscordWebhook('https://discord.com/api/webhooks/some-invalid-url');

        expect(await validDiscordInstance.isValid()).toBe(true);
        expect(await invalidDiscordInstance.isValid()).toBe(false);
    })

})