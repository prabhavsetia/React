import React, { Component } from 'react'
import loading from '../loading.svg'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{
        display: "flex",
        padding: "30px 0px",
        height: "30rem",
        alignItems: "center",
        justifyContent: "center"
    }} >
        <img src={loading} alt='' />
      </div>
    )
  }
}
