import styled from 'styled-components'

export {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
  FullNameStyled,
  CurrentPositionStyled,
  WrapperStyled,
  BoxStyled,
}

type SectionHeadingStyledProps = {
  first?: boolean
  center?: boolean
  large?: boolean
  underline?: boolean
  mt20?: boolean
  uppercase: boolean
  letterSpacing: number
}

const SectionHeadingStyled = styled.div<SectionHeadingStyledProps>`
  font-size: 14px;
  font-weight: 700;
  margin-top: 32px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
  ${props => props.first && 'margin: 0;'};
  ${props => props.center && 'text-align: center;'};
  ${props => props.large && 'font-size: 16px;'};
  ${props =>
    props.underline &&
    'padding-bottom: 5px; border-bottom: solid var(--font-color) 1px;'};
  ${props => props.mt20 && 'margin-top: 20px;'};
`

type SectionContentStyledProps = {
  mt10?: boolean
}

const SectionContentStyled = styled.div<SectionContentStyledProps>`
  margin-top: 16px;
  ${props => props.mt10 && 'margin-top: 10px;'};
`

type SectionSubHeadingStyledProps = {
  sm?: boolean
  noMargin?: boolean
}

const SectionSubHeadingStyled = styled.div<SectionSubHeadingStyledProps>`
  font-size: 14px;
  margin-top: 16px;
  ${props =>
    props.sm && 'font-size: 13px; font-style: italic; margin-top: 12px;'};
  ${props => props.noMargin && 'margin: 0;'};
`

type SideStyledProps = {
  pr?: boolean
  pl?: boolean
}

const SideStyled = styled.div<SideStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  ${props => props.pr && 'padding-right: 40px;'};
  ${props => props.pl && 'padding-left: 40px;'};
`

const FullNameStyled = styled.div`
  font-size: 28px;
  font-weight: 700;
`

type currentPosition = {
  italic?: boolean
  mt5?: boolean
  sm?: boolean
  bold?: boolean
}

const CurrentPositionStyled = styled.div<currentPosition>`
  font-size: 16px;
  margin-top: 10px;

  ${props => props.italic && 'font-style: italic;'};
  ${props => props.mt5 && 'margin-top: 5px;'};
  ${props => props.sm && 'font-size: 14px;'};
  ${props => props.bold && 'font-weight: 700;'};
`

const WrapperStyled = styled.div`
  padding: 0 50px;
  padding-bottom: 32px;
`

const BoxStyled = styled.div`
  margin-top: 1rem;

  &:first-of-type {
    margin: 0;
  }
`
