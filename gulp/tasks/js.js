import webpack from 'webpack-stream'

export const js = () => {
   return app.gulp
      .src(app.path.src.js)
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: 'JS',
               message: 'Error: <%= error.message %>',
            })
         )
      )
      .pipe(
         webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
               filename: 'main.min.js',
            },
            module: {
               rules: [
                  {
                     test: /\.m?js$/,
                     exclude: /node_modules/,
                     use: {
                        loader: 'babel-loader',
                        options: {
                           presets: [
                              [
                                 '@babel/preset-env',
                                 {
                                    targets: 'defaults',
                                 },
                              ],
                           ],
                        },
                     },
                  },
               ],
            },
            devtool: app.isDev ? 'source-map' : false,
         })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
}
