export default ({ config }) => {
  if (!process.env.TEST_ENV) {
    throw new Error("TEST_ENV is not set");
  }
  return config;
};
