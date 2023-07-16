import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="bg-black w-full h-full col justify-between md:grid md:grid-flow-col py-16 px-20 ">
        <div className="w-full h-full m-auto flex  ">
          <div className="">
            <div className=" w-full flex font-bold">
              <h1 className="m-auto justify-center text-2xl">UNDERDOGS</h1>
            </div>
            <div className="flex m-auto justify-center items-center">
              <TiSocialTwitter className="m-2 w-5 h-5" />
              <BsDiscord className="m-2 w-5 h-5" />
              <TiSocialInstagram className="m-2 w-5 h-5" />
              <TiSocialYoutube className="m-2 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="text-white mx-4 text-lg ">
          <h1>Careers</h1>
          <h1>Teams</h1>
          <h1>Faq</h1>
          <h1>Sponsors</h1>
        </div>
        <div className="text-white mx-4 text-lg">
          <h1>Connect</h1>
          <h1>Whitepaper</h1>
          <h1>Join</h1>
          <h1>Roadmap</h1>
          <h1>Leaderboard</h1>
        </div>
        <div className="mx-4">
          <div className="w-full my-2 font-semibold">
            <h1>Subscribe to our newsletter</h1>
          </div>
          <div className="text-white  text-lg flex h-8 justify-center items-center ">
            <div className="mr-4">
              <AiOutlineMail className="h-6 w-6" />
            </div>
            <div className="">
              <input type="text" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-black pb-10">
        <h1>Copyright © 2023 Underdogs. All rights reserved.</h1>
      </div>
    </>
  );
}

export default Footer;
