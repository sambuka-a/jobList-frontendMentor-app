import React from 'react'
import Filters from '../UI/Filters'
import Button from '../UI/Button'

const JobCard = ({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  handleFilters,
}) => {


  const options = [role, level, ...tools, ...languages]

  return (
    <div className={`companyContainer ${featured ? 'featured' : ''}`}>
      <div className='companyWrapper'>
        <img
            src={logo}
            alt={company}
          />
        <div className='companyDetails'>
          <div className='companyTitle'>
            <h4>{company}</h4>
            {(isNew || featured) && (
              <div className='badge'>
                {isNew && <span>new!</span>}
                {featured && <span className='feature'>featured</span>}
              </div>
              )}
          </div>
          <h3>{position}</h3>
            <div className='positionDetails'>
              <p>{postedAt}</p>
              <p>{contract}</p>
              <p>{location}</p>
            </div>
        </div>
      </div>
      <div className='filtersContainer'>
        <Filters>
          {options.map(item => (
            <Button
              key={item}
              clickHandler={() => handleFilters(item)}
            >
              {item}
            </Button>
          ))}
        </Filters>
      </div>
    </div>
  )
}

export default JobCard