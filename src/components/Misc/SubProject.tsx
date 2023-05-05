import Link from "next/link";
export default function SubProject(props: any) {
  return (
    <div className="h-[150px] flex flex-col justify-center items-center hover:shadow-md hover:cursor-pointer rounded-md p-3 border-2 border-accent w-full tablet:w-1/3 desktop:w-1/4">
      <Link href={`/projects/${props.id}`}>
        <h3 className="text-pri text-center text-2xl">{props.title}</h3>
      </Link>
      <Link className="text-center" href={`/projects/${props.id}`}>
        Case study
      </Link>
      <div className="h-10 phone:h-5 flex flex-col justify-center items-center phone:flex-row gap-1 phone:gap-3">
        {props.github !== "" && (
          <Link
            className="text-accent flex gap-1 items-center"
            href={props.github}
            target="_blank"
          >
            See the code
            <i className="fa-brands fa-github"></i>
          </Link>
        )}
        {props.deployment !== "" && (
          <Link
            className="text-accent flex gap-1 items-center"
            href={props.deployment}
            target="_blank"
          >
            See it live
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        )}
      </div>
    </div>
  );
}
