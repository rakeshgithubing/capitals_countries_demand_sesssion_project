import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const Item = props => {
  const {array} = props
  const {id, capitalDisplayText} = array
  return (
    <option className="capitals-option" value={id}>
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {value: countryAndCapitalsList[0].id}

  onChangeText = event => {
    this.setState({
      value: event.target.value,
    })
    console.log(event.target.value)
  }

  render() {
    const {value} = this.state
    const filteredArray = countryAndCapitalsList.filter(
      each => each.id === value,
    )
    // const countryId = filteredArray.map(obj1 => obj1.id)
    const countryName = filteredArray.map(obj2 => obj2.country)
    return (
      <div className="app-container">
        <div className="capitals-container">
          <div>
            <h1 className="heading">Countries And Capitals</h1>
            <div>
              <select
                className="capitals-select"
                onChange={this.onChangeText}
                value={value}
              >
                {countryAndCapitalsList.map(eachObject => (
                  <Item array={eachObject} key={eachObject.id} />
                ))}
              </select>
              <span className="capitals-span">
                is capital of which country?
              </span>
            </div>
            <p className="countries-heading">{countryName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
