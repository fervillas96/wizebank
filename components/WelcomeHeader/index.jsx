import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { Card } from '@components/Styled/styled'
import "react-simple-flex-grid/lib/main.css"
import FaceIcon from '@material-ui/icons/Face'
import { 
  SubTitle,
  Title, 
  FullWidthRow, 
  IconCol,
  MessageCol,
  BalanceCol
} from './styled'



const styles = () => {
  return {
    userIcon: {
      color: '#23695D',
      height: '50px',
      width: '50px',
    }
  }
}

const WelcomeHeader = ({ user, totalBalance }) => {
  const theme = makeStyles(styles)();

  const balance = (totalBalance).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).slice(0, -3);

  return (
    <Card fullWidth>
      <FullWidthRow>
        <IconCol span={2}>
          <FaceIcon className={theme.userIcon}/>
        </IconCol>
        <MessageCol span={4}>
          <SubTitle>
            Welcome back,
          </SubTitle>
          <Title>
            {user}
          </Title>
        </MessageCol>
        <BalanceCol span={6}>
          <SubTitle>
            Total Balance
          </SubTitle>
          <Title>
            {balance}
          </Title>
        </BalanceCol>
      </FullWidthRow>
    </Card>
  )
}

WelcomeHeader.propTypes = {
  user: PropTypes.string,
  totalBalance: PropTypes.number,
}

WelcomeHeader.defaultProps = {
  user: 'User',
  totalBalance: 12000
}

export default WelcomeHeader

