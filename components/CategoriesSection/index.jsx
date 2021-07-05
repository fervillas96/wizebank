import React from 'react'
import PropTypes from 'prop-types'
import { PieChart } from 'react-minimal-pie-chart';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { Card } from '@components/Styled/styled'
import { 
  ChartContainer,
  LabelsContainer,
  CategorieLabel,
  Category,
  CategorieAmount,
  TotalLabel,
  Spent,
  TotalContainer,
} from './styled'


const CategoriesSection = ({ categories, totalSpent }) => {
  return (
    <Card fullWidth>
      <ChartContainer>
        <PieChart
          data={categories}
          style={{ height: '200px' }}
          totalValue={totalSpent}
          lineWidth="80"
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          labelStyle={{
            fill: '#fff',
            fontSize: '12px',
            opacity: 0.75,
            pointerEvents: 'none',
          }}
        />
      </ChartContainer>
      <LabelsContainer>
        {
          categories.map((category) => {
            return (
              <Category key={`category-${category.title}`} iconColor={category.color}>
                <FiberManualRecordIcon  />
                <CategorieLabel>{category.title}</CategorieLabel> <CategorieAmount>${category.value}</CategorieAmount>
              </Category>
            );
        })}

        <TotalContainer>
          <TotalLabel>Total: </TotalLabel>
          <Spent>${totalSpent}</Spent>
        </TotalContainer>
      </LabelsContainer>
    </Card>
  );
}

CategoriesSection.propTypes = {
  categories: PropTypes.array,
  totalSpent: PropTypes.number,
};

CategoriesSection.defaultProps = {
  categories: [
    { title: 'One', value: 10, color: '#E38627'},
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ],
  totalSpent: 45,
};

export default CategoriesSection;