'use strict'
/* eslint-env browser, webextensions */

import html from 'choo/html/index.js'
import icon from './icon.js'

export default function optionsIcon ({
  action,
  active,
  size = '1.8rem',
  title
}) {
  const svg = html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86"
        class="fill-current-color"
        style="width:${size}; height:${size}">
        <path d="M74.05 50.23c-.07-3.58 1.86-5.85 5.11-7.1-.2-2-2.48-7.45-3.63-8.76-3.11 1.46-6.06 1.23-8.54-1.22s-2.72-5.46-1.26-8.64a29.24 29.24 0 0 0-8.8-3.63c-1.06 3.08-3.12 5-6.35 5.25-3.82.29-6.29-1.69-7.61-5.22a30.11 30.11 0 0 0-8.77 3.67c1.5 3.16 1.3 6.1-1.15 8.6s-5.45 2.76-8.64 1.29a29.33 29.33 0 0 0-3.58 8.79C24 44.43 25.94 46.62 26 50s-1.82 5.84-5.1 7.12a29.21 29.21 0 0 0 3.68 8.71c3.09-1.38 6-1.15 8.42 1.22s2.79 5.33 1.41 8.49a29.72 29.72 0 0 0 8.76 3.57 1.46 1.46 0 0 0 .11-.21 7.19 7.19 0 0 1 13.53-.16c.13.33.28.32.55.25a29.64 29.64 0 0 0 8-3.3 4 4 0 0 0 .37-.25c-1.27-2.86-1.15-5.57.88-7.94 2.44-2.84 5.5-3.26 8.91-1.8a29.23 29.23 0 0 0 3.65-8.7c-3.17-1.22-5.05-3.38-5.12-6.77zM50 59.54a8.57 8.57 0 1 1 8.59-8.31A8.58 8.58 0 0 1 50 59.54z"/>
      </svg>
    `
  return icon({ svg, title, active, action })
}
