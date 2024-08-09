const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
const ENGINE_ID = import.meta.env.VITE_GOOGLE_ENGINE_ID

// api = https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${search_term}

export const searchData = async (term) => {
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`)
    const result = data.json()
    return result
}