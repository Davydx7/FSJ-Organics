import classNames from "classnames"
import { Props } from "./typings"

const Button : React.FC<Props> = ({type, size, onclick}) => {
	return (
		<button onClick={onclick} className={classNames('button')}>
			Button
		</button>
	)
}
export default Button