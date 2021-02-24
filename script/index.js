import { parseFile } from './lib/parseFile'
import path from 'path'

;(async () => {
  const data = await parseFile(path.join(__dirname, '..', 'input', 'dm'))
  console.log(data)
})()