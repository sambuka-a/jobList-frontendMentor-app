import React from 'react'
import Filters from '../UI/Filters'
import Button from '../UI/Button'

const FilterCard = ({filters=[], clearFilters}) => {
  return (
    <div className={`filterCard${filters.length > 0 ? 'Show' : ''}`}>
      {filters.length > 0 && (
        <div className='companyContainer'>
          <div className='filtersContainer'>
            <Filters>
              {filters.map(item => (
                <Button
                  key={item}
                  stl={'clear'}
                  clearHandler={() => clearFilters(item)}
                >
                  {item}
                </Button>
              ))}
            </Filters>
          </div>
          <div className='clearButton'
            onClick={() => clearFilters('all')}
          >
            Clear
          </div>
        </div>
        )}
    </div>
  )
}

export default FilterCard