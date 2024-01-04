import {Component} from 'react'
import {v4} from 'uuid'
import ListItem from './listItem'
import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    itemsList: [],
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  addItem = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newItem = {
      id: v4(),
      name: searchInput,
      length: searchInput.length,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newItem],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, itemsList} = this.state
    const length = itemsList.length > 0

    return (
      <div className="container">
        <div className="cards-container">
          <div className="card-container1">
            <div className="card1">
              <h1 className="heading1">Count the characters like a Boss...</h1>
            </div>
            {length ? (
              <ul className="list-container">
                {itemsList.map(item => (
                  <ListItem key={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="card-container2">
            <h1 className="heading2">Character Counter</h1>
            <form className="search-and-add" onSubmit={this.addItem}>
              <input
                type="text"
                className="input"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={searchInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
