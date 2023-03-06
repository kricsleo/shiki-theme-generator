<h2 align="center">
  shiki-theme-generator
</h1>

<h2 align="center">
 ✨ Generate shiki css-variables theme from shiki themes
</h2>

[![NPM version](https://img.shields.io/npm/v/shiki-theme-generator?color=a1b858&label=)](https://www.npmjs.com/package/shiki-theme-generator)

> ⚠️ WIP

## Usage

```ts
import 'shiki-themes/vitesse-light'
// :root.shiki-theme-vitesse-light {
//   --shiki-var-token: #fff
// }

import 'shiki-themes/vitesse-dark'
// :root.shiki-theme-vitesse-dark {
//   --shiki-var-token: #000
// }


<html class="shiki-theme-vitesse-light">
  <div>
    <pre> 
      <span style="color:var(--shiki-var-token)">var</span>
    </pre>
  </div>
</html>


script:

vitesse-dark.json -> css-variables.json -> var.css
```
