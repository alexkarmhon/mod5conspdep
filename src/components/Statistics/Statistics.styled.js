import styled from "styled-components";

export const StatSection = styled.section`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 500px;
height: 200px;
margin-top: 30px;
background-color: #fff;
border-radius: 16px;
overflow: hidden;
box-shadow: rgb(0 0 0 / 35%) 0px 3px 3px -2px,
    rgb(0 0 0 / 35%) 0px 3px 4px 0px, rgb(0 0 0 / 35%) 0px 1px 8px 0px;
`

export const StatTitle = styled.h2`
margin-top: auto;
margin-bottom: auto;
text-align: center;
font-size: 24px;
font-weight: 700;
text-transform: uppercase;
color: var(--color-secondary-text);
`

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
flex-basis: 0;
flex-grow: 1;
padding: 8px;
`

export const StatLabel = styled.span`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-secondary-white);
`;

export const StatPercentage = styled.span`
text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0em;
  color: var(--color-secondary-white);
`;