import { useRouter } from "next/dist/client/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import PrivacyPolicyArticle from "./PrivacyPolicyArticle";
import TermsOfUseArticle from "./TermOfUseArticle";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TermsAndPolicyComponents = (props) => {
  const router = useRouter();

  // const { terms, policy } = router.query;
  const { setForm } = props;

  const { terms, policy } = router.query; 
  const [article, setArticle] = useState("terms");

  const backIcon =(
    <FontAwesomeIcon
      icon={faArrowLeft}
      size="lg"
      color="skBlue"
      className={`cursor-pointer hover:text-subheading m-auto`}
  />
  );

  useEffect(() => {
    if (terms) setArticle("terms");
    if (policy) setArticle("policy");
  }, [terms, policy]);

  return (
    <>
      <div className="w-11/12 h-full m-auto flex flex-col items-center mt-10 ">
      <div className="w-11/12 flex mb-8  ">
        <span onClick={() => {
          setForm("signup");
          router.replace('/')
        }} className="text-blue-400 text-lg font-bold hover:text-skBlueInactive cursor-pointer">
           {backIcon}
        </span>   
      </div>
        <div className="w-full flex text-center">
          <div
            onClick={() => {
              router.push("?terms=true", undefined, { shallow: true });
            }}
            className={`w-1/2 ${
              article == "terms"
                ? " border-skBlue text-skBlue"
                : " border-skBlueInactive text-skBlueInactive"
            } font-semibold border-b-2 pb-4 cursor-pointer`}
          >
            <span>Terms Of Use</span>
          </div>
          <div
            onClick={() => {
                router.push("?policy=true", undefined, { shallow: true });
            }}
            className={`w-1/2  ${
              article == "policy"
                ? " border-skBlue text-skBlue"
                : " border-skBlueInactive text-skBlueInactive"
            } font-semibold border-b-2 pb-4 cursor-pointer`}
          >
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="overflow-y-scroll scrollbar h-96">
          {article == "terms" && <TermsOfUseArticle />}
          {article == "policy" && <PrivacyPolicyArticle />}
        </div>
        
      </div>
    </>
  );
};

export default TermsAndPolicyComponents;
