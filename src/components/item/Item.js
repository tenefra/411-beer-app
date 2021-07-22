import { Component } from "react"
import styles from "./item.module.css"

export class Item extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className={styles["item"]}>
        <h3>{this.props.name}</h3>
        <img src={this.props.image_url} alt={this.props.name} className={styles["image"]} />
        <p>{this.props.tagline}</p>
        <time>{this.props.first_brewed}</time>
        <p>{this.props.description}</p>
      </li>
    )
  }
}
