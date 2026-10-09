import {defineConfig} from "@playwright/test";
export default defineConfig({
 testDir:".",testMatch:"browser.spec.mjs",
 fullyParallel:false,workers:1,retries:0,
 timeout:45000,expect:{timeout:12000},
 reporter:[["list"]],
 use:{browserName:"chromium",headless:true,trace:"retain-on-failure"}
});
