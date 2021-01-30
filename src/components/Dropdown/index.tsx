import React, { createRef, Key, ReactElement, useState } from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { List, Surface, TouchableRipple, Portal, IconButton, Dialog, Text, useTheme } from 'react-native-paper'
import DropdownOption, { DropdownOptionProps } from './DropdownOption'

export interface DropdownProps<T> {
   placeholder?: string;
   searchable?: boolean;
   required?: boolean;
   children:
     | ReactElement<DropdownOptionProps<T>>[]
     | ReactElement<DropdownOptionProps<T>>;
   maxHeight?: number;
   onSelect?: (selected?: T) => void;
   selectedKey?: Key;
   noResultsMessage?: string;
   noOptionLabel?: string;
 }

function DropdownChild<T> (props: {
   props: DropdownOptionProps<T>;
   onPress: () => void;
 }) {
  return (
     <List.Item
       title={props.props.title}
       description={props.props.description}
       right={props.props.right}
       onPress={props.onPress}
       left={props.props.left}
     />
  )
}

function Dropdown<T> (ownProps: DropdownProps<T>) {
  const theme = useTheme()
  const [isOpen, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Key | undefined>(
    ownProps.selectedKey
  )
  const [coordinates, setCoordinates] = useState({ width: 0, left: 0, top: 0 })
  const viewRef = createRef<View>()
  const {
    placeholder = 'Select an option',
    maxHeight = 250,
    noResultsMessage = 'No results',
    noOptionLabel = 'None',
    required = false,
    onSelect
  } = ownProps
  const children: ReactElement<DropdownOptionProps<T>>[] = Array.isArray(
    ownProps.children
  )
    ? ownProps.children
    : [ownProps.children]
  const selectedValue = children
    .map((item) => item.props)
    .find((item) => item.itemKey === selectedOption)

  function openMenu (open: boolean) {
    if (Platform.OS === 'web') {
       viewRef.current?.measure((_x, _y, width, height, pageX, pageY) =>
         setCoordinates({
           width: width,
           left: pageX,
           top: pageY + height
         })
       )
    }
    setOpen(open)
  }

  const optionsChildren = [
    ...(!required
      ? [
           <DropdownChild
             key='none'
             props={{
               value: undefined,
               itemKey: 'none',
               label: noOptionLabel,
               title: noOptionLabel
             }}
             onPress={() => {
               setSelectedOption(undefined)
               openMenu(false)
               if (onSelect) {
                 onSelect(undefined)
               }
             }}
           />
        ]
      : []),
    ...(required && children.length === 0
      ? [<List.Item key='none' disabled title={noResultsMessage} />]
      : []),
    ...children.map(({ props }) => (
       <DropdownChild
         key={props.itemKey}
         props={props}
         onPress={() => {
           setSelectedOption(props.itemKey)
           openMenu(false)
           if (onSelect) {
             onSelect(props.value)
           }
         }}
       />
    ))
  ]

  return (
     <View ref={viewRef}>
       <TouchableRipple borderless onPress={() => openMenu(!isOpen)}>
         <Surface
           style={[
             styles.container,
             {
               borderRadius: theme.roundness,
               borderColor: isOpen
                 ? theme.colors.primary
                 : theme.colors.backdrop
             }
           ]}
         >
           <Text
             style={[
               styles.text,
               {
                 color: selectedValue
                   ? theme.colors.text
                   : theme.colors.placeholder
               }
             ]}
           >
             {selectedValue?.label ?? placeholder}
           </Text>
           <IconButton
             style={styles.icon}
             icon='menu-down'
             onPress={() => openMenu(true)}
           />
         </Surface>
       </TouchableRipple>
       <Portal>
         {Platform.select({
           web: isOpen && (
             <TouchableWithoutFeedback
               style={styles.modalContainer}
               onPress={() => openMenu(false)}
             >
               <View style={styles.modal}>
                 <Surface style={[coordinates, styles.modalContent]}>
                   <ScrollView style={{ maxHeight: maxHeight }}>
                     {optionsChildren}
                   </ScrollView>
                 </Surface>
               </View>
             </TouchableWithoutFeedback>
           ),
           default: (
             <Dialog visible={isOpen} onDismiss={() => openMenu(false)}>
               <ScrollView>{optionsChildren}</ScrollView>
             </Dialog>
           )
         })}
       </Portal>
     </View>
  )
}

Dropdown.Option = DropdownOption

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 1
  },
  text: {
    flex: 1,
    paddingHorizontal: 10
  },
  icon: {
    margin: 2.5
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  modal: {
    width: '100%',
    height: '100%'
  },
  modalContent: {
    position: 'relative'
  }
})

export default Dropdown
