import React, { useState } from 'react'

import {
  FormControl,
  InputLabel,
  Input,
  Button
} from '@material-ui/core'
import { ModalContainer, Form, Label, InputColor } from './styled'

import { useAccountProvider } from '@providers/Account/Account.provider'

const AddCategoryModal = () => {
  const [name, setName] = useState('')
  const [budget, setBudget] = useState(0)
  const [color, setColor] = useState('#FFF')

  const { addCategory } = useAccountProvider()

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeBudget = (e) => {
    setBudget(e.target.value)
  }

  const changeColor = (e) => {
    setColor(e.target.value)
  }

  const formatData = (e) => {
    e.preventDefault()

    const newCategory = {
      title: name,
      icon: 'food',
      value: 0,
      total: parseInt(budget),
      color
    }
    addCategory(newCategory)
  }

  return (
    <ModalContainer>
      <Label> Create a new Category </Label>
      <Form onSubmit={formatData} >
        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="name">Category Name</InputLabel>
          <Input id="name" type="text" onChange={changeName} />
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="budget">Budget</InputLabel>
          <Input id="budget" type="number" onChange={changeBudget} />
        </FormControl>
        <InputColor id="color" onChange={changeColor} value={color} />
        <Button type="submit" variant="contained" style={{ backgroundColor: '#69a99e', color: '#FFF', borderRadius: '30px' }}>
          Add
        </Button>
      </Form>
    </ModalContainer>
  )
}

export default AddCategoryModal
