import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

const pics = [pic1, pic2, pic3, pic4];

const AppScreens = () => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Matchpointandgames</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex justify-center items-center m-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {pics.map((pic, index) => {
                return (
                  <div className="border-2 border-gray-200 rounded-md">
                    <img
                      key={index}
                      className="w-80 bg-white"
                      src={pic}
                      alt={`pic-${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default AppScreens;

{
  /* <div className="flex justify-center items-center mt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {pics.map((pic, index) => {
                return <img key={index} className="w-80 bg-white" src={pic} alt={`pic-${index + 1}`} />
              })}
          </div>
        </div> */
}
