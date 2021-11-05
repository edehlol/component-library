import classNames from 'classnames';
import { ButtonIcon } from './ButtonIcon';

enum Variant {
  DARK = 'dark',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.DARK]: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white',
  [Variant.FACEBOOK]: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white',
  [Variant.GOOGLE]: 'hover:bg-gray-100 active:bg-gray-200 border',
};

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  variant: Variant;
  type?: 'button' | 'submit' | 'reset';
}

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

export default Object.assign(Button, {
  Icon: ButtonIcon,
});
