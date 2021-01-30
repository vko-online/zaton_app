import { Component, Key, ReactNode } from 'react'

export interface DropdownOptionProps<T> {
   value: T | undefined;
   itemKey: Key;
   title?: ReactNode;
   description?: ReactNode;
   label: string;
   right?: (props: {
     color: string;
     style?: {
       marginRight: number;
       marginVertical?: number;
     };
   }) => ReactNode;
   left?: (props: {
     color: string;
     style: {
       marginLeft: number;
       marginRight: number;
       marginVertical?: number;
     };
   }) => ReactNode;
 }

export default class DropdownOption<T> extends Component<
   DropdownOptionProps<T>
 > {
  render (): ReactNode {
    throw new Error('<DropdownOption/> must be a direct child to <Dropdown/>')
  }
}
