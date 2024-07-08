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
} from "@chakra-ui/react";
import frontendLogo from "../assets/icons8-frontend-48.png";
import backendLogo from "../assets/icons8-backend-development-48.png";
import databaseLogo from "../assets/icons8-database-48.png";
import githubLogo from "../assets/icons8-github-48.png";
import blogItScreenShot from "../assets/Screenshot_24-6-2024_114048_blogit-frontend.vercel.app.jpeg";
import taskAssignerScreenShot from "../assets/Screenshot_24-6-2024_114342_task-manager-frontend-tawny.vercel.app.jpeg";
import cmeppuneScreeShot from "../assets/Screenshot_25-6-2024_12134_cmeppune.com.jpeg";
import appScreenShot from "../assets/appHomeScreenShot.jpeg";
import { useNavigate } from "react-router-dom";
import AppScreens from "../Components/AppScreens";
import instagramLogo from "../assets/icons8-instagram-25.png";
import linkedInLogo from "../assets/icons8-linkedin-25.png";
import gitHubLogo2 from "../assets/icons8-github-25.png";

const steps = [
  {
    title: "Worked as a content writer at GeeksforGeeks (2022-2023)",
    description:
      "I worked as an intern at GeeksforGeeks for some time in 2022 and 2023 writing articles related to web development, both frontend and backend development. My major focus was on writing articles that explained web technologies through demonstration. This organization has an abundant set of articles related to technology, interview experiences and more, and it was a good experience to work with them.",
  },
  {
    title: "Worked as a Full Stack Developer at Koushiki Innovision (2023)",
    description:
      "I interned at this company for 6 months and worked as a Full Stack Web Developer building complex web applications. I worked on a zoo management system which would keep track of all the activites that are performed in the zoo and keep track of inventories for food, medicine and more. I also worked on a Tournament Manager System.",
  },
  {
    title:
      "Worked as a Full Stack Developer with MJ Fabricology (2023 - present)",
    description:
      "I further continued the work on the Tournament Manager System. We designed and developed a website that allows you to organize tournaments and manage the scoring digitally. Further, we also developed an application for the public audience to view the scores and matches of different tournaments.",
  },
];

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#aboutMe" },
  { name: "Skills", href: "#skills" },
  { name: "Articles", href: "#articles" },
  { name: "Blogs", href: "#blogs" },
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
            className="flex items-center justify-between p-4 lg:px-8 backdrop-blur-md"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto rounded-3xl"
                  src={profilePic}
                  alt=""
                />
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
                  className="text-sm font-semibold leading-6 text-gray-900"
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
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div id="home" className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hi, I'm Pranav,
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                a Full Stack Web Developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Building responsive and user-friendly web applications
              </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          id="aboutMe"
          className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-40"
        >
          <div className="flex flex-col gap-10 mt-20">
            <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Me
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-sm mx-6">
              I'm a passionate and dedicated Full Stack Web Developer with a
              strong background in building dynamic, high-performance web
              applications. I thrive in environments where I can continuously
              learn, grow, and apply my skills to solve complex problems. When I
              am not coding, I spend my time making some music.
            </p>
          </div>
          <div className="mr-10">
            <Stepper
              orientation="vertical"
              height="800px"
              gap="0"
              colorScheme="purple"
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
                    <StepDescription className="max-w-xs">
                      {step.description}
                    </StepDescription>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          id="skills"
          className="flex flex-col justify-center items-center gap-40 mt-40"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Skills
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-6">
              I have worked as a Full Stack Developer and I am proficient in the
              latest web development technologies that are used in the market
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-20 ml-28 items-start">
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex justify-start items-center gap-5">
                <img src={frontendLogo} alt="frontendLogo" />
                <p className="font-semibold text-lg">Frontend</p>
              </div>
              <p className="text-sm font-semibold leading-8 text-gray-600">
                HTML, CSS, React JS, React Native, Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex justify-start items-center gap-5">
                <img src={backendLogo} alt="frontendLogo" />
                <p className="font-semibold text-lg">Backend</p>
              </div>
              <p className="text-sm font-semibold leading-8 text-gray-600">
                Node JS, Express JS
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex justify-start items-center gap-5">
                <img src={databaseLogo} alt="frontendLogo" />
                <p className="font-semibold text-lg">Databases</p>
              </div>
              <p className="text-sm font-semibold leading-8 text-gray-600">
                MongoDB, Sanity.io
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex justify-start items-center gap-5">
                <img src={githubLogo} alt="frontendLogo" />
                <p className="font-semibold text-lg">DevOps</p>
              </div>
              <p className="text-sm font-semibold leading-8 text-gray-600">GitHub</p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          id="projects"
          className="flex flex-col justify-center items-center gap-40 mt-40"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl hidden lg:invisible">
              I have worked as a Full Stack Developer and I am proficient in the
              latest web development technologies that are used in the market
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-20 mx-10">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={blogItScreenShot}
                  alt="blogItScreenShot"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Blog It</Heading>
                  <Text>
                    You can write simple blogs using this website that supports
                    basic features of a text editor such as bold, italic, bullet
                    points. etc
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    onClick={() =>
                      navigateToAProject("https://blogit-frontend.vercel.app/")
                    }
                  >
                    View
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={taskAssignerScreenShot}
                  alt="taskAssignerScreenShot"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Task Assigner</Heading>
                  <Text>
                    Create and manage tasks across your team using this web
                    application.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    onClick={() =>
                      navigateToAProject(
                        "https://task-manager-frontend-tawny.vercel.app/"
                      )
                    }
                  >
                    View
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={cmeppuneScreeShot}
                  alt="cmeppuneScreeShot"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">CMEP Pune</Heading>
                  <Text>
                    This is a website that I built for a construction company
                    that highlights their work, clients and services.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    onClick={() => navigateToAProject("https://cmeppune.com/")}
                  >
                    View
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={appScreenShot}
                  alt="appScreenShot"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Matchpointandgames</Heading>
                  <Text>
                    This app shows you the latest updates of local tournaments.
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="purple"
                    onClick={() => setIsOpen(true)}
                  >
                    View
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
        <div
          id="articles"
          className="flex flex-col justify-center items-center mt-40"
        >
          <div className="flex justify-center items-center gap-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Articles
            </h1>
            <a className="font-semibold text-blue-500 text-lg" href="https://www.geeksforgeeks.org/user/pranavbapat2002/contributions/?itm_source=geeksforgeeks&itm_medium=article_author&itm_campaign=auth_user">(Check out more...)</a>
          </div>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
            <Card shadow="none">
              <CardHeader>
                <Heading size="md">Concurrency in Node JS</Heading>
              </CardHeader>
              <CardBody>
                <Text className="max-w-sm">
                  Explain how multiple I/O operations are handled by single
                  threaded Node JS
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="purple"
                  onClick={() =>
                    navigateToAProject(
                      "https://www.geeksforgeeks.org/how-single-threaded-handles-concurrency-when-multiple-i-o-operations-happening-in-node-js/?utm_source=auth&utm_medium=saved&utm_campaign=articles"
                    )
                  }
                >
                  View here
                </Button>
              </CardFooter>
            </Card>
            <Card shadow="none">
              <CardHeader>
                <Heading size="md">React JS and Authentication</Heading>
              </CardHeader>
              <CardBody>
                <Text className="max-w-sm">
                  Build an Authentication App in React JS using Auth0
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="purple"
                  onClick={() =>
                    navigateToAProject(
                      "https://www.geeksforgeeks.org/how-to-build-a-react-app-with-user-authentication/?utm_source=auth&utm_medium=saved&utm_campaign=articles"
                    )
                  }
                >
                  View here
                </Button>
              </CardFooter>
            </Card>
            <Card shadow="none">
              <CardHeader>
                <Heading size="md">Chat App in Node JS</Heading>
              </CardHeader>
              <CardBody>
                <Text className="max-w-sm">
                  Build a Chat App in Node JS using Socket.io
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="purple"
                  onClick={() =>
                    navigateToAProject(
                      "https://www.geeksforgeeks.org/how-to-create-a-chat-app-using-socket-io-node-js/?utm_source=auth&utm_medium=saved&utm_campaign=articles"
                    )
                  }
                >
                  View here
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          id="contact"
          className="flex flex-col justify-center items-center gap-20 mt-40"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl hidden lg:invisible">
              I have worked as a Full Stack Developer and I am proficient in the
              latest web development technologies that are used in the market
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <Button
              variant="solid"
              colorScheme="purple"
              onClick={() =>
                navigateToAProject(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdGveZ7q7lljmS-3SB4kVOSW_GDq_GFcuEhN8gAEgsPfFCWkQ/viewform?usp=sf_link"
                )
              }
            >
              Fill out this form
            </Button>
            <p className="font-semibold">OR</p>
            <a
              className="font-semibold"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pranav.bapat.2002@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Drop an email at pranav.bapat.2002@gmail.com
            </a>
          </div>
        </div>
        {/* Modals */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
          <AppScreens />
        </Modal>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20 mt-20 mb-10 mx-10">
          <div className="flex flex-col justify-center items-center gap-7">
            <img className="h-14 w-auto rounded-3xl" src={profilePic} alt="" />
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
