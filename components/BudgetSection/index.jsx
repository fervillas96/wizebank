import React from 'react'
import PropTypes from 'prop-types'

import { 
  FullWidthRow,
  CenterCol,
  Name,
  Legend,
  Money,
 } from './styled'

import HomeIcon from '@material-ui/icons/Home'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import FastfoodIcon from '@material-ui/icons/Fastfood'

const IconLibrary = (name, color = '#69a99e') => {
  let icon;
  switch (name) {
    case 'food':
      icon = <FastfoodIcon style={{ color }}/>
      break;
    case 'car':
      icon = <DriveEtaIcon style={{ color }}/>
      break;
    case 'house':
      icon = <HomeIcon style={{ color }}/>
      break;
    default:
      icon = <FastfoodIcon style={{ color }}/>
      break;
  }

  return icon;
}

const formatBalance = (balance) => {
  return (balance).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3);
}

const getColor = (spent, budget) => {
  return budget - spent > 0 ? '#69a99e' : '#d86e72'
}

const BudgetSection = ({category}) => {
  const { title: name, icon, color, total: budget, value: spent } = category

  return (
    <FullWidthRow>
      <CenterCol span={2} >
        {IconLibrary(icon, color)}
      </CenterCol>
      <CenterCol span={4} left>
        <Name color={color}>
          {name}
        </Name>
      </CenterCol>
      <CenterCol span={3} column>
        <Legend>
          Budget
        </Legend>
        <Money color={color}>
          {formatBalance(budget)}
        </Money>
      </CenterCol>
      <CenterCol span={3} column>
        <Legend>
          Left
        </Legend>
        <Money color={getColor(spent, budget)}>
          {formatBalance(budget - spent)}
        </Money>
      </CenterCol>
    </FullWidthRow>
  )
}

BudgetSection.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  total: PropTypes.number,
  value: PropTypes.number,
  name: PropTypes.string,
}

BudgetSection.defaultProps = {
  icon: 'food',
  color: '#69a99e',
  total: 1500,
  value: 1200,
  name: 'Food',
}

export default BudgetSection

