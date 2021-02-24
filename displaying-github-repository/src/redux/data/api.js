import {
    getRepositoryFns,
    resetRepositoryFns
} from './actions'

import {  
    GITHUB_ROOT_URL
} from '../utils'

export function getRepositoryUser (username){
    return dispatch => {
        dispatch(getRepositoryFns.pending())

        fetch(`${GITHUB_ROOT_URL}users/${username}/repos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*",
            }
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            console.log(data)
            if(data.message || data.length == 0) dispatch(getRepositoryFns.error({msg: data.message ? data.message : 'Undefined'}))
            else dispatch(getRepositoryFns.success(data))
        }).catch(err => {
            dispatch(getRepositoryFns.error(err))
        })
    }
}

export function resetRepositoryUser (){
    return dispatch => {
        dispatch(resetRepositoryFns.success())
    }
}
