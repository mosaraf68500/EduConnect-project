export const MyBookedTutorsPromise = async(email,accessToken) => {
    return fetch(`http://localhost:5000/tutorials?email=${email}`,{
        headers:{
            authorization:`Bearer ${accessToken}`
        }
    }).then(res => res.json())
}