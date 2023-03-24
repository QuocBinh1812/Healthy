import React from "react";
import { RiHeartsFill } from "react-icons/ri";
const Clound = () => {
  return (
    <div id="clound" className="w-full p-10">
      <div className="myContainer ">
        <div className="flex-col items-center">
          <div className="mt-3 flex-col text-center">
            <h3 className="text-BlueClound m-auto my-4 w-max">
              ALL-IN-ONES{" "}
              <span className="text-OrangeClound">Clound soffware</span>
            </h3>
            <p className="text-colorAuth text-[20px] max-w-[800px] leading-[43.2px] m-auto">
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>
          <div className="flex max-[770px]:flex-col mt-10 gap-8 items-center justify-center ">
            <div className="shadowCard flex   flex-col max-w-[300px] py-8 text-center items-center">
              <RiHeartsFill size="50px" className="mt-[-50px]" />

              <h5 className="text-[20px] mt-12 mb-3 text-mediumSlateBlue dark:text-lightBlue_1 capitalize">
                Online Billing, Invoicing, & condona Contracts
              </h5>
              <p className="text-[16px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_1 dark:text-lightBlue_1">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
            <div className=" shadowCard flex  flex-col max-w-[300px] py-8 text-center items-center">
              <RiHeartsFill size="50px" className="mt-[-50px]" />

              <h5 className="text-[20px] mt-12 mb-3 text-mediumSlateBlue dark:text-lightBlue_1 capitalize">
                Online Billing, Invoicing, & condona Contracts
              </h5>
              <p className="text-[16px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_1 dark:text-lightBlue_1">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
            <div className=" shadowCard flex  flex-col max-w-[300px] py-8 text-center items-center">
              <RiHeartsFill size="50px" className="mt-[-50px]" />

              <h5 className="text-[20px] mt-12 mb-3 text-mediumSlateBlue dark:text-lightBlue_1 capitalize">
                Online Billing, Invoicing, & condona Contracts
              </h5>
              <p className="text-[16px] mb-3 group-hover:text-lightBlue_1 text-darkBlue_1 dark:text-lightBlue_1">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clound;
