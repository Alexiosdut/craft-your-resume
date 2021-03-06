import React from 'react'
import styled from 'styled-components'

import { useFormContext } from '../../../contexts/form-context'
import {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  MainStyled,
  SideStyled,
  FullNameStyled,
  CurrentPositionStyled,
  WrapperStyled,
} from '../commonStyles'

const Minimal1 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
  } = useFormContext()

  return (
    <WrapperStyled>
      <HeaderStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <FullNameStyled color={color}>{profile.fullName}</FullNameStyled>
        <CurrentPositionStyled>{profile.currentPosition}</CurrentPositionStyled>
      </HeaderStyled>
      <MainStyled>
        <SideStyled width={'40%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Profile
          </SectionHeadingStyled>
          <SectionContentStyled>
            {profile.profileSummary.split('\n').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Skills
          </SectionHeadingStyled>
          <SectionContentStyled>
            {skills.split('\n').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Contact
          </SectionHeadingStyled>
          <SectionContentStyled>
            {contactList.map(item => (
              <div key={item.id}>{item.contactItem}</div>
            ))}
          </SectionContentStyled>
        </SideStyled>
        <SideStyled pl width={'60%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Experience
          </SectionHeadingStyled>
          {experienceList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled>{item.role}</SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.company}
              </SectionSubHeadingStyled>
              <SectionContentStyled>
                {item.description.split('\n').map((item, index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))}
              </SectionContentStyled>
            </div>
          ))}
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Education
          </SectionHeadingStyled>
          {educationList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled fwNormal>
                {item.university}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.specialize}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.website}
              </SectionSubHeadingStyled>
            </div>
          ))}
        </SideStyled>
      </MainStyled>
    </WrapperStyled>
  )
}

type Header = {
  uppercase: boolean
  letterSpacing: number
}

const HeaderStyled = styled.div<Header>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

export default Minimal1
