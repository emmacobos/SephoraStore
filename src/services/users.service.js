const baseUrl= "https://api.mercadolibre.com/sites/MLA/search#json"

export const getUsers = () => {
    return fetch(baseUrl)

}

export const getUser = () => {
    return fetch(`${baseUrl}/${id}`)

}