import { createActionTypes, createGenericActions } from '../utils'

export const GET_REPOSITORY = createActionTypes('GET_REPOSITORY')
export const getRepositoryFns = createGenericActions(GET_REPOSITORY)

export const RESET_REPOSITORY = createActionTypes('RESET_REPOSITORY')
export const resetRepositoryFns = createGenericActions(RESET_REPOSITORY)