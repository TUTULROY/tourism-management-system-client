

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/kGWQjCP7/Hanging-rangamati.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">WelCome To Rangamati</h1>
      <p className="mb-5">Rangamati is the administrative headquarter and town of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh.</p>
      <button className="btn text-xl btn-primary">Go</button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;