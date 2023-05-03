import { BsEnvelopeOpen, BsLinkedin } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { GrTwitter } from 'react-icons/gr';
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

export default function Footer() {
  return (
    <section>
      <div className="flex justify-evenly items-baseline  bg-[#191C2D] text-white py-32">
        <div className="space-y-4  bg-[#191C2D]">
          <p className="bg-[#191C2D] text-white text-3xl font-bold">Creatix</p>
          <p className="w-40 bg-[#191C2D] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            itaque. Consequuntur atque corrupti
          </p>
          <div className="flex justify-start items-center gap-2 bg-[#191C2D] text-white">
            <ImFacebook className="text-xl bg-[#454756]" />
            <GrTwitter className="text-xl bg-[#454756]" />
            <BsLinkedin className="text-xl bg-[#454756]" />
            <AiFillInstagram className="text-xl bg-[#454756]" />
            <AiFillTwitterSquare className="text-xl bg-[#454756]" />
          </div>
        </div>

        <div className="space-y-4  bg-[#191C2D]">
          <h1 className="bg-[#191C2D] text-white text-xl font-bold">Resources</h1>
          <div>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
            <p className="bg-[#191C2D] text-white">Manage Website</p>
          </div>
        </div>

        <div className="space-y-4  bg-[#191C2D]">
          <h1 className="bg-[#191C2D] text-white  text-xl font-bold">Resources</h1>
          <div>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
          </div>
        </div>

        <div className="space-y-4  bg-[#191C2D]">
          <h1  className="bg-[#191C2D] text-white  text-xl font-bold">Resources</h1>
          <div>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
            <p  className="bg-[#191C2D] text-white">Manage Website</p>
          </div>
        </div>

        <div className=" text-white space-y-4  bg-[#191C2D]">
          <h1  className="bg-[#191C2D] text-white  text-xl font-bold">NewsLetter</h1>
          <p  className="bg-[#191C2D] text-white w-60">Lorem ipsum, dolor sit amet.</p>
          <div className="relative">
            <input className="w-60 text-black bg-white py-4 pl-4 text-xl"  type="text" placeholder="Enter Email"/>
            <div className=" bg-white text-black absolute top-6 right-8">
              <BsEnvelopeOpen/>
            </div>
          </div>
          <button className="h-14 bg-gradient-to-r from-[#F6395F] to-[#F97E35] px-6 text-xl text-white font-bold rounded btn">
            Subscribe+
          </button>
        </div>
      </div>
    </section>
  );
}
