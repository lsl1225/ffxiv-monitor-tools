export const cactbotModules = {
  buff: 'src/buff',
  settings: 'src/settings'
};

export const cactbotChunks = {};

export const cactbotHtmlChunksMap = {
  'src/buff.html': {
    chunks: [
      cactbotModules.buff,
    ],
  },
  'src/settings.html': {
    chunks: [
        cactbotModules.settings,
    ]
  }
};
