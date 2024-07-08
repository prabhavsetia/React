import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author } = props;
  return (
    <div className='my-3' >
      <div className="card" >
        <img src={!imageUrl ? "https://analyticsindiamag.com/wp-content/uploads/2024/06/Google-Gemini-Motorola.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
