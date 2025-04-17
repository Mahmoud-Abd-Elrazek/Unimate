
function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Animated Background Slides */}
        <div
          className="hero-slide"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&q=80&w=2069")',
          }}
        />
        <div
          className="hero-slide"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069")',
          }}
        />
        <div
          className="hero-slide"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1496664444929-8c75efb9546f?auto=format&fit=crop&q=80&w=2070")',
          }}
        />
        <div
          className="hero-slide"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070")',
          }}
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-end text-right">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              سكنك الجامعي  
              أصبح على بُعد
              <br/>
              خطوه واحده
              {/* Find Your Perfect<br />Student Home */}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
            خطوتك الأولى نحو سكن جامعي مريح ومناسب تبدأ هنا
            </p>

            {/* Search & button */}
            <div className=" p-4 rounded-lg max-w-3xl flex flex-col md:flex-row gap-4">
              {/* button show more */}
              <div className='flex items-center justify-center mt-10'>
                <a href="#RoomSection" className='text-center flex justify-center items-center flex-col MainColorBG rounded-full w-[300px] h-[3rem] text-white'> 
                  تصفح الان
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;