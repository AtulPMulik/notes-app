import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesPage,
  NotesSec,
  Title,
  NotesForm,
  Input,
  TextArea,
  Button,
  NoNotesItemSec,
  Image,
  NoNotesTitle,
  Paragraph,
  Ul,
} from './styledComponents'

const Notes = () => {
  const [title, changeTitle] = useState('')
  const [notes, addNotes] = useState('')
  const [notesArray, addToArray] = useState([])

  const onSubmitToAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      noteTitle: title,
      noteText: notes,
    }
    addToArray(prevState => [...prevState, newNote])

    changeTitle('')
    addNotes('')
  }

  const onRemoveItems = id => {
    const updatedList = notesArray.filter(each => each.id !== id)
    addToArray(updatedList)
  }

  const onChangeTitleInput = event => {
    changeTitle(event.target.value)
  }

  const onChangeNotesInput = event => {
    addNotes(event.target.value)
  }

  const renderNoNotesItemSec = () => (
    <NoNotesItemSec>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesTitle> No Notes Yet </NoNotesTitle>
      <Paragraph> Notes you add will appear here </Paragraph>
    </NoNotesItemSec>
  )

  const renderNotesItemSec = () => (
    <Ul>
      {notesArray.map(eachItem => (
        <NoteItem
          key={eachItem.id}
          noteDetails={eachItem}
          onRemoveItems={onRemoveItems}
        />
      ))}
    </Ul>
  )

  return (
    <NotesPage>
      <NotesSec>
        <Title> Notes </Title>
        <NotesForm onSubmit={onSubmitToAddNote}>
          <Input
            value={title}
            onChange={onChangeTitleInput}
            type="text"
            placeholder="Title"
            required
          />
          <TextArea
            value={notes}
            onChange={onChangeNotesInput}
            rows="5"
            cols="20"
            placeholder="Take a Note..."
            required
          />
          <Button type="submit"> Add </Button>
        </NotesForm>
        {notesArray.length === 0 && renderNoNotesItemSec()}
        {notesArray.length !== 0 && renderNotesItemSec()}
      </NotesSec>
    </NotesPage>
  )
}

export default Notes
