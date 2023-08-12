import styled from 'styled-components'

export const NotesPage = styled.div`
  height: 100vh;
  background-size: cover;
  display: grid;
  place-items: center;
  font-family: 'Roboto';
`
export const NotesSec = styled.div`
  height: 90%;
  width: 90%;
  box-shadow: 1px 1px 3px 1px #475569;
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    height: 95%;
  }
`
export const Title = styled.h1`
  text-align: center;
  color: #4c63b6;
  font-size: 24px;
  font-family: Bree Serif;
`
export const NotesForm = styled.form`
  height: 30vh;
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 3px 1px #475569;
  border-radius: 10px;

  @media (min-height: 768px) {
    height: 20vh;
  }
`
export const Input = styled.input`
  padding-left: 10px;
  height: 30px;
  border: none;
  margin: 10px;
`
export const TextArea = styled.textarea`
  padding-left: 10px;
  margin-top: 10px;
  border: none;
  margin: 10px;
`
export const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: #4c63b6;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  align-self: end;
  margin: 10px;
  cursor: pointer;
`
export const NoNotesItemSec = styled.div`
  height: 45vh;
  width: 80%;
  align-self: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  widht: 100px;
  background-size: cover;
`
export const NoNotesTitle = styled.h1`
  font-size: 20px;
  color: #1e293b;
  height: 5px;
`
export const Paragraph = styled.p`
  font-size: 14px;
  color: #334155;
  height: 10px;
`
export const Ul = styled.ul`
  height: 45vh;
  width: 80%;
  align-self: center;
  margin-top: 10px;
  display: flex;
  padding-left: 0px;
  flex-wrap: wrap;
  list-style-type: none;

  @media (min-height: 768px) {
    display: flex;
    justify-content: center;
  }
`
