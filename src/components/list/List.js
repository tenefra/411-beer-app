import { Component } from "react"
import { Item } from "../item/Item"
import styles from "./list.module.css"

export class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }
  }
  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json())
      .then(data =>
        this.setState({
          beers: data
        })
      )
  }

  componentDidUpdate() {
    console.log(this.state.beers)
  }

  render() {
    return (
      <ul className={styles["list"]}>
        {this.state.beers.map(beer => {
          // return <Item beer={beer} />

          return (
            <li className={styles["item"]}>
              <h3>{beer.name}</h3>
              <img src={beer.image_url} alt={beer.name} className={styles["image"]} />
              <p>{beer.tagline}</p>
              <time>{beer.first_brewed}</time>
              <p>{beer.description}</p>
            </li>
          )
        })}
      </ul>
    )
  }
}
