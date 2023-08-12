import {ListItem, ListTitle, Text} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {noteTitle, noteText} = noteDetails
  return (
    <ListItem>
      <ListTitle> {noteTitle} </ListTitle>
      <Text> {noteText} </Text>
    </ListItem>
  )
}

export default NoteItem
