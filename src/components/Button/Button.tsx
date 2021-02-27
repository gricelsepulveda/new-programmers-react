import React from 'react'

type ButtonPropsType = {
  action: (_name: string) => void,
  text: string,
  disabled: boolean,
  name: string
}

const Button:React.FunctionComponent<ButtonPropsType> = (props) => {

  const buttonTrigger = () => {
    props.action(props.name)
  }

  return (
    <button
      onClick={buttonTrigger}
      name={props.name}
      disabled={props.disabled}
    >
      {props.text != "" ? props.text : "click me"}
    </button>
  )
}
export default Button