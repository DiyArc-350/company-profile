import React from 'react'

const FieldsCard = ({id ,description ,name, image} ) => {
  return (
     <div className="flex justify-between flex-row px-10 py-6 rounded-[20px] w-[300px] mx-auto my-5 bg-white shadow-lg shadow-[#0b62a9]">
        <div className="flex flex-col ">
            <div className="flex flex-row">
              <img src={image} alt={name} className="lg:w-[100%] lg:h-[100%]" />
            </div>
            <div className="flex flex-row mb-5">
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

export default FieldsCard