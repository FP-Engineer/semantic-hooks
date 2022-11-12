module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'dist/',
    'index.ts',
    '<rootDir>/src/types/',

  ],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx,jsx}', '!<rootDir>/src/**/*.stories.*'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
