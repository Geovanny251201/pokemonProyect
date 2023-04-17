import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

 


export const Navigation =() =>{
	const {onInputChange,valueSearch,onResetForm}=useContext(PokemonContext)
    const context=useContext(PokemonContext)

	const navigate=useNavigate()

	const onSearchSubmit=(e)=> {
		e.preventDefault()
		navigate('/search', {state:valueSearch})
		onResetForm();
	}
    
    return(
        <div>
                <header className='container'>
				<Link to='/' className='logo'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
						alt='Logo Pokedex'
					/>
				</Link>
               
				<form  onSubmit={onSearchSubmit}  >
					<div className='form-group'>
						<svg xmlns='http://www.w3.org/2000/svg'fill='none'viewBox='0 0 24 24'strokeWidth='1.5'stroke='currentColor'className='icon-search'>
							<path strokeLinecap='round'strokeLinejoin='round'd='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/>
						</svg>
						<input type='search'name='valueSearch'id='' value={valueSearch} onChange={onInputChange}placeholder='Buscar nombre de pokemon'
/>
					</div>

					<button className='btn-search'>Buscar </button>
				</form>
			</header>
            <Outlet/>
        </div>
    )
}