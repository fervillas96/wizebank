import React, { useState } from 'react'

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import { ModalContainer, Form, Label, InputColor } from './styled'

import { useAccountProvider } from '@providers/Account/Account.provider'

const AddCategoryModal = ({ handleClose }) => {
  const [name, setName] = useState('')
  const [icon, setIcon] = useState('')
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

  const changeIcon = (e) => {
    setIcon(e.target.value)
  }

  const formatData = (e) => {

    const newCategory = {
      title: name,
      icon,
      value: 0,
      total: parseInt(budget),
      color
    }
    addCategory(newCategory)
    handleClose()
    e.preventDefault()
  }

  return (
    <ModalContainer>
      <Label> Create a new Category </Label>
      <Form onSubmit={formatData}>
        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="name">Category Name</InputLabel>
          <Input id="name" type="text" required onChange={changeName} />
        </FormControl>
        <FormControl variant="outlined" margin="normal">
          <InputLabel htmlFor="budget">Budget</InputLabel>
          <Input id="budget" type="number" required onChange={changeBudget} />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel id="icon">Icon</InputLabel>
          <Select
            style={{ width: '170px', paddingLeft: '15px' }}
            labelId="icon"
            id="icon"
            value={icon}
            required
            onChange={changeIcon}
          >
            <MenuItem value="food"><FastfoodIcon /></MenuItem>
            <MenuItem value="car"><DriveEtaIcon /></MenuItem>
            <MenuItem value="house"><HomeIcon /></MenuItem>
          </Select>
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
