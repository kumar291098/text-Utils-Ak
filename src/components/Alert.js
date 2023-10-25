import React from 'react'

export default function Alert(props) {
    const captlize=(words)=>{
        const lower=words.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (

    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captlize(props.alert.type)} </strong>{props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    

  )
}
