export type Props = {
	group?: 'primary' | 'secondary' | 'tertiary';
	size?: 'small' | 'medium' | 'large';
	onclick?: () => void;
	children?: React.ReactNode;
}