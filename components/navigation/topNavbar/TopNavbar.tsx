import Image from 'next/image'
import TopNavbarMenu from "./TopNavbarMenu";
import TopNavbarMenuItem from "./TopNavbarMenuItem";
import Link from "next/link";
import logo from "../../../public/main-logo.svg"

export default function TopNavbar() {

  const menuOptionRouter = [
    {
      title: "About",
      href: "",
    },
    {
      title: "Experience",
      href: "",
    },
    {
      title: "Blog",
      href: "",
    }
  ]

  const resumeLinks = [
    {
      lang: "spanish",
      href: "https://res.cloudinary.com/dodpsiyv0/image/upload/v1672001276/PorfolioAssets/SPA_ResumeEdilsonGonzalez_compressed_1.pdf",
      title: "Hoja de Vida",
    },
    {
      lang: "english",
      href: "https://res.cloudinary.com/dodpsiyv0/image/upload/v1672001273/PorfolioAssets/ENG_ResumeEdilsonGonzalez_compressed_2.pdf",
      title: "Resume",
    },
  ]


  const menuOptions = menuOptionRouter.map(
    (menuItem, idx) =>
      <TopNavbarMenuItem key={idx} title={menuItem.title} linkProps={{href: menuItem.href}} />
  )

  const displayResume = resumeLinks.find(e => e.lang.startsWith("eng"))

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </label>
          <TopNavbarMenu tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuOptions}
          </TopNavbarMenu>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={logo} width={100} height={70} alt={"EdyG's main logo"} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <TopNavbarMenu className="menu menu-horizontal px-1">
          {menuOptions}
        </TopNavbarMenu>
      </div>
      {displayResume && (
        <div className="navbar-end">
          <Link className="btn btn-accent" target="_blank" href={displayResume.href} >{displayResume.title}</Link>
        </div>
      )}
    </div>
  )
}
