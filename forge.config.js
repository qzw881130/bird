module.exports = {
  packagerConfig: {
    icon: 'public/bird',
    ignore: ['node_modules', '.gitignore', 'src'],
    platform: ['linux'],
    overwrite: true,
    // arch: ['x64']
  },
  rebuildConfig: {},
  buildIdentifier: 'my-build',
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      "platforms": ["linux"],
      config: {
        authToken: "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",
        tagPrefix: '',
        repository: {
          owner: 'qzw881130',
          name: 'bird1',
          // branch:'master'
        },
        draft: true,
        // prerelease: true
      }
    }
  ],
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {},
    // },
    // {
    //   name: '@electron-forge/maker-dmg',
    //   config: {
    //     background: './public/ray-hennessy-6-JIDCnZG2E-unsplash.jpg',
    //     format: 'ULFO',
    //   }
    // },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['linux'],
    },
    // {
    //   name: '@electron-forge/maker-deb',
    //   config: {},
    // },
    // {
    //   name: '@electron-forge/maker-rpm',
    //   config: {},
    // },
  ],
};
