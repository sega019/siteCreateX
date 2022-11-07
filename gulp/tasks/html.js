import fileInclude from 'gulp-file-include' // Для PUG закомментировать
import webpHtml from 'gulp-webp-html'
import versionNumber from 'gulp-version-number'
// import pug from 'gulp-pug'  // Для PUG раскомментировать
export const html = () => {
   return (
      app.gulp
         .src(app.path.src.html)
         .pipe(
            app.plugins.plumber(
               app.plugins.notify.onError({
                  title: 'HTML', // Для PUG поменять имя
                  message: 'Error: <%= error.message %>',
               })
            )
         )
         .pipe(fileInclude()) // Для PUG закомментировать
         .pipe(app.plugins.replace(/@img\//g, 'img/'))
         .pipe(app.plugins.if(app.isBuild, webpHtml()))
         .pipe(
            app.plugins.if(
               app.isBuild,
               versionNumber({
                  value: '%DT%',
                  append: {
                     key: '_v',
                     cover: 0,
                     to: ['css', 'js'],
                  },
                  output: {
                     file: 'gulp/version.json',
                  },
               })
            )
         )
         // .pipe(
         //    pug({
         //       pretty: true,
         //       verbose: true,
         //    })
         // )  // Для PUG раскомментировать
         .pipe(app.gulp.dest(app.path.build.html))
         .pipe(app.plugins.browsersync.stream())
   )
}
