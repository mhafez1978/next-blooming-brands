import Header from "@/components/header/Header";
import Video from "@/components/video/Video";
import SocialProof from "@/components/social-proof/SocialProof";
import Call2Action from "@/components/call-2-action/Call2Action";
import Test from "@/components/test/Test";
import Test2 from "@/components/test/Test2";
import ServiceSummary from "@/components/service/ServiceSummary";
import Call2Action2 from "@/components/call-2-action/Call2Action2";
import Reviews from "@/components/testimonials/Reviews";
import LatestPosts from "@/components/latest-posts/LatestPosts";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import OurServices from "@/components/service/OurServices";
import PricingTable from "@/components/pricing-table/PricingTable";
import Call2Action3 from "@/components/call-2-action/Call2Action3";
import Services3 from "@/components/service/Services3";
import FramedPerson from "@/components/misc/FramedPerson";
import OurTeam from "@/components/our-team/OurTeam";

// const services = [
//   {
//     id: 1,
//     name: "E-Commerce Websites",
//     desc: "Web design and development service",
//     img: "https://img.freepik.com/free-vector/code-review-concept-illustration_114360-4289.jpg",
//     action: "More Info",
//   },
//   {
//     id: 2,
//     name: "Identity & Branding",
//     desc: "Logo, Voice, Email Templates, Business Card Design",
//     img: "https://img.freepik.com/free-photo/branding-innovation-creative-inspire-concept_53876-120936.jpg",
//     action: "More Info",
//   },
//   {
//     id: 3,
//     name: "Online Marketing",
//     desc: "Google Ads Manager, Social Media Marketing, PPC Campaigns, ...",
//     img: "https://img.freepik.com/free-vector/hand-choosing-groceries-online_74855-5850.jpg",
//     action: "More Info",
//   },
//   {
//     id: 4,
//     name: "Search Engine Optimization",
//     desc: "Improve your ranks by optimizing your website content for search engines",
//     img: "https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg",
//     action: "More Info",
//   },
//   {
//     id: 5,
//     name: "WordPress Themes",
//     desc: "Custom made WordPress Themes",
//     img: "https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg",
//     action: "More Info",
//   },
//   {
//     id: 6,
//     name: "WordPress Plugins",
//     desc: "Extend beyond WordPress Limits",
//     img: "https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-3802.jpg",
//     action: "More Info",
//   },
// ];

const Home = () => {
  return (
    <>
      <Header />
      <Video />
      <SocialProof />
      <Call2Action2 />
      <Test />
      <Test2 />
      {/* <ServiceSummary /> */}
      {/* <OurServices /> */}
      <Reviews />
      {/* <LatestPosts /> */}

      <PricingTable />
      {/* <Call2Action3 />
      <Services3 /> */}

      {/* <FramedPerson /> */}

      {/* <OurTeam /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
