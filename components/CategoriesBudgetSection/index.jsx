import React from 'react'

import PropTypes from 'prop-types'
import { Col } from 'react-simple-flex-grid'
import "react-simple-flex-grid/lib/main.css"
import { LinearProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {
  BudgetCard,
  Container,
  TitleLabel,
  FullWidthRow as Row,
  RemainingLabel,
  DescriptionContainer,
  PercentageLabel
} from './styled'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '100%',
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#69a99e',
  },
}))(LinearProgress);


const calculatePercentage = (category) => Math.round((100 * category.value) / category.total)

const CategoriesBudgetSection = ({ categories }) => {
  
  return (
    <BudgetCard fullWidth isColumn>
      { categories.map((category) => {
        return (
          <Row key={`bar-${category.title}`}>
            <Col span={8}>
              <Container >
                <TitleLabel>{category.title} <PercentageLabel>({calculatePercentage(category)}%)</PercentageLabel></TitleLabel>
                <BorderLinearProgress variant="determinate" value={calculatePercentage(category)} />
              </Container>
            </Col>
            <Col span={4}>
              <DescriptionContainer >
                <TitleLabel>${category.value}</TitleLabel>
                <RemainingLabel>${category.total - category.value} left</RemainingLabel>
              </DescriptionContainer>
            </Col>
          </Row>
        );
      })}
    </BudgetCard>
  )
}

CategoriesBudgetSection.propTypes = {
  categories: PropTypes.array,
};

CategoriesBudgetSection.defaultProps = {
  categories: [
    { title: 'One', value: 10, total: 25 },
    { title: 'Two', value: 15, total: 15 },
    { title: 'Three', value: 20, total: 22 },
  ],
};

export default CategoriesBudgetSection