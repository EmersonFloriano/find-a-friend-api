/* Faz com que o dotenv faça suas configurações para 
pegar as variáveis de ambiente do .env na raiz do  
projeto e inseri-las no process.env */
import 'dotenv/config'
import { z } from 'zod'

// Coerce faz a conversão do tipo que vem do objeto para
// o que o do schema, caso possível
const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

// O safeParse faz com que seja possível lançar um erro
// manualmente(personalizado)
const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.log('Invalid env variables', _env.error.format())

  throw new Error('Invalid env variables')
}

export const env = _env.data
