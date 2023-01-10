module.exports = {
  packagerConfig: {
    icon: 'build/bird',
    ignore: ['node_modules', '.gitignore', 'src', 'public'],
    // platform: ['darwin'],
    overwrite: true,
    // arch: ['x64']
  },
  rebuildConfig: {},
  buildIdentifier: 'v0.1.0',
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'qzw881130',
          name: 'birtd1',
          draft: false
        },
        prerelease: true
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './build/asset/background.jpg',
        format: 'ULFO',
      }
    },
    {
      name: '@electron-forge/maker-zip',
      // platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
