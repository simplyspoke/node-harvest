module.exports = {
  branches: ['stable'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn docs:generate',
        publishCmd: 'yarn docs:publish'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'release'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: ['release/*.tgz']
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}' // eslint-disable-line no-template-curly-in-string
      }
    ]
  ]
};
