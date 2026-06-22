import { cpSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const distDir = join(root, 'dist')
const docsDir = join(root, 'docs')

rmSync(docsDir, { recursive: true, force: true })
mkdirSync(docsDir, { recursive: true })
cpSync(distDir, docsDir, { recursive: true })
cpSync(join(distDir, 'index.html'), join(docsDir, '404.html'))

console.log('Prepared docs/ for GitHub Pages')
