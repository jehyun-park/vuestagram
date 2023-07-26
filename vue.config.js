const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
});

//세부설정

// module.exports = {
//   pwa: {
//     name: '앱이름',
//     themeColor: '#4DBA87',
//     msTileColor: '#000000',
//     workboxOptions: {
//       exclude: [/\.map$/, /manifest\.json$/, 'index.html'],
//     },
//   },
// };
