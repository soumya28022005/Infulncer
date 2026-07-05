import { useState, useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import BackToTop from "./components/layout/BackToTop";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { 
  profile, 
  stats, 
  portfolioItems, 
  portfolioCategories, 
  services, 
  brands, 
  testimonials, 
  faqs 
} from "./config/data";
import { 
  FaArrowRight, 
  FaPlay, 
  FaCheckCircle, 
  FaQuoteLeft,
  FaInstagram, 
  FaYoutube, 
  FaStar, 
  FaHandshake, 
  FaCamera, 
  FaCalendarAlt, 
  FaLink, 
  FaBullhorn, 
  FaComments,
  FaSpinner,
  FaExclamationCircle
} from "react-icons/fa";

const iconMap = {
  FaInstagram, FaYoutube, FaStar, FaHandshake, 
  FaCamera, FaCalendarAlt, FaLink, FaBullhorn, FaComments
};

const imgPlaceholders = [
  "https://images.unsplash.com/photo-1515378960530-7c0da6231d6c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a30ea69cab26?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492633423870-43d1cd2a492c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=800&auto=format&fit=crop"
];

// Reusable Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Hero = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
       <img src="https://images.unsplash.com/photo-1616091093714-c64882e9ab55?q=80&w=2000&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover" />
       <div className="absolute inset-0 bg-neutral-900/70 dark:bg-neutral-950/80"></div>
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
       <motion.span variants={fadeInUp} initial="hidden" animate="visible" className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-6 border border-white/20 shadow-lg">
         {profile.tagline}
       </motion.span>
       <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
         Hi, I'm {profile.name.split(' ')[0]} <br/> 
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-violet-500">Creating Connections</span>
       </motion.h1>
       <motion.p variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
         {profile.bio}
       </motion.p>
       <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
         <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-neutral-900 font-bold hover:bg-neutral-200 hover:scale-105 transition-all flex items-center justify-center gap-2">
           Work With Me <FaArrowRight />
         </a>
         <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
           View Portfolio <FaPlay size={12} />
         </a>
       </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
     <div className="max-w-7xl mx-auto px-6 lg:px-10">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
             More Than Just <br/> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">Content</span>
           </h2>
           <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
             {profile.longStory}
           </p>
           <div className="p-6 bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800">
              <p className="text-neutral-900 dark:text-neutral-100 font-medium text-lg italic">
                "{profile.mission}"
              </p>
           </div>
         </motion.div>
         <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" alt="About me" className="rounded-3xl shadow-2xl object-cover w-full h-[550px]" />
           <div className="absolute -bottom-8 -left-8 bg-white dark:bg-neutral-950 p-6 rounded-3xl shadow-xl border border-neutral-100 dark:border-neutral-800 animate-bounce-slow">
             <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 mb-1">5+</p>
             <p className="text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">Years Experience</p>
           </div>
         </motion.div>
       </div>
     </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, i) => (
          <motion.div key={i} variants={fadeInUp} className="text-center group">
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
              {stat.value >= 1000000 ? (stat.value/1000000).toFixed(1) + 'M' : stat.value >= 1000 ? (stat.value/1000).toFixed(0) + 'K' : stat.value}{stat.suffix}
            </h3>
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = activeTab === "All" ? portfolioItems : portfolioItems.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-rose-500">Work</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            A selection of my recent brand collaborations, personal projects, and high-performing content.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveTab(cat)} 
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === cat ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md scale-105' : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                layout 
                key={item.id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.3 }} 
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-950 shadow-sm hover:shadow-2xl transition-all block"
              >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={imgPlaceholders[idx % imgPlaceholders.length]} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">{item.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-300 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-24 bg-white dark:bg-neutral-950 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
      <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-500">Offer</span>
          </motion.h2>
          <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Partner with me to elevate your brand's presence through authentic storytelling and high-quality production.
          </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const Icon = iconMap[srv.icon] || FaStar;
          return (
            <motion.div key={idx} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200 dark:hover:border-amber-900/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-800 text-amber-500 flex items-center justify-center mb-6 shadow-sm">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{srv.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{srv.description}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
);

