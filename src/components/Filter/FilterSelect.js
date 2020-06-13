import React, {useContext} from 'react'
import {RestCountriesContext} from '../../contexts/RestCountriesContext'

const FilterSelect = () => {

    const {filteredRegion,
        setFilteredRegion} = useContext(RestCountriesContext)


    return (
        <div className="select-container">
            <label htmlFor="select-region" className="select-container__label">Filter by Region
            </label>
            <select value={filteredRegion} onChange={e=>setFilteredRegion(e.target.value)} name="select-region" id="select-region" className="select-container__select-region">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <i className="fas fa-chevron-down select-container__fa-chevron-down"></i>
        </div>
    )
}

export default FilterSelect
