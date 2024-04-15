import styled from 'styled-components';

export const UserProfileCard = styled.div`
  width: 500px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 35%) 0px 3px 3px -2px,
    rgb(0 0 0 / 35%) 0px 3px 4px 0px, rgb(0 0 0 / 35%) 0px 1px 8px 0px;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: #fafafa;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: white;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-primary-text);
`;

export const UserInfo = styled.p`
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-secondary-text);
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  background: var(--color-background-stats);
`;

export const StatItem = styled.li`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  outline: 1px solid rgba(180, 180, 180, 0.7);
`;

export const StatLabel = styled.span`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-secondary-text);
`;

export const StatQuantity = styled.span`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-primary-text);
`;
