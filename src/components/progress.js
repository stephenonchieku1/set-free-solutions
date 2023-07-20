import React from 'react'

function progress() {
  return (
    <div>
    <div class="progress-wrapper">
    <div class="progress-info">
      <div class="progress-percentage">
        <span class="text-sm font-weight-bold">60%</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-gradient-dark" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}></div>
    </div>
  </div>
  

  
  
  </div>
  )
}

export default progress