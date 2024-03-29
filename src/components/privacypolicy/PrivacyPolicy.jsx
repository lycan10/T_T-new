import React,{useEffect} from 'react'

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import "./privacypolicy.css"
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const PrivacyPolicy = () => {
    const location = useLocation();

  useEffect(()=>{
    ReactGA.pageview(location.pathname + location.search);
  },[location])


  return (
    <div className='privacy'>
        <Navbar />
        <div className="privacy-container">
            <div className="privacy-header">
                <h1>PRIVACY POLICY</h1>
                <p>Total trailers ("us", "we", or "our") operates the https://www.totaltrailerparts.com website (hereinafter referred to as the "Service"). This page informs you of our policies regarding the collection, use and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://www.totaltrailerparts.com.com/customer-terms-of-service.aspx</p>
            </div>
            <div className="privacy-content">
                <h3>DEFINITIONS</h3>
                <h5>Service</h5>
                <p>Service is the https://www.totaltrailerparts.com website operated by totaltrailer.</p>
                <h5> Personal Data</h5> 
                <p>Personal Data means data about a living individual who can be identified from that data (or from that and other information either in our possession or likely to come into our possession).</p>
                <h5>Usage Data</h5>
                <p>Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                <h5>Cookies</h5>
                <p>Cookies are small files stored on your device (computer or mobile device).</p>
                <h5>Data Controller</h5>
                <p>Data Controller means the natural or legal person who (either alone, jointly or in common with other persons) determines the purposes for which and the manner in which any personal information is, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p> 
                <h5>Data Processors (or Service Providers)</h5>
                <p>Data Processor (or Service Provider) means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.</p>
                <h5>Data Subject (or User)</h5>
                <p>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</p>
                            
            </div>
            <div className="privacy-content">
             <h3>INFORMATION COLLECTION AND USE</h3> 
             <p>We collect several different types of information for various purposes to provide and improve our Service to you. </p>
            <h3>TYPES OF DATA COLLECTED</h3>
            <h5>Personal Data</h5>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, City, State, Province, ZIP/Postal code</li>
                <li>Vehicle Information</li>
                <li>Cookies and Usage Data</li>
            </ul>
            <p>We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.</p>
            <p>We may continue to send you certain transactional email communications (e.g., emails regarding your account notifications, purchases, shipments, returns, customer support questions and similar information regarding your use of the Service).</p>

            <h5>Usage Data</h5>
            <p>We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <h5>Tracking & Cookies Data</h5>
            <p>We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.</p>
            <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.</p>
            <p>If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time. If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.</p>

            <p>If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.</p>
            <ul>
                <li>For the Chrome web browser, please visit this page from Google: https://support.google.com/accounts/answer/32050</li>
                <li>For the Internet Explorer web browser, please visit this page from Microsoft: http://support.microsoft.com/kb/278835</li>
                <li>For the Firefox web browser, please visit this page from Mozilla: https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</li>
                <li>For the Safari web browser, please visit this page from Apple: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</li>
            </ul>

            <p>For any other web browser, please visit your web browser's official web pages.</p>

            <h3>Examples of Cookies we use:</h3>
            <ul>
                <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                <li>Security Cookies. We use Security Cookies for security purposes.</li>
                <li>Address, City, State, Province, ZIP/Postal code</li>
                <li>Vehicle Information</li>
                <li>Cookies and Usage Data</li>
            </ul>

            <h4>More Information about Cookies</h4>
            <p>You can learn more about Cookies at the following third-party websites: Network Advertising Initiative: http://www.networkadvertising.org</p>

            <h3>USE OF DATA</h3>
            <p>Total trailers uses the collected data for various purposes including but not limited to:</p>
            <ul>
                <li>To provide and maintain our Service.</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so.</li>
                <li>To provide customer support.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
                <li>To monitor the usage of our Service.</li>
                <li>To detect, prevent and address technical issues.</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or inquired about unless you have opted not to receive such information.</li>
            </ul>

            <h3>RETENTION OF DATA</h3>
            <p>Total trailers will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes and enforce our legal agreements and policies.</p>
            <p>Total trailers will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.</p>

            <h3>TRANSFER OF DATA</h3>
            <p>Your information, including Personal Data, may be transferred to - and maintained on - computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
            <p>If you are located outside United States and choose to provide information to us, please note that we may transfer the data, including Personal Data, to United States and process it there.</p>
            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
            <p>Total trailers will take steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

            <h3>DISCLOSURE OF DATA</h3>
            <h5>BUSINESS TRANSACTION</h5>
            <p>If Total trailers is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice by updating this policy before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
            <h5>DISCLOSURE FOR LAW ENFORCEMENT</h5>
            <p>Under certain circumstances, Total trailers may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            <h5>LEGAL REQUIREMENTS</h5>
            <p>Total trailers may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul>
                <li>Comply with a legal obligation.</li>
                <li>Protect and defend the rights or property of Total trailer.</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
                <li>Protect the personal safety of users of the Service or the public.</li>
                <li>Protect against legal liability.</li>
            </ul>

            <h3>SECURITY OF DATA</h3>
            <p>Total trailer recognizes the importance of safeguards for maintaining the confidentiality of your Personal Information. Accordingly, we employ reasonable measures intended to protect your information from unauthorized access, disclosure and use. The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            <h3>OUR POLICY ON "DO NOT TRACK" SIGNALS UNDER THE CALIFORNIA ONLINE PROTECTION ACT (CALOPPA)</h3>
            <p>We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>
            <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>

            <h3>SERVICE PROVIDERS</h3>
            <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used with businesses we believe to be trustworthy. For example, we may contract with Service Providers to provide certain services, such as payment processing, fraud prevention, order fulfillment, shipping, hosting and maintenance, data storage and management, and marketing and promotions.</p>
            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

            <h3>ANALYTICS</h3>
            <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
            <h5>Google Analytics</h5>
            <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
            <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>
            <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en</p>

            <h3>BEHAVIORAL REMARKETING</h3>
            <p>Total trailer uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimize and serve ads based on your past visits to our Service.</p>

            <h5>Google Ads (AdWords)</h5>
            <p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>
            <p>You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page: http://www.google.com/settings/ads</p>
            <p>Google also recommends installing the Google Analytics Opt-out Browser Add-on - https://tools.google.com/dlpage/gaoptout - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>
            <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en</p>

            <h5>Bing Ads Remarketing</h5>
            <p>Bing Ads remarketing service is provided by Microsoft Inc.</p>
            <p>You can opt-out of Bing Ads interest-based ads by following their instructions: https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</p>
            <p>You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy Policy page: https://privacy.microsoft.com/en-us/PrivacyStatement</p>

            <h5>Facebook</h5>
            <p>Facebook remarketing service is provided by Facebook Inc.</p>
            <p>You can learn more about interest-based advertising from Facebook by visiting this page: https://www.facebook.com/help/164968693837950</p>
            <p>To opt-out from Facebook's interest-based ads, follow these instructions from Facebook: https://www.facebook.com/help/568137493302217</p>
            <p>Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA http://www.aboutads.info/choices/, the Digital Advertising Alliance of Canada in Canada http://youradchoices.ca/ or the European Interactive Digital Advertising Alliance in Europe http://www.youronlinechoices.eu/, or opt-out using your mobile device settings.</p>
            <p>For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: https://www.facebook.com/privacy/explanation</p>

            <h5>Pinterest</h5>
            <p>Pinterest remarketing service is provided by Pinterest Inc.</p>
            <p>You can opt-out from Pinterest's interest-based ads by enabling the "Do Not Track" functionality of your web browser or by following Pinterest instructions: http://help.pinterest.com/en/articles/personalization-and-data</p>
            <p>You can learn more about the privacy practices and policies of Pinterest by visiting their Privacy Policy page: https://about.pinterest.com/en/privacy-policy</p>

            <h3>PAYMENTS</h3>
            <p>We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).</p>
            <p>We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.</p>
            <h3>CCPA PRIVACY</h3>
            <h5>YOUR RIGHTS UNDER THE CCPA</h5>
            <p>Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:</p>
            <h5>The right to notice.</h5>
            <p> You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</p>
            <h5>The right to access / the right to request. </h5>
            <p>The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party's direct marketing purposes.</p>
            <h5>The right to say no to the sale of Personal Data (we do not sell Your personal data).</h5>
            <h5>The right to know about Your Personal Data.</h5>
            <p> You have the right to request and obtain from the Company information regarding the disclosure of the following:</p>

            <ul>
                <li>The categories of Personal Data collected.</li>
                <li>The sources from which the Personal Data was collected.</li>
                <li>The business or commercial purpose for collecting or selling the Personal Data.</li>
                <li>Categories of third parties with whom We share Personal Data.</li>
                <li>The specific pieces of Personal Data we collected about You.</li>

            </ul>

            <h3>The right to delete Personal Data.</h3>
            <p> You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</p>
            <h3>The right not to be discriminated against.</h3>
            <p> You have the right not to be discriminated against for exercising any of Your Consumer's rights, including by:</p>
            <ul>
                <li>Denying goods or services to You.</li>
                <li>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties.</li>
                <li>Providing a different level or quality of goods or services to You.</li>
                <li>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
            </ul>

            <h3>EXERCISING YOUR CCPA DATA PROTECTION RIGHTS</h3>
            <p>In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email us at totaltrailerparts@outlook.com or call us at +1(248) 853-0033.</p>
            <p>The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.</p>

            <h3>DO NOT SELL MY PERSONAL INFORMATION</h3>
            <p>We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that "sells" personal information as defined by the CCPA law.</p>
            <p>If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.</p>
            <p>Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.</p>
            <h3>LINKS TO OTHER SITES</h3>
            <p>Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

            <h3>CHILDREN'S PRIVACY</h3>
            <p>Our Service does not address anyone under the age of 18 ("Children").</p>
            <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

            <h3>NOTICE OF INTELLECTUAL PROPERTY RIGHTS & WEBSITE USAGE TERMS</h3>
            <p>Thank you for accessing the totaltrailerparts.com Website. The totaltrailerparts.com Website is owned by Total trailers. In using the totaltrailerpats.com Website please take heed of and abide the following notifications and terms.</p>

            <ul>
                <li>The totaltrailerparts.com Website and its content, features and functionality are owned or licensed by Total trailers Corporation.</li>
                <li>In particular, all rights, title and interest to the information, software, text, displays, logos, marks, images, video, audio, design, selections and arrangement thereof appearing on the totaltrailerparts.com Website are owned by Total trailers Corporation or Totaltrailer has secured appropriate licenses to use those items.</li>
                <li>The totaltrailerparts.com Website along with the information, software, text, displays, logos, marks, images, video, audio, design, selections and arrangement thereof appearing on the totaltrailerparts.com Website are protected by copyright, trademark and other intellectual property laws.</li>
                <li>As a user of the Total trailers Website you may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on the Total trailers Website, except as follows:
                    <ul>
                        <li>Your computer may temporarily store copies of such materials appearing or contained in the Total trailers Website in RAM as part of your accessing and viewing those materials.</li>
                        <li>Your computer may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
                        <li>You may print or download one copy of a reasonable number of pages of the Website - but only for your personal and non-commercial use. You may not further reproduce copies from the one copy you have printed or downloaded.</li>
                        <li>You must not publish or distribute, whether in print or electronic form, copies of any material on the totaltrailerparts.com Website.</li>
                        <li>You must not modify copies of any materials from this site, use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.</li>
                        <li>You must not delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.</li>
                        <li>You must not access or use for any commercial purposes (other than to purchase products from Total trailers ) any part of the Website.</li>
                    </ul>
                    
                </li>
                <li>Special notice regarding images and videos on the totaltrailerparts.com Website. Total trailers goes to great lengths to give the customers using the totaltrailerparts.com Website as close as possible an in-person retail experience. To provide that experience to its customers, Total trailers expends time and effort to produce top quality images and videos regarding products available for purchase on the totaltrailerparts.com Website. These images and videos are proprietary to Total trailers and Total trailers claims all copyright, title and interest to those images and videos. UNDER NO CIRCUMSTANCES MAY ANY PERSON OR BUSINESS USE THE IMAGES OR VIDEOS ON THE totaltrailerparts.com WEBSITE TO SELL, RESELL, RENT, LEASE OR OFFER TO SELL, RESELL, RENT OR LEASE ANY PRODUCTS OR SERVICES.</li>
                <li>All trademarks, service marks or tradenames appearing on the totaltrailerparts.com Website, including, but not limited to all names, brands, logos, product and service names, designs and slogans, not belonging to the manufacturers or suppliers of the products featured on the totaltrailerparts.com Website belong to Total trailers and may not be used without the express written permission of Totaltrailer. All other names, logos, products and service names, designs and slogans appearing on the Total trailers Website and relating to products featured on the Total trailers Website are the trademarks of others.</li>
            
            </ul>

            <h3>CHANGES TO THIS PRIVACY POLICY</h3>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h3>CONTACT US</h3>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
                <li>By email: totaltrailerparts@outlook.com</li>
                <li>By mail: Privacy Policy, totaltrailers 1747 E Auburn Rd Rochester Hills, MI</li>
            </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PrivacyPolicy