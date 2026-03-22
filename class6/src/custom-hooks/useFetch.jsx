import React, { useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    fetch(url).then(res => res.json()).then(res => setData(res)).catch(err => setError(err))

    return{data, error, loading}
}

export default useFetch
