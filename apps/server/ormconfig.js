module.exports = {
  keepConnectionAlive: true,
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "warehouse_db",
  entities: ["src/**/**.entity{.ts,.js}"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  synchronize: false,
};
