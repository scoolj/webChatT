import PropTypes from "prop-types";

// styled components
import styled from "styled-components";

// rebass
import { Box } from "rebass";

// intern components
const Avatar = styled(Box)`
  flex-shrink: 0;
  height: ${(props) => props.height};
  background-image: url("https://cdn.icon-icons.com/icons2/650/PNG/512/Banking_00017_A_icon-icons.com_59837.png");
  background-size: cover;
  border-radius: 50%;
`;

Avatar.propTypes = {
  height: PropTypes.string,
};

export default Avatar;
