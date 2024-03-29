const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/p43bQh3/toni-lluch-Jo-Roy500n-Cc-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col-reverse md:flex-row justify-center text-neutral-content">
                <div className=" md:w-1/2  text-white">
                    <div className="mb-3">
                        <p>Top Trending</p>
                        <hr className="border-2 w-[90px] mt-1 " />
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="text-blue-500">House</span> Renter</h1>
                    <p className="mb-5">Welcome, dear customers! We are thrilled to have you here. It is discount season, and we
                        are offering fantastic deals on a wide range of products. Do not miss out on the savings –
                        Book with us today!</p>
                    <button className="btn btn-primary btn-outline">Get Started</button>
                </div>
                <div className="w-[30%]"></div>
            </div>
        </div>
    );
};

export default Banner;