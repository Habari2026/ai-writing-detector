import Link from 'next/link'
import { CheckCircle, BookOpen, Target, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">AI Writing Detector</h1>
            <Link 
              href="/detector"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Try Free Tool
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Write Authentically.<br />
            <span className="text-indigo-600">Stand Out Professionally.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Free educational tool that helps you identify AI writing patterns and develop 
            a more natural, authentic voice in your professional communication.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/detector"
              className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Analyze Your Writing Now
            </Link>
            <a 
              href="#how-it-works"
              className="px-8 py-4 bg-white text-indigo-600 text-lg rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">8</div>
              <div className="text-gray-600">AI Pattern Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">0</div>
              <div className="text-gray-600">Technical Knowledge Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paste Your Text</h3>
              <p className="text-gray-600">
                Copy any email, document, or article into the tool. No signup required.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">See AI Patterns</h3>
              <p className="text-gray-600">
                Instantly highlights AI writing patterns with color-coded categories and explanations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Improve Your Writing</h3>
              <p className="text-gray-600">
                Learn what to avoid and develop a more authentic, professional voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Vocabulary Detection</h3>
              <p className="text-gray-600">
                Identify words like "delve," "showcase," "underscore," and "intricate" that 
                are statistically overused by AI compared to human writers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Promotional Language</h3>
              <p className="text-gray-600">
                Spot phrases like "nestled in," "boasts," and "stunning beauty" that sound 
                like advertising copy rather than authentic communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Emphasis Patterns</h3>
              <p className="text-gray-600">
                Recognize superficial analysis phrases like "plays a pivotal role" and 
                "testament to" that inflate importance artificially.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Educational Focus</h3>
              <p className="text-gray-600">
                Based on Wikipedia's comprehensive "Signs of AI Writing" research covering 
                thousands of analyzed texts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-white">
            <div className="bg-indigo-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Professionals</h3>
              <p className="text-indigo-100 text-sm">
                Stand out with authentic communication in emails, reports, and presentations.
              </p>
            </div>
            <div className="bg-indigo-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Job Seekers</h3>
              <p className="text-indigo-100 text-sm">
                Ensure your resume and cover letters sound genuinely you, not AI-generated.
              </p>
            </div>
            <div className="bg-indigo-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Students</h3>
              <p className="text-indigo-100 text-sm">
                Learn to write with your own voice and avoid academic integrity issues.
              </p>
            </div>
            <div className="bg-indigo-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Writers</h3>
              <p className="text-indigo-100 text-sm">
                Develop a distinctive voice that doesn't sound like every other AI-assisted writer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Writing Tips & Updates
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join professionals learning to communicate more authentically
            </p>
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              className="max-w-md mx-auto"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold whitespace-nowrap"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                No spam. Unsubscribe anytime. Your email is never shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Writing Detector</h3>
              <p className="text-gray-400 text-sm">
                Free educational tool helping professionals write more authentically.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/detector" className="text-gray-400 hover:text-white transition-colors">
                    Try Tool
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400 text-sm">
                Created by Robert Merlo, EdTech veteran with 20+ years of experience selling learning and development solutions to enterprise organizations around the globe.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                <a 
                  href="https://www.linkedin.com/in/robertmerlo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Connect on LinkedIn →
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} AI Writing Detector. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
