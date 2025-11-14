import Header from '@/components/main/Header.jsx'
import AboutSection from '@/components/main/AboutSection.jsx'
import ServicesSection from '@/components/main/ServicesSection.jsx'
import TestimonialsSection from '@/components/main/TestimonialsSection.jsx'
import CTA from '@/components/main/CTA'
import '@/main.css'



export default function Home() {
    return (
        <>
            <Header />
            <main className="w-screen flex overflow-x-hidden flex-col items-center gap-20 justify-center mt-50">

                <AboutSection />

                <ServicesSection />

                <TestimonialsSection />

                <CTA />
            </main>
        </>
    )
}
