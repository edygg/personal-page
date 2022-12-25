import React from "react";

export type Props = {
  children: React.ReactNode,
  className?: string
  tabIndex?: number
}

const TopNavbarMenu : React.FC<Props> = (props) => {
  return(
    <ul {...props}>
      <>
        {props.children}
      </>
    </ul>
  )
}

export default TopNavbarMenu
