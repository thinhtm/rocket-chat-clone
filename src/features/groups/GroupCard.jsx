import React from 'react'

export const GroupCard = () => {
  return (
    <div className="group-card card mb-2">
      <div className="row g-0">
        <div className="col-2 p-1 d-flex align-items-center">
          <img
            className="img-fluid rounded"
            src="https://ps.w.org/letter-avatars/assets/icon-256x256.png?rev=1320502"
            alt=""
          />
        </div>
        <div className="col-10 d-flex align-items-center">
          <div className="card-body">
            <div className="card-text">
              <p className="text-muted m-0">
                #group-chat-name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
