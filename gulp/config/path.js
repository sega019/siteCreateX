// Получаем имя папки проекта

import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
   root: buildFolder,

   build: {
      favicon: `${buildFolder}/favicon/`,
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files`,
   },
   src: {
      favicon: `${srcFolder}/favicon/favicon.svg`,
      js: `${srcFolder}/js/main.js`,
      scss: `${srcFolder}/scss/*.{sass,scss}`,
      html: `${srcFolder}/html/*.html`, // Для PUG изменить путь
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      files: `${srcFolder}/files/**/*.*`,
      sprite: `${srcFolder}/icons/**/*.svg`,
   },
   watch: {
      favicon: `${srcFolder}/favicon/favicon.svg`,
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.{sass,scss}`,
      html: `${srcFolder}/html/**/*.html`, // Для PUG изменить путь
      images: `${srcFolder}/img/**/.*{jpg,jpeg,png,gif,ico,webp,svg}`,
      files: `${srcFolder}/files/**/*.*`,
      sprite: `${srcFolder}/icons/**/*.*`,
   },

   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `test`,
}
