import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const topBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const containerDiv = styled.div`
  width: 100%;
  display: flex;
  color: white;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const containerLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;
const containerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
const containerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`;
const TopBar = () => {
  return (
    <topBar>
      <containerDiv>
        <containerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </containerLeft>
        <containerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </containerCenter>
        <containerRight>
          <span>LOG IN</span>
        </containerRight>
      </containerDiv>
    </topBar>
  );
};

export default TopBar;