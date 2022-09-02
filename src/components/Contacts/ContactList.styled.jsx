import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
  padding-left: 30px;
  margin: 0;
  margin-top: 10px;
  width: 340px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 8px;
`;
export const ListItemText = styled.p`
  margin: 0;
`;
export const Btn = styled.button`
  height: 25px;
  background-color: white;
  outline: none;
  border: 2px solid slateblue;
  border-radius: 10px;
  margin: 0;
  cursor: pointer;
  :hover {
    background-color: gainsboro;
  }
`;
