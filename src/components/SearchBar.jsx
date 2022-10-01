
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper , IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ()=>{
    const [searchTerm,setSearchTerm] = useState('')
    const navigate= useNavigate()
    const handleSubmit= (e)=> {
        console.log('handleSubmit')
        e.preventDefault()
        if(searchTerm){
            setSearchTerm('')
            navigate(`/search/${searchTerm}`)
        }
    }
    console.log(searchTerm)
    return(
        <Paper 
            components='form'
            // onSubmit={ handleSubmit }
            sx={{
                borderRadius:20,
                border:"1px solid #e3e3e3",
                pl:2,
                boxShadow:'none',
                mr:{ sm:5 }
            }}
        >
            <input className="search-bar" type="text" placeholder="search..." value={searchTerm} onChange={ (e)=> setSearchTerm(e.target.value) }  />
            <IconButton type="submit" sx= {{ p:'10px', color:'red'}}  onClick= {handleSubmit}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
export default SearchBar