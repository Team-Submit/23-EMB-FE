import { Link } from 'react-router-dom';
import { color } from './../../../styles/theme';
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;  
  justify-content: space-between;
  padding: 12px 40px;
  min-width: 700px;
  border-bottom: 1px solid ${color.Gray[75]};
  position: sticky;
  top:0;
  background-color: ${color.White};
  z-index: 100;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Name = styled.div`
position: relative;
  display: flex;
  gap: 4px;

  cursor: pointer;

  >p{
    font-size: 24px;
  }
`
export const SettingDropContainer = styled.div`
  position: absolute;
  top:28px;
  right: 0px;

  padding: 6px 12px;
  width: 120px;

  background-color: ${color.White};
  border: 1px solid ${color.Gray[75]};
  border-radius: 4px;

  >div{
    cursor: pointer;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const TabLink =  styled(Link)`
  text-decoration: none;
`