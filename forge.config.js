module.exports = {
  packagerConfig: {
    icon: 'public/bird',
    ignore: ['node_modules', '.gitignore', 'src'],
    platform: ['darwin'],
    overwrite: true,
    // arch: ['x64']
  },
  rebuildConfig: {},
  buildIdentifier: 'my-build',
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      platforms: ["darwin"],
      config: {
        repository: {
          owner: 'qzw881130',
          name: 'birtd1',
          draft: false
        },
        // prerelease: true
      }
    }
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    // {
    //   name: '@electron-forge/maker-dmg',
    //   config: {
    //     background: './public/ray-hennessy-6-JIDCnZG2E-unsplash.jpg',
    //     format: 'ULFO',
    //   }
    // },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
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
