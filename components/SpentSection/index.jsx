import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '@components/Styled/styled'
import { SpentNumber, TotalIncome } from './styled'

const SpentSection = ({totalIncome, spent}) => {

  const spentPercentage = Math.round((100 * spent) / totalIncome)
  const moneySpent = (spent).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3);

  return (
    <Card fullWidth isColumn>
      <SpentNumber>
        {moneySpent} 
      </SpentNumber>
      <TotalIncome>
        You spent {spentPercentage}% Income
      </TotalIncome>
    </Card>
  );
};

SpentSection.propTypes = {
  spent: PropTypes.number,
  totalIncome: PropTypes.number
};

SpentSection.defaultProps = {
  spent: 3050,
  totalIncome: 15000,
}

export default SpentSection;
