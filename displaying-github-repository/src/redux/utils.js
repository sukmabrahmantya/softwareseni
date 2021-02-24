
type actionTypes = {
    PENDING: string,
    SUCCESS: string,
    ERROR: string,
}

export const createActionTypes = (actionName: string): actionTypes => {
    return {
        PENDING: `${actionName}_PENDING`,
        SUCCESS: `${actionName}_SUCCESS`,
        ERROR: `${actionName}_ERROR`,
    };
}

export const createGenericActions = (actionNames: actionTypes) => {
    return {
        pending: () => {
            return {
                type: actionNames.PENDING
            }
        },
        success: (res: any) => {
            return {
                type: actionNames.SUCCESS,
                payload: res
            }
        },
        error: (error: any) => {
            return {
                type: actionNames.ERROR,
                payload: error
            }
        }
    }
}

export const GITHUB_ROOT_URL = 'https://api.github.com/'
