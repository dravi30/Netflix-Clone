const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-center gap-4 md:h-24'>
				<p className='text-center text-sm leading-loose text-muted-foreground'>
					Copyright  {new Date().getFullYear()} © Dhanya K R.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
