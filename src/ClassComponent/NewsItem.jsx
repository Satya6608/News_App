import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card my-3">
          <img src={this.props.pic} height="230px" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{height:"120px"}}>{this.props.title.slice(0,55)+"..."}</h5>
              <h5 className="card-title small-text">{this.props.source}</h5>
              <h6 className='card-text small-text'>{`${new Date(this.props.date).getDate()}/${new Date(this.props.date).getMonth()}/${new Date(this.props.date).getFullYear()} ${new Date(this.props.date).getHours()}:${new Date(this.props.date).getMinutes()}`}</h6>
              <hr/>
              <p className="card-text" style={{height:"295px"}}>{this.props.description?this.props.description.slice(0,225)+"...":"No Description Available"}</p>
              <a href={this.props.url} className="btn btn-more  d-block background text-light">Read More...</a>
            </div>
        </div>
      </>
    )
  }
}
