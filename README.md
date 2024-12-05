
# Steps to reproduce with this repo
1. Clone
2. `npm install`
3. `npx expo start`

# Steps to reproduce without this repo
1. `npx create-expo-app@latest ExpoEnvRepro`
2. `cd ExpoEnvRepro`
3. `npm install expo-dev-client`
4. Add the following `app.config.js` file:
```
export default ({ config }) => {
  if (!process.env.TEST_ENV) {
    throw new Error("TEST_ENV is not set");
  }
  return config;
};

```
5. Add the following `.env` file:
```
TEST_ENV=true
```
6. `npx expo start`

### Expected results
It starts without issues, since we have set TEST_ENV

### Actual results
Error("TEST_ENV is not set")

