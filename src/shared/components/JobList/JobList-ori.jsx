import React from 'react'

import './JobList.css'

const JobList = (inputObj) => {
  let objList = null;
  objList = jobListData.data.jobs;
  let jsxJobContain = null;
  if (objList && objList.length > 0) {
    jsxJobContain = objList.map((item, index) => {
      return (
        <div className="job-list" key={index}>
          <div className="flex-container">
            <div className="title">{item['job_title']}</div>
            {/*<div className="price">₱30K - ₱35K</div>*/}
            <div className="price">{item['salary_range_from'] + ' - ' + item['salary_range_to']}
            </div>
            <table className="job-table">
              <tbody>
                <tr>
                  <td>
                    <div className="icon">
                      <img src="https://assets.bossjob.com/website/pin.svg" alt="location" height="15px" width="15px" />
                    </div>
                    <div className="detail">
                      {item['job_country'] + " " + item['job_location']}
                    </div>
                  </td>
                  <td>
                    <div className="icon">
                      <img src="https://assets.bossjob.com/website/briefcase.svg" alt="location" height="15px" width="15px" />
                    </div>
                    <div className="detail">
                      {item['xp_lvl']}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="icon">
                      <img src="https://assets.bossjob.com/website/education.svg" alt="location" height="15px" width="15px" />
                    </div>
                    <div className="detail">
                      {item['degree']}
                    </div>
                  </td>
                  <td>
                    <div className="icon">
                      <img src="https://assets.bossjob.com/website/clock.svg" alt="location" height="15px" width="15px" />
                    </div>
                    <div className="detail">
                      {item['job_type']}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex-bottom">
              <div className="logo"><img src="https://assets.bossjob.com/companies/9165/logo/TIvpNHk8TRhBqqx06lC0iSG81zlQOA9qsOuo06u2.jpeg" alt={item['company_name']} /></div>
              <div className="companyName">{item['company_name']}</div>
              <div className="hour">3 hours ago</div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="content">
      <div className="found-job">1321 jobs found</div>
      {/*<div className="job-list">*/}
      {/*<div className="flex-container">*/}
      {/*<div className="title">System Engineer</div>*/}
      {/*<div className="price">₱30K - ₱35K</div>*/}
      {/*</div>*/}
      {/*<table className="job-table">*/}
      {/*<tbody>*/}
      {/*<tr>*/}
      {/*<td>*/}
      {/*<div className="icon">*/}
      {/*<img src="https://assets.bossjob.com/website/pin.svg" alt="location" height="15px" width="15px" />*/}
      {/*</div>*/}
      {/*<div className="detail">*/}
      {/*Cebu City*/}
      {/*</div>*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*<div className="icon">*/}
      {/*<img src="https://assets.bossjob.com/website/briefcase.svg" alt="location" height="15px" width="15px" />*/}
      {/*</div>*/}
      {/*<div className="detail">*/}
      {/*1 - 3 years*/}
      {/*</div>*/}
      {/*</td>*/}
      {/*</tr>*/}
      {/*<tr>*/}
      {/*<td>*/}
      {/*<div className="icon">*/}
      {/*<img src="https://assets.bossjob.com/website/education.svg" alt="location" height="15px" width="15px" />*/}
      {/*</div>*/}
      {/*<div className="detail">*/}
      {/*Diploma*/}
      {/*</div>*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*<div className="icon">*/}
      {/*<img src="https://assets.bossjob.com/website/clock.svg" alt="location" height="15px" width="15px" />*/}
      {/*</div>*/}
      {/*<div className="detail">*/}
      {/*Full Time*/}
      {/*</div>*/}
      {/*</td>*/}
      {/*</tr>*/}
      {/*</tbody>*/}
      {/*</table>*/}
      {/*<div className="flex-bottom">*/}
      {/*<div className="logo"><img src="https://assets.bossjob.com/companies/9165/logo/TIvpNHk8TRhBqqx06lC0iSG81zlQOA9qsOuo06u2.jpeg" alt="Sykes Asia Inc." /></div>*/}
      {/*<div className="companyName">Arc Refreshment Corp</div>*/}
      {/*<div className="hour">3 hours ago</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {jsxJobContain}
    </div>
  )
}

const jobListData = {
  "message": "OK",
  "data": {
    "jobs": [
      {
        "id": 24181,
        "recruiter_id": 473219,
        "recruiter_first_name": "MARY JEAN ",
        "recruiter_last_name": "EUGENIO",
        "recruiter_job_title": "Recruiter",
        "degree_key": "bachelor",
        "degree": "Bachelor",
        "job_title": "Accounting Assistant",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "quezon_city",
        "address": "RM 308 TDS BUILDING 72 KAMIAS RD QUEZON CITY",
        "job_category_key": "human_resources",
        "job_category": "Human Resources",
        "job_type_key": "contract",
        "job_type": "Contract",
        "job_location": "Quezon City",
        "job_description": "support the Accounting department by performing clerical tasks, including processing and recording transactions, preparing reports and budgets, fielding communications with clients and vendors, fact checking, filing, and other duties, as needed\n\n\nKnowledgeable  in Payroll System\n\n",
        "job_description_html": "<p>support the&nbsp;<strong>Accounting </strong>department by performing clerical tasks, including processing and recording transactions, preparing reports and budgets, fielding communications with clients and vendors, fact checking, filing, and other <strong>duties</strong>, as needed</p>",
        "job_requirements": "Knowledgeable  in Payroll System\n\n",
        "job_requirements_html": "<p>Knowledgeable&nbsp; in Payroll System</p><p><br></p>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 10000,
        "salary_range_to": 15000,
        "company_id": 15977,
        "company_name": "Tri-Star Manpower Solution Inc.",
        "company_description": "",
        "company_description_html": null,
        "company_industry_key": null,
        "company_industry": null,
        "company_department": null,
        "company_location_key": "quezon_city",
        "company_location": "Quezon City",
        "company_address": "RM 308 TDS BUILDING 72 KAMIAS RD QUEZON CITY",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": null,
        "company_country": null,
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 0,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "is_featured": 0,
        "expire_days": 90,
        "created_at": "2019-06-08 14:42:33",
        "updated_at": "2019-06-10 02:02:56",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=ME&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/15977/logo/B3JwFkbwGgxWCUhYo42CS3Cv3X3e37Jtx1HKtkUi.jpeg",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          23431,
          23185,
          23901,
          20571
        ],
        "recruiter_email": "jheng.tristarmanpower@yahoo.com",
        "no_of_applications": 0,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 5,
              "job_id": 24181
            },
            "id": 5,
            "value": "Human Resources",
            "key": "human_resources",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-06-08",
        "job_updated_at": "2019-06-10",
        "score": 19.887964,
        "is_saved": false
      },
      {
        "id": 22613,
        "recruiter_id": 265972,
        "recruiter_first_name": "kimberly",
        "recruiter_last_name": "Managbanag",
        "recruiter_job_title": "Recruiter",
        "degree_key": "bachelor",
        "degree": "Bachelor",
        "job_title": "Programmer",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "muntinlupa",
        "address": "15th flr. Tower 2. Insular Life Corporate Centre.",
        "job_category_key": "it_-_network/sys/db_admin",
        "job_category": "IT - Network/Sys/DB Admin",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Muntinlupa",
        "job_description": "Job Description\n Install and configure appropriate software and functions according to specifications, specifically POS System.\nPerform troubleshooting to diagnose and resolve problems.\nOrganized and schedule upgrades and maintenance without deterring others from completing their work.\nProvide orientation and guidance to users on how to operate new software and computer equipment.\nEnsure security and privacy of networks and computer systems.\n\n\nCandidate must possess at least bachelors / College Degree in Computer Science/ information Technology or equivalent.\nAt least 1 Year(s) of working experience in the related field is required for this position.\nPreferably 1-4 Yrs. experienced employee specialized related in IT/Computer Network/System/ Database Admin or equivalent.\nKnowledgeable in POS Software System\nKnowledgeable in using C#.\n",
        "job_description_html": "<p>Job Description</p><ul><li>&nbsp;Install and configure appropriate software and functions according to specifications, specifically POS System.</li><li>Perform troubleshooting to diagnose and resolve problems.</li><li>Organized and schedule upgrades and maintenance without deterring others from completing their work.</li><li>Provide orientation and guidance to users on how to operate new software and computer equipment.</li><li>Ensure security and privacy of networks and computer systems.</li></ul>",
        "job_requirements": "Candidate must possess at least bachelors / College Degree in Computer Science/ information Technology or equivalent.\nAt least 1 Year(s) of working experience in the related field is required for this position.\nPreferably 1-4 Yrs. experienced employee specialized related in IT/Computer Network/System/ Database Admin or equivalent.\nKnowledgeable in POS Software System\nKnowledgeable in using C#.\n",
        "job_requirements_html": "<ol><li>Candidate must possess at least bachelors / College Degree in Computer Science/ information Technology or equivalent.</li><li>At least 1 Year(s) of working experience in the related field is required for this position.</li><li>Preferably 1-4 Yrs. experienced employee specialized related in IT/Computer Network/System/ Database Admin or equivalent.</li><li>Knowledgeable in POS Software System</li><li>Knowledgeable in using C#.</li></ol>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 20000,
        "salary_range_to": 25000,
        "company_id": 15056,
        "company_name": "Budi Technology Inc.",
        "company_description": "Budi Technology Incorporated (Budi), a PEZA (Philippine Economic Zone Authority) registered company. It is a system integrator and solution provider for automatic toll collection system, secure electronic payment system in the transportation and electronic payment system.\nOur core business is providing solutions to toll and fare ticketing systems whether for cash, stored value tickets or electronics payment such as Smartcards, Radio Frequency Identification (RFID) and Dedicated Short Range Communications (DSRC).\n",
        "company_description_html": "<p><strong>Budi Technology Incorporated (Budi),</strong> a PEZA (Philippine Economic Zone Authority) registered company. It is a system integrator and solution provider for automatic toll collection system, secure electronic payment system in the transportation and electronic payment system.</p><p>Our core business is providing solutions to toll and fare ticketing systems whether for cash, stored value tickets or electronics payment such as Smartcards, Radio Frequency Identification (RFID) and Dedicated Short Range Communications (DSRC).</p>",
        "company_industry_key": "information_technology",
        "company_industry": "Information Technology",
        "company_department": null,
        "company_location_key": "muntinlupa",
        "company_location": "Muntinlupa",
        "company_address": "15th flr. Tower 2. Insular Life Corporate Centre.",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "http://budi.com.ph/",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": "ph",
        "company_country": "Philippines",
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 126,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-04-22 11:17:24",
        "updated_at": "2019-06-04 19:27:08",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=KM&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/15056/logo/AY8U6X7Wa7NPEWTHthWstkk0vvWKbaRQVnMsUrWL.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          21946,
          22949,
          22947,
          23408
        ],
        "recruiter_email": "kimberly@budi.com.ph",
        "no_of_applications": 3,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 11,
              "job_id": 22613
            },
            "id": 11,
            "value": "IT - Network/Sys/DB Admin",
            "key": "it_-_network/sys/db_admin",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-04-22",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 18.838205,
        "is_saved": false
      },
      {
        "id": 20787,
        "recruiter_id": 180280,
        "recruiter_first_name": "Audrey",
        "recruiter_last_name": "Valdez",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Cashier",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "quezon_city",
        "address": "Rm.307 9-JRM Building (3rd Floor), Scout Borromeo St. Brgy South Triangle, Quezon Ave. Quezon City",
        "job_category_key": "food/beverage/restaurant",
        "job_category": "Food/Beverage/Restaurant",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Quezon City",
        "job_description": "Cashier / Counter Cashier\n\nWe are looking for a full-time Cashier who enjoys working, has a friendly, professional and positive personality. As a team-oriented company, we seek an individual who can be flexible with working hours and work during holidays. The ideal candidate is dedicated to providing exceptional customer service and displays a positive attitude when interacting with different customers and employees.\n\nWe are constantly searching for hardworking, dedicated and loyal individuals who share the same passion with us. If you are looking for a company that works hard to foster your talents, that values your skills and nurtures your career, apply now and explore the delicious opportunities that we offer.\n\n\n-Willing to assign at Imus, Makati, Mandaluyong, Marikina, Pasig, Alabang or Cainta\n\n-Knowledgeable in POS System\n\n-At least High School Graduate\n",
        "job_description_html": "<p><strong>Cashier / Counter Cashier</strong></p><p><br></p><p>We are looking for a full-time Cashier who enjoys working, has a friendly, professional and positive personality. As a team-oriented company, we seek an individual who can be flexible with working hours and work during holidays. The ideal candidate is dedicated to providing exceptional customer service and displays a positive attitude when interacting with different customers and employees.</p><p><br></p><p>We are constantly searching for hardworking, dedicated and loyal individuals who share the same passion with us. If you are looking for a company that works hard to foster your talents, that values your skills and nurtures your career, apply now and explore the delicious opportunities that we offer.</p>",
        "job_requirements": "-Willing to assign at Imus, Makati, Mandaluyong, Marikina, Pasig, Alabang or Cainta\n\n-Knowledgeable in POS System\n\n-At least High School Graduate\n",
        "job_requirements_html": "<p>-Willing to assign at Imus, Makati, Mandaluyong, Marikina, Pasig, Alabang or Cainta</p><p><br></p><p>-Knowledgeable in POS System</p><p><br></p><p>-At least High School Graduate</p>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 15000,
        "salary_range_to": 20000,
        "company_id": 1940,
        "company_name": "Hope Human Resources",
        "company_description": "Private employment agency",
        "company_description_html": "<p>Private employment agency</p>",
        "company_industry_key": "human_resources",
        "company_industry": "Human Resources",
        "company_department": null,
        "company_location_key": "quezon_city",
        "company_location": "Quezon City",
        "company_address": "Unit 312 Pacific Century Tower, Brgy. South Triangle, Metro Manila",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": "ph",
        "company_country": "Philippines",
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 319,
        "no_of_shares": 0,
        "no_of_chats": 7,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-02-24 19:15:42",
        "updated_at": "2019-06-02 21:21:58",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=AV&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/1940/logo/FaMPGBZy0ksx3viuAcHQfxEO4FdOi3UBb42GAK9X.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          22033,
          23406,
          21382,
          22627
        ],
        "recruiter_email": "hr.dreiapplicants@gmail.com",
        "job_created_at": "2019-02-24",
        "job_updated_at": "2019-06-02",
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 9,
              "job_id": 20787
            },
            "id": 9,
            "value": "Food/Beverage/Restaurant",
            "key": "food/beverage/restaurant",
            "is_approve": true
          }
        ],
        "no_of_applications": 9,
        "is_featured": 0,
        "score": 16.540575,
        "is_saved": false
      },
      {
        "id": 22712,
        "recruiter_id": 274828,
        "recruiter_first_name": "Noel",
        "recruiter_last_name": "Noma",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Technical Sales Executive",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "santa_rosa",
        "address": "Laguna",
        "job_category_key": "sales_-_eng/tech/it,chemistry,environmental_engineering",
        "job_category": "Sales - Eng/Tech/IT,Chemistry,Environmental Engineering",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Santa Rosa",
        "job_description": "Responsibilities\nManage and coordinate all marketing, executing marketing strategies and objectives for various water treatment projects.\nConduct market research to determine market requirement for existing and potential customer.\nDevelop and manage the productivity of the marketing plans and projects for boiler and cooling water system and other related projects.\nMonitor, review and report on all marketing activity and results.\nTo contribute in the implementation of marketing programs in order to meet sales target and develop a good market position.\nPrepare sales, forecast, budget and market survey reports.\nTo be responsible for the proper management of inventory.\nDevelop pricing strategy for marketing products and services.\nTo assist in credit investigation of prospective customers and recommend appropriate actions.\nTo be responsible for the proper management of account receivables. To minimize overdue accounts and bad debts.\nConduct system survey for Boiler and Cooling system for recommend treatment program.\nTo carry out management reviews and monthly reports presentation.\nTo conduct treatability studies, surveys, training and seminars to clients and potential customers.\nTo perform other duties which may be assigned from time to time.\n\n\nQualifications:\nMust be a graduate of BS Chemical Engg/ BS Chemistry or any of Engineering courses with an experience of atleast two (2) years in Water Treatment i.e. Boiler, Cooling and Pre-Treatment System such as Softener, Filtration, Deminderalized Water System and Reversed Osmosis System.\nCan coordinate all marketing, executing marketing strategies and objectives for various water treatment projects.\nCan conduct market research to determine market requirement for existing and potential customer.\nMonitor, review and report on all marketing activity and results.\nKnowledgeable in preparing sales, forecast, budget and market survey reports including inventory management.\nCan develop pricing strategy for marketing products and services.\nKnowledgeable in credit investigation of prospective customers and can recommend appropriate actions.\nMust have experience in managing  account receivables.\nCan carry out management reviews and monthly reports presentation.\nCan conduct treatability studies, surveys, training and seminars to clients and potential customers.\nWilling to travel and be assigned to provinces. Must know how to drive and have a valid driver’s license.\nHas good oral and written communication skills\n",
        "job_description_html": "<p><strong>Responsibilities</strong></p><ul><li>Manage and coordinate all marketing, executing marketing strategies and objectives for various water treatment projects.</li><li>Conduct market research to determine market requirement for existing and potential customer.</li><li>Develop and manage the productivity of the marketing plans and projects for boiler and cooling water system and other related projects.</li><li>Monitor, review and report on all marketing activity and results.</li><li>To contribute in the implementation of marketing programs in order to meet sales target and develop a good market position.</li><li>Prepare sales, forecast, budget and market survey reports.</li><li>To be responsible for the proper management of inventory.</li><li>Develop pricing strategy for marketing products and services.</li><li>To assist in credit investigation of prospective customers and&nbsp;recommend appropriate actions.</li><li>To be responsible for the proper management of account receivables. To minimize overdue accounts and bad debts.</li><li>Conduct system survey for Boiler and Cooling system for recommend treatment program.</li><li>To carry out&nbsp;management reviews and monthly reports presentation.</li><li>To conduct treatability studies, surveys, training and seminars to clients and potential customers.</li><li>To perform other duties which may be assigned from time to time.</li></ul>",
        "job_requirements": "Qualifications:\nMust be a graduate of BS Chemical Engg/ BS Chemistry or any of Engineering courses with an experience of atleast two (2) years in Water Treatment i.e. Boiler, Cooling and Pre-Treatment System such as Softener, Filtration, Deminderalized Water System and Reversed Osmosis System.\nCan coordinate all marketing, executing marketing strategies and objectives for various water treatment projects.\nCan conduct market research to determine market requirement for existing and potential customer.\nMonitor, review and report on all marketing activity and results.\nKnowledgeable in preparing sales, forecast, budget and market survey reports including inventory management.\nCan develop pricing strategy for marketing products and services.\nKnowledgeable in credit investigation of prospective customers and can recommend appropriate actions.\nMust have experience in managing  account receivables.\nCan carry out management reviews and monthly reports presentation.\nCan conduct treatability studies, surveys, training and seminars to clients and potential customers.\nWilling to travel and be assigned to provinces. Must know how to drive and have a valid driver’s license.\nHas good oral and written communication skills\n",
        "job_requirements_html": "<p><strong>Qualifications:</strong></p><ul><li>Must be a graduate of BS Chemical Engg/ BS Chemistry or any of Engineering courses with an experience of atleast two (2) years in Water Treatment i.e. Boiler, Cooling and Pre-Treatment System such as Softener, Filtration, Deminderalized Water System and Reversed Osmosis System.</li><li>Can coordinate all marketing, executing marketing strategies and objectives for various water treatment projects.</li><li>Can conduct market research to determine market requirement for existing and potential customer.</li><li>Monitor, review and report on all marketing activity and results.</li><li>Knowledgeable in preparing sales, forecast, budget and market survey reports including inventory management.</li><li>Can develop pricing strategy for marketing products and services.</li><li>Knowledgeable in credit investigation of prospective customers and&nbsp;can recommend appropriate actions.</li><li>Must have&nbsp;experience in managing&nbsp;&nbsp;account receivables.</li><li>Can carry out&nbsp;management reviews and monthly reports presentation.</li><li>Can conduct treatability studies, surveys, training and seminars to clients and potential customers.</li><li>Willing to travel and be assigned to provinces. Must know how to drive and have a valid driver’s license.</li><li>Has good oral and written communication skills</li></ul>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 15000,
        "salary_range_to": 20000,
        "company_id": 15123,
        "company_name": "ZI-GEM INDUSTRIAL SERVICES, INC. - EXCLUSIVE DISTRIBUTOR OF ZUELLIG INDUSTRIAL",
        "company_description": "INDUSTRIAL SOLUTIONS PROVIDER covering water related process and wastewater treatment. This is further extended in terms of energy conservation and sustainability programs.\n",
        "company_description_html": "<p><strong>INDUSTRIAL SOLUTIONS PROVIDER</strong> covering water related process and wastewater treatment. This is further extended in terms of energy conservation and sustainability programs.</p>",
        "company_industry_key": "engineering",
        "company_industry": "Engineering",
        "company_department": null,
        "company_location_key": "parañaque",
        "company_location": "Parañaque",
        "company_address": "Gemphil Compound, Lourdes St. Sampaloc 1 BF Homes, Paranaque City",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "www.zi-chem.com",
        "company_size_key": "51_to_100",
        "company_size": "51 - 100",
        "company_country_key": "ph",
        "company_country": "Philippines",
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 182,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-04-25 13:46:46",
        "updated_at": "2019-06-04 15:48:53",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=NN&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/15123/logo/PCM3TTvrP8i1UloWn1NTKufmThg2QXLk9q1e9ijr.jpeg",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          23643,
          22032,
          20765,
          22834
        ],
        "recruiter_email": "nnoma@zi-gem.com",
        "no_of_applications": 2,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 36,
              "job_id": 22712
            },
            "id": 36,
            "value": "Sales - Eng/Tech/IT",
            "key": "sales_-_eng/tech/it",
            "is_approve": true
          },
          {
            "updated_at": "2018-07-26 20:02:16",
            "created_at": "2018-07-26 20:02:16",
            "pivot": {
              "category_id": 53,
              "job_id": 22712
            },
            "id": 53,
            "value": "Chemistry",
            "key": "chemistry",
            "is_approve": true
          },
          {
            "updated_at": "2018-07-26 20:02:16",
            "created_at": "2018-07-26 20:02:16",
            "pivot": {
              "category_id": 51,
              "job_id": 22712
            },
            "id": 51,
            "value": "Environmental Engineering",
            "key": "environmental_engineering",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-04-25",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 16.151897,
        "is_saved": false
      },
      {
        "id": 23406,
        "recruiter_id": 443355,
        "recruiter_first_name": "michaelcamaro20",
        "recruiter_last_name": "",
        "recruiter_job_title": "Recruiter",
        "degree_key": "bachelor",
        "degree": "Bachelor",
        "job_title": "Cashier",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "mandaluyong",
        "address": "2nd Flr. Highway 54 Plaza, 1550, 986 Epifanio de los Santos Ave, Mandaluyong, 1555 Metro Manila",
        "job_category_key": "banking/financial",
        "job_category": "Banking/Financial",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Mandaluyong",
        "job_description": "Sta. Clara International Corporation is looking for Cashier.\n\n\nQualifications:\n- Minimum of 2 years banking experience as a bank Cashier; Head Teller or Senior Teller preferred.\n- Keen in money or cash management and accounting\n- With bookkeeping skills\n- Has established a work system and leadership\n- Candidate must possess at least a Bachelor’s/College Degree\n",
        "job_description_html": "<p>Sta. Clara International Corporation is looking for Cashier.</p>",
        "job_requirements": "Qualifications:\n- Minimum of 2 years banking experience as a bank Cashier; Head Teller or Senior Teller preferred.\n- Keen in money or cash management and accounting\n- With bookkeeping skills\n- Has established a work system and leadership\n- Candidate must possess at least a Bachelor’s/College Degree\n",
        "job_requirements_html": "<p><strong>Qualifications:</strong></p><p>- Minimum of 2 years banking experience as a bank Cashier; Head Teller or Senior Teller preferred.</p><p>- Keen in money or cash management and accounting</p><p>- With bookkeeping skills</p><p>- Has established a work system and leadership</p><p>- Candidate must possess at least a Bachelor’s/College Degree</p>",
        "job_skills": "Cash Management,Banking,Cashier,Bookkeeping",
        "company_working_cultures": null,
        "salary_range_from": 10000,
        "salary_range_to": 15000,
        "company_id": 11486,
        "company_name": "Sta. Clara International Corporation",
        "company_description": "We are one of the leading full-service engineering, construction, development, and management enterprises in the Philippines, with overseas operations, serving the Power and Utilities, Infrastructure and Civil Engineering sectors.",
        "company_description_html": null,
        "company_industry_key": "engineering",
        "company_industry": "Engineering",
        "company_department": null,
        "company_location_key": "manila",
        "company_location": "Manila",
        "company_address": "2nd Flr. Highway 54 Plaza, 1550, 986 Epifanio de los Santos Ave, Mandaluyong, 1555 Metro Manila",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "http://www.staclara.com.ph",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": "ph",
        "company_country": "Philippines",
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 110,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-05-20 10:37:49",
        "updated_at": "2019-06-04 18:11:44",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=MA&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/11486/logo/3gsgXle6Pcma0BsQ6iChawmCi1tQOALaqOkQCeNm.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          21382,
          20787,
          22033,
          22708
        ],
        "recruiter_email": "michaelcamaro20@gmail.com",
        "no_of_applications": 6,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 12,
              "job_id": 23406
            },
            "id": 12,
            "value": "Banking/Financial",
            "key": "banking/financial",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-20",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 15.868908,
        "is_saved": false
      },
      {
        "id": 23392,
        "recruiter_id": 441318,
        "recruiter_first_name": "Rich Alfred",
        "recruiter_last_name": "Lopez",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Web Developer",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "makati",
        "address": "Suite 704 State Condominium 1, 186 Salcedo, Legazpi Village, Makati, 1229 Metro Manila",
        "job_category_key": "it_-_software",
        "job_category": "IT - Software",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Makati",
        "job_description": "Successful applicants will be assigned to different Infoman Philippines units like Web Design, Web Applications Development, and Systems Development.\n\n\nQualifications\nA graduate of Computer Science and/or its equivalent\nWith or without working experience.\nMust be a fresh graduate.\nWilling to commit to tight project schedules and high software quality standards.\nFast learner, highly technical and analytic, creative and attentive to details.\nSkilled in developing test scripts, system testing and debugging.\n",
        "job_description_html": "<p>Successful applicants will be assigned to different Infoman Philippines units like Web Design, Web Applications Development, and Systems Development.</p>",
        "job_requirements": "Qualifications\nA graduate of Computer Science and/or its equivalent\nWith or without working experience.\nMust be a fresh graduate.\nWilling to commit to tight project schedules and high software quality standards.\nFast learner, highly technical and analytic, creative and attentive to details.\nSkilled in developing test scripts, system testing and debugging.\n",
        "job_requirements_html": "<p><strong>Qualifications</strong></p><ul><li>A graduate of Computer Science and/or its equivalent</li><li>With or without working experience.</li><li>Must be a fresh graduate.</li><li>Willing to commit to tight project schedules and high software quality standards.</li><li>Fast learner, highly technical and analytic, creative and attentive to details.</li><li>Skilled in developing test scripts, system testing and debugging.</li></ul>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 15000,
        "salary_range_to": 20000,
        "company_id": 8019,
        "company_name": "Information Managers Inc.",
        "company_description": "Information Managers, Inc.\n\n      Information Managers, Inc. is a leading IT solutions provider and the authorized Philippine distributor of software products from Progress Software Corporation and QAD Inc.\n\n      For more than 25 years, INFOMAN has established a strong track record in serving the automation needs of more than 200 clients in the Philippines, including those in banking, insurance, retail, manufacturing, distribution, construction, education and government. INFOMAN provides software applications, database, system development and integration tools as well as project services to help clients build, customize and deploy the right IT solutions.\n \n      The continuing goal of INFOMAN is to help clients meet changing business needs by providing innovative world-class technologies complemented with prove methodology, collaborative approaches, experienced consultants, seasoned developers, in-depth knowledge and high-quality support and services\n",
        "company_description_html": null,
        "company_industry_key": null,
        "company_industry": null,
        "company_department": null,
        "company_location_key": "makati",
        "company_location": "Makati",
        "company_address": "Suite 704 State Condominium 1, 186 Salcedo, Legazpi Village, Makati, 1229 Metro Manila",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "www.infomaninc.com/",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": null,
        "company_country": null,
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 126,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-05-19 10:59:52",
        "updated_at": "2019-06-03 17:08:35",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=RL&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/8019/logo/C0TaT1omGI770zpyXCCcO6KDB0iFnmRCa7dBSkkI.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          23118,
          21169,
          23037,
          23702
        ],
        "recruiter_email": "lopezrichalfred@gmail.com",
        "no_of_applications": 5,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 2,
              "job_id": 23392
            },
            "id": 2,
            "value": "IT - Software",
            "key": "it_-_software",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-19",
        "job_updated_at": "2019-06-03",
        "is_featured": 0,
        "score": 15.421631,
        "is_saved": false
      },
      {
        "id": 23165,
        "recruiter_id": 427125,
        "recruiter_first_name": "Tess",
        "recruiter_last_name": "Aman",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Reservation Officer",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "manila",
        "address": "RM 301 3F MARIO CO BLDG., 1945 M. ADRIATICO",
        "job_category_key": "hotel/tourism,customer_service",
        "job_category": "Hotel/Tourism,Customer Service",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Manila",
        "job_description": "Responds inquiries thru mail and telephone;\nKnows the type of rooms available as well as their location;\nBook flight reservations;\nMaintain reservation records for all bookings made;\nUpdate flyers of all packages from time to time;\n\n\n\nCandidate must possess at least Bachelors/College Degree in Tourism/Hotel Management;\nCan communicate effectively in English (oral and written);\nMust be knowledgeable in AMADEUS system;\nMust have excellent interpersonal skills.\n",
        "job_description_html": "<ul><li>Responds inquiries thru mail and telephone;</li><li>Knows the type of rooms available as well as their location;</li><li>Book flight reservations;</li><li>Maintain reservation records for all bookings made;</li><li>Update flyers of all packages from time to time;</li></ul><p><br></p>",
        "job_requirements": "Candidate must possess at least Bachelors/College Degree in Tourism/Hotel Management;\nCan communicate effectively in English (oral and written);\nMust be knowledgeable in AMADEUS system;\nMust have excellent interpersonal skills.\n",
        "job_requirements_html": "<ul><li>Candidate must possess at least Bachelors/College Degree in Tourism/Hotel Management;</li><li>Can communicate effectively in English (oral and written);</li><li>Must be knowledgeable in AMADEUS system;</li><li>Must have excellent interpersonal skills.</li></ul>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 10000,
        "salary_range_to": 15000,
        "company_id": 15412,
        "company_name": "SPARKLE HOLIDAYS & TRAVEL CORPORATION",
        "company_description": "Sparkle Holidays & Travel Corporation, today, is one of the leading travel management company in the Philippines. Together with subsidiaries and associated travel offices in Asia and across the globe, Sparkle Holidays offers a comprehensive travel and tour operating network dedicated to meet the diverse demands of today’s travelers by providing a full range of travel products and services, which travelers have come to expect. Established in the year 2000, it has proven to be one of the exceptional travel managers for Hong Kong, Singapore, Macau, group departures for Russia, Japan, South Korea, and the rest of the world. We have successfully shown the industry, as well as the traveling market, that we are one of the most creative and innovative travel providers who can tailor-make itineraries among the few.\n\nOur mission is to provide quality services, practical advice, and flexible arrangements that meet the needs of our clients. Our objective is to build a close working relationship with them, gaining their trust, providing the best of our service in a friendly, loyal, and efficient, while presenting various available options at the destination of their choice. Our “one-stop-shop” concept brings to our clients the reliable, professional, and quality service from our travel experts, bringing in their years of expertise with total commitment to delivering the high standard of service our clients well deserve. Each travel consultants are handpicked by the executive management, who themselves have more than 10 years of wide travel and tourism industry experience.\n",
        "company_description_html": null,
        "company_industry_key": null,
        "company_industry": null,
        "company_department": null,
        "company_location_key": "manila",
        "company_location": "Manila",
        "company_address": "RM 301 3F MARIO CO BLDG., 1945 M. ADRIATICO",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "facebook.com/sparkleholidaysmanila",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": null,
        "company_country": null,
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 155,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-05-11 10:13:59",
        "updated_at": "2019-06-04 13:50:39",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=TA&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/15412/logo/sjhglhulTMsm8CnSiAMlY4Sw3rgwfQStMp5xuxZM.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          19064,
          22733,
          23966,
          23880
        ],
        "recruiter_email": "tess_aman2006@yahoo.com",
        "no_of_applications": 5,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 24,
              "job_id": 23165
            },
            "id": 24,
            "value": "Hotel/Tourism",
            "key": "hotel/tourism",
            "is_approve": true
          },
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 1,
              "job_id": 23165
            },
            "id": 1,
            "value": "Customer Service",
            "key": "customer_service",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-11",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 15.248223,
        "is_saved": false
      },
      {
        "id": 23410,
        "recruiter_id": 443421,
        "recruiter_first_name": "Paulgella Realty ",
        "recruiter_last_name": "Corporation",
        "recruiter_job_title": "Recruiter",
        "degree_key": "bachelor",
        "degree": "Bachelor",
        "job_title": "Administative Assistant",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "makati",
        "address": "PGRC Building Sampaguita cor Camia St., Pembo, Makati City",
        "job_category_key": "property/real_estate",
        "job_category": "Property/Real Estate",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Makati",
        "job_description": "Prepare vouchers and expenditure\nFiling of documents.\nProcessing of business requirements every year\nPrepare Resolution of Expenditure\nMonitoring of Monthly Rental Collection\n\n\n\n4 year degree holder\nExperience in leasing/rental business is an advantage\nWith experience in bookkeeping\nKnowledgeable in Accounting System such as SAP or Zero\nHighly passionate and driven\nVery keen on details\nWorking place will be at One Rockwell West Tower\n\n",
        "job_description_html": "<ul><li>Prepare vouchers and expenditure</li><li>Filing of documents.</li><li>Processing of business requirements every year</li><li>Prepare Resolution of Expenditure</li><li>Monitoring of Monthly Rental Collection</li></ul><p><br></p>",
        "job_requirements": "4 year degree holder\nExperience in leasing/rental business is an advantage\nWith experience in bookkeeping\nKnowledgeable in Accounting System such as SAP or Zero\nHighly passionate and driven\nVery keen on details\nWorking place will be at One Rockwell West Tower\n\n",
        "job_requirements_html": "<ul><li>4 year degree holder</li><li>Experience in leasing/rental business is an advantage</li><li>With experience in bookkeeping</li><li>Knowledgeable in Accounting System such as SAP or Zero</li><li>Highly passionate and driven</li><li>Very keen on details</li><li>Working place will be at One Rockwell West Tower</li></ul><p><br></p>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 10000,
        "salary_range_to": 15000,
        "company_id": 15577,
        "company_name": "Paulgella Realty Corporation",
        "company_description": "PGRC is a Real Estate Company started in 2011. It caters affordable and accessible residential and commercial space for lease.\n",
        "company_description_html": "<p><strong>PGRC</strong> is a Real Estate Company started in 2011. It caters affordable and accessible residential and commercial space for lease.</p>",
        "company_industry_key": "real_estate",
        "company_industry": "Real Estate",
        "company_department": null,
        "company_location_key": "makati",
        "company_location": "Makati",
        "company_address": "PGRC Building Sampaguita cor. Camia St., Makati City",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": "ph",
        "company_country": "Philippines",
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 169,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-05-20 11:47:49",
        "updated_at": "2019-06-04 19:20:31",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=PC&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/15577/logo/B68leMFVzPOoNG7FyYZJYK3WtjCV6dO0ySLN0tP6.png",
        "is_recruiter_verify": true,
        "is_company_verify": true,
        "recruiter_status_key": "active",
        "similar_jobs": [
          23431,
          23299,
          21611,
          21850
        ],
        "recruiter_email": "pgrc.zette@gmail.com",
        "no_of_applications": 5,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 34,
              "job_id": 23410
            },
            "id": 34,
            "value": "Property/Real Estate",
            "key": "property/real_estate",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-20",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 14.39652,
        "is_saved": false
      },
      {
        "id": 23408,
        "recruiter_id": 443451,
        "recruiter_first_name": "richalfredllopez",
        "recruiter_last_name": "",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Computer Programmer",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "makati",
        "address": null,
        "job_category_key": "it_-_software",
        "job_category": "IT - Software",
        "job_type_key": "full_time",
        "job_type": "Full-time",
        "job_location": "Makati",
        "job_description": "Job Summary\nSuccessful applicants will be assigned to different Infoman Philippines units like Web Design, Web Applications Development, and Systems Development.\n\n\nQualifications\nA graduate of Computer Science and/or its equivalent\nWith or without working experience.\nMust be a fresh graduate.\nWilling to commit to tight project schedules and high software quality standards.\nFast learner, highly technical and analytic, creative and attentive to details.\nSkilled in developing test scripts, system testing and debugging.\n",
        "job_description_html": "<p><strong>Job Summary</strong></p><p>Successful applicants will be assigned to different Infoman Philippines units like Web Design, Web Applications Development, and Systems Development.</p>",
        "job_requirements": "Qualifications\nA graduate of Computer Science and/or its equivalent\nWith or without working experience.\nMust be a fresh graduate.\nWilling to commit to tight project schedules and high software quality standards.\nFast learner, highly technical and analytic, creative and attentive to details.\nSkilled in developing test scripts, system testing and debugging.\n",
        "job_requirements_html": "<p><strong>Qualifications</strong></p><ul><li>A graduate of Computer Science and/or its equivalent</li><li>With or without working experience.</li><li>Must be a fresh graduate.</li><li>Willing to commit to tight project schedules and high software quality standards.</li><li>Fast learner, highly technical and analytic, creative and attentive to details.</li><li>Skilled in developing test scripts, system testing and debugging.</li></ul>",
        "job_skills": "",
        "company_working_cultures": null,
        "salary_range_from": 15000,
        "salary_range_to": 20000,
        "company_id": 8019,
        "company_name": "Information Managers Inc.",
        "company_description": "Information Managers, Inc.\n\n      Information Managers, Inc. is a leading IT solutions provider and the authorized Philippine distributor of software products from Progress Software Corporation and QAD Inc.\n\n      For more than 25 years, INFOMAN has established a strong track record in serving the automation needs of more than 200 clients in the Philippines, including those in banking, insurance, retail, manufacturing, distribution, construction, education and government. INFOMAN provides software applications, database, system development and integration tools as well as project services to help clients build, customize and deploy the right IT solutions.\n \n      The continuing goal of INFOMAN is to help clients meet changing business needs by providing innovative world-class technologies complemented with prove methodology, collaborative approaches, experienced consultants, seasoned developers, in-depth knowledge and high-quality support and services\n",
        "company_description_html": null,
        "company_industry_key": null,
        "company_industry": null,
        "company_department": null,
        "company_location_key": "makati",
        "company_location": "Makati",
        "company_address": "Suite 704 State Condominium 1, 186 Salcedo, Legazpi Village, Makati, 1229 Metro Manila",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "www.infomaninc.com/",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": null,
        "company_country": null,
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 106,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 30,
        "created_at": "2019-05-20 11:30:58",
        "updated_at": "2019-06-04 00:17:14",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://fakeimg.pl/300x300/D6D9DC/4D4D4D/?text=RA&font_size=150&retina=1&font=noto",
        "company_logo": "https://assets.bossjob.com/companies/8019/logo/C0TaT1omGI770zpyXCCcO6KDB0iFnmRCa7dBSkkI.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          21946,
          22949,
          22947,
          21169
        ],
        "recruiter_email": "richalfredllopez@gmail.com",
        "no_of_applications": 4,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 2,
              "job_id": 23408
            },
            "id": 2,
            "value": "IT - Software",
            "key": "it_-_software",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-20",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 14.024059,
        "is_saved": false
      },
      {
        "id": 23662,
        "recruiter_id": 456572,
        "recruiter_first_name": "buildsmart",
        "recruiter_last_name": "support",
        "recruiter_job_title": "Recruiter",
        "degree_key": "diploma",
        "degree": "Diploma",
        "job_title": "Store Helper",
        "job_country_key": "ph",
        "job_country": "Philippines",
        "job_location_key": "imus",
        "address": " Aguinaldo Highway Anabu 2-D Imus Cavite (infront of Jollibee Anabu)",
        "job_category_key": "maintenance",
        "job_category": "Maintenance",
        "job_type_key": "contract",
        "job_type": "Contract",
        "job_location": "Imus",
        "job_description": "JOB DESCRIPTIONS:\nProcess and prepare orders for delivery and pick-up\nMaintains cleanliness and safeness of the working environment\nReport discrepancies and incidents to the immediate superior\nMust comply to the company rules and regulations\nMaintain inventory of the products and reports\nReceive delivery and stocks\n\n\n\nJOB QUALIFICATIONS:\nCandidate must possess atleast high school or equivalent.\nMust be Male\nFamiliarity with inventory management, and able to upload data into company system\nHighly organized and able to store items efficiently.\nFamiliarity with modern warehousing or store practices and methods.\n\nJob Type: Contract\n",
        "job_description_html": "<p><strong><em>JOB DESCRIPTIONS:</em></strong></p><ul><li>Process and prepare orders for delivery and pick-up</li><li>Maintains cleanliness and safeness of the working environment</li><li>Report discrepancies and incidents to the immediate superior</li><li>Must comply to the company rules and regulations</li><li>Maintain inventory of the products and reports</li><li>Receive delivery and stocks</li></ul><p><br></p>",
        "job_requirements": "JOB QUALIFICATIONS:\nCandidate must possess atleast high school or equivalent.\nMust be Male\nFamiliarity with inventory management, and able to upload data into company system\nHighly organized and able to store items efficiently.\nFamiliarity with modern warehousing or store practices and methods.\n\nJob Type: Contract\n",
        "job_requirements_html": "<ul><li><strong><em>JOB QUALIFICATIONS:</em></strong></li><li>Candidate must possess atleast high school or equivalent.</li><li>Must be Male</li><li>Familiarity with inventory management, and able to upload data into company system</li><li>Highly organized and able to store items efficiently.</li><li>Familiarity with modern warehousing or store practices and methods.</li></ul><p><br></p><p>Job Type: Contract</p>",
        "job_skills": "helper",
        "company_working_cultures": null,
        "salary_range_from": 10000,
        "salary_range_to": 15000,
        "company_id": 15734,
        "company_name": "Buildsmart Home Supply Co.",
        "company_description": "WE ARE BUILDSMART AND...\nWe aim to help the average Filipino families build smart homes by providing not only quality building and finishing materials but also smart home solutions that will make our lives more convenient and secure.\n​\nBrowse our site or visit one of our stores and see for yourself how we will accomplish this mission one home at a time.\n\n",
        "company_description_html": null,
        "company_industry_key": null,
        "company_industry": null,
        "company_department": null,
        "company_location_key": "imus",
        "company_location": "Imus",
        "company_address": "Aguinaldo Highway Anabu 2-D Imus Cavite (infront of Jollibee Anabu)",
        "company_unit_num": null,
        "company_street": null,
        "company_website": "https://www.buildsmart.com.ph/careers-buildsmart",
        "company_size_key": "0_to_50",
        "company_size": "0 - 50",
        "company_country_key": null,
        "company_country": null,
        "external_apply_url": null,
        "xp_lvl_key": "1_to_3_years",
        "xp_lvl": "1 - 3 years",
        "no_of_views": 48,
        "no_of_shares": 0,
        "no_of_chats": 0,
        "is_active": 1,
        "status_key": "active",
        "source": "web",
        "highlighted": 0,
        "expire_days": 90,
        "created_at": "2019-05-28 09:48:03",
        "updated_at": "2019-06-04 17:05:10",
        "deleted_at": null,
        "salary_range_filters": [
          {
            "10K_to_30K": "10K - 30K"
          }
        ],
        "recruiter_avatar": "https://lh5.googleusercontent.com/-H4NFXNlg7Ck/AAAAAAAAAAI/AAAAAAAAAAc/0Mrg4-v2wFI/photo.jpg",
        "company_logo": "https://assets.bossjob.com/companies/15734/logo/xMUWh7nuoKN0ly4Of10zKKfxpd197bPhGrBn9QEL.png",
        "is_recruiter_verify": false,
        "is_company_verify": false,
        "recruiter_status_key": "active",
        "similar_jobs": [
          22739,
          23554,
          23604,
          22888
        ],
        "recruiter_email": "buildsmart.supp@gmail.com",
        "no_of_applications": 1,
        "categories": [
          {
            "updated_at": "2018-07-26 20:02:15",
            "created_at": "2018-07-26 20:02:15",
            "pivot": {
              "category_id": 25,
              "job_id": 23662
            },
            "id": 25,
            "value": "Maintenance",
            "key": "maintenance",
            "is_approve": true
          }
        ],
        "job_created_at": "2019-05-28",
        "job_updated_at": "2019-06-04",
        "is_featured": 0,
        "score": 13.984455,
        "is_saved": false
      }
    ],
    "page": 1,
    "size": 10,
    "total_num": 265,
    "sort": 1
  }
}


export default JobList

