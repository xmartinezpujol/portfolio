import styled from 'styled-components';

const StyledAvatar = styled.img`
  display: block;
  max-width: 180px;
  max-height: 180px;
  box-shadow: 0px 4px 10px -1px rgba(0,0,0,0.68);
  margin: 0 auto;
  border-radius: 110px;
  @media (min-width: 500px) {
    max-width: 220px;
    max-height: 220px;
  }
`;

const StyledAvatarCaption = styled.figcaption`
  font-size: 20px;
  color: white;
  padding: 10px 0 30px 0;
  margin: 0 auto;
  font-weight: 600;
  text-align: center;
  text-shadow: 2px 2px 0px #2c2e38, 3px 3px 0px #1B5E20;
  @media (min-width: 500px) {
    font-size: 32px; 
  }
`;

export {
  StyledAvatar,
  StyledAvatarCaption,
};
