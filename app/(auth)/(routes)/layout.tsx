const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center">
			{children}
		</div>
	);
};

export default AuthLayout;
