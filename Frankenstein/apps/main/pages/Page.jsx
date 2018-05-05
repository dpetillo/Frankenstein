import React, { Component, PropTypes } from 'react'

class Page extends Component {

  constructor() {
    super()
  }

  static contextTypes = {
    model: PropTypes.object,
    router: PropTypes.any
  }

  static propTypes = {
    children: PropTypes.any
  }

  componentWillMount() {
  }

  render () {
    let { children } = this.props

    return React.cloneElement(children)
  }
}


export default Page
