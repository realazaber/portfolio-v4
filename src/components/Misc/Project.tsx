import Link from "next/link";
import Image from "next/image";

export default function Project(props: any) {
  return (
    <div className={`flex ${props.reverse ? "flex-row-reverse" : "flex-row"}`}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="flex flex-row gap-3">
          <Link href={props.github}>
            See the code
            <i className="fa-brands fa-github text-pri"></i>
          </Link>
          <Link href={props.deployment}>
            See it live
            <i className="fa-solid fa-arrow-up-right-from-square text-pri"></i>
          </Link>
        </div>
      </div>
      <div>
        <Image src={props.image} alt={props.name} width={300} height={600} />
      </div>
    </div>
  );
}
