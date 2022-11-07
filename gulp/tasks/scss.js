import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import csso from 'gulp-csso'
import webpcss from 'gulp-webp-css-fixed'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
   return app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
         app.plugins.plumber(
            app.plugins.notify.onError({
               title: 'SCSS',
               message: 'Error: <%= error.message %>',
            })
         )
      )
      .pipe(
         sass({
            includePaths: ['node_modules'],
            outputStyle: 'expanded',
         })
      )
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(app.plugins.if(app.isBuild, webpcss()))
      .pipe(
         app.plugins.if(
            app.isBuild,
            autoprefixer({
               grid: true,
               cascade: false,
               overrideBrowserslist: ['last 5 versions'],
            })
         )
      )
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
      .pipe(
         rename({
            extname: '.min.css',
         })
      )
      .pipe(app.plugins.if(app.isBuild, csso()))
      .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
      .pipe(app.plugins.browsersync.stream())
}
