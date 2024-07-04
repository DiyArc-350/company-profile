import React from 'react'

const ProjectsCard = ({id ,description ,name, image} ) => {
  return (
     <div className="flex justify-between flex-row px-5 py-6 rounded-[20px] w-[370px] mx-auto my-5 bg-white shadow-lg shadow-[#0b62a9]">
        <div className="flex flex-col ">
            <div className="flex flex-row">
              <img src={image} alt={name} className="w-[100%]" />
            </div>
            <div className="flex flex-row my-5">
                <h3 className="font-poppins font-semibold text-slate-900">
                {name}
                </h3>
            </div>
            <div className="flex flex-row mb-5">
                <p className="font-poppins font-normal text-[16px] text-justify leading-[24px] text-dimWhite">
                {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProjectsCard