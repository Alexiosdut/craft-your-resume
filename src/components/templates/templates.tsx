import React, { useReducer } from "react"

import { TemplateWrapperStyled } from "../../styled/templatesStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import { templatesReducer } from "../../reducers/templatesReducer"
import Modal from "./modal"

const initialState = {
  isModalOpen: false,
  currentTemplate: "",
  wobble: false,
}

const Templates: React.FC<{}> = ({ children }) => {
  const { edges } = useTemplates()
  const [state, dispatch] = useReducer(templatesReducer, initialState)

  function openModal(templateName) {
    dispatch({ type: "openModal", templateName })
  }

  function closeModal() {
    dispatch({ type: "closeModal" })
  }

  const modalProps = {
    isModalOpen: state.isModalOpen,
    closeModal: closeModal,
    currentTemplate: state.currentTemplate,
    wobble: state.wobble,
    stopWobble: () => dispatch({ type: "stopWobble" }),
  }

  return (
    <TemplateWrapperStyled>
      <h3>{children}</h3>
      <div>
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} openModal={openModal} />
        ))}
      </div>
      <Modal {...modalProps}>
        <h2>{state.currentTemplate}</h2>
      </Modal>
    </TemplateWrapperStyled>
  )
}

export default Templates
