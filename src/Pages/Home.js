import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import profilePic from "../assets/ProfilePic.jpg";
import "../App.css";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Modal,
  SimpleGrid,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import cmeppuneScreeShot from "../assets/Screenshot_25-6-2024_12134_cmeppune.com.jpeg";
import durgaCafeScreenShot from "../assets/durga_cafe.png";
import eCommerceScreenShot from "../assets/e_commerce.png";
import salesDashboardScreenShot from "../assets/sales_dashboard.png";
import { useNavigate } from "react-router-dom";
import AppScreens from "../Components/AppScreens";
import instagramLogo from "../assets/icons8-instagram-25.png";
import linkedInLogo from "../assets/icons8-linkedin-25.png";
import gitHubLogo2 from "../assets/icons8-github-25.png";

const steps = [
  {
    title: "Content writer at GeeksforGeeks (2022-2023)",
    description:
      "I worked as an intern at GeeksforGeeks for some time in 2022 and 2023 writing articles related to web development, both frontend and backend development. My major focus was on writing articles that explained web technologies through demonstration. This organization has an abundant set of articles related to technology, interview experiences and more, and it was a good experience to work with them.",
  },
  {
    title: "Full Stack Developer at Koushiki Innovision (2023)",
    description:
      "I interned at this company for 6 months and worked as a Full Stack Web Developer building complex web applications. I worked on a zoo management system which would keep track of all the activites that are performed in the zoo and keep track of inventories for food, medicine and more. I also worked on a Tournament Manager System.",
  },
  {
    title:
      "Full Stack Developer with MJ Fabricology (2023 - present)",
    description:
      "I further continued the work on the Tournament Manager System. We designed and developed a website that allows you to organize tournaments and manage the scoring digitally. Further, we also developed an application for the public audience to view the scores and matches of different tournaments.",
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "https://www.geeksforgeeks.org/user/pranavbapat2002/contributions/" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigateToAProject = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className=".container roboto-regular">
        <header className="fixed inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-7 lg:px-8 backdrop-blur-md"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h2 className="font-semibold text-2xl">Pranav</h2>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium leading-6 text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-14 w-auto rounded-3xl"
                    src={profilePic}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 border-b-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className=".content relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
          </div>
          <div id="home" className="max-w-4xl mx-5 lg:mx-20 pt-28 pb-24">
          <Avatar src={profilePic} className="mb-5">
            <AvatarBadge boxSize='1em' bg='blue.500' />
          </Avatar>
            <div className="text-left">
              <h1 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Full Stack Web Developer
              </h1>
              <h1 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Helping Businesses grow online
              </h1>
              <p className="mt-6 text-md text-gray-800 font-thin">
                I'm Pranav, a Web Developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I specialize in delivering innovative solutions that meet real-world needs.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full flex justify-center items-center mb-48 mx-5 xl:hidden"
        >
            <Stepper
              colorScheme="blue"
              orientation="vertical"
              gap="20"
              index={3}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepTitle className="max-w-xs">{step.title}</StepTitle>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
        </div>
        <div
          className="hidden xl:flex justify-center items-center mb-48"
        >
            <Stepper
              colorScheme="blue"
              index={3}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepTitle className="max-w-xs">{step.title}</StepTitle>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
        </div>
            <div id="projects" className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto mt-36 px-20">
              <a className="flex flex-col items-start gap-2 hover:cursor-pointer" href="https://cmeppune.com/">
                <img className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" src={cmeppuneScreeShot} alt="cmeppuneScreeShot" />
                <div>
                  <p className="text-lg font-semibold">CMEP PUNE</p>
                  <p className="font-light text-gray-600">Website | Construction</p>
                </div>
              </a>
              <a className="flex flex-col items-start gap-2 hover:cursor-pointer" href="https://durga-cafe-menu-one.vercel.app/">
                <img className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" src={durgaCafeScreenShot} alt="durgaCafeScreenShot" />
                <div>
                  <p className="text-lg font-semibold">Durga Cafe</p>
                  <p className="font-light text-gray-600">Website | Cafe</p>
                </div>
              </a>
              <a className="flex flex-col items-start gap-2 hover:cursor-pointer" href="https://pranav-sales-dashboard.netlify.app/">
                <img className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" src={salesDashboardScreenShot} alt="salesDashboardScreenShot" />
                <div>
                  <p className="text-lg font-semibold">Sales Dashboard</p>
                  <p className="font-light text-gray-600">Website | Analytics</p>
                </div>
              </a>
              <a className="flex flex-col items-start gap-2 hover:cursor-pointer" href="https://e-commerce-frontend-mu-eight.vercel.app/">
                <img className="rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 border-2 border-gray-500" src={eCommerceScreenShot} alt="eCommerceScreenShot" />
                <div>
                  <p className="text-lg font-semibold">E Commerce</p>
                  <p className="font-light text-gray-600">Website | E Commerce</p>
                </div>
              </a>
            </div>
          <div id="contact" className="flex flex-col justify-center items-center gap-2 mt-36">
              <p className="font-light text-gray-600">Got a project?</p>
              <a href="https://forms.gle/nGurmbZhKx32svTp9">
                <button className="bg-blue-500 text-white text-lg px-20 py-8 rounded-lg hover:bg-blue-700">Let's work together</button>
              </a>
          </div>
        {/* Modals */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
          <AppScreens />
        </Modal>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20 mt-10 mb-10 mx-10">
          <div className="flex flex-col justify-center items-center gap-7">
            <div className="flex justfiy-center items-center gap-5">
              <img
                src={instagramLogo}
                alt="instagramLogo"
                className="hover:cursor-pointer"
                onClick={() =>
                  navigateToAProject(
                    "https://www.instagram.com/pranav_dev_gayak/"
                  )
                }
              />
              <img
                src={linkedInLogo}
                alt="linkedInLogo"
                className="hover:cursor-pointer"
                onClick={() =>
                  navigateToAProject(
                    "https://www.linkedin.com/in/pranav-bapat-a208531b6/"
                  )
                }
              />
              <img
                src={gitHubLogo2}
                alt="gitHubLogo2"
                className="hover:cursor-pointer"
                onClick={() =>
                  navigateToAProject("https://github.com/pranav264")
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center items-center gap-5 mt-32 ml-5">
          <p className="font-semibold">&copy; 2024 Pranav Bapat</p>
          <p>
            Icons by <a href="https://www.icons8.com">Icons8</a>
          </p>
        </div>
      </div>
    </>
  );
}
