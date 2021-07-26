import React from "react"
import styles from "./item.module.css"

function Item(props) {
  return (
    <li className={styles["item"]}>
      <h3>{props.beer.name}</h3>
      <img src={props.beer.image_url} alt={props.beer.name} className={styles["image"]} />
      <p>{props.beer.tagline}</p>
      <time>{props.beer.first_brewed}</time>
      <p>{props.beer.description}</p>
    </li>
  )
}

export default Item
