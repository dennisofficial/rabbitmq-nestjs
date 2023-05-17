import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '__tests__/(unit|e2e)/.*.(spec|test).ts$',
  moduleDirectories: ['<rootDir>', 'node_modules'],
  collectCoverageFrom: ['src/**/*.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
};
export default config;
