const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-cgk4fg8rddleudspq180-a.oregon-postgres.render.com"
      ),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "portfolio_2lmo"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "rQbGt8uA1Cqh0LGAs1NyjRIKXe3CjY3R"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    useNullAsDefault: true,
  },
});