const Brands = () => (
  <section id="brands" className="py-20 bg-neutral-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-12">
      <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Trusted by industry leaders</p>
    </div>
    <div className="relative flex overflow-x-hidden group">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none"></div>
      <motion.div 
        className="flex space-x-20 items-center whitespace-nowrap px-10" 
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
         {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
           <span key={i} className="text-3xl md:text-4xl font-black text-neutral-700 hover:text-white transition-colors duration-300 cursor-default">
             {brand.name}
           </span>
         ))}
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-neutral-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">Love</span>
          </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl bg-white dark:bg-neutral-950 shadow-sm border border-neutral-100 dark:border-neutral-800 relative hover:shadow-xl transition-shadow duration-300">
             <FaQuoteLeft className="absolute top-8 right-8 text-neutral-100 dark:text-neutral-800/50" size={60} />
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(test.name)}&background=random&color=fff&size=100`} alt={test.name} className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white dark:border-neutral-800" />
               <div>
                 <h4 className="font-bold text-lg text-neutral-900 dark:text-white">{test.name}</h4>
                 <p className="text-xs font-semibold uppercase tracking-wider text-amber-500">{test.role}</p>
               </div>
             </div>
             <p className="text-neutral-600 dark:text-neutral-300 italic relative z-10 leading-relaxed text-lg">
               "{test.quote}"
             </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">Questions</span>
            </motion.h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpen(open === i ? null : i)} 
                className="w-full text-left px-8 py-6 font-bold text-lg flex justify-between items-center bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-900 dark:text-white"
              >
                {faq.question}
                <span className={`transform transition-transform duration-300 text-amber-500 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 py-6 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-base leading-relaxed border-t border-neutral-100 dark:border-neutral-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', brandName: '', email: '', phone: '',
    country: '', campaignType: '', budget: '', timeline: '', platform: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // Send to EmailJS (You can add Google Apps Script fetch here later)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        fullName: '', companyName: '', brandName: '', email: '', phone: '',
        country: '', campaignType: '', budget: '', timeline: '', platform: '', message: ''
      });
      
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({ loading: false, success: false, error: 'Failed to send proposal. Please try again.' });
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors text-sm";
  const labelClass = "block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide";

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-neutral-950 text-white rounded-[3rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500 to-rose-500 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500 to-rose-500 rounded-full blur-[100px] opacity-20 -ml-20 -mb-20 pointer-events-none"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              
              {/* Left Side: Information */}
              <div className="lg:col-span-2 pt-4">
                 <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                   Let's Create <br/>Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Great.</span>
                 </h2>
                 <p className="text-neutral-400 mb-10 text-lg">
                   Ready to elevate your brand? Fill out the form and my management team will get back to you within 24 hours.
                 </p>
                 <div className="space-y-6 hidden sm:block">
                   <div className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400"><FaCheckCircle /></div>
                     Professional Execution
                   </div>
                   <div className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400"><FaCheckCircle /></div>
                     Fast Turnaround
                   </div>
                   <div className="flex items-center gap-4 text-neutral-200 font-medium text-lg">
                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400"><FaCheckCircle /></div>
                     High Engagement ROI
                   </div>
                 </div>
              </div>
              
              {/* Right Side: Enhanced Form */}
              <div className="lg:col-span-3 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className={labelClass}>Full Name *</label>
                       <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                     </div>
                     <div>
                       <label className={labelClass}>Email Address *</label>
                       <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@brand.com" className={inputClass} />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className={labelClass}>Brand Name *</label>
                       <input required type="text" name="brandName" value={formData.brandName} onChange={handleChange} placeholder="GlowBeauty Co." className={inputClass} />
                     </div>
                     <div>
                       <label className={labelClass}>Company Name</label>
                       <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Optional" className={inputClass} />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div>
                       <label className={labelClass}>Phone Number</label>
                       <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                     </div>
                     <div>
                       <label className={labelClass}>Country</label>
                       <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="United States" className={inputClass} />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <div>
                       <label className={labelClass}>Campaign Type</label>
                       <select name="campaignType" value={formData.campaignType} onChange={handleChange} className={`${inputClass} appearance-none`}>
                         <option value="" disabled>Select...</option>
                         <option value="Sponsored Post">Sponsored Post</option>
                         <option value="UGC">UGC Content</option>
                         <option value="Brand Ambassador">Ambassador</option>
                         <option value="Other">Other</option>
                       </select>
                     </div>
                     <div>
                       <label className={labelClass}>Budget (USD) *</label>
                       <select required name="budget" value={formData.budget} onChange={handleChange} className={`${inputClass} appearance-none`}>
                         <option value="" disabled>Select...</option>
                         <option value="Under $500">&lt; $500</option>
                         <option value="$500 - $1,500">$500 - $1.5k</option>
                         <option value="$1,500 - $5,000">$1.5k - $5k</option>
                         <option value="$5,000+">$5k+</option>
                       </select>
                     </div>
                     <div>
                       <label className={labelClass}>Timeline</label>
                       <select name="timeline" value={formData.timeline} onChange={handleChange} className={`${inputClass} appearance-none`}>
                         <option value="" disabled>Select...</option>
                         <option value="ASAP">ASAP</option>
                         <option value="1-2 Weeks">1-2 Weeks</option>
                         <option value="1 Month+">1 Month+</option>
                       </select>
                     </div>
                   </div>

                   <div>
                     <label className={labelClass}>Social Platform(s)</label>
                     <input type="text" name="platform" value={formData.platform} onChange={handleChange} placeholder="e.g. Instagram Reels, YouTube Shorts" className={inputClass} />
                   </div>

                   <div>
                     <label className={labelClass}>Campaign Details / Message *</label>
                     <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your deliverables, goals, and expectations..." rows="3" className={`${inputClass} resize-none`}></textarea>
                   </div>
                   
                   {/* Alerts */}
                   {status.error && (
                     <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-sm">
                       <FaExclamationCircle /> {status.error}
                     </div>
                   )}
                   {status.success && (
                     <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20 text-sm">
                       <FaCheckCircle /> Proposal sent! We'll be in touch shortly.
                     </motion.div>
                   )}

                   <button 
                     disabled={status.loading}
                     className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-all flex justify-center items-center gap-3 shadow-lg shadow-rose-500/25 disabled:opacity-70 disabled:hover:scale-100"
                   >
                     {status.loading ? (
                       <><FaSpinner className="animate-spin" /> Sending...</>
                     ) : (
                       <>Send Proposal <FaArrowRight /></>
                     )}
                   </button>
                 </form>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen transition-colors duration-300 font-sans">
        <ScrollProgressBar />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Stats />
          <Portfolio />
          <Services />
          <Brands />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;