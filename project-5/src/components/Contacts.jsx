import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const Contacts = ({ contact }) => {
  return (
    <div>
      {contact.map((contact) => {
        return (
          <div
            key={contact.id}
            className="flex w-[360px] h-[64px] gap-4 justify-center mt-2 items-center bg-yellow rounded "
          >
            <HiOutlineUserCircle className=" text-5xl text-orange" />
            <div className="div w-9/12 text-left">
              <h2>{contact.name}</h2>
              <h3>{contact.email}</h3>
            </div>
            <div className="div text-3xl flex gap-2 ">
              <RiEditCircleLine className="cursor-pointer" />
              <IoMdTrash className="text-purple cursor-pointer" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
