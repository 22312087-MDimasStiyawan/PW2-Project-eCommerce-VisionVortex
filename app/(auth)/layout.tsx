export default function AuthLayout({
    children
}:{
    children: React.ReactNode
}) {
    return(
        <div className="flex justify-center m-8">
            {children}
        </div>
    )
}