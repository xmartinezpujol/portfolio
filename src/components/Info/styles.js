import styled from 'styled-components';
import { View } from 'wasabi-kit';

const CardInfo = styled(View)`
  margin: 10px auto;
  width: 90%;
  height: 250px;
  padding: 10px 30px 20px 30px;
  box-shadow: 0px 4px 10px -1px rgba(0,0,0,0.68);
  &:nth-of-type(1){
    background-color: #B9F6CA;
    color: #1B5E20;
  }
  &:nth-of-type(2){
    background-color: #D1C4E9;
    color: #311B92;
  }
  &:nth-of-type(3){
    background-color: #FFF9C4;
    color: #795548;
  }
  &:nth-of-type(4){
    background-color: #E1F5FE;
    color: #303F9F;
  }
  @media (min-width: 500px) {
    width: calc(50% - 20px);
  }
  @media (min-width: 1200px) {
    width: calc(25% - 20px);
  }
`;

const StyledInfoContainer = styled(View)`
  flex-wrap: wrap;
  && {
    max-width: 1100px;
    margin: 30px auto;  
  }
`;

export {
  StyledInfoContainer,
};

export default CardInfo;
