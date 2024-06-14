import AnimatedText from "../(components)/AnimatedText";
import FeaturedProject from "../(components)/FeaturedProject";
import Project from "../(components)/Project";
import DevConnectorBanner from "../../../public/Dev-Connector.png";

export const metadata = {
  title: "Rehman Ullah - Projects",
  description:
    "Discover the latest webapp projects created by Rehman Ullah, a Next.js developer with  expertise in React.js and frontend development. Browse software engineering articles and tutorials for tips on creating your own portfolio.",
};

const projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <AnimatedText
        text="Ideas in Action"
        className="mb-16 mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl !leading-tight !text-8xl sm:mt-8"
      />
      <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        {/* <div className="col-span-12">
          <FeaturedProject
            title="Monitor Dashboard"
            img={project1}
            summary="A remarkable web application created for Sitedocs, featuring advanced scheduling capabilities. Experience the power of streamlined form management with seamless scheduling, signature assignment, and real-time monitoring. Explore the website for a firsthand look at its cutting-edge features and intuitive user interface"
            link="https://www.sitedocs.com/scheduled-forms/"
            github="/"
            type="Saas Application"
            isPrivate
          />
        </div> */}
        <div className="col-span-12">
          <FeaturedProject
            title="Highlight Your Dev Journey!"
            img={DevConnectorBanner}
            summary="DevConnector is your go-to platform to build a standout developer profile and link your GitHub repositories. Share your work, post updates, and engage with other developers' posts to inspire and be inspired within the developer community."
            link="https://dev-connector-app.web.app/"
            github="https://github.com/irehmanullah/Dev-Connector"
            type="Social Networking Platform "
          />
        </div>
        {/* <div className="col-span-12">
          <FeaturedProject
            title="Next js Portfolio Website"
            img={project2}
            summary="Immerse yourself in a professional modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS. Experience seamless page transitions, cool animations and a unique design that stands out. Enjoy full responsiveness across devices for a seamless browsing experience."
            link="/"
            github="https://github.com/irehmanullah/portfolio"
            type="Portfolio Website"
          />
        </div> */}
        {/* <div className="col-span-6 sm:col-span-12">
          <Project
            title="Streamlined Component Library"
            img={project4}
            link="https://sitedocssafetycorp.github.io/sitedocs-design-system/?path=/story/design-system-navigationlistitem--with-loader"
            github="/"
            type="Design System"
            isPrivate
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            title="Custom Workflow Automation"
            img={project5}
            link="https://www.sitedocs.com/workflow-studio/"
            github="/"
            type="Workflow Automation"
            isPrivate
          />
        </div> */}
      </div>
    </main>
  );
};

export default projects;
