import React from 'react'

const JobItem = ({ id, title, salary_range_from, salary_range_to, job_country, xp_lvl, degree, job_type, company_logo, company_name, updated_at }) => {
  return (
    <div className="job-list" key={id}>
      <div className="flex-container">
        <div className="title">{title}</div>
        <div className="price">₱{salary_range_from} - ₱{salary_range_to}</div>
      </div>
      <table className="job-table">
        <tbody>
          <tr>
            <td>
              <div className="icon">
                <img src="https://assets.bossjob.com/website/pin.svg" alt="location" height="15px" width="15px" />
              </div>
              <div className="detail">
                {job_country}
              </div>
            </td>
            <td>
              <div className="icon">
                <img src="https://assets.bossjob.com/website/briefcase.svg" alt="location" height="15px" width="15px" />
              </div>
              <div className="detail">
                {xp_lvl}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="icon">
                <img src="https://assets.bossjob.com/website/education.svg" alt="location" height="15px" width="15px" />
              </div>
              <div className="detail">
                {degree}
              </div>
            </td>
            <td>
              <div className="icon">
                <img src="https://assets.bossjob.com/website/clock.svg" alt="location" height="15px" width="15px" />
              </div>
              <div className="detail">
                {job_type}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex-bottom">
        <div className="logo">

          <img src={company_logo} alt="Sykes Asia Inc." /></div>
        <div className="companyName">{company_name}</div>
        <div className="hour">{updated_at}</div>
      </div>
    </div>
  )
}

export default JobItem