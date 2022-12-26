import React from "react";
import Image from "next/image";
import profilePicture from "../../public/profile-photo.png"

const ProfileSummary: React.FC = () => {

  const profileText = (<>I am a highly skilled software developer with a strong foundation in multiple programming languages and frameworks. I have experience building web applications and APIs, and I am comfortable working with cloud platforms and deploying and managing applications in the cloud. In addition to my technical skills, I am a strong communicator with experience in technical documentation and reporting, gathering requirements, and teamwork. I am familiar with various software development methodologies and tools for project management, documentation, version control, and collaboration. I am always looking for new challenges and opportunities to grow and learn as a software developer.</>)

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col space-x-1.5 lg:flex-row-reverse">
        <Image
          className="max-w-sm rounded-lg shadow-2xl"
          src={profilePicture}
          alt="EdyG profile photo"
          width={532}
          height={700}
        />
        <div>
          <h2 className="text-2xl font-light py-1">Hi, my name is</h2>
          <h1 className="text-6xl font-bold py-1">Edilson Gonzalez.</h1>
          <h2 className="text-4xl font-normal py-1">I build things for the web.</h2>
          <p className="text-base font-thin text-justify leading-loose py-3">
            {profileText}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
