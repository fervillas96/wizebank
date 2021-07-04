import React from 'react'

import PropTypes from 'prop-types'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { makeStyles } from '@material-ui/core/styles';

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
  const isIncome = descriptionLabel === 'income';

  const money = (quantity).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  return (
    <Card>
      <IconContainer>
        {isIncome && (
          <IconBackground>
            <ArrowUpwardIcon className={theme.income}/>
          </IconBackground>
        )}
        { !isIncome &&(
          <IconBackground>
            <ArrowDownwardIcon className={theme.outcome}/>
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