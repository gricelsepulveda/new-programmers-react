import React from 'react'

export type ListDataType = {
  value: string | number | any[],
  name: string,
  origin: string
}

type ListPropsType = {
  data: ListDataType[]
}

const List:React.FunctionComponent<ListPropsType> = (props) => {

  return (
    <ul>
      { 
        props.data.map((item, n_item) => 
          <li key={`${n_item}-li-element`}>
            {`${item.name}: ${item.value} (dato originado desde ${item.origin})`}
          </li>
        )
      }
    </ul>
  )
}
export default List