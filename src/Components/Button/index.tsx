import classNames from 'classnames';
import { Props } from './typings';
import './button.scss';

const Button: React.FC<Props> = ({
  group = '', size = '', onclick, children,
}) => (
  <button onClick={onclick} className={classNames('button', { size, group })}>
    {children || 'Button'}
  </button>
);
export default Button;
