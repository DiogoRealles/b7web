import { Photo } from '@/types/Photo';
import Image from 'next/image';

type Props = {
  photo: Photo;
  onClick: () => void;
};

const Index = ({ photo, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-full cursor-pointer hover:opacity-80"
    >
      <Image
        className="w-full h-full object-cover align-middle"
        src={`/assets/${photo.img_url}`}
        alt=""
        width={640}
        height={360}
      />
    </div>
  );
};

export default Index;
