require("dotenv").config();
const createApp = require("./app");

// Create a single app instance that can be:
// - exported for serverless/production environments (e.g. Vercel)
// - started as a standalone HTTP server when run locally with `node src/server.js`
const app = createApp();

// If this file is executed directly ("node src/server.js"), start the server.
// When required by a serverless platform (like Vercel), `require.main !== module`
// and we simply export the Express app as the request handler.
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
  });
} else {
  module.exports = app;
}