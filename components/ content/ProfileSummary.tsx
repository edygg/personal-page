import React from "react";
import Image from "next/image";
import profilePicture from "../../public/profile-photo.png"

type ProfileSummaryProps = {
  profileSummary: any
}
const ProfileSummary: React.FC<ProfileSummaryProps> = ({ profileSummary }) => {

  const profileText = profileSummary.contentHtml
    .replace("<p>", "")
    .replace("</p>", "")

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col space-y-1.5 space-x-1.5 lg:flex-row-reverse">
        <Image
          className="max-w-min rounded-lg shadow-2xl"
          src={profilePicture}
          alt="EdyG profile photo"
          width={300}
        />
        <div>
          <h2 className="text-2xl font-light my-3">Hi, my name is</h2>
          <h1 className="text-6xl font-bold my-2">{profileSummary.name}</h1>
          <h2 className="text-4xl font-normal my-2">{profileSummary.slogan}</h2>
          <p className="text-base font-thin text-justify leading-loose my-5 pr-5"
             dangerouslySetInnerHTML={{ __html: profileText }} />
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
