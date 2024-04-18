// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  leftArrowClick = () => {
    const {reviewsList} = this.props
    const {position} = this.state
    if (position > 0 && position <= reviewsList.length) {
      this.setState(prevState => ({position: prevState.position - 1}))
    }
  }

  rightArrowClick = () => {
    const {reviewsList} = this.props
    const {position} = this.state
    if (position >= 0 && position < reviewsList.length - 1) {
      this.setState(prevState => ({position: prevState.position + 1}))
    }
  }

  render() {
    const {position} = this.state
    const {reviewsList} = this.props
    const {imgUrl, description, username, companyName} = reviewsList[position]
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1 className="heading">Reviews</h1>
          <div className="review-container">
            <button
              data-testid="leftArrow"
              type="button"
              onClick={this.leftArrowClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="profile-container">
              <img src={imgUrl} alt={username} className="user-photo" />
              <p className="user-name">{username}</p>
              <p className="company-name">{companyName}</p>
            </div>

            <button
              data-testid="rightArrow"
              type="button"
              onClick={this.rightArrowClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="user-description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
