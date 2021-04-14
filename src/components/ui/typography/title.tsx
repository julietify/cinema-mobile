import React from 'react'
import styled from 'styled-components/native'
import { palette } from '../../../theme/palette'

interface ITypography {
  fontSize?: number | string
}

export const Title = styled.Text<ITypography>`
  font-size: ${props => props.fontSize || '32px'};
  font-weight: bold;
  color: #fff;
`

export const Body1 = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin: 10px;
  color: rgba(255, 255, 255, .6);
`

export const Body2 = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, .3);
`