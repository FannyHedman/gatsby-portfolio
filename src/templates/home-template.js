// import React from "react"
// import styled from "styled-components"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { motion } from "framer-motion"
// import OptimizedSvg from '../images/Avatar-Maker.svg'

// const HomeTemplate = ({ content, title, image }) => {
//   return (
//     <main>
//       {/* <HomeTitle>{contentfulPage.title}</HomeTitle> */}
//       <div>
//         <PagePresentation>
//           <motion.div
//             initial={{ rotate: 175, scale: 1 }}
//             animate={{ rotate: 180, scale: -1 }}
//             transition={{
//               type: "spring",
//               stiffness: 40,
//               damping: 10,
//             }}
//           >
//             <PageTitle>Hello!</PageTitle>
//           </motion.div>
//           <PageDescriptionContainer>
//             <motion.div
//               initial={{ rotate: 165, scale: -1 }}
//               animate={{ rotate: 180, scale: -1 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 250,
//                 damping: 10,
//               }}
//             >
//               <PageDescription>
//                 I'm Fanny, a Stockholm based aspiring frontend developer. I'm passionate
//                 about coding and creating, eager to gain professional experience
//                 and expand my web development skills.{" "}
//               </PageDescription>
//             </motion.div>
//           </PageDescriptionContainer>
//         </PagePresentation>
//         <PageContent>
//           <ProjectContainer>
//             {/* <OptimizedSvg/> */}
//             <CardContainer>
//             <Card>
//                 <header>
//                     <div className="avatar">
//                         <PinkFilteredImage
//                             alt={image.description}
//                             image={image.gatsbyImageData}
//                         />
//                     </div>
//                 </header>
//                 <h3>Fanny Hedman</h3>
//                 <div className="desc">
//                     Feel free to follow me or download my resume
//                 </div>
//                 <footer>
//                     <p>
//                         <a
//                             href="https://linkedin.com/in/fanny-hedman-744b44251"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             Linkedin
//                         </a>
//                         <a
//                             href="https://github.com/FannyHedman"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             GitHub
//                         </a>
//                         <a
//                             href="https://drive.google.com/file/d/1e-nGQDUfM6od8Z3e6dxoltbQbVxexqZa/view?usp=drive_link"
//                             download="cv_portfolio.pdf"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             Resume
//                         </a>
//                     </p>
//                 </footer>
//             </Card>
//         </CardContainer>
//         <ThreeDivsContainer>
//               <StyledDiv>
//                 <StyledUl>
//                   {/* Add your li elements here */}
//                   <StyledLi>Item 1</StyledLi>
//                   <StyledLi>Item 2</StyledLi>
//                   <StyledLi>Item 3</StyledLi>
//                   <StyledLi>Item 4</StyledLi>
//                   <StyledLi>Item 5</StyledLi>
//                 </StyledUl>
//               </StyledDiv>
//               <StyledDiv>
//                 <StyledUl>
//                   {/* Add your li elements here */}
//                   <StyledLi>Item 1</StyledLi>
//                   <StyledLi>Item 2</StyledLi>
//                   <StyledLi>Item 3</StyledLi>
//                   <StyledLi>Item 4</StyledLi>
//                   <StyledLi>Item 5</StyledLi>
//                 </StyledUl>
//               </StyledDiv>
//               <StyledDiv>
//                 <StyledUl>
//                   {/* Add your li elements here */}
//                   <StyledLi>Item 1</StyledLi>
//                   <StyledLi>Item 2</StyledLi>
//                   <StyledLi>Item 3</StyledLi>
//                   <StyledLi>Item 4</StyledLi>
//                   <StyledLi>Item 5</StyledLi>
//                 </StyledUl>
//               </StyledDiv>
//               {/* Repeat the above structure for two more divs */}
//             </ThreeDivsContainer>
//           </ProjectContainer>
//         </PageContent>
//       </div>
//     </main>
//   )
// }

// export default HomeTemplate

// const HomeTitle = styled.h1`
//   font-family: "Reenie Beanie", cursive;
//   font-size: 72px;
// `

// const PagePresentation = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 1200px;
//   margin: 100px auto 50px auto;
//   padding: 20px;

//   /* Ipad */
//   @media (max-width: 991px) {
//     font-size: 28px;
//   }

//   /* Mobile */
//   @media (max-width: 767px) {
//     margin: 100px auto 0px auto;
//   }
// `

// const PageTitle = styled.h1`
//   font-family: "Rubik Doodle Shadow", system-ui;
//   font-size: 72px;
//   color: black;

//   @media (max-width: 991px) {
//     font-size: 64px;
//     margin-left: 5%;
//   }
// `

// const PageDescriptionContainer = styled.div`
//   margin-top: 20px;
//   margin-left: 40%;
// `

// const PageDescription = styled.p`
// font-family: 'Caprasimo', serif;
//   font-size: 28px;

//   /* Ipad */
//   @media (max-width: 991px) {
//     font-size: 28px;
//   }

//   /* Mobile */
//   @media (max-width: 767px) {
//     font-size: 18px;
//     font-weight: bold;
//   }
// `

// const PageContent = styled.div`
//   display: flex;
//   justify-content: left;
//   /* align-items: center; */

//     /* Ipad */
//     @media (max-width: 991px) {
//   }

//   /* Mobile */
//   @media (max-width: 767px) {
//     justify-content: center;
//       align-items: center;


//   }
// `

// const ProjectContainer = styled.div`
//   max-width: 800px;
//   width: 100%;
// `

// const ProjectList = styled.ul`
//   list-style-type: none;
// `

// const ListItem = styled.li`
//   position: relative;
//   margin: 50px;
// `

// const Title = styled.h2`
//   position: absolute;
//   top: 45%;
//   left: -100px;
//   z-index: 1;
//   /* color: #c3193a; */

//   /* Ipad */
//   @media (max-width: 991px) {
//     position: relative;
//     left: 0;
//     font-size: 22px;
//     color: black;
//   }

//   /* Mobile */
//   @media (max-width: 767px) {
//     position: relative;
//     left: 0;
//     font-size: 16px;
//     color: black;
//   }
// `

// const PinkFilteredImage = styled(GatsbyImage)`
//     opacity: 0.7;
// `

// const CardContainer = styled.div`
//     width: 100%;
//     max-width: 100%;
//     /* margin: 2rem auto; */
//     margin-left: 50%;

//         /* Ipad */
//         @media (max-width: 991px) {
//   }

//   /* Mobile */
//   @media (max-width: 767px) {
//     margin-left: 8%;

//   }
// `

// const Card = styled.div`
//     position: relative;
//     width: 300px;
//     background: #fff;
//     box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3);
//     transition: transform 0.2s ease-in-out;
//     border-radius: 20px;

//     &:hover {
//         transform: scale(1.1);
//     }

//     header {
//         position: relative;
//         width: 100%;
//         height: 60px;
//         background-color: blue;
//         border-top-right-radius: 20px;
//         border-top-left-radius: 20px;
//         &::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             background: inherit;
//             transform: skewY(8deg);
//             transform-origin: 0 100%;
//             border-top-left-radius: 20px;

//         }
//         .avatar {
//             position: absolute;
//             left: 50%;
//             top: 30px;
//             margin-left: -50px;
//             z-index: 5;
//             width: 100px;
//             height: 100px;
//             border-radius: 50%;
//             overflow: hidden;
//             background: #ccc;
//             border: 3px solid #fff;
//             img {
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 transform: translate(-50%, -50%);
//                 width: 100px;
//                 height: auto;
//             }
//         }
//     }

//     h3 {
//         position: relative;
//         margin: 90px 0 40px;
//         text-align: center;
//         color: black;
//         font-family: 'Open Sans', sans-serif;
//         font-weight: bold;
//         &::after {
//             content: '';
//             position: absolute;
//             bottom: -15px;
//             left: 50%;
//             margin-left: -15px;
//             width: 30px;
//             height: 1px;
//             background: pink;
//         }
//     }
//     .desc {
//         padding: 0 1rem 2rem;
//         text-align: center;
//         line-height: 1.5;
//         color: black;
//         font-family: 'Open Sans', sans-serif;
//         font-weight: bold;
//         margin-bottom: 3%;
//     }

//     footer {
//         position: relative;
//         height: 45px;
//         background-color: blue;
//         text-align: center;
//         border-bottom-left-radius: 20px;
//         border-bottom-right-radius: 20px;
//         p {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             z-index: 1;
//             a {
//                 padding: 0 1rem;
//                 text-decoration: none;
//                 font-family: 'Open Sans', sans-serif;
//                 font-weight: bold;
//                 color: white;
//                 transition: color 0.4s;
//                 &:hover {
//                     color: purple;
//                 }
//             }
//         }
//         &::before {
//             content: '';
//             position: absolute;
//             top: 0px;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             background: inherit;
//             transform: skewY(8deg);
//             transform-origin: 100%;
//             border-bottom-right-radius: 20px;
//         }
//     }
// `
// const ThreeDivsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;

//   /* Mobile */
//   @media (max-width: 767px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const StyledDiv = styled.div`
//   width: 30%; /* Adjust the width as needed */
// `;

// const StyledUl = styled.ul`
//   /* ... (add styling as needed) */
// `;

// const StyledLi = styled.li`
//   /* ... (add styling as needed) */
// `;


import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import OptimizedSvg from '../images/Avatar-Maker.svg';

const HomeTemplate = ({ content, title, image }) => {
  return (
    <main>
      <div>
        <PagePresentation>
          <motion.div
            initial={{ rotate: 175, scale: 1 }}
            animate={{ rotate: 180, scale: -1 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 10,
            }}
          >
            <PageTitle>Hello!</PageTitle>
          </motion.div>
          <PageDescriptionContainer>
            <motion.div
              initial={{ rotate: 165, scale: -1 }}
              animate={{ rotate: 180, scale: -1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 10,
              }}
            >
              <PageDescription>
                I'm Fanny, a Stockholm based aspiring frontend developer. I'm passionate
                about coding and creating, eager to gain professional experience
                and expand my web development skills.{" "}
              </PageDescription>
            </motion.div>
          </PageDescriptionContainer>
        </PagePresentation>
        <PageContent>
          <ProjectContainer>
            <StyledRow>
              <CardContainer>
                <Card>
                  <header>
                    <div className="avatar">
                      <PinkFilteredImage
                        alt={image.description}
                        image={image.gatsbyImageData}
                      />
                    </div>
                  </header>
                  <h3>Fanny Hedman</h3>
                  <div className="desc">
                    Feel free to follow me or download my resume
                  </div>
                  <footer>
                    <p>
                      <a
                        href="https://linkedin.com/in/fanny-hedman-744b44251"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Linkedin
                      </a>
                      <a
                        href="https://github.com/FannyHedman"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1e-nGQDUfM6od8Z3e6dxoltbQbVxexqZa/view?usp=drive_link"
                        download="cv_portfolio.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </p>
                  </footer>
                </Card>
              </CardContainer>
              <ThreeDivsContainer>
                <StyledDiv>
                  <StyledUl>
                    <StyledLi className="circle">JavaScript</StyledLi>
                    <StyledLi className="tube-left">TypeScript</StyledLi>
                    <StyledLi className="circle">React</StyledLi>
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <StyledLi className="tube-right">CSS</StyledLi>
                    <StyledLi className="circle">Bootstrap</StyledLi>
                    <StyledLi className="tube-right">Node.js</StyledLi>

                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <StyledLi className="circle">Express</StyledLi>
                    <StyledLi className="tube-right">Git</StyledLi>
                    <StyledLi className="circle">Docker</StyledLi>

                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <StyledLi className="tube-right">Wordpress</StyledLi>
                    <StyledLi className="circle">Gatsby</StyledLi>
                    <StyledLi className="tube-right">PostgreSQL</StyledLi>
                  </StyledUl>
                </StyledDiv>
                <StyledDiv>
                  <StyledUl>
                    <StyledLi className="circle">Vue.js</StyledLi>
                    <StyledLi className="tube-right">HTML</StyledLi>
                    <StyledLi className="circle">PHP</StyledLi>
                  </StyledUl>
                </StyledDiv>
                {/* Repeat the above structure for two more divs */}
              </ThreeDivsContainer>
            </StyledRow>
          </ProjectContainer>
        </PageContent>
      </div>
    </main>
  );
};

