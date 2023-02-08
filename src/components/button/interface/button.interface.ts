export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  testId?: string;
}
