import React, {ReactNode} from "react";
import {Link as GatsbyLink} from "gatsby";
import store from "../redux/store";
import auth from "../api";

interface LayoutProps {
  //button text
  children?: ReactNode,
  //button events
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,

  isMain: boolean,
  position: Positions
}

type Positions = 'center' |'left' | 'right'

export const Button = ({children, onClick, isMain , position , ...props}: LayoutProps) => {

  let classes = `${isMain ? 'my-4 px-8 bg-cyan-900' : 'inline px-1 bg-cyan-600'} py-1 text-white rounded-md max-w-max max-h-min ${position === 'center' ? 'mx-auto' : position === 'right' ? 'ml-auto' : ''}`

  return  <button
      className={classes}
      type='button'
      onClick={onClick}
      {...props}>
    {children}
  </button>
}
