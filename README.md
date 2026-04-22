# Rumbera — Restaurant Website

A front-end website for Rumbera, a mariscos restaurant in Melchor Ocampo, México.
Built as part of The Odin Project curriculum.

## Overview

Single-page application for a real local restaurant. Each section is rendered through
JavaScript DOM manipulation with no page reloads. The design follows a neo-brutalist
style with bold borders, hard box shadows, and a cyan and teal palette.

Live Demo: [[Link](https://alejandronav.github.io/restaurant-project/)]

## Features

- Tab-based SPA navigation with animated page transitions
- Responsive cards and layout using `auto-fit`, `clamp()`, and `flex-wrap` — no media queries
- Full menu organized into 7 sections rendered from a data array
- Contact page with map image, Google Maps, WhatsApp, and Facebook links
- Custom `@font-face` typography with the Balloon font family
- Sticky header, persistent footer with hours and navigation

## Built With

- HTML5, CSS3, JavaScript (ES6 modules)
- Webpack 5 + webpack-dev-server + copy-webpack-plugin

## What I Practiced

- ES6 modules and Webpack bundling
- Dynamic DOM creation without a framework
- Intrinsic responsive layout over breakpoints
- Custom font loading and static asset serving with Webpack


## Project Structure

```
restaurant-project/
├── src/
│   ├── fonts/
│   │   ├── Balloon Bold.otf
│   │   └── Balloon Xbold.ttf
│   ├── img/
│   │   └── map.png
│   ├── contact.js
│   ├── home.js
│   ├── menu.js
│   ├── index.js
│   ├── style.css
│   └── template.html
├── webpack.config.js
├── package.json
└── README.md
```
