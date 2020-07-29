import axios from 'axios'
const url = 'http://localhost:4000'

export function register(userInput){
    console.log("user data",userInput)
    return axios.post( url+ `/register`,userInput )
}

