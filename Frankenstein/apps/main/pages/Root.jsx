import React, { PropTypes } from 'react'
import Page from './Page'

class Root extends Page {

  static propTypes = {
    children: PropTypes.element
  }

  render () {
    let { children } = this.props

    return <Page>{children}</Page>
  }
}

export default Root
