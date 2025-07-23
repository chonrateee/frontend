'use client';
import { useState, useEffect } from 'react';

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors" href="/">
            Chonratee
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-gray-700 hover:text-green-600 transition-colors" href="/">หน้าแรก</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-green-600 transition-colors flex items-center">
                เมนูเพิ่มเติม
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Action</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Another action</a>
                <hr className="my-2" />
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Something else here</a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <input
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                type="search"
                placeholder="ค้นหา..."
              />
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                ค้นหา
              </button>
            </div>
            
            <div className="flex space-x-2">
              <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                กลับหน้าหลัก
              </a>
              <a href="/login" className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Login
              </a>
              <a href="/register" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Main Register Component
export default function Register() {
  const [konami, setKonami] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Konami code sequence
  const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA';
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = konami + e.code;
      
      if (konamiCode.startsWith(newSequence)) {
        setKonami(newSequence);
        if (newSequence === konamiCode) {
          setShowEasterEgg(true);
          setTimeout(() => setShowEasterEgg(false), 5000);
          setKonami('');
        }
      } else {
        setKonami('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  // Secret logo click counter
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 6) {
      setFormData({
        username: 'Chonratee Admin',
        email: 'admin@chonratee.com',
        password: 'superuser123'
      });
      setClickCount(0);
      alert('🎭 Admin mode activated! Logo clicked 7 times! 🎭');
    }
  };

  // Secret developer mode - type "dev" in username field
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setFormData({...formData, username: value});
    
    if (value.toLowerCase() === 'dev') {
      setFormData({
        username: 'นักพัฒนาเทพ 👨‍💻',
        email: 'god@developer.com',
        password: 'password123'
      });
    } else if (value.toLowerCase() === 'chonratee') {
      setFormData({
        username: 'Chonratee VIP',
        email: 'vip@chonratee.com',
        password: 'vipaccess2024'
      });
    }
  };

  const handleSubmit = () => {
    // Easter egg for specific scenarios
    if (formData.username.includes('Admin')) {
      alert('🎭 Welcome back, Admin! Full system access granted! 🎭');
    } else if (formData.username.includes('VIP')) {
      alert('💎 VIP Member detected! Premium features unlocked! 💎');
    } else if (formData.email.includes('@gmail.com')) {
      alert('🎉 Gmail user detected! คุณได้รับส่วนลด 50%! 🎉');
    } else if (formData.email.includes('@hotmail.com')) {
      alert('🔥 Retro email! คุณคือนักสะสมของเก่า! 🔥');
    } else if (formData.email.includes('@chonratee.com')) {
      alert('🏢 พนักงาน Chonratee! Employee benefits activated! 🏢');
    } else if (formData.password === 'password123') {
      alert('🤫 Using the default dev password? Time to change it! 🤫');
    } else {
      alert('สมัครสมาชิกสำเร็จ! ยินดีต้อนรับสู่ Chonratee! 🎊');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Navbar */}
      <div onClick={handleLogoClick} className="cursor-pointer">
        <Navbar />
      </div>

      {/* Konami Code Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center animate-bounce">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">KONAMI CODE ACTIVATED!</h2>
            <p className="text-gray-600">Chonratee Developer Mode! You found the secret! 🕹️</p>
            <div className="mt-4 text-sm text-gray-500">
              ↑↑↓↓←→←→BA - The classic code!
            </div>
          </div>
        </div>
      )}

      {/* Main Registration Form */}
      <div className="flex items-center justify-center py-12 px-6">
        <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-green-800 drop-shadow-md">
            สมัครสมาชิก Chonratee
            <span 
              className="text-xs text-gray-300 block mt-1 cursor-help" 
              title="Try typing 'dev' or 'chonratee' in username field 😉"
            >
              v2.0.integrated {clickCount > 3 && `(${7 - clickCount} clicks left)`}
            </span>
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                ชื่อผู้ใช้
                {(formData.username.includes('เทพ') || formData.username.includes('Admin') || formData.username.includes('VIP')) && 
                  <span className="ml-2">✨</span>
                }
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                placeholder="กรอกชื่อผู้ใช้"
                value={formData.username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">อีเมล</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">รหัสผ่าน</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 transition"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              สมัครสมาชิก
            </button>
          </div>
          
          {/* Secret hints */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-gray-400">
              🎮 Classic gamers: Try ↑↑↓↓←→←→BA
            </p>
            <p className="text-xs text-gray-400">
              🖱️ Click the logo 7 times for admin access
            </p>
            <p className="text-xs text-gray-400">
              💻 Developers know the magic words...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}