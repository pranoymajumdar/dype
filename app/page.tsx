import Hero from '@/components/sections/hero';
import WhyUsSection from '@/components/sections/whyus';
import OurServices from '@/components/sections/our-services';
import OurAchievements from '@/components/sections/our-achievements';
import Testimonials from '@/components/sections/testimonials';
import ContactUs from '@/components/sections/contact-us';
import Projects from '@/components/sections/projects';
export default function Home() {
  return (
    <>
      <Hero/>
      <WhyUsSection/>
      <OurServices/>
      <OurAchievements/>
      <Testimonials/>
      <Projects/>
      <ContactUs/>
    </>
  )
}
