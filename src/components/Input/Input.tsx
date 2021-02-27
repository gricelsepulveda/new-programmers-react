import React from 'react'

type InputResponse = {
  value: string,
  name: string
}

type InputPropsType = {
  onchange: (data:InputResponse) => void,
  placeholder: string,
  value: string,
  disabled: boolean,
  name: string
}

const Input:React.FunctionComponent<InputPropsType> = (props) => {

  const whenInputChange = (Event:any) => {
    props.onchange({
      value: Event.currentTarget.value,
      name: props.name
    })
  }

  return (
    <input
      onChange={whenInputChange}
      name={props.name}
      disabled={props.disabled}
    />
  )
}
export default Input