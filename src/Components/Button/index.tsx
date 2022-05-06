import classNames from "classnames"
import { Props } from "./typings"

const Button: React.FC<Props> = ({group, size, onclick, children}) => {
	return (
		<button onClick={onclick} className={classNames('button')}>
			{children || 'Button'}
		</button>
	)
}
export default Button