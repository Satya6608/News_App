import React from 'react'

export default function NewsItem(props) {
  return (
    <>
      <div className="card my-3">
        <img src={props.pic} height="230px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "120px" }}>{props.title.slice(0, 55) + "..."}</h5>
          <h5 className="card-title small-text">{props.source}</h5>
          <h6 className='card-text small-text'>{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()} ${new Date(props.date).getHours()}:${new Date(props.date).getMinutes()}`}</h6>
          <hr />
          <p className="card-text" style={{ height: "295px" }}>{props.description ? props.description.slice(0, 225) + "..." : "No Description Available"}</p>
          <a href={props.url} className="btn btn-more  d-block background text-light">Read More...</a>
        </div>
      </div>
    </>
  )
}
