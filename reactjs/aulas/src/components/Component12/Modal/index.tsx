import Image from 'next/image';

type Props = {
  image: string;
  closeModal: () => void;
};

const Index = ({ image, closeModal }: Props) => {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90"
      >
        <Image
          className="max-w-screen max-h-screen"
          src={`/assets/${image}`}
          alt=""
          width={640}
          height={360}
        />
      </div>
      <div
        onClick={closeModal}
        className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl"
      >
        &times;
      </div>
    </>
  );
};

export default Index;
