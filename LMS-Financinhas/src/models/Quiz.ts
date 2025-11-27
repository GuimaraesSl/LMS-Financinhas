import type { Pergunta } from './Pergunta'

export interface Quiz {
  id: string
  titulo: string
  descricao: string
  perguntas: Pergunta[]
}