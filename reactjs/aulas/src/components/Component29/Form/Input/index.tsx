import { SignUpForm } from '@/types/SignUpForm';
import { UseControllerProps, useController } from 'react-hook-form';

const Index = (props: UseControllerProps<SignUpForm>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        placeholder={props.name}
        className={`bg-white/10 ring-0 outline-none rounded-sm py-2 px-3 dark:border-orange-400 text-white placeholder:text-white/40 border ${
          fieldState.invalid ? 'border-red-500' : 'border-white'
        } p-3`}
        type="text"
      />
      {fieldState.error?.type === 'required' && <p>Required field</p>}
      {fieldState.error?.type === 'min' && <p>age min. 18</p>}
      {fieldState.error?.type === 'max' && <p>age max. 120</p>}
    </div>
  );
};

export default Index;
