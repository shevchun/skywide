import './markup-menu.js'
import $ from 'jquery'
import svg4everybody from 'svg4everybody'

import custom from './components/custom.js'

globalThis.$ = $
globalThis.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
  // globalThis.Tabs = new Tabs()
  svg4everybody()
  custom()
})

// $(window).on('load resize', () => {
//   if ($(window).width() < 1200) {} 
// })
