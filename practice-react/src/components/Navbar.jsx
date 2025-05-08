export default function Navbar(){

    const headingStyle = {
        fontSize: '25px',
        color: 'green'
    }
    return <nav className="p-4 bg-blue-200 flex justify-between items-center">
        <h2 style={headingStyle} >Swiggy</h2>

        <ul className="flex gap-x-5">
            <li className="h-underline"><a href="/">Home</a></li>
            <li className="h-underline"><a href="/">About</a></li>
            <li className="h-underline"><a href="/">ContactUs</a></li>
        </ul>
    </nav>
}