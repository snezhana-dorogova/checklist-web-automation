import {test} from '@playwright/test';
import * as OS from "os";
import config from "../../playwright.config.mjs";

test.describe.parallel(config.use.browserName, async () => {
    let viewports = [1920, 1440, 1024, 960, 768, 640, 360];
    let links = ['/'];

    links.map(async (link) => {
        test.describe(link, async () => {
            test.beforeEach(async ({page}) => {
                await page.goto(link);
                await scrollToBottom(page);
            });

            test('save a screen', async ({page}, testInfo) => {
                for (const screenWidth of viewports) {
                    await page.setViewportSize({width: screenWidth, height: 800});
                    await page.waitForTimeout(500);

                    const screenTitle = `${config.use.browserName}-${screenWidth}-${OS.platform()}-${generateName()}.png`;
                    await page.screenshot({
                        fullPage: true
                    }).then(function (buffer) {
                        testInfo.attachments.push({
                            name: screenTitle,
                            body: buffer,
                            contentType: 'image/png'
                        });
                    });
                }
            });
        });
    });
});

const scrollToBottom = (page) => {
    return page.evaluate(() => window.scrollBy(0, document.body.scrollHeight))
}

const generateName = () => {
    return Math.random().toString(16).substring(2, 15);
}
