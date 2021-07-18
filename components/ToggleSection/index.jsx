import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '@components/Styled/styled'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { Label } from './styled'

const StyledSwitch = withStyles({
  switchBase: {
    color: '#489689',
    '&$checked': {
      color: '#489689',
    },
    '&$checked + $track': {
      backgroundColor: '#69a99e',
    },
  },
  checked: {},
  track: {},
})(Switch);

const ToggleSection = ({ onChange, label, value }) => {
  return (
    <Card fullWidth>
      <Label>{label}</Label>
      <StyledSwitch checked={value} onChange={() => onChange(value)} name={`toggle-${value}`} />
    </Card>
  )
}

ToggleSection.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.bool,
}

ToggleSection.defaultProps = {
  onChange: () => { },
  label: 'Label',
  value: true,
}

export default ToggleSection
