import { Component } from "react"
import { List } from "./components/list/List"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
  }

  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}

export default App
