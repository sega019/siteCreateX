export const server = (done) => {
   app.plugins.browsersync.init({
      server: {
         baseDir: `${app.path.build.html}`,
         directory: true,
      },
      notify: false,
      port: 3000,
   })
}
