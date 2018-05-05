import React, { Component, PropTypes } from 'react'

class Search extends Component {

  constructor () {
    super()
    this.state = {
        results: null,
        searchText: '',
        checked: false
    }
  }

  render() {
      let { results } = this.state
      let searchBox = this.getSearchBar(true)

      return (<div className={'column'}><div className={'search'}>
        {searchBox}
        {this.getResultsTable()}
      </div></div>)
  }


  getResultsTable() {
      let { results } = this.state
      if (!results)
          return null;

      let i = 0;
      let rows = results.map(o => <div key={i++}><a href={'#'}>{o}</a></div>)

      return <div className={'search_results'}>{ rows }</div>
  }



  getSearchBar(checked) {
    let { searchText } = this.state

    return (
        <div className={'search_bar'}>
            <input placeholder={'Search...'} type={'text'} onKeyPress={this.handleSearchKeyPress} />
        </div>
    )
  }

  handleSearchKeyPress = (e) => {
    this.setState({ searchText: e.target.value })

    if (e.key === 'Enter') {
        this.submitSearch()
    }
  }

  handleSearchChecked = (e) => {
    if (e.target.checked)
      this.setState({ results: null })
  }

  submitSearch() {
      let { searchText } = this.state

      fetch('/api/v1/search?text=' + searchText)
        .then(response => response.json())
        .then(res => {
            this.setState({ results: res })
        })
  }


}

export default Search
