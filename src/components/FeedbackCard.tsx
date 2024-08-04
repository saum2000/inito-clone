import React from "react";


export default function FeedbackCard({ item }: { item: any }) {


  return (
    <>

      <div className="p-0 border-0 no-underline box-border  rounded-2xl  bg-gray-100 pb-4 grid mx-2">
        <div className="relative ml-10 pt-8 w-48">
          {[...Array(5)].map((e, i) => (<img
            className="user-rating inline-block w-3 mx-1.5 mb-8"
            src="https://cdn.inito.com/inito_website/star.png"
            alt="rating star"
          />
          ))}

        </div>
        <div className="user-review__data relative mx-10 flex flex-col justify-evenly">
          <p className="text font-reg m-0 p-0 no-underline align-baseline box-border relative font-montserrat text-gray-800 font-medium text-[15px] leading-[25px]">
            {item?.text}
          </p>


        </div>

      </div>
      <div className="ml-[10px] pt-8">
        {item?.name}
      </div>
    </>
  );
}
