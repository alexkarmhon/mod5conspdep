import PropTypes from 'prop-types';

import { randomColor } from '../../helpers/colorRandom';
import {
  StatItem,
  StatLabel,
  StatPercentage,
  Stats,
} from '../Statistics/Statistics.styled';

const StatList = ({ stats }) => {
  return (
    <Stats>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id} style={{ backgroundColor: `${randomColor()}` }}>
          <StatLabel>{label}</StatLabel>
          <StatPercentage>{percentage}%</StatPercentage>
        </StatItem>
      ))}
    </Stats>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default StatList;
