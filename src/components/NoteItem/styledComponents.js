import styled from 'styled-components'

export const ListItem = styled.li`
  box-shadow: 1px 1px 2px 1px #475569;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-height: 767px) {
    height: 160px;
    width: 125px;
    overflow-x: auto;
  }
  @media (min-height: 768px) {
    height: 250px;
    width: 200px;
  }
  @media (orientation: landscape) {
    height: 300px;
    width: 200px;
  }
`
export const ListTitle = styled.h1`
  font-size: 20px;
  text-align: start;
  color: #1e293b;
  font-weight: bold;
  font-family: Bree Serif;

  @media (max-height: 767px) {
    height: 10px;
    margin: 10px;
    margin-bottom: 5px;
  }
  @media (min-height: 768px) {
    height: 10px;
    margin: 10px;
    margin-bottom: 10px;
    font-size: 25px;
  }
`
export const Text = styled.p`
  font-size: 16px;
  color: #334155;
  padding: 10px;
  @media (max-height: 767px) {
    font-size: 10px;
  }
  @media (orientation: landscape) {
    font-size: 16px;
  }
`
export const CardBtn = styled.button`
  align-self: flex-end;
  height: 30px;
  width: 50px;
  border: none;
  background-color: purple;
  color: #ffffff;
  cursor: pointer;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
`
