import { HiOutlineMail } from "react-icons/hi";

const ContactEmail = (props) => {
  return (
    <div className="cont flex">
      <div className="icon">
        <HiOutlineMail />
      </div>
      <p>fakeemail@gmail.com</p>
    </div>
  );
};

export default ContactEmail;
