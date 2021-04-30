import styled from 'styled-components/native'
import { palette } from '../../../theme/palette'

interface ITypography {
  fontSize?: number | string
  color?: string
  margin?: string
}

export const Title = styled.Text<ITypography>`
  font-size: ${props => props.fontSize || '32px'};
  font-weight: bold;
  color: ${props => props.color || palette.theme.light};
`

export const Body1 = styled.Text<ITypography>`
  font-size: 12px;
  font-weight: bold;
  margin: ${props => props.margin || '10px'};
  color: ${props => props.color || 'rgba(255, 255, 255, .6)'};
`

export const Body2 = styled.Text<ITypography>`
  font-size: 11px;
  font-weight: bold;
  color: ${props => props.color || 'rgba(255, 255, 255, .6)'};
`

export const Title1 = styled.Text`
  font-size: 13px;
  font-weight: bold;
`