import { IButtonProps } from './interface/button.interface';

const Button = ({
  onClick,
  className,
  children,
  variant = 'primary',
  testId,
}: IButtonProps) => {
  const mode =
    variant === 'primary'
      ? `bg-black text-white`
      : `bg-white text-black border border-black`;
  const classes = `text-lg font-thin py-2 px-4 rounded w-1/2 ${mode} ${className}`;
  return (
    <button data-testid={testId} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
