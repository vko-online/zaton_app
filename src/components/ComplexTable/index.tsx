import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DataTable, Menu } from 'react-native-paper'

type Row<T> = {
  label: string
  value: keyof T
}
interface Props<T> {
  data: T[]
  first: Row<T>
  middle: Array<Row<T>>
  last: Row<T>
  onPress?: (item: T) => void
}
const Order = {
  ascending: 'ascending',
  descending: 'descending'
}
type State<K> = {
  orderedColumn: number
  ordering?: keyof typeof Order
  column2Show: keyof K
}
export default function Screen<T> ({
  data,
  first,
  middle,
  last,
  onPress
}: Props<T>) {
  const [visible, setVisible] = useState(false)
  const [state, setState] = useState<State<T>>({
    orderedColumn: 1,
    ordering: undefined,
    column2Show: middle[0].value
  })
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  function handleMenuSelect (item: Row<T>) {
    setState({
      ...state,
      column2Show: item.value
    })
    closeMenu()
  }

  function sort (arr: T[]) {
    const { orderedColumn, ordering, column2Show } = state

    if (!ordering) return arr

    let propKey = first.value

    if (orderedColumn === 2) {
      propKey = column2Show
    }

    if (orderedColumn === 3) {
      propKey = last.value
    }

    return arr.sort((a, b) => {
      const aValue = a[propKey]
      const bValue = b[propKey]

      if (ordering === Order.ascending) {
        return aValue === bValue ? 0 : aValue > bValue ? 1 : -1
      }

      return bValue === aValue ? 0 : bValue > aValue ? 1 : -1
    })
  }

  const sortedData = sort(data)

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title
          sortDirection={state.orderedColumn === 1 ? state.ordering : undefined}
          onPress={() => {
            setState({
              ...state,
              orderedColumn: 1,
              ordering:
                state.orderedColumn === 1
                  ? state.ordering === 'ascending'
                      ? 'descending'
                      : 'ascending'
                  : 'descending'
            })
          }}
        >
          {first.label}
        </DataTable.Title>
        <DataTable.Title onPress={openMenu} numeric>
          {middle.find((v) => v.value === state.column2Show)?.label}
        </DataTable.Title>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<View style={s.menuHack} />}
        >
          {middle.map((v, i) => (
            <Menu.Item
              icon={
                v.value === state.column2Show
                  ? 'checkbox-marked'
                  : 'checkbox-blank-outline'
              }
              key={i}
              onPress={() => handleMenuSelect(v)}
              title={v.label}
            />
          ))}
        </Menu>
        <DataTable.Title
          sortDirection={state.orderedColumn === 3 ? state.ordering : undefined}
          numeric
          onPress={() => {
            setState({
              ...state,
              orderedColumn: 3,
              ordering:
                state.orderedColumn === 3
                  ? state.ordering === 'ascending'
                      ? 'descending'
                      : 'ascending'
                  : 'descending'
            })
          }}
        >
          {last.label}
        </DataTable.Title>
      </DataTable.Header>

      {sortedData.map((item, index) => (
        <DataTable.Row key={index} onPress={() => onPress && onPress(item)}>
          <DataTable.Cell>{item[first.value]}</DataTable.Cell>
          <DataTable.Cell numeric>{item[state.column2Show]}</DataTable.Cell>
          <DataTable.Cell numeric>{item[last.value]}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page)
        }}
        label='1-2 of 6'
      />
    </DataTable>
  )
}

const s = StyleSheet.create({
  menuHack: { width: 1, height: 1 }
})
