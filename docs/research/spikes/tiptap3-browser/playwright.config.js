import {defineConfig} from '@playwright/test'
export default defineConfig({
  testDir: '.',
  testMatch: '**/browser.spec.js',
  retries: 0,
  workers: 1,
  timeout: 120000,
  reporter: 'line',
  use: {browserName: 'chromium', headless: true, viewport: {width: 1360, height: 850}},
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173/',
    reuseExistingServer: false,
    timeout: 120000,
  },
})