export default HomeTemplate;

const PagePresentation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 100px auto 50px auto;
  padding: 20px;

  /* Ipad */
  @media (max-width: 991px) {
    font-size: 28px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    margin: 100px auto 0px auto;
  }
`;

const PageTitle = styled.h1`
  font-family: "Rubik Doodle Shadow", system-ui;
  font-size: 72px;
  color: black;

  @media (max-width: 991px) {
    font-size: 64px;
    margin-left: 5%;
  }
`;

const PageDescriptionContainer = styled.div`
  margin-top: 20px;
  margin-left: 40%;
`;

const PageDescription = styled.p`
  font-family: 'Caprasimo', serif;
  font-size: 28px;

  /* Ipad */
  @media (max-width: 991px) {
    font-size: 28px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    font-size: 18px;
    font-weight: bold;
  }
`;

const PageContent = styled.div`
  display: flex;
  justify-content: left;

  /* Ipad */
  @media (max-width: 991px) {
  }

  /* Mobile */
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

const ProjectContainer = styled.div`
  max-width: 800px;
  width: 100%;
`;

const StyledRow = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  width: 50%;
  max-width: 100%;
  margin-left: 10%;

  /* Ipad */
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ThreeDivsContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 100%;

  /* Ipad */
  @media (max-width: 991px) {
    width: 100%;
  }

  /* Mobile */
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  flex: 1;
  margin: 2rem;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 20%;
`;

const StyledLi = styled.li`
  margin: 10px 0;
  padding: 10px;
  width: auto;
  background-color: white;
  border-radius: 20px;
`;

const PinkFilteredImage = styled(GatsbyImage)`
  opacity: 0.7;
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  background: #fff;
  box-shadow: 10px 10px 7px -5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
  }

  header {
    position: relative;
    width: 100%;
    height: 60px;
    background-color: blue;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: inherit;
      transform: skewY(8deg);
      transform-origin: 0 100%;
      border-top-left-radius: 20px;
    }
    .avatar {
      position: absolute;
      left: 50%;
      top: 30px;
      margin-left: -50px;
      z-index: 5;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      overflow: hidden;
      background: #ccc;
      border: 3px solid #fff;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100px;
        height: auto;
      }
    }
  }

  h3 {
    position: relative;
    margin: 90px 0 40px;
    text-align: center;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 1px;
      background: pink;
    }
  }
  .desc {
    padding: 0 1rem 2rem;
    text-align: center;
    line-height: 1.5;
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin-bottom: 3%;
  }

  footer {
    position: relative;
    height: 45px;
    background-color: blue;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    p {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 1;
      a {
        padding: 0 1rem;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        color: white;
        transition: color 0.4s;
        &:hover {
          color: purple;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0;
      left: 0;
      right: 0;
      background: inherit;
      transform: skewY(8deg);
      transform-origin: 100%;
      border-bottom-right-radius: 20px;
    }
  }
`;
