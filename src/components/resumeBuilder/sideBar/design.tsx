import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'

import { useTemplates } from '../../../hooks/use-templates'
import { useFormContext } from '../../../contexts/form-context'
import { device } from '../../../utils/device'
import { useTemplateListContext } from '../../../contexts/templateList-context'

const colors = [
  '#46b3e6',
  '#1b262c',
  '#3e978b',
  '#e84545',
  '#ff935c',
  '#4a69bb',
  '#b063c5',
  '#b5525c',
  '#d789d7',
  '#8f71ff',
  '#cbaf87',
]

const Design = () => {
  const { edges: templates } = useTemplates()
  const {
    state: { currentTemplate },
    dispatch,
  } = useTemplateListContext()
  const {
    lineHeight,
    setLineHeight,
    uppercaseHeading,
    setUppercaseHeading,
    letterSpacing,
    setLetterSpacing,
    color,
    setColor,
  } = useFormContext()

  function handleLineHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 1.5
    const minValue = 1
    const value = parseFloat(e.target.value)

    if (value <= maxValue && value >= minValue) setLineHeight(value)
  }

  function handleLetterSpacingChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 2.5
    const minValue = 1
    const value = parseFloat(e.target.value)

    if (value <= maxValue && value >= minValue) setLetterSpacing(value)
  }

  type Color = {
    hex: string
  }

  function updateColor(updatedColor: Color) {
    setColor(updatedColor.hex)
  }

  return (
    <DesignTabWrapperStyled>
      <InputWrapperStyled>
        <label htmlFor="lineHeight">Line Height - Body</label>
        <input
          type="number"
          step={'0.05'}
          name="lineHeight"
          value={lineHeight}
          onChange={handleLineHeightChange}
        />
      </InputWrapperStyled>
      <InputWrapperStyled>
        <label htmlFor="letterSpacing">Letter Spacing - Headings</label>
        <input
          type="number"
          step={'0.5'}
          name="letterSpacing"
          value={letterSpacing}
          onChange={handleLetterSpacingChange}
        />
      </InputWrapperStyled>
      <CheckboxWrapperStyled>
        <label htmlFor="uppercase">Uppercase - Headings</label>
        <div>
          <input
            name="uppercase"
            type="checkbox"
            checked={uppercaseHeading}
            onChange={() => setUppercaseHeading(isUppercase => !isUppercase)}
          />
        </div>
      </CheckboxWrapperStyled>
      <HeadingStyled>Color</HeadingStyled>
      <CirclePicker colors={colors} color={color} onChange={updateColor} />
      <HeadingStyled mt>Template</HeadingStyled>
      <ImgBoxWrapperStyled>
        <ImgBoxStyled>
          {templates.map(({ node }) => (
            <ImgWrapperStyled
              selected={currentTemplate === node.name ? true : false}
              key={node.name}
              onClick={() =>
                dispatch({
                  type: 'setCurrentTemplate',
                  templateName: node.name,
                })
              }
            >
              <Img
                fluid={node.childImageSharp.fluid}
                alt={`Resume template: '${node.name}'`}
              />
            </ImgWrapperStyled>
          ))}
        </ImgBoxStyled>
      </ImgBoxWrapperStyled>
    </DesignTabWrapperStyled>
  )
}

const DesignTabWrapperStyled = styled.div`
  font-size: 14px;
`

const InputWrapperStyled = styled.div`
  width: 70%;
  margin-bottom: 1.2rem;
  
  label {
    display: block;
    margin-bottom: 0.8rem;
  }

  input {
    width: 70%;
    padding: 6px 10px;
    margin: 0;

    ${device.tablet`
      width: 40%;
    `}

    ${device.laptop`
      width: 35%;
    `}

    ${device.laptopL`
      width: 30%;
    `}
  }
`

const CheckboxWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.2rem;

  div {
    flex-basis: 50px;
    height: 1rem;
  }

  input {
    cursor: pointer;
    margin: 0;
  }
`

type HeadingStyledProps = {
  mt?: boolean
}

const HeadingStyled = styled.div<HeadingStyledProps>`
  margin-bottom: 1.2rem;
  ${props => props.mt && 'margin-top: 1.2rem;'}
`

const ImgBoxWrapperStyled = styled.div`
  overflow: auto;
`

const ImgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px);
  grid-gap: 1.2rem;
  padding: 7px;
  width: 390px;

  ${device.tablet`
    width: 510px;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(5, 80px);
  `};
`

type ImgWrapperStyledProps = {
  selected: boolean
}

const ImgWrapperStyled = styled.div<ImgWrapperStyledProps>`
  cursor: pointer;
  border: solid var(--light-blue-color) 1px;
  box-shadow: 0px 0px 7px 1px var(--light-blue-color);
  border-radius: 5px;

  ${props => props.selected && 'border: solid var(--blue-color) 1px;'};
  ${props =>
    props.selected && 'box-shadow: 0px 0px 7px 1px var(--blue-color);'};
`

export default Design
