import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Link2Latam</h3>
            <p className="text-gray-300">
              {t('footer.about')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">{t('nav.about')}</a></li>
              <li><a href="#expertise" className="text-gray-300 hover:text-white">{t('nav.expertise')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">{t('services.invoiceFactoring.title')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">{t('services.directLending.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">info@link2latam.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">(+34) 617816607</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-gray-300">Madrid, Spain</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p className="flex items-center justify-center gap-4 flex-wrap">
            <span>{t('footer.copyright')}</span>
            <Dialog>
              <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
                {t('footer.cookies')}
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{t('footer.cookies')}</DialogTitle>
                </DialogHeader>
                <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
                  <h2 className="text-xl font-semibold">What Are Cookies?</h2>
                  <p className="text-gray-600">
                    Cookies are small text files that are stored on your device (computer, smartphone, or other electronic device) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
                  </p>

                  <h2 className="text-xl font-semibold">Types of Cookies We Use</h2>
                  
                  <div>
                    <h3 className="text-lg font-medium">Essential Cookies</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>These cookies are necessary for the basic functioning of our website</li>
                      <li>They enable core features such as security, network management, and accessibility</li>
                      <li>You cannot opt out of these cookies as they are essential for the site to work correctly</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Web Browsers</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Chrome: Settings {'->'} Privacy and Security {'->'} Cookies and other site data</li>
                      <li>Firefox: Options {'->'} Privacy & Security {'->'} Cookies and Site Data</li>
                      <li>Safari: Preferences {'->'} Privacy {'->'} Cookies and website data</li>
                      <li>Microsoft Edge: Settings {'->'} Cookies and site permissions {'->'} Cookies and site data</li>
                    </ul>
                  </div>

                  <h2 className="text-xl font-semibold">Third-Party Cookies</h2>
                  <p className="text-gray-600">We may use third-party services that also place cookies on your device, including:</p>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Google Analytics</li>
                    <li>Advertising networks</li>
                    <li>Social media platforms</li>
                  </ul>

                  <h2 className="text-xl font-semibold">Updates to This Policy</h2>
                  <p className="text-gray-600">
                    We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                  </p>

                  <h2 className="text-xl font-semibold">Contact Us</h2>
                  <p className="text-gray-600">
                    If you have any questions about our Cookie Policy, please contact us at:<br />
                    Email: info@link2latam.com
                  </p>

                  <p className="text-sm text-gray-500 mt-4">
                    Last Updated: December 2024
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
                {t('footer.legal')}
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{t('footer.legal')}</DialogTitle>
                </DialogHeader>
                <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
                  <h2 className="text-xl font-semibold">Terms of Use</h2>
                  <p className="text-gray-600">
                    By accessing and using this website (the "Site"), you agree to the following terms and conditions:
                  </p>

                  <div className="space-y-4">
                    <section>
                      <h3 className="text-lg font-semibold">1. Acceptance of Terms</h3>
                      <p className="text-gray-600">1.1 The content of this Site is for your general information and use only. It is subject to change without notice.</p>
                      <p className="text-gray-600">1.2 By using this Site, you accept these terms in full. If you disagree with these terms, you must not use this Site.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold">2. Accuracy of Information</h3>
                      <p className="text-gray-600">2.1 While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Site.</p>
                      <p className="text-gray-600">2.2 Any reliance you place on such information is strictly at your own risk.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold">3. Limitation of Liability</h3>
                      <p className="text-gray-600">3.1 In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Site.</p>
                      <p className="text-gray-600">3.2 Every effort is made to keep the Site up and running smoothly. However, we take no responsibility and shall not be liable for the Site being temporarily unavailable due to technical issues beyond our control.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold">Contact Information</h3>
                      <p className="text-gray-600">
                        For any questions or concerns regarding this Legal Disclaimer, please contact:<br />
                        Email: info@link2latam.com
                      </p>
                      <p className="text-sm text-gray-500 mt-4">
                        Last Updated: December 2024
                      </p>
                    </section>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="text-gray-300 hover:text-white underline cursor-pointer">
                {t('footer.dataProtection')}
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{t('footer.dataProtection')}</DialogTitle>
                </DialogHeader>
                <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto">
                  <h2 className="text-xl font-semibold">Introduction</h2>
                  <p className="text-gray-600">
                    Link2Latam is committed to protecting your personal data and respecting your privacy. This Data Protection Statement explains how we collect, use, store, and protect your personal information in compliance with data protection laws, including the General Data Protection Regulation (GDPR) and other applicable privacy regulations.
                  </p>

                  <section>
                    <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Personal Identification Information</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Physical address</li>
                        <li>Date of birth</li>
                      </ul>

                      <h3 className="text-lg font-medium">Technical Information</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Website usage data</li>
                        <li>Cookies and tracking technologies</li>
                      </ul>

                      <h3 className="text-lg font-medium">Communication Data</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Correspondence with our company</li>
                        <li>Customer support interactions</li>
                        <li>Feedback and survey responses</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">2. How We Collect Your Data</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Website interactions</li>
                      <li>Online forms</li>
                      <li>Customer service communications</li>
                      <li>Account registrations</li>
                      <li>Newsletter sign-ups</li>
                      <li>Voluntary submissions</li>
                      <li>Automated technologies like cookies</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">3. Purposes of Data Processing</h2>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Service Provision</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Delivering requested services</li>
                        <li>Processing transactions</li>
                        <li>Managing customer accounts</li>
                      </ul>

                      <h3 className="text-lg font-medium">Communication</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Sending important notifications</li>
                        <li>Providing customer support</li>
                        <li>Marketing communications (with consent)</li>
                      </ul>

                      <h3 className="text-lg font-medium">Improvement and Analytics</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Website and service enhancement</li>
                        <li>Understanding user preferences</li>
                        <li>Conducting research and analytics</li>
                      </ul>

                      <h3 className="text-lg font-medium">Legal Compliance</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Fulfilling legal obligations</li>
                        <li>Protecting against fraud</li>
                        <li>Responding to legal requests</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">4. Legal Basis for Processing</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Explicit consent</li>
                      <li>Contractual necessity</li>
                      <li>Legal obligations</li>
                      <li>Legitimate business interests</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">5. Data Sharing and Disclosure</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Service providers and vendors</li>
                      <li>Legal and regulatory authorities</li>
                      <li>Business partners (with your consent)</li>
                      <li>Third-party service integrations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">6. Data Security</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Encryption technologies</li>
                      <li>Access controls</li>
                      <li>Regular security audits</li>
                      <li>Secure data storage systems</li>
                      <li>Compliance with industry standards</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">7. Your Data Rights</h2>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Right to access your personal data</li>
                      <li>Right to rectification</li>
                      <li>Right to erasure</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                      <li>Right to withdraw consent</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">8. Data Retention</h2>
                    <p className="text-gray-600">We retain personal data only for as long as necessary:</p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>To fulfill the purposes outlined in this statement</li>
                      <li>To comply with legal requirements</li>
                      <li>While maintaining an active customer relationship</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">9. International Data Transfers</h2>
                    <p className="text-gray-600">We may transfer data internationally, ensuring:</p>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Compliance with data protection laws</li>
                      <li>Appropriate safeguards are in place</li>
                      <li>Protection of your personal information</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">10. Cookies and Tracking</h2>
                    <p className="text-gray-600">
                      Please refer to our separate Cookie Policy for detailed information about our use of cookies and tracking technologies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">11. Children's Privacy</h2>
                    <p className="text-gray-600">
                      We do not knowingly collect data from children under 13. If we become aware of such collection, we will take steps to delete that information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">12. Contact Information</h2>
                    <p className="text-gray-600">
                      For any privacy-related questions or requests:<br />
                      Data Protection Contact<br />
                      Email: info@link2latam.com
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold">13. Changes to This Statement</h2>
                    <p className="text-gray-600">
                      We may update this statement periodically.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Last Updated: December 2024
                    </p>
                  </section>
                </div>
              </DialogContent>
            </Dialog>
          </p>
        </div>
      </div>
    </footer>
  );
};
