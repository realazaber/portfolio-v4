export default function Testimonial(props: any) {
  return (
    <div className="min-w-[75vw] min-h-[20rem] flex flex-col justify-center items-center shadow-md w-full rounded-md py-3 px-5 text-sec">
      <h3 className="text-sec font-bold">{props.title}</h3>
      <p className="text-sec">{props.pgraph}</p>
      <h6 className="font-light">
        {props.person} {props.position} from {props.company}
      </h6>
    </div>
  );
}
