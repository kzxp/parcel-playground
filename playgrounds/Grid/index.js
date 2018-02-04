import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const Child = styled.div`
  padding: 10px;
  text-align: center;
  color: white;
  background-color: ${({ step }) =>
    `rgba(${Math.min(255 - step, 255)}, ${Math.min(step, 255)}, ${Math.min(step, 255)}, 1)`};
`

class GridPlayground extends React.Component {
  render() {
    return (
      <Grid>
        {[...Array(100)].map((val, index) => (
          <Child key={index} step={index + 1 * index}>
            {index + 1}
          </Child>
        ))}
      </Grid>
    )
  }
}

export default GridPlayground
