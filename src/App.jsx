import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate image loading
    setTimeout(() => setImageLoaded(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="text-white">JERIC</span>
              <span className="text-cyan-400"> PULLA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                HOME
              </a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                ABOUT
              </a>
              <a href="#portfolio" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                PORTFOLIO
              </a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                CONTACT
              </a>
              <a href="#socials" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                SOCIALS
              </a>
            </div>

            {/* Search Icon */}
            <button className="text-white hover:text-cyan-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              <div className="space-y-2">
                <p className="text-cyan-400 text-lg font-medium tracking-wider uppercase">
                  MERN Stack Developer
                </p>
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                  JERIC
                  <span className="block text-cyan-400 mt-2">PULLA</span>
                </h1>
                <div className="h-1 w-32 bg-cyan-400"></div>
                <p className="text-cyan-400 text-lg font-medium tracking-wider uppercase mt-4">
                  Machine Learning Enthusiast
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                I am a MERN Stack Developer and Machine Learning Enthusiast who loves building 
                the bridge between intelligent algorithms and seamless web experiences. Driven 
                by curiosity, I'm coding, experimenting, and leveling up my tech stack every single day.
              </p>

              <div className="flex gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
                  View Projects
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.951 8.555a7.926 7.926 0 01-2.257.618 3.932 3.932 0 001.723-2.167 7.865 7.865 0 01-2.494.953 3.923 3.923 0 00-6.681 3.578 11.132 11.132 0 01-8.081-4.096 3.923 3.923 0 001.214 5.235 3.897 3.897 0 01-1.777-.489v.048a3.924 3.924 0 003.148 3.848 3.932 3.932 0 01-1.772.067 3.927 3.927 0 003.667 2.724A7.867 7.867 0 012 19.54a11.094 11.094 0 006.017 1.766c7.22 0 11.167-5.982 11.167-11.167 0-.17-.004-.34-.011-.508a7.984 7.984 0 001.957-2.032z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex items-center justify-center">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              </div>
              
              {/* Floating Animation Container */}
              <div className={`relative transform transition-all duration-1000 ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* Decorative Circle */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                
                {/* Image Placeholder with Animation */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50 animate-float">
                  {/* Replace this div with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-gray-500 text-sm mt-2">src/assets/profile.png</p>
                    </div>
                  </div>
                  <img 
                    src="/src/assets/profile.png" 
                    alt="Jeric Pulla" 
                    className="w-full h-full object-cover"
                  />
                 
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slow">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slower">
                  <span className="text-2xl">🤖</span>
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slowest">
                  <span className="text-xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slower {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slowest {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slower {
          animation: bounce-slower 4s ease-in-out infinite;
        }

        .animate-bounce-slowest {
          animation: bounce-slowest 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;