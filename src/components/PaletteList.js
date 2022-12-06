import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

import MiniPalette from "./MiniPalette";

// ________________________________________________________________

const MainDiv = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: white;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
const PaletteDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;

const PaletteList = ({ palettes }) => {
  return (
    <MainDiv>
      <Container>
        <Nav>
          <h1>Hue Box</h1>
          <Link to="/palette/new">Create New Palette</Link>
        </Nav>
        <PaletteDiv>
          {palettes.map((palette) => (
            <MiniPalette {...palette} key={uuidv4()} />
          ))}
        </PaletteDiv>
      </Container>
    </MainDiv>
  );
};

export default PaletteList;
