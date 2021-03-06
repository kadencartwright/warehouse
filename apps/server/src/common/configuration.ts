export type Configuration = {
  serverPort: number;
  database: {
    host: string;
    port: number;
    user: string;
    name: string;
    password: string;
  };
  jwt: { secret: string };
};
export default () => {
  return {
    serverPort: parseInt(process.env.SERVER_PORT, 10),
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      user: process.env.DATABASE_USER,
      name: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
    },
    jwt: {
      secret: "6dKLBgNwnIDfmZaak",
    },
  };
};
