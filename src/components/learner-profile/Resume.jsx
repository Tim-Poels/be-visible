import { HiOutlineLocationMarker } from "react-icons/hi";

const Resume = (props) => {
  return (
    <div className="margin flex resume-card">
      <div className="decoration">
        <div className="circle"></div>
      </div>
      <div className="info">
        <h4>{props.title}</h4>
        <p>2019-present</p>
        <div className="flex">
          <HiOutlineLocationMarker /> <p>{props.location}</p>
        </div>

        <p className="bio">
          Little description of your role here. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit magni debitis consequatur
          inventore ipsum, eaque incidunt nostrum veniam illo magnam a hic esse
          molestiae dignissimos. Rem aspernatur doloribus voluptas modi.
        </p>
      </div>
    </div>
  );
};

export default Resume;
