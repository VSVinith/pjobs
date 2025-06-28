import { useState } from "react"


const JobDetails = () => {

    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])


    const searchFirms = async () => {
        const api = "https://retoolapi.dev/7VoO3Y/data"

        const response = await fetch(api)
        const data = await response.json()
        console.log(data)
        setResults(data)
    }

    return (
        <>
            <h4>inside</h4>
            <input type="search" />
            <button onClick={searchFirms}>Search</button>
            <div>
                {results.map(res => <div>
                    <span>{res.Firm}</span>
                    &nbsp;
                    <span>{res.id}</span> </div>)}
            </div>
        </>
    )
}

export default JobDetails