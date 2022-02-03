import React from 'react';
import styled from 'styled-components';

const SectionLayout = (props) => {
    return <StyledSection {...props}>
        {props.children}
    </StyledSection>;
};

const StyledSection = styled.section`
@media (max-width: 768px) {
    flex-direction: column;
  padding: 16px 20px ;

  }
  padding: 20px 80px ;
`


export default SectionLayout;
