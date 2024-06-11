type Props = {
  label: string;
  onClick: () => void
};

const index = ({ label, onClick }: Props) => {
  return (
    <button
      className="px-8 text-center rounded bg-white/5 hover:bg-white transition-all ease-linear hover:text-black text-4xl flex items-center justify-center"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default index;
