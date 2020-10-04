import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 1rem;
  items-align: center;
  justify-content: center;
`;

const StyledRange = styled.div`
  height: 1rem;
  border-radius: 10px;
  background: gray;
  position: relative;
  min-width: 100%;
`;
const RangeSelected = styled.div`
  position: absolute;
  height: 1rem;
  border-radius: 10px;
  background: green;
`;

const Range = ({ min, max, step, value }) => {
  return (
    <StyledContainer>
      <StyledRange>
        <RangeSelected
          style={{ width: `${((value - min) * 100) / (max - min)}%` }}
        ></RangeSelected>
      </StyledRange>
    </StyledContainer>
  );
};

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Range;
