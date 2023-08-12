import {RiDeleteBin5Fill} from 'react-icons/ri'
import {ListItem, ListTitle, Text, CardBtn} from './styledComponents'

const NoteItem = props => {
  const {noteDetails, onRemoveItems} = props
  const {id, noteTitle, noteText} = noteDetails

  const onClickToRemove = () => {
    onRemoveItems(id)
  }

  return (
    <ListItem>
      <CardBtn onClick={onClickToRemove} type="button">
        <RiDeleteBin5Fill />
      </CardBtn>
      <ListTitle> {noteTitle} </ListTitle>
      <Text> {noteText} </Text>
    </ListItem>
  )
}

export default NoteItem
