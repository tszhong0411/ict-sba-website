import crypto from 'node:crypto'

const hashPassword = (password: string) => {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export default hashPassword
