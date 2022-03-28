import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "./",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleDirectories: ["node_modules"],
  globals: {
    "ts-jest": {
      tsconfigFile: "tsconfig.json",
    },
  },
};
export default config;
