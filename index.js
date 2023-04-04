const Sentry = require("@sentry/node");
const got = require("got");
const dotenv = require("dotenv");

console.log(process.versions.node);

dotenv.config();

(async () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });

  try {
    const response = await got(
      // PRIVATE REPO:
      "https://api.github.com/repos/abhiprasad/dotfiles/commits?per_page=1",
      {
        password: process.env.GITHUB_TOKEN,
      }
    );
    console.log(response.body);
  } catch (err) {
    console.error(err);
  }
})();
