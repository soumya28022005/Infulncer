import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import BackToTop from "./components/layout/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen transition-colors duration-300">
        <ScrollProgressBar />
        <Navbar />

        <main>
          {/* Section components will be added here in upcoming steps:
              Hero, About, Stats, Portfolio, Services, Brands, Testimonials, FAQ, Contact */}
          <section id="hero" className="h-screen flex items-center justify-center">
            <p className="text-neutral-400">Hero section coming in Step 4</p>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
