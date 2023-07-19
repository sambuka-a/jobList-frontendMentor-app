import {useState, useEffect} from 'react'
import JobCard from './JobCard'

import data from '../mock/data.json'
import FilterCard from './FilterCard'


const JobList = () => {
  const [list, setList] = useState(data)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    const filteredData = data.filter(position => {
      const positionFilters = [position.role, position.level, ...position.tools, ...position.languages];
      return filters.every(filter => positionFilters.includes(filter))
    })
    setList(filteredData)
  }, [filters])


  const handleFilters = (filter) => {
    if(!filters.includes(filter)) {
      setFilters( prevState => [...filters, filter])
    } 
  } 

  const clearFilters = (filter) => {
    filter === 'all' ?
    setFilters(prevState => []) :
    setFilters(prevState => prevState.filter(i => i !== filter))
  }


  return (
    <div className='jobList'>
      <FilterCard
        filters={filters}
        clearFilters={clearFilters}
      />
      {list.map(i => (
        <JobCard
          key={i.id}
          handleFilters={handleFilters}
          {...i}
        />
      ))}
    </div>
  )
}

export default JobList