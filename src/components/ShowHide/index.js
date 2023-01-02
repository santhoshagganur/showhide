// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHideFirstName: true, isHideLastName: true}

  isClickFirstName = () => {
    this.setState(prevState => ({isHideFirstName: !prevState.isHide}))
  }

  isClickLastName = () => {
    this.setState(prevState => ({isHideLastName: !prevState.isHide}))
  }

  render() {
    const {isHideFirstName, isHideLastName} = this.state

    const textFirstName = isHideFirstName ? '' : 'Joe'
    const firstClassname = isHideFirstName ? '' : 'hide'

    const textLastName = isHideLastName ? '' : 'Jonas'
    const lastClassname = isHideLastName ? '' : 'hide'

    return (
      <div className="bg-container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="inner-container">
          <div>
            <button
              type="button"
              className="enter"
              onClick={this.isClickFirstName}
            >
              Show/Hide Firstname
            </button>
            <p className={firstClassname}> {textFirstName}</p>
          </div>
          <div>
            <button
              type="button"
              className="enter"
              onClick={this.isClickLastName}
            >
              Show/Hide Lastname
            </button>
            <p className={lastClassname}> {textLastName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
