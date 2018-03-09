require('dotenv').config();

// jest.config.js
module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/src/.*\\.(spec.ts|spec.js)$'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  }
};
