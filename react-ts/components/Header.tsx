export interface HeaderProps {
  title: string
  color?: string
}

const Header = ({ title, color = 'black' }: HeaderProps) => {
	return (
		<header>
			<h1 style={{ color: color }}>{title}</h1>
		</header>
	);
};

export default Header