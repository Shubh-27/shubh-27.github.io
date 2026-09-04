import Header from '../components/Header';
import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import CapabilityGrid from '../components/CapabilityGrid';
import FeaturedProjects from '../components/FeaturedProjects';
import PersonalProject from '../components/PersonalProject';
import ProjectDetailModal from '../components/ProjectDetailModal';
import Experience from '../components/Experience';
import About from '../components/About';
import TechnicalArticles from '../components/TechnicalArticles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

import { siteContent } from '../content/site';
import { impactStats } from '../content/impact';
import { capabilities } from '../content/skills';
import { personalProject, featuredProjects } from '../content/projects';
import { experienceData } from '../content/experience';
import { technicalArticles } from '../content/articles';

export default function Home() {
  return (
    <>
      <Header brand={siteContent.brand} />
      <main id="main-content">
        <Hero hero={siteContent.hero} />
        <About about={siteContent.about} />
        <ImpactStats stats={impactStats} />
        <CapabilityGrid capabilities={capabilities} />
        <Experience experience={experienceData} />
        <FeaturedProjects projects={featuredProjects} />
        <PersonalProject project={personalProject} />
        <TechnicalArticles articles={technicalArticles} />
        <Contact contact={siteContent.contact} />
      </main>
      <Footer footer={siteContent.footer} />
      <ProjectDetailModal />
      <BackToTop />
    </>
  );
}
