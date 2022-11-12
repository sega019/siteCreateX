// Основной модуль

import gulp from 'gulp'

// Подключение путей

import { path } from './gulp/config/path.js'

// Импорт общих плагинов

import { plugins } from './gulp/config/plugins.js'

// Передаем значения в глобальную переменную

global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins,
}

// Импорт задач
import { favicon } from './gulp/tasks/favicon.js'
import { copy } from './gulp/tasks/copy.js'
import { clear } from './gulp/tasks/clear.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import {
   otfToTtf,
   ttfToWoff,
   fontDrag,
   fontsStyle,
} from './gulp/tasks/fonts.js'
import { sprite } from './gulp/tasks/sprite.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'

// Наблюдатель за изменениями в файлах

function watcher() {
   gulp.watch(path.watch.favicon, favicon)
   gulp.watch(path.watch.files, copy)
   gulp.watch(path.watch.html, html)
   gulp.watch(path.watch.scss, scss)
   gulp.watch(path.watch.js, js)
   gulp.watch(path.watch.images, images)
   gulp.watch(path.watch.sprite, sprite)
}

// Последовательная обработка шрифтов

const fonts = gulp.series(otfToTtf, ttfToWoff, fontDrag, fontsStyle)

// Основные задачи

const mainTasks = gulp.series(
   favicon,
   fonts,
   gulp.parallel(copy, html, scss, js, images, sprite)
)

// Построение сценариев выполнения задач

const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(clear, mainTasks)
const deployZIP = gulp.series(clear, mainTasks, zip)
const deployFTP = gulp.series(clear, mainTasks, ftp)

// Экспорт сценариев

export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Запускать задачи по отдельности

export { clear, copy, favicon, html, scss, js, images, sprite }

// Выполнеия сценария по умолчанию

gulp.task('default', dev)
