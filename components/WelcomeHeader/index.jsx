import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import { Card } from '@components/Styled/styled'
import { Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"
import FaceIcon from '@material-ui/icons/Face'
import { 
  GreetingsMessage, 
  UserName, 
  FullWidthRow, 
  IconCol 
} from './styled'



const styles = () => {
  return {
    userIcon: {
      color: '#23695D',
      height: '80px',
      width: '80px',
    }
  }
}

const WelcomeHeader = ({ user }) => {
  const theme = makeStyles(styles)();

  return (
    <Card fullWidth>
      <FullWidthRow>
        <IconCol span={4}>
          <FaceIcon className={theme.userIcon}/>
        </IconCol>
        <Col span={8}>
          <GreetingsMessage>
            Welcome back,
          </GreetingsMessage>
          <UserName>
            {user}
          </UserName>
        </Col>
      </FullWidthRow>
    </Card>
  )
}

WelcomeHeader.propTypes = {
  user: PropTypes.string,
}

WelcomeHeader.defaultProps = {
  user: 'User'
}

export default WelcomeHeader

