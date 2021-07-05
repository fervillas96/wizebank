import React from 'react'


import { 
  InvesmentCard,
  RoundedIconContainer,
  DescriptionContainer, 
  Title, 
  Description, 
} from './styled'

import AndroidIcon from '@material-ui/icons/Android'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const styles = () => {
  return {
    botColor: {
      color: '#23695D',
    },
    soonBtn: {
      backgroundColor: '#69a99e',
      color: '#FFF',
      borderRadius: '30px'
    }
  }
}


const InvestmentBotSection = () => {
  const theme = makeStyles(styles)();

  return (
    <InvesmentCard fullWidth backgroundColor={'rgba(209, 207, 207, 0.20)'}>
      <RoundedIconContainer>
        <AndroidIcon className={theme.botColor}/>
      </RoundedIconContainer>
      <DescriptionContainer>
        <Title>
          Invest Robosist
        </Title>
        <Description>
          Virtual Investment Asistent
        </Description>
      </DescriptionContainer>
      <Button variant="contained" disabled style={styles().soonBtn}>
        SOON
      </Button>
    </InvesmentCard>
  )

}

export default InvestmentBotSection