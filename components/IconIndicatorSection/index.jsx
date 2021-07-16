import React from 'react'

import PropTypes from 'prop-types'
import MoneyOffIcon from '@material-ui/icons/MoneyOff'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { makeStyles } from '@material-ui/core/styles'

import { Card } from '@components/Styled/styled'
import {
  IconContainer,
  DescriptionContainer,
  Label,
  Number,
  IconBackground,
} from './styled'


const iconStyles = () => {
  return {
    income: {
      color: '#23695D',
    },
    outcome: {
      color: '#E9454B',
    },
  }
}

const IconIndicatorSection = ({ descriptionLabel, quantity }) => {
  const theme = makeStyles(iconStyles)();
  const isIncome = descriptionLabel === 'Income';

  const money = (quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3);


  return (
    <Card>
      <IconContainer>
        {isIncome && (
          <IconBackground>
            <AttachMoneyIcon className={theme.income} />
          </IconBackground>
        )}
        {!isIncome && (
          <IconBackground>
            <MoneyOffIcon className={theme.outcome} />
          </IconBackground>
        )}
      </IconContainer>
      <DescriptionContainer>
        <Label>
          {descriptionLabel}
        </Label>
        <Number>
          {money}
        </Number>
      </DescriptionContainer>
    </Card>
  );
}

IconIndicatorSection.propTypes = {
  descriptionLabel: PropTypes.string,
  quantity: PropTypes.number,
};

IconIndicatorSection.defaultProps = {
  descriptionLabel: 'Income',
  quantity: 3050,
};

export default IconIndicatorSection;