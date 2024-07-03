import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - WaveNews`;
    }
    async updateNews(page) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=933b1bb65ed048c78484343d258cd7b0&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: page,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    async componentDidMount() {
        this.updateNews(1);
    }
    handlePrevClick = async () => {
        console.log("Previous click");
        this.updateNews(this.state.page - 1);
    }
    handleNextClick = async () => {
        console.log("Next click");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.updateNews(this.state.page + 1);
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center" style={{ margin: '35px 0px' }}>WaveNews -Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
                <div className='row'>
                    <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className='col-md-4'>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>

                    })
                    }

                </div>
            </div>
        )
    }
}
