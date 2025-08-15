import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import ContactHours from './ContactHours'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      <Navigation />

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hubungi Kami</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ada pertanyaan atau ingin berkonsultasi? Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactInfo />
              <ContactHours />
            </div>
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
