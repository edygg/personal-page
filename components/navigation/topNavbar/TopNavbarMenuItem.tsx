import Link, {LinkProps} from "next/link";
import React from "react";



export type Props = {
  title: string
  linkProps: LinkProps
}

const TopNavbarMenuItem: React.FC<Props> = ({ title, linkProps }) => {
  return (
    <li>
      <Link {...linkProps}>
        {title}
      </Link>
    </li>
  )
}

export default TopNavbarMenuItem
