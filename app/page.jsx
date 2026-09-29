import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ImpactStats from '@/components/sections/ImpactStats';
import CapabilityGrid from '@/components/sections/CapabilityGrid';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import PersonalProject from '@/components/sections/PersonalProject';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import TechnicalArticles from '@/components/sections/TechnicalArticles';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/ui/BackToTop';

import { siteContent } from '@/content/site';
import { impactStats } from '@/content/impact';
import { capabilities } from '@/content/skills';
import { personalProject, featuredProjects } from '@/content/projects';
import { experienceData } from '@/content/experience';
import { technicalArticles } from '@/content/articles';

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
