import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ quiet: true, path: path.join(__dirname, ".env.test") });
dotenv.config({ quiet: true, path: path.join(__dirname, ".env.test.local") });

export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? "github" : "html",
  globalSetup: path.join(__dirname, "./test/e2e/global-setup.ts"),
  globalTeardown: path.join(__dirname, "./test/e2e/global-teardown.ts"),
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium-authenticated",
      use: {
        ...devices["Desktop Chrome"],
        storageState: path.join(__dirname, "playwright/.auth/user.json"),
      },
      dependencies: ["setup"],
      testIgnore: /auth\.spec\.ts/, 
    },
    {
      name: "chromium-unauthenticated",
      use: {
        ...devices["Desktop Chrome"],
      },
      testMatch: /auth\.spec\.ts/,
    },
  ],
});
