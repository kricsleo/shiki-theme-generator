import json from './vitesse-dark.json'

interface Theme {
  name: string
  colors: {
    "editor.foreground": string
    "editor.background": string
  }
  tokenColors: Array<{
    scope?: string[]
    settings: {
      foreground?: string
    }
  }>
}

/** @see https://github.com/shikijs/shiki/blob/870acb063e1ca0c2fb8ec15dc0e3991684c33ae7/packages/shiki/src/highlighter.ts#L78 */
const COLOR_REPLACEMENTS: Record<string, string> = {
  '#000001': 'var(--shiki-color-text)',
  '#000002': 'var(--shiki-color-background)',
  '#000004': 'var(--shiki-token-constant)',
  '#000005': 'var(--shiki-token-string)',
  '#000006': 'var(--shiki-token-comment)',
  '#000007': 'var(--shiki-token-keyword)',
  '#000008': 'var(--shiki-token-parameter)',
  '#000009': 'var(--shiki-token-function)',
  '#000010': 'var(--shiki-token-string-expression)',
  '#000011': 'var(--shiki-token-punctuation)',
  '#000012': 'var(--shiki-token-link)'
}

// => expcted output
const expected = 
`
:root.vitesse-dark {
  --shiki-color-text: #eee;
  ...
}
`

function find(theme: Theme) {
  const vars = Object.entries(COLOR_REPLACEMENTS).map(kv => {
    const varName = kv[1].trim().slice(4, -1)
    return [varName, kv[0]]
  })
}
