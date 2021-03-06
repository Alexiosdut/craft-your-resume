import { nanoid } from 'nanoid'

import { useFocus } from './use-focus'
import { deepCopy } from '../utils/deepCopy'
import { storeList } from '../utils/storeList'

export const useHandleForm = <T extends any[]>(
  list: T,
  setList: (value: T) => void,
) => {
  const { ref, toggleFocus } = useFocus()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
  ) {
    const newList = deepCopy(list)
    newList[index][e.target.name] = e.target.value
    setList(newList)
    storeList(newList)
  }

  function handleAddContact() {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), contactItem: '' })
    toggleFocus()
    setList(newList)
  }

  function handleAddExperience() {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), role: '', company: '', description: '' })
    toggleFocus()
    setList(newList)
  }

  function handleAddEducation() {
    const newList = deepCopy(list)
    newList.push({ id: nanoid(), university: '', specialize: '', website: '' })
    toggleFocus()
    setList(newList)
  }

  function handleRemoveInput(index: number) {
    const newList = deepCopy(list)
    newList.splice(index, 1)
    setList(newList)
    storeList(newList)
  }

  return {
    ref,
    handleInputChange,
    handleAddContact,
    handleAddExperience,
    handleAddEducation,
    handleRemoveInput,
  }
}
