import styled from 'styled-components';

export const Friends = styled.ul`
  display: block;
  width: 500px;
  margin-top: 32px;
  padding: 32px 0;
  border-radius: 16px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 35%) 0px 3px 3px -2px,
    rgb(0 0 0 / 35%) 0px 3px 4px 0px, rgb(0 0 0 / 35%) 0px 1px 8px 0px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 35%) 0px 3px 3px -2px,
    rgb(0 0 0 / 35%) 0px 3px 4px 0px, rgb(0 0 0 / 35%) 0px 1px 8px 0px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const StatusSpan = styled.span.withConfig({
  shouldForwardProp: prop => prop !== 'isOnline',
})`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'tomato')};
`;

export const AvatarImg = styled.img`
  display: block;
  margin-right: 16px;
  padding: 0;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
