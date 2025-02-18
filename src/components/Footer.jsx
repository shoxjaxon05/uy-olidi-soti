import logo from "../images/california.png"


const footer = () => {
    return (
        <>
            <div className="w-full bg-[#F8F9FA]">
                <div className="py-10 w-[90%] m-auto">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 p-6">
                        <div className="col-span-2 flex flex-col items-start space-y-4">
                            <img src={logo} alt="Logo" className="h-5" />
                            <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">All products</h3>
                            <ul className="space-y-1">
                                <li>Phones</li>
                                <li>Watch</li>
                                <li>Tablet</li>
                                <li>Laptops</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">Company</h3>
                            <ul className="space-y-1">
                                <li>About</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">Support</h3>
                            <ul className="space-y-1">
                                <li>Style Guide</li>
                                <li>Licensing</li>
                                <li>Change Log</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold">Follow Us</h3>
                            <ul className="space-y-1">
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>LinkedIn</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t-2 border-gray-400 flex justify-between">
                        <div><span className=" font-bold">Made By:</span>Azwedo</div>
                        <div><span className=" font-bold">Powered by:</span>Webflow</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default footer;