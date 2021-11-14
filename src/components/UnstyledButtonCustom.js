import * as React from "react";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/core/ButtonUnstyled";
import { styled } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="150" {...other} ref={ref}>
      <path
        d="M20,0 h110 a20,20 0 0 1 20,20 v110 a20,20 0 0 1 -20,20 h-110 a20,20 0 0 1 -20,-20 v-110 a20,20 0 0 1 20,-20 z"
        className="bg"
      />
      <path
        d="M20,0 h110 a20,20 0 0 1 20,20 v110 a20,20 0 0 1 -20,20 h-110 a20,20 0 0 1 -20,-20 v-110 a20,20 0 0 1 20,-20 z"
        className="borderEffect"
      />
      <foreignObject x="0" y="0" width="150" height="150">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
    theme.palette.mode === "light" ? "rgb(25,118,210)" : "rgb(144,202,249)"
  };
  --hover-color: ${
    theme.palette.mode === "light"
      ? "rgba(25,118,210,0.04)"
      : "rgba(144,202,249,0.08)"
  };
  --active-color: ${
    theme.palette.mode === "light"
      ? "rgba(25,118,210,0.12)"
      : "rgba(144,202,249,0.24)"
  };

  & path {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: fixed;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function UnstyledButtonCustom(props) {
  const { children } = props;
  return <SvgButton {...props}>{children}</SvgButton>;
}
