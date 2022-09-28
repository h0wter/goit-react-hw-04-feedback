import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Box as="ul" display="flex" mb="20px">
        {options.map(option => {
          return (
            <Box as="li" mr="10px" key={option}>
              <Button
                name={option}
                onClick={e => {
                  onLeaveFeedback(e.target.name);
                }}
              >
                {option}
              </Button>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
