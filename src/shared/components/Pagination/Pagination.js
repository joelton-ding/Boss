import React from 'react'

import './Pagination.css'

const Pagination = () => {
  return (
    <div className="pagination">
      <a href="#1">&lsaquo;</a>
      <a href="#1" className="active">1</a>
      <a href="#1">2</a>
      <a href="#1">3</a>
      <a href="#1">4</a>
      <a href="#1">5</a>
      <a href="#1">6</a>
      <a href="#1">&rsaquo;</a>
    </div>
  )
}

export default Pagination