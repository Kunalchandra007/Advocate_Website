import React, { useState, useEffect } from 'react';
import { Scale, Phone, Mail, MapPin, Clock, CheckCircle, Menu, X, User, Briefcase, Award, MessageCircle, Building2, GraduationCap, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import pfp from '../pfp.jpg';
import emailjs from 'emailjs-com';
import adv from '../adv.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    'Criminal Matter',
    'Civil Matter',
    'Family Matter',
    'Property Matter',
    'Labour Matter',
    'Consumer Protection Matter',
    'Banking Matter',
    'Eviction Suit',
    'Bail and Anticipatory Bail',
    'Money Recovery',
    'Cheque Bouncing Cases',
    'Intellectual Property Matter',
    'Succession Suit',
    'Company Matter',
    'School Related Legal Matter',
    'Constitutional Matter'
  ];

  const achievements = [
    { number: '2000+', label: 'Cases Handled' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Success Rate' },
    { number: '1900+', label: 'Happy Clients' }
  ];

  const faqs = [
    {
      question: "Can Advocate Vivek Chandra represent me in court?",
      answer: "Yes, Advocate Vivek Chandra is fully qualified and authorized to represent clients in court. He is equipped with the legal expertise to present your case effectively and advocate on your behalf in legal proceedings."
    },
    {
      question: "What should I bring to my initial consultation with Advocate Vivek Chandra?",
      answer: "It is advisable to bring all relevant documents pertaining to your legal matter, such as contracts, court notices, or official correspondence. Additionally, prepare a written summary of your issue and any questions or concerns you may wish to discuss."
    },
    {
      question: "How do I prepare for my initial consultation?",
      answer: "Prior to your consultation, review the details of your legal issue and gather all supporting documents. Clearly outline your questions, goals, and expectations to ensure a productive and focused discussion."
    },
    {
      question: "What types of legal cases does Advocate Vivek Chandra handle?",
      answer: "Advocate Vivek Chandra provides legal representation and advisory services across a wide range of practice areas, including Criminal Matter, Civil Matter, Family Matter, Property Matter, Labour Matter, Consumer Protection Matter, Banking Matter, Eviction Suit, Bail and Anticipatory Bail, Money Recovery, Cheque Bouncing Cases, Intellectual Property Matter, Succession Suit, Company Matter, School Related Legal Matter, and Constitutional Matter. His diverse legal expertise ensures comprehensive support for clients with varied legal needs."
    },
    {
      question: "Are my communications with Advocate Vivek Chandra confidential?",
      answer: "Yes, all consultations and communications with Advocate Vivek Chandra are strictly confidential and protected under the attorney-client privilege. Your privacy and the security of your case information are assured."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    setSent(false);
    emailjs.send(
      'service_2hfzcof',
      'template_zez5pmd',
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        matter: form.matter,
        message: form.message
      },
      'eBKVOXYi9Hb8q3GEE'
    )
    .then(() => {
      setSent(true);
      setForm({ name: '', email: '', phone: '', matter: '', message: '' });
    })
    .catch((err) => {
      setError('Failed to send. Please try again.');
    })
    .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919891811751"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-[100] bottom-6 right-6 md:bottom-8 md:right-8 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-2xl focus:outline-none"
        aria-label="Chat on WhatsApp"
        style={{ background: 'transparent' }}
      >
        <img
          src="/whatsapplogo.jpg"
          alt="WhatsApp Chat"
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-4 border-white shadow-lg hover:border-green-500"
        />
      </a>
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative font-sans">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              onClick={() => setShowDisclaimer(false)}
              aria-label="Close Disclaimer"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold mb-6 text-center text-white tracking-wide">Disclaimer</h2>
            <p className="text-gray-200 mb-8 text-lg">
              The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to the advocate of your own accord and that there has been no form of solicitation, advertisement or inducement by the advocate or its members. No material/information provided on this website should be construed as legal advice. The contents of this website are the intellectual property of the advocate.
            </p>
            <button
              className="w-full py-3 px-6 bg-white border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-200 text-lg"
              onClick={() => setShowDisclaimer(false)}
            >
              I ACCEPT
            </button>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <img src={pfp} alt="Vivek Chandra" className="h-8 w-8 rounded-full object-cover border-2 border-white ml-2" />
              </div>
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Vivek Chandra Advocate
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Services', 'Offices', 'FAQ', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-black' 
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Offices', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img src={pfp} alt="Vivek Chandra" className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mx-auto" />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Vivek Chandra
              <span className="block text-3xl md:text-4xl text-gray-300 mt-2">Advocate</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Experienced Legal Professional | LLB Graduate | Comprehensive Legal Solutions<br />
              <span className="text-base md:text-lg text-gray-400 block mt-2">
                Best advocate in Delhi High Court | Top criminal lawyer Delhi | Civil litigation lawyer Delhi | Advocate Vivek Chandra contact | Legal consultation Delhi advocate
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white"
              >
                Get Legal Consultation
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Vivek Chandra</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated legal professional committed to delivering exceptional legal services with integrity and expertise.<br />
              <span className="text-base text-gray-400 block mt-2">
                Best advocate in Delhi High Court, Top criminal lawyer Delhi, Civil litigation lawyer Delhi, Advocate Vivek Chandra contact, Legal consultation Delhi advocate
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <User className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Background</h3>
                  <p className="text-gray-600">
                    Vivek Chandra is an experienced advocate with an LLB degree, known for his strong legal acumen and commitment to justice. He regularly appears before the Delhi High Court, District Courts of Delhi, and other tribunals across the NCR. With years of professional legal practice, he offers expert counsel and representation in civil, criminal, and family law matters.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Legal Services</h3>
                  <p className="text-gray-600">
                    Specializing in all types of legal cases, from criminal and civil matters to corporate law, 
                    family disputes, and constitutional issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-Focused Approach</h3>
                  <p className="text-gray-600">
                    Committed to understanding each client's unique situation and providing personalized legal 
                    strategies that deliver results.
                  </p>
                </div>
              </div>

              {/* Panels Section */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Practising as a panel advocate</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Union of India</li>
                    <li>Municipal Corporation of Delhi</li>
                    <li>Delhi Development Authority</li>
                    <li>BSNL</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal representation across all areas of law. No matter your legal challenge, 
              we have the expertise to help you achieve the best possible outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group border"
                onClick={() => scrollToSection('contact')}
                role="button"
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') scrollToSection('contact'); }}
                aria-label={`Contact about ${service}`}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-black group-hover:text-gray-700" />
                  <span className="font-semibold text-gray-900 group-hover:text-black">
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Don't See Your Case Type?</h3>
            <p className="text-gray-300 mb-6">
              We handle all types of legal matters. Contact us to discuss your specific legal needs.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Discuss Your Case
            </button>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section id="offices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located offices to serve you better. Visit us for in-person consultations and legal assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Office 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 p-3 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Main Office</h3>
                  <p className="text-gray-600 font-medium">Primary Location</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Address:</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=RZ+B2B+Subhash+Park+Extension+Uttam+Nagar+New+Delhi+110059" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      RZ B2B Subhash Park Extension Uttam Nagar New Delhi 110059
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Phone: </span>
                    <a href="tel:9891811751" className="hover:underline text-blue-600">9891811751</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-1" />
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Office Hours:</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 p-3 rounded-lg mr-4">
                  <Building2 className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Branch Office (Haryana)</h3>
                  <p className="text-gray-600 font-medium">Secondary Location</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Address:</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=property+khesra+No+23+12+72+Km+Stone+NH-2+Delhi-Mathura+Road+Back+Side+HP+petrol+pump+Mitrol+Palwal+Haryana+121002" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                      Property khesra No 23//12 72 Km Stone, NH-2, Delhi-Mathura Road, Back Side HP petrol pump Mitrol, Palwal, Haryana 121002
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div className="text-gray-600">
                    <span className="font-medium text-gray-900">Phone: </span>
                    <a href="tel:9911566654" className="hover:underline text-blue-600">9911566654</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-gray-500 mt-1" />
                  <div className="text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Office Hours:</p>
                    <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Schedule a Visit</h3>
              <p className="text-gray-300 mb-6">
                Prefer to meet in person? Schedule an appointment at either of our offices for personalized legal consultation.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-black mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Advocate Vivek Chandra's legal services and consultation process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Don't hesitate to reach out for a personalized consultation.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your legal matter? Contact Vivek Chandra Advocate today for professional legal consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <div className="text-gray-300">
                    <p>+91 9911566614</p>
                    <p>+91 9891811751</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">vivekchandraalawoffice@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office Address</h3>
                  <p className="text-gray-300">
                    RZ B2B Subhash Park Extension<br />
                    Uttam Nagar, New Delhi 110059<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3" />
                Send a Message
              </h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Legal Matter
                  </label>
                  <select
                    name="matter"
                    value={form.matter}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select case type</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Describe your legal matter..."
                    required
                  ></textarea>
                </div>
                {error && <div className="text-red-400 text-sm">{error}</div>}
                {sent && (
                  <div className="flex items-center text-green-400 text-lg font-semibold mb-2">
                    <CheckCircle className="h-7 w-7 mr-2 text-green-400" />
                    Message sent successfully! We will reach out soon.
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img src={adv} alt="Advocate" className="h-10 w-10 rounded-full object-cover border-2 border-white mr-3" />
              <span className="text-2xl font-bold">Vivek Chandra Advocate</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Legal Services | LLB Graduate | Comprehensive Legal Solutions
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Vivek Chandra Advocate. All rights reserved. | Legal expertise you can trust.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;