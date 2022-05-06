export type Props = {
	type: 'primary' | 'secondary' | 'tertiary';
	size: 'small' | 'medium' | 'large';
	onclick: () => void;
}