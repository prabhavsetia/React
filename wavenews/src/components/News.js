import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);

    }
    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - WaveNews`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    // handlePrevClick = async () => {
    //     this.setState({page: this.state.page - 1})  // change it to compnent based on your own
    //     this.updateNews();
    // }
    // handleNextClick = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //         this.setState({page: this.state.page + 1})
    //         this.updateNews();
    //     }
    // }
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        setPage(nextPage)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', paddingTop: '30px' }}>
                WaveNews - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
            </h1>
            <div className="container">
                <div className='row'>
                    {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults && articles.length < totalResults}
                        loader={<Spinner />}
                    >
                        <div className='container'>
                            <div className='row'>
                                {articles.map((element) => {
                                    return <div key={element.url} className='col-md-4'>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>

                                })
                                }
                            </div>
                        </div >
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}
News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
export default News
