import type Team from './Team'

export const SessionStatus = {
    PENDING: 'PENDING',
    ACTIVE: 'ACTIVE',
    FINISHED: 'FINISHED'
} as const

export type SessionStatus = typeof SessionStatus[keyof typeof SessionStatus]

export interface Session {
    code: string
    quizId: string
    professorId: string
    teams: Team[]
    status: SessionStatus
}