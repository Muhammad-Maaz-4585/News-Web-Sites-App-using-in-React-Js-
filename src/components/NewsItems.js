import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageurl, newsurl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
           <p className="card-text"><small className="text-muted">By {!author?"Unkown":author} on {date}</small></p>
              <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
       </div>
   </div>
</div>
    )
  }
}

export default NewsItems
