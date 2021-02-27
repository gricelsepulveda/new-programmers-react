import React from 'react'

type ListProps = {
  data: dataListType[]
}

type dataListType = {
  name: string,
  tipo: string,
  edad: number
}

const List:React.FunctionComponent<ListProps> = (props) => {

  return (
    <ul>
      {
        props.data.map((dato, n_item) => 
          <li key={n_item}>
            El nombre de la mascota es {dato.name}  y es un {dato.tipo} y tiene {dato.edad} anios
          </li> 
        )
      }
    </ul>
  )
}
export default List