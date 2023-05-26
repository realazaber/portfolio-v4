import Link from "next/link";

export default function MainProject(props: any) {
  return (
    <div
      className={`flex flex-col-reverse justify-center items-center my-3 phone:my-5 mx-auto w-4/5 min-h-[24rem] max-h-[28rem] phone:gap-3 ${
        props.reverse ? "phone:flex-row-reverse" : "phone:flex-row"
      }`}
    >
      <div
        className={`w-full phone:w-1/2 h-3/5 p-3 z-10 bg-blue-800 rounded-b-md phone:rounded-b-none opacity-95 text-white flex flex-col justify-center items-center ${
          props.reverse ? "phone:ml-[-3rem]" : "phone:mr-[-3rem]"
        }`}
      >
        <Link href={`projects/${props.id}`} target="_blank">
          <h2 className="text-2xl phone:text-3xl text-center text-white">
            {props.title}
          </h2>
        </Link>
        <div className="flex flex-row justify-center flex-wrap gap-1 phone:gap-3">
          {props.tech.sort().map((tech: string) => (
            <span className="text-lg phone:text-xl" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center phone:flex-row gap-1 phone:gap-3">
          {props.github !== "" && (
            <Link
              className="text-white flex gap-1 items-center"
              href={props.github}
              target="_blank"
            >
              See the code
              <i className="fa-brands fa-github text-white"></i>
            </Link>
          )}
          {props.deployment !== "" && (
            <Link
              className="text-white flex gap-1 items-center"
              href={props.deployment}
              target="_blank"
            >
              See it live
              <i className="fa-solid fa-arrow-up-right-from-square text-white"></i>
            </Link>
          )}
        </div>
        <Link
          className="text-white justify-center items-center my-3 mx-auto w-full flex gap-1 items-center"
          href={`projects/${props.id}`}
          target="_blank"
        >
          Case study
          <i className="fas fa-book text-white"></i>
        </Link>
      </div>
      <div className="w-full phone:w-1/2 h-full">
        <Link href={`projects/${props.id}`} target="_blank">
          <img
            className="object-cover max-h-[28rem] w-full rounded-t-md phone:rounded-md"
            src={props.image}
            alt={props.name}
          />
        </Link>
      </div>
    </div>
  );
}
