import Image from 'next/image';

type Props = {
  id: number;
  name: string;
  img_url: string;
  weaknesses: string[];
};

const Index = ({ id, name, img_url, weaknesses }: Props) => {
  return (
    <div className="card bg-white/20 rounded-md w-full max-w-72 border border-white/20">
      <div className="card_header">
        <div className="card__img h-64">
          <Image
            className="w-full h-full"
            src={img_url}
            alt={name}
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="card_body p-5">
        <div className="card_title__id flex justify-center items-center gap-2 mb-4">
          <h4 className="card_title text-2xl text-white">{name}</h4>
          <span className="card_id text-white/40">#0{id}</span>
        </div>

        <div className="card_weaknesses">
          <p className="text-white/40 text-md mb-2">Weaknesses</p>
          <ul className="grid grid-cols-2 gap-2">
            {weaknesses.map((item, index) => (
              <li
                className="pilss bg-green-200 flex justify-center items-center rounded-full py-1 text-green-950 text-sm font-semibold capitalize"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
