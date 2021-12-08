const config = {
  retries: 0,
  use: {
    baseURL: 'http://localhost:5000',
    browserName: 'chromium',
    headless: true,
    viewport: {width: 1366, height: 700},
    ignoreHTTPSErrors: false,
    video: 'off',
    trace: 'retain-on-failure',
    contextOptions: {
      acceptDownloads: false,
      storageState: {}
    }
  },
  expect: {
    timeout: 1000
  },
  reporter: [['list'], ['html'], ['allure-playwright']]
};

export default config;
