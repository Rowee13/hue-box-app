import styled from "@emotion/styled";

// _______________________________________________________

const MainDiv = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -3.5px;
`;

const DraggableColorBox = ({ color }) => {
  return <MainDiv style={{ backgroundColor: color }}>{color}</MainDiv>;
};

export default DraggableColorBox;
