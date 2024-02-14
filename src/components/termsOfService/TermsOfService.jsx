import React,{useEffect} from 'react'

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const TermsOfService = () => {
    const location = useLocation();

  useEffect(()=>{
    ReactGA.pageview(location.pathname + location.search);
  },[location])


  return (
    <div className='privacy'>
        <Navbar />
        <div className="privacy-container">
            <div className="privacy-header">
                <h1>TERMS OF SERVICE</h1>
                <p>These Terms of Service (the "Terms") govern your use of all web sites or mobile web sites owned or operated by Total Trailer, including the web site currently located at www.totaltrailerparts.com (the "Site"), any applications (e.g., iPhone applications, iPad applications, Android applications, etc.) offered by www.totaltrailerparts.com , and any other applications, interactive features, widgets and resources offered by www.totaltrailerparts.com  through traditional Internet websites, mobile devices or other platforms (all of which are collectively referred to as the "Services"). By using the Site or Services, you agree to these Terms of Use.</p>
            </div>
            <div className="privacy-content">
                <h3>ELIGIBILITY</h3> 
                <p>You must be at least 18 years old to use the Site or the Services.</p>     
                <h3>ADDITIONAL TERMS</h3>
                <p>Your use of certain Services, including purchases you make on the Site, may be subject to additional terms and conditions ("Additional Terms"). Where Additional Terms apply to a Service, we will make them available for you to read through your use of that Service. By using the Services, you agree to the Additional Terms.</p>
                <h3>PASSWORD AND ACCOUNT SECURITY</h3>
                <p>You may create your own account on the Site by completing the online registration process on the Site. In doing so, you must provide us with accurate and complete registration information, and update it if this information changes. Following registration, we will create an account for you and assign you, or allow you to select, a password. You must keep your password confidential. You will be responsible for all use of your password, including, without limitation, any use by any unauthorized third party. You must notify us immediately if you believe your password may be used by any unauthorized person or entity. For security purposes, we recommend you change your password often. Under no circumstance should you respond to a request for your password. Our employees will never ask for your password. You must notify us immediately if you receive such a request. We reserve the right to suspend or terminate your use of the Site if we believe that your password is being used without permission or otherwise in a manner that may disrupt the Site.</p>
                <h3>USE OF THE SITE AND SERVICES</h3>
                <p>You are responsible for your use of the Site and Services, and for any use of the Site or Services made using your account. At totaltrailerparts.com, our goal is to create a positive and safe community experience. To promote this goal, we prohibit certain kinds of conduct that may be harmful to other users or to www.totaltrailerparts.com . When you use the Site or Services, you may not:  </p>
                <ul>
                  <li>violate any law or regulation;</li>
                  <li>violate or infringe other people's intellectual property, privacy, publicity, or other legal rights;</li>
                  <li>transmit anything that is illegal, abusive, harassing, harmful to reputation, pornographic, indecent, profane, obscene, hateful, racist, or otherwise objectionable;</li>
                  <li>send unsolicited or unauthorized advertising or commercial communications, such as spam;</li>
                  <li>transmit any malicious or unsolicited software;</li>
                  <li>stalk, harass, or harm another individual;</li>
                  <li>impersonate or misrepresent your affiliation with someone else;</li>
                  <li>use any means to "scrape," "crawl," or "spider" any Web pages contained in the Site (although www.totaltrailerparts.com may allow operators of public search engines to use spiders to index materials from the Site for the sole purpose of creating publicly available searchable indices of the materials, but not caches or archives of such materials, and www.totaltrailerparts.com  reserves the right to revoke these exceptions either generally or in specific cases);</li>
                  <li>use automated methods to use the Site or Services in a manner that sends more requests to the www.totaltrailerparts.com servers in a given period of time than a human can reasonably produce in the same period by using a conventional Web browser; or</li>
                  <li>interfere with or disrupt the Site or Services.</li>
                </ul>
                <h3>USER CONTENT</h3>
                <p>You own all content and information you post or share using the Site or Services (referred to as "User Content"), such as posting or sharing product reviews, recommendations or comments, photos, and profile information. You give www.totaltrailerparts.com  permission to use your User Content as follows: you grant to www.totaltrailerparts.com  and its affiliates a license to use, copy, display and perform your User Content in connection with the Site and Services. We may display advertisements in connection with your User Content or on pages where your User Content may be viewed by you or others and we may use your User Content to advertise and promote www.totaltrailerparts.com, the Site or the Services. Our license to your User Content is non-exclusive, meaning you may use the User Content for your own purposes or let others use your User Content for their purposes. Our license to your User Content is fully-paid and royalty free, meaning we do not owe you anything else in connection with our use of your User Content. We may exercise our rights anywhere in the world. Finally, our license is perpetual, meaning that our license lasts for an indefinite period of time. You promise that:</p>
                <ul>
                  <li>you own all rights to your User Content or, alternatively, that you have the right to give www.totaltrailerparts.com the rights described above;</li>
                  <li>you have paid and will pay in full any fees or other payments that may be related to the use of your User Content; and</li>
                  <li>your User Content does not infringe the intellectual property rights, privacy rights, publicity rights, or other legal rights of any third party.</li>
                </ul>
                <p>We may refuse to accept or transmit User Content. We may remove User Content from the Site or Services for any reason. In addition, when you post a review or any other comment regarding a product, you agree to disclose all material connections you may have with the manufacturer of such product or a competing manufacturer. A "material connection" is one that could influence the weight or credibility another person would give to the communications or messages made by you.</p>
                <h3>PRODUCT REVIEWS</h3>
                <p>We make no claims or promises about the quality, accuracy, or reliability of any recommendations, reviews, comments or other content available on or through the Site or Services. www.totaltrailerparts.com  is not liable for any loss or damage that might arise from your reliance on any recommendations or other content available on or through the Site or Services.</p>
                <h3>OWNERSHIP</h3>
                <p>We own or license all the content on the Site and Services, including user generated content, software, text, visual and audio content ("Content"), www.totaltrailerparts.com  trademarks, trade names, logos, and brand elements ("www.totaltrailerparts.com  Marks") and the trademarks, trade names, logos and brand elements of third party goods and services that may be offered on the Site or through the Services ("Third-Party Marks"). The Content, www.totaltrailerparts.com Marks and Third-Party Marks are protected under U.S. and international laws.</p>
                <h3>FEEDBACK</h3>
                <p>We always welcome and appreciate your feedback and suggestions about www.totaltrailerparts.com. You understand that we cannot necessarily respond to or implement feedback or suggestions, but if we do, you understand and agree that we may use them without compensation to you.</p>
                <h3>NOTICE OF INTELLECTUAL PROPERTY RIGHTS & WEBSITE USAGE TERMS</h3>
                <p>Thank you for accessing the www.totaltrailerparts.com Website. The www.totaltrailerparts.com  Website is owned by Total Trailer. In using the www.totaltrailerparts.com  Website please take heed of and abide the following notifications and terms.</p>
                <ul>
                  <li>The www.totaltrailerparts.com Website and its content, features and functionality are owned or licensed by Total Trailer.</li>
                  <li>In particular, all rights, title and interest to the information, software, text, displays, logos, marks, images, video, audio, design, selections and arrangement thereof appearing on the www.totaltrailerparts.com Website are owned by Total Trailer or Total Trailer has secured appropriate licenses to use those items.</li>
                  <li>The www.totaltrailerparts.com Website along with the information, software, text, displays, logos, marks, images, video, audio, design, selections and arrangement thereof appearing on the www.totaltrailerparts.com Website are protected by copyright, trademark and other intellectual property laws.</li>
                  <li>As a user of the Total Trailer Website you may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on the Total Trailer Website, except as follows:
                    <ul>
                      <li>Your computer may temporarily store copies of such materials appearing or contained in the Total Trailer Website in RAM as part of your accessing and viewing those materials.</li>
                      <li>Your computer may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                      <li>You may print or download one copy of a reasonable number of pages of the Website - but only for your personal and non-commercial use. You may not further reproduce copies from the one copy you have printed or downloaded.</li>
                      <li>You must not publish or distribute, whether in print or electronic form, copies of any material on the www.totaltrailerparts.com Website.</li>
                      <li>You must not modify copies of any materials from this site, use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.</li>
                      <li>You must not delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.</li>
                      <li>You must not access or use for any commercial purposes (other than to purchase products from Total Trailer) any part of the Website.</li>
                    </ul>
                  </li>
                  <li>Special notice regarding images and videos on the www.totaltrailerparts.com Website. Total Trailer goes to great lengths to give the customers using the www.totaltrailerparts.com Website as close as possible an in-person retail experience. To provide that experience to its customers, Total Trailer expends time and effort to produce top quality images and videos regarding products available for purchase on the www.totaltrailerparts.com Website. These images and videos are proprietary to Total Trailer and Total Trailer  claims all copyright, title and interest to those images and videos. UNDER NO CIRCUMSTANCES MAY ANY PERSON OR BUSINESS USE THE IMAGES OR VIDEOS ON THE www.totaltrailerparts.com WEBSITE TO SELL, RESELL, RENT, LEASE OR OFFER TO SELL, RESELL, RENT OR LEASE ANY PRODUCTS OR SERVICES.</li>
                  <li>All trademarks, service marks or tradenames appearing on the www.totaltrailerparts.com Website, including, but not limited to all names, brands, logos, product and service names, designs and slogans, not belonging to the manufacturers or suppliers of the products featured on the www.totaltrailerparts.com Website belong to Total Trailer and may not be used without the express written permission of Total Trailer. All other names, logos, products and service names, designs and slogans appearing on the Total Trailer Website and relating to products featured on the Total Trailer Website are the trademarks of others.</li>
                </ul>

                <h3>DIGITAL MILLENNIUM COPYRIGHT ACT</h3>
                <p>www.totaltrailerparts.com respects the intellectual property rights of others. Upon proper notice, www.totaltrailerparts.com will remove User Content or other applicable content that violates copyright law and terminate the accounts of repeat infringers. Pursuant to 17 U.S.C. Â§ 512, www.totaltrailerparts.com has implemented procedures for receiving written notification of claimed copyright infringement and for processing such claims in accordance with such law. If you believe your work has been copied in a way that constitutes copyright infringement, please send www.totaltrailerparts.com's copyright agent (listed below) a notification of claimed infringement with all of the following information:</p>
                <ul>
                  <li>identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works are covered by a single notification, a representative list of such works;</li>
                  <li>identification of the claimed infringing material and information reasonably sufficient to permit www.totaltrailerparts.com to locate the material on the Site;</li>
                  <li>information reasonably sufficient to permit www.totaltrailerparts.com to contact you, such as an address, telephone number, and, if available, an email address;</li>
                  <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
                  <li>a statement by you, made under penalty of perjury, that the above information in your notification is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf; and</li>
                  <li>your physical or electronic signature.</li>
                </ul>
                <p>Please send all of the above enumerated information to the following www.totaltrailerparts.com copyright agent:</p>

                <p>General Counsel</p>
                <p>totaltrailerparts.com</p>
                <p>1747 E Auburn Rd </p>
                <p>Rochester Hills, MI</p>
                <p>US</p>
                <p>Please do not send notices or inquiries unrelated to alleged copyright infringement to www.totaltrailerparts.com's designated agent.</p>

                <h3>PRIVACY</h3>
                <p>www.totaltrailerparts.com respects your privacy. Our Privacy Policy explains how we collect, use, and disclose information about you.</p>
                <h3>LINKS</h3>
                <p>Our Site and Services may contain links to other Web sites. A link to a third party's Web site does not mean that we endorse it or that we are affiliated with it. We are not responsible or liable for any damage or loss related to the use of any third-party Web site. You should always read the terms and conditions and privacy policy of a third-party Web site before using it.</p>
                <h3>CHANGES AND CORRECTIONS TO THE SITE OR SERVICES</h3>
                <p>www.totaltrailerparts.com enhances and updates its Site and Services often. We may change or discontinue the Site or any Services, with or without notice to you. www.totaltrailerparts.com reserves the right to correct any errors, inaccuracies or omissions (including after an order has been submitted) and to change or update information at any time without prior notice. Such errors, inaccuracies or omissions may relate to pricing or availability, and we reserve the right to cancel or refuse to accept any order placed based on incorrect pricing or availability.</p>
                <h3>TERMINATION</h3>
                <p>We reserve the right not to provide the Site or Services to any user. We also reserve the right to terminate any user's right to access the Site or Services at any time, in our discretion. If you violate any of these Terms, your permission to use the Site and Services automatically terminates.</p>
                <h3>DISCLAIMER AND LIMITATIONS ON OUR LIABILITY</h3>
                <p>You use the site and services at your own risk. The site and services and all products are provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, www.totaltrailerparts.com and its officers, employees, managers, members, parents, subsidiaries, corporate affiliates, agents, and licensors (referred to collectively as "affiliates") disclaim all warranties of any kind, express or implied, with respect to the site and services (including the implied warranties of merchantability, fitness for a particular use or purpose and non-infringement). In particular, www.totaltrailerparts.com and its affiliates make no representations or warranties about the accuracy or completeness of content available on or through the site or services (including, without limitation, any reviews, recommendations, comments or other content available on or through the site or services) or the content of any web sites or resources linked to the site or services. www.totaltrailerparts.com and its affiliates will have no liability for any: (a) errors, mistakes, or inaccuracies of content; (b) personal injury or property damage resulting from your access to or use of the site or services; (c) any unauthorized access to or use of our servers or of any personal or financial information; (d) any interruption of transmission to or from the site or services; (e) any bugs, viruses, Trojan horses, or the like which may be transmitted on or through the site or services by any third party; or (f) any loss or damage of any kind incurred as a result of the use of any content posted, e-mailed, transmitted, or otherwise made available on or through the site or services. Except as expressly provided in these terms or in any applicable additional terms, www.totaltrailerparts.com and its affiliates do not warrant, endorse, guarantee, or assume responsibility for any third party product or service recommended, advertised or offered for sale on or through the www.totaltrailerparts.com site or services or any linked web site. To the fullest extent permitted by applicable law, neither www.totaltrailerparts.com nor its affiliates will be liable under any theory of liability for any indirect, incidental, special, consequential or exemplary damages, including, damages for loss of revenues, profits, goodwill, use, data, or other intangible losses (even if such parties were advised of, knew of or should have known of the possibility of such damages), arising from or relating to use of the site or services. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations and disclaimers may not apply to you. To the extent www.totaltrailerparts.com may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of www.totaltrailerparts.com's liability will be the minimum permitted under such law.</p>
                <h3>INDEMNIFICATION</h3>
                <p>You agree to indemnify, defend, and hold harmless www.totaltrailerparts.com  and its Affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, fees of any kind (including reasonable attorneys' fees and legal costs), arising from or relating to: (a) any information (including your User Content, feedback, or any other content) that you or anyone using your account submit, post, or transmit through the Site or Services; (b) the use of the Site or Services by you or anyone using your account; (c) the violation of these Terms by you or anyone using your account; or (d) the violation of any rights of any third party, including intellectual property, privacy, publicity, or other proprietary rights by you or anyone using your account. www.totaltrailerparts.com reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you. If we do assume the defense of such a matter, you will reasonably cooperate with www.totaltrailerparts.com in such defense.</p>
                <h3>OTHER PROVISIONS</h3>
                <p>Under no circumstances will www.totaltrailerparts.com  be held liable for any delay or failure in performance due in whole or in part to any acts of nature or other causes beyond its reasonable control. These Terms will be governed by and construed in accordance with the laws of the State of Missouri, without giving effect to any conflict of laws rules or provisions. Any controversy, claim, or dispute arising out of or related to these Terms (or the interpretation, performance, or breach of them), the Site or the Services, including but not limited to alleged violations of state or federal statutory or common law rights or duties (a "Dispute") shall be solely and exclusively resolved according to the procedures set forth in this paragraph. If we are unable to resolve any Dispute through informal means, either party may initiate binding arbitration of such Dispute. The arbitration shall be initiated and conducted according to the JAMS/Endispute Comprehensive Arbitration Rules and Procedures in effect as of the date hereof, including the Optional Appeal Procedure provided for in such rules (the "Arbitration Rules"). The arbitration shall be conducted in St. Charles County before a single neutral arbitrator appointed in accordance with the Arbitration Rules. The arbitrator's decision shall be controlled by these Terms and any of the other agreements, including any applicable Additional Terms. No Disputes may be arbitrated on a class or representative basis; arbitration can decide only the individual Dispute and the arbitrator may not consolidate or join the claims of other persons or parties who may be similarly situated. By entering into these terms, you hereby irrevocably waive any right you may have to join claims with those of others in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connected with these terms must be asserted individually. The arbitrator shall not have the power to award punitive damages against any party. If any provision of these Terms is found to be unlawful, void, or unenforceable, then that provision will be deemed severable from these Terms and will not affect the validity or enforceability of any remaining provisions. The failure of www.totaltrailerparts.com to enforce any right or provision of these Terms will not prevent www.totaltrailerparts.com  from enforcing such right or provision in the future. We may assign our rights and obligations under these Terms, including in connection with a merger, acquisition, a sale of assets or by operation of law.</p>
                <h3>CHANGES TO THESE TERMS</h3>
                <p>From time to time, we may change these Terms. If we change these Terms, we will inform you by posting the revised Terms on the Site. By continuing to use our Site or Services, you agree to the revised Terms. If you object to any such changes, your sole recourse shall be to cease using the Site and/or Services.</p>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default TermsOfService