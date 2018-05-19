require('dotenv').config();

// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tools/',
    '/dist',
    '/test/',
    '/src/models',
    '/src/.*\\.(spec.ts|model.ts)$'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  maxWorkers: 1,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ],
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  }
};
