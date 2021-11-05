import classNames from 'classnames';

enum Variant {
  DARK = 'dark',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}
interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  variant: Variant;
  type?: 'button' | 'submit' | 'reset';
}
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.DARK]: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white',
  [Variant.FACEBOOK]: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white',
  [Variant.GOOGLE]: 'hover:bg-gray-100 active:bg-gray-200 border',
};

const Button = (props: Props) => {
  const { children, onClick, variant, type } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        `w-full rounded-md h-10 text-sm font-semibold flex items-center justify-center`,
        VARIANT_MAPS[variant]
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: Variant.DARK,
  type: 'button',
};

Button.variant = Variant;

export { Button };
