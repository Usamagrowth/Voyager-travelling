import styled from "styled-components";

const Button = ({children, onClick, disabled, className = ""}) => {
  
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
  
    .button:hover {
      background: #1CA8CB;
      transition: all 0.475s;
    }`;

  return (

    <StyledWrapper>
      <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
        <span className="flex gap-2 items-center font-medium text-white button">{children} </span>
      </button>
    </StyledWrapper>
  )
}

export default Button