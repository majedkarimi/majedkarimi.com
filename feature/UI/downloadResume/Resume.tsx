import style from "./resume.module.scss";
interface prop {
  resume: string;
  calssName?: string;
}
const Resume = ({ resume, calssName }: prop) => {
  return (
    <a
      href={resume}
      download
      target="_blank"
      className={`${style.a} ${calssName}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Download Resume
    </a>
  );
};

export default Resume;
