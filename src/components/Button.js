import React from 'react'

export default function Button(props) {
  return(
    // <button className={props.class}><span>{props.logo}</span>{props.name}</button>

    <a href={props.link} target='_blank' rel="noreferrer" className={props.class}><span>{props.logo}</span>{props.name}</a>
  )
}