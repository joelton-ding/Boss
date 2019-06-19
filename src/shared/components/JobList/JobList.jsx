import React, { useEffect, useState } from 'react'
import JobItem from './JobItem'
// import JobSearch from '../JobSearch/JobSearch'

import './JobList.css'
import '../JobSearch/JobSearch.css'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('system')

  useEffect(() => {
    getJobs()
  }, [query])

  const getJobs = async () => {
    const response = await fetch(
      `https://search.bossjob.com/api/v1/search/job_filter?size=20&query=${query}`
    )
    const data = await response.json()
    console.log('All data >>>>>', data)
    setJobs(data.data.jobs)
    console.log(data.data.jobs)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log('onchanges search >>>', search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div>
      <form onSubmit={getSearch}>
        <div className="container">
          <div className="search-input">
            <input type="text" placeholder="Search for job title or company name"
              value={search}
              onChange={updateSearch} />
            <img className="search-icon" src="https://assets.bossjob.com/website/Search.svg" alt="search" height="18px" width="18px" />
          </div>
          <div className="filter-wrapper">
            <button>Filter Results</button>
          </div>
        </div>
      </form>

      <div className="content">
        <div className="found-job">1321 jobs found</div>
        {
          jobs.map(job => (
            <JobItem
              key={job.id}
              title={job.job_title}
              salary_range_from={job.salary_range_from}
              salary_range_to={job.salary_range_to}
              job_country={job.job_country}
              xp_lvl={job.xp_lvl}
              degree={job.degree}
              job_type={job.job_type}
              company_logo={job.company_logo}
              company_name={job.company_name}
              updated_at={job.updated_at} />
          ))
        }
      </div>
    </div>
  )
}

export default JobList

