import { IoIosArrowRoundForward } from 'react-icons/io';
import styled from 'styled-components';

const BookingButton = ({buttonText}) => {
    
    const StyledWrapper = styled.div`
  .button {
    position: relative;
    overflow: hidden;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 1.5rem;
    background: #113D48;
    background-size: 400%;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .button:hover::before {
    transform: scaleX(1);
  }

  .button-content {
    position: relative;
    z-index: 1;
  }

  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: #1CA8CB;
    transition: all 0.475s;
  }`;

  return (
    <StyledWrapper>
      <button className="button">
        <span className="button-content flex gap-2 items-center font-medium text-white">{buttonText} <IoIosArrowRoundForward className='text-[1.5rem]' /></span>
      </button>
    </StyledWrapper>
  );
}



export default BookingButton;
