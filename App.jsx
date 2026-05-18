import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code2, Rocket, Zap, Globe, Layers, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import './index.css';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };

  return (
    <motion.div initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <Code2 className="text-primary" size={28} color="#6366f1" />
          <span>Nova <span className="text-gradient">009</span></span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#about" className="btn-secondary" style={{ padding: '0.5rem 1.2rem' }}>About Us</a>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Hire Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="section" style={{ zIndex: 1, paddingTop: '12rem' }}>
          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span className="glass-panel" style={{ padding: '0.5rem 1rem', borderRadius: '99px', fontSize: '0.875rem', color: '#c084fc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Rocket size={16} /> Premium Web Development Agency
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1>
              We Build <span className="text-gradient">Digital</span> <br />
              Experiences That Matter
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p>
              Nova 009 Development is a top-tier web development agency specializing in crafting 
              highly attractive, performant, and advanced digital solutions for modern businesses.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="https://v3-clothes-website-54zp.vercel.app?_vercel_share=CZ7zYWyO6obFy5N5vkj2N9DFoVMWTBUo" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Our Work <ArrowRight size={18} />
              </a>
              <a href="#expertise" className="btn-secondary">
                Our Expertise
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section glass-panel" style={{ margin: '4rem auto', maxWidth: '1200px' }}>
        <div className="grid-cols-2">
          <div>
            <FadeIn delay={0.2} direction="right">
              <h2 className="title-glow" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                Why Choose <span className="text-gradient">Nova 009?</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                We don't just build websites; we engineer digital ecosystems. Our team combines state-of-the-art technologies with premium aesthetic design to deliver products that don't just work flawlessly—they leave a lasting impression.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Elite Level UI/UX Design",
                  "High-Performance & Scalable Architecture",
                  "Advanced Animations & Interactions",
                  "SEO Optimized & Mobile First"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#f9fafb' }}>
                    <CheckCircle2 color="#10b981" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
          
          <div style={{ position: 'relative' }}>
             <FadeIn delay={0.4} direction="left">
               <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                 <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                 </div>
                 <pre style={{ color: '#a78bfa', fontFamily: 'monospace', fontSize: '0.9rem', overflowX: 'hidden' }}>
                    <code>
{`const agency = {
  name: "Nova 009",
  mission: "Elevating Brands",
  skills: [
    "React", "Next.js", 
    "Framer Motion", 
    "UI/UX Design",
    "System Architecture"
  ],
  isPremium: true
};

agency.deliverExcellence();`}
                    </code>
                 </pre>
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section">
        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title-glow" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Expertise</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>We leverage bleeding-edge technologies to bring your vision to life.</p>
          </div>
        </FadeIn>

        <div className="grid-cols-3">
          <FadeIn delay={0.3} direction="up">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Globe />
              </div>
              <h3>Modern Web Apps</h3>
              <p>Lightning-fast single page applications built with React, ensuring a smooth app-like experience for your users.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Layers />
              </div>
              <h3>Premium UI/UX</h3>
              <p>Bespoke, handcrafted designs tailored to your brand identity. We create visually stunning interfaces that convert.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <div className="feature-card glass-panel">
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Advanced Animations</h3>
              <p>Fluid, physics-based micro-interactions and scroll animations that make your website feel alive and immersive.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="section" style={{ textAlign: 'center' }}>
        <FadeIn delay={0.2}>
          <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'linear-gradient(to right, rgba(99, 102, 241, 0.05), rgba(236, 72, 153, 0.05))' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to start your <span className="text-gradient">Project?</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
              Let's build something extraordinary together. Reach out to us.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Mail size={24} />
                </div>
                <a href="mailto:nova009development@gmail.com" style={{ fontSize: '1.1rem', color: 'inherit', textDecoration: 'none' }}>nova009development@gmail.com</a>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Phone size={24} />
                </div>
                <span style={{ fontSize: '1.1rem' }}>+94 70 646 1066</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-main)' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                  <MapPin size={24} />
                </div>
                <span style={{ fontSize: '1.1rem' }}>Sabaragamuwa, Ratnapura</span>
              </div>
            </div>

            <a 
              href="https://wa.me/94706461066?text=Hi%20Nova%20009%20Development%2C%20%E0%B6%B8%E0%B6%A7%20%E0%B6%85%E0%B6%BD%E0%B7%94%E0%B6%AD%E0%B7%8A%20website%20%E0%B6%91%E0%B6%9A%E0%B6%9A%E0%B7%8A%20%E0%B7%84%E0%B6%AF%E0%B7%8F%E0%B6%9C%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B6%85%E0%B7%80%E0%B7%81%E0%B7%8A%E2%80%8D%E0%B6%BA%E0%B6%BA%E0%B7%92.%20%E0%B7%80%E0%B7%92%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B6%BB%20%E0%B6%AF%E0%B7%90%E0%B6%B1%E0%B6%9C%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B6%B4%E0%B7%94%E0%B6%BD%E0%B7%94%E0%B7%80%E0%B6%B1%E0%B7%8A%E0%B6%AF%3F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Phone size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Code2 size={24} color="#6366f1" />
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>Nova 009 Development</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Nova 009. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
