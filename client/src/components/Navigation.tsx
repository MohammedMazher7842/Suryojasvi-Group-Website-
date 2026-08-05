import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navigation Component
 * 
 * Design Philosophy: Dynamic Intelligence
 * - Real-time active link tracking via IntersectionObserver
 * - Smooth scroll-synchronized indicators
 * - Elegant Framer Motion animations for active state
 * - High-contrast "Active" styling (Orange focus)
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [activeHash, setActiveHash] = useState('');

  const navItems = [
    { label: 'Home', href: '/#home' },
    {
      label: 'About Us', href: '/journey',
      submenu: [
        { label: 'Our Journey', href: '/journey' },
        { label: 'Our Culture', href: '/culture' },
        { label: 'Our Founders', href: '/#founders' }
      ]
    },
    {
      label: 'Our Companies', href: '/companies',
      submenu: [
        { label: 'WyzMindz', href: '/companies#wyzmindz' },
        { label: 'Trasccon', href: '/companies#trasccon' },
        { label: 'Idamtat', href: '/companies#idamtat' },
        { label: 'Asteya', href: '/companies#asteya' },
        { label: 'Yocoya', href: '/companies#yocoya' }
      ]
    },
    { label: 'Our Partners', href: '/partners' },
    {
      label: 'Insights', href: '/media',
      submenu: [
        { label: 'Media', href: '/media' },
        { label: 'Talks', href: '/talks' }
      ]
    },
    { label: 'Contact Us', href: '/#contact' },
  ];

  // Detect which section is in view on the home page
  useEffect(() => {
    const isHomePage = window.location.pathname === '/';
    if (!isHomePage) {
      setActiveHash('');
      return;
    }

    const handleScroll = () => {
      const sectionIds = ['home', 'founders', 'contact', 'awards'];
      const scrollY = window.pageYOffset;
      const headerHeight = 100;

      // Find the section currently in the middle of the viewport
      const viewportMiddle = scrollY + (window.innerHeight / 3);

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (viewportMiddle >= top && viewportMiddle <= bottom) {
            setActiveHash('#' + id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isLinkActive = (href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      // Special case for home link: active if location is / and hash is home OR if hash is empty
      if (hash === 'home') {
        return location === path && (activeHash === '#home' || activeHash === '');
      }
      return location === path && activeHash === '#' + hash;
    }
    return location === href;
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const [path, hash] = href.split('#');
    const targetId = hash;
    const currentPath = window.location.pathname;

    const scrollToElement = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
        setActiveHash('#' + targetId);
      }
    };

    if (currentPath === (path || '/')) {
      scrollToElement();
    } else {
      setLocation(path || '/');
      setTimeout(scrollToElement, 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Identity */}
          <Link href="/#home" onClick={(e) => handleHashClick(e as any, '/#home')} className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 blur-lg rounded-full group-hover:bg-orange-500/40 transition-colors"></div>
              <img
                src="/logo.png"
                alt="Suryojasvi Group"
                className="h-10 w-auto object-contain relative z-10 transition-transform group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col leading-none">
                <p className="text-[9px] text-orange-500 font-black uppercase tracking-[0.4em] mb-1">The</p>
                <h1 className="text-xl font-black text-[#1e2a4a] tracking-tight group-hover:text-orange-500 transition-colors uppercase">
                  Suryojasvi <span className="text-gray-400 text-[10px] font-bold tracking-[0.2em] ml-1">Group</span>
                </h1>
              </div>
            </div>
          </Link>

          {/* Master Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              const isHashLink = item.href.includes('#');

              const baseClass = "px-2 lg:px-3 py-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 relative group whitespace-nowrap";
              const activeClass = active ? "text-orange-500" : "text-gray-400 hover:text-gray-900";

              return (
                <div key={item.label} className="relative group">
                  {isHashLink ? (
                    <a
                      href={item.href}
                      className={`${baseClass} ${activeClass}`}
                      onClick={(e) => handleHashClick(e, item.href)}
                    >
                      {item.label}
                      {active && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-[3px] bg-orange-500 rounded-full z-20"
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${baseClass} ${activeClass}`}
                    >
                      {item.label}
                      {active && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-4 right-4 h-[3px] bg-orange-500 rounded-full z-20"
                        />
                      )}
                    </Link>
                  )}
                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[200px] flex flex-col gap-1">
                        {item.submenu.map((sub: any) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => handleHashClick(e, sub.href)}
                            className="px-4 py-3 hover:bg-orange-50 hover:text-orange-500 rounded-lg text-[11px] font-bold text-gray-500 transition-colors uppercase tracking-widest block"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Responsive Control */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-50 text-[#1e2a4a] hover:bg-orange-50 hover:text-orange-500 transition-all border border-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-50 overflow-hidden shadow-2xl"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => {
                const active = isLinkActive(item.href);
                const isHashLink = item.href.includes('#');

                return (
                  <div key={item.label}>
                    {isHashLink ? (
                      <a
                        href={item.href}
                        onClick={(e) => handleHashClick(e, item.href)}
                        className={`flex items-center justify-between p-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${active ? 'bg-orange-50 text-orange-500' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                        {active && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                        {!active && <ChevronRight size={14} className="text-gray-300" />}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => !item.submenu && setIsOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${active ? 'bg-orange-50 text-orange-500' : 'text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        {item.label}
                        {active && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                        {!active && <ChevronRight size={14} className="text-gray-300" />}
                      </Link>
                    )}
                    {item.submenu && (
                      <div className="pl-4 mt-2 mb-2 space-y-1 border-l-2 border-orange-100 ml-4">
                        {item.submenu.map((sub: any) => {
                          const subActive = isLinkActive(sub.href);
                          return (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={(e) => handleHashClick(e, sub.href)}
                              className={`flex items-center justify-between p-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${subActive ? 'bg-orange-50 text-orange-500' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700'
                                }`}
                            >
                              {sub.label}
                              {subActive && <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
