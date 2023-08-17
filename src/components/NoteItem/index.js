import {RiDeleteBin5Fill} from 'react-icons/ri'
import {ListItem, ListTitle, Text, CardBtn, Time} from './styledComponents'
import './index.css'

const NoteItem = props => {
  const {noteDetails, onRemoveItems} = props
  const {id, noteTitle, noteText, createdData, color} = noteDetails
  console.log(color)
  const onClickToRemove = () => {
    onRemoveItems(id)
  }

  return (
    <ListItem bgColor={color}>
      <CardBtn className="btn" onClick={onClickToRemove} type="button">
        <RiDeleteBin5Fill />
      </CardBtn>
      <ListTitle> {noteTitle} </ListTitle>
      <Text> {noteText} </Text>
      <Time> {createdData} </Time>
    </ListItem>
  )
}

export default NoteItem
