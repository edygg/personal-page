import React from "react";

const Experience: React.FC = () => {

  const areasOfInterestInfo = [
    {
      title: "Data analysis and visualization",
      content: "I'm able to use tools such as Python, R, SQL, and Excel to analyze and visualize data for various purposes, such as identifying trends, patterns, and insights."
    },
    {
      title: "Machine learning",
      content: "I use my skills in tools such as Python, R, scikit-learn, TensorFlow, and Keras to build machine learning models that can predict or classify outcomes based on data."
    },
    {
      title: "Data engineering",
      content: "Skills in tools such as SQL, Python, and Apache Spark, to extract, transform, and load (ETL) data from various sources.",
    },
    {
      title: "Web development",
      content: "Using frameworks such as Django, Falcon, NodeJS, dotnet core, and Yii."
    },
    {
      title: "Cloud deployment and management",
      content: "Using tools such as Docker, k8s, Google Cloud Platform, and Azure Cloud."
    },
    {
      title: "Technical documentation and reporting",
      content: "I use my skills in technical documentation and reporting to help communicate technical concepts and processes to a variety of audiences."
    },
    {
      title: "Software development methodologies",
      content: "I use my familiarity with methodologies such as TDD, Scrum, and Clean Architecture to improve the quality and efficiency of software development."
    },
    {
      title: "Communication and collaboration",
      content: "Skills in data visualization software and presentation, as well as my experience in stakeholder management, to effectively convey insights and recommendations to cross-functional teams and stakeholders.",
    },
  ]

  const areasOfInterestCards = areasOfInterestInfo.map((areOfInterest, idx) => {
    return (
      <div key={idx} className="card w-96 glass my-5">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="car!"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{areOfInterest.title}</h2>
          <p>{areOfInterest.content}</p>
        </div>
      </div>
    )
  })


  return (
    <div className="min-h-screen px-4 sm:px-2">
      <h1 className="text-5xl font-bold">Experience</h1>
      <div className="flex flex-col">
        <div className="my-6">
          <h2 className="text-3xl font-medium my-5">Areas of interest</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6">
            {areasOfInterestCards}
          </div>
        </div>
        <div className="my-6">
          <h2 className="text-3xl font-medium">Skills</h2>
        </div>
      </div>
    </div>
  )
}

export default Experience
