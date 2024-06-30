import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=933b1bb65ed048c78484343d258cd7b0";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">WaveNews -Top Headlines</h1>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className='col-md-4'>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })
                    }
                    <div>
                        <button type="button" class="btn btn-dark">Previous</button>
                        <button type="button" class="btn btn-dark">Next</button>
                    </div>
                </div>
            </div>
        )
    }
}
