
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

//sections
import LatestBlogPosts from "./sections/LatestBlogPosts.js"
import SectionCarousel from "views/sections/SectionCarousel.js";
import ExploreSection from "./sections/ExploreSection.js";
import StorySection from "./sections/StorySection.js";
import SubscribeSection from "./sections/SubscribeSection.js";
import { CustomForm } from "./MailingList.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <ExploreSection />
        <StorySection />
        <LatestBlogPosts />
        <SectionCarousel />
        {/* <CustomForm /> */}
        <SubscribeSection />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
