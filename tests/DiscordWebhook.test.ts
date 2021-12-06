import DiscordWebhook from '../src';
import Config from 'config';
import OS from 'os';

describe('DiscordWebhook', () => {

    const discord = new DiscordWebhook(Config.get('webhookUrl'));

    it('can validate a webhook URL', async () => {
        const validDiscordInstance = new DiscordWebhook(Config.get('webhookUrl'));
        const invalidDiscordInstance = new DiscordWebhook('https://discord.com/api/webhooks/some-invalid-url');

        expect(await validDiscordInstance.isValid()).toBe(true);
        expect(await invalidDiscordInstance.isValid()).toBe(false);
    })

    it('can send messages', async () => {
        await discord.execute({
            username: OS.hostname(),
            content: `Testing testing - ${new Date().toISOString()}`
        })
    })

})