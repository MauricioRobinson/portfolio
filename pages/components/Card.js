import Image from "next/image";

function Card(props) {
  return (
    <div className="max-w-md br-red-200 rounded-2xl bg-zinc-800 text-white p-10 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            className="object-cover"
            src={props.imageUrl}
            alt={props.alt}
            width={140}
            height={140}
          />
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
