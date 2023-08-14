import {RiDeleteBin5Fill} from 'react-icons/ri'
import {ListItem, ListTitle, Text, CardBtn} from './styledComponents'
import './index.css'

const colorList = [
  'red',
  'green',
  'yellow',
  'blue',
  'grey',
  'orange',
  'black',
  'skyblue',
]

const NoteItem = props => {
  const {noteDetails, onRemoveItems} = props
  const {id, noteTitle, noteText} = noteDetails

  const onClickToRemove = () => {
    onRemoveItems(id)
  }

  const randomIndex = Math.ceil(Math.random() * colorList.length)
  const randomColor = colorList[randomIndex]

  return (
    <ListItem bgColor={randomColor}>
      <CardBtn className="btn" onClick={onClickToRemove} type="button">
        <RiDeleteBin5Fill />
      </CardBtn>
      <ListTitle> {noteTitle} </ListTitle>
      <Text> {noteText} </Text>
    </ListItem>
  )
}

export default NoteItem
