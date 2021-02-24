import readline from 'readline'
import fs from 'fs'

export const parseFile = async file => {
  const lines = readline.createInterface({
    input: fs.createReadStream(file),
    terminal: false
  })

  const data = []
  for await (const line of lines) {
    data.push(line)
  }

  return data
}