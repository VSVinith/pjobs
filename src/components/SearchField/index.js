import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from '../../store/personSlice'

const SearchField = () => {

    const[searchItem, setSearch] = useState('')
    const[radioOption, setRadio] = useState('')

    const dispatch = useDispatch()

    const changeSearch = (event) => {
        setSearch(event.target.value)
        // console.log(searchItem)
    }

    const changeRadio = (event) => {
      setRadio(event.target.value)
      console.log("radioOption: ", event.target.value )
    }

    let query = ''

    if(radioOption === "firm"){
      query = `firmName=${searchItem}`
    }
    if(radioOption === "ind"){
      query = `filerName=${searchItem}`
    }

     

    const search = async() => {
        const api = `https://retoolapi.dev/c2OJqr/data?${query}`

        const response = await fetch(api)
        const data = await response.json()

        dispatch(add(data))
    }

  return (
    <div>
      <h6>Search</h6>
      <div className="d-flex ">
        <input onChange={changeSearch} className="m-2" type="search" />
        <Button onClick={search} className="m-2" variant="secondary">
          Search
        </Button>
      </div>
      <div>
        <input
          className="m-2"
          type="radio"
          value="firm"
          name="selection"
          onChange={changeRadio}
        />
        Firm
        <input className="m-2" type="radio" value="ind" name="selection" onChange={changeRadio} />
        Ind
      </div>
    </div>
  );
};

export default SearchField;
