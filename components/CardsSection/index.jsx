import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import CreditCardIcon from '@material-ui/icons/CreditCard'

import { Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"
import { 
  FullWidthRow, 
  Title, 
  Card,
  CardNumber,
  Balance,
  BalanceCol,
  CenterCol,
  SubTitle,
  Line,
} from './styled'

const styles = () => {
  return {
    Icon: {
      color: '#69a99e'
    }
  }
}

const formatBalance = (balance) => {
  return (balance).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3);
}

const CardsSection = ({ cards }) => {
  const theme = makeStyles(styles)();

  return (
    <Card fullWidth>
      <Title>
        Your Cards 
      </Title>
      {
        cards.map((card, index) => {
          return (
            <>
            <FullWidthRow key={`card-${index}`}>
              <CenterCol span={1}>
                <CreditCardIcon className={theme.Icon}/>
              </CenterCol>
              <CenterCol span={6}>
                <CardNumber>
                  Ends with {card.number.slice(-4)}
                </CardNumber>
              </CenterCol>
              <BalanceCol span={5}>
                <SubTitle>
                  Balance
                </SubTitle>
                <Balance>
                  {formatBalance(card.balance)}
                </Balance>
              </BalanceCol>
            </FullWidthRow>
            { !(index === cards.length - 1) && <Line/> }
            </>
          )
        })
      }
    </Card>
  )
}

CardsSection.propTypes = {
  cards: PropTypes.array,
}

CardsSection.defaultProps = {
  cards: [
    { "number" : "5555555555554444", "balance": 2000 },
    { "number" : "5105105105105100", "balance": 2500 },
    { "number" : "4111111111111111", "balance": 12050 },
  ]
}

export default CardsSection

