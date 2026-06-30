import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Check, 
  Home, 
  FileText, 
  ChevronLeft
} from "lucide-react";

// Dataset for categories and services
export const CATEGORIES_DATA = [
  {
    id: "company-registration",
    name: "Business Startup Setup",
    services: [
      {
        title: "Proprietorship Registration",
        duration: "2 days",
        tag: "POPULAR" as const,
        desc: "The simplest business structure owned and operated by a single person. Perfect for solo freelancers and shops.",
        longDesc: "Dreaming of launching your own business with absolute control, minimal compliance, and low startup costs? A Sole Proprietorship Registration is the perfect launchpad for freelancers, local retailers, consultants, and small business owners looking to establish their market identity quickly.\n\nUnder this framework, there is no legal distinction between the owner (proprietor) and the business entity. The business operates under the personal legal identity of the owner, meaning all profits belong entirely to you—and similarly, all financial liabilities are yours to fulfill. In India, it is not governed by a singular dedicated act; rather, its legal recognition is established through various tax and government registrations like GST, Udyam (MSME), and state-specific licenses.\n\nEligibility Criteria:\n• Nationality: The applicant must be a citizen and legal resident of India.\n• Age Limit: The applicant must be at least 18 years old.\n• Lawful Objective: The intended business activities must be legal and compliant with Indian local and central government regulations.",
        highlights: ["Super fast registration", "Direct owner control", "Minimal corporate compliance"],
        steps: [
          "Strategic Consultation & Name Selection: Choosing a unique name and outlining core business objectives.",
          "Acquiring Core Government Registrations: Applying for Udyam (MSME) and GST registration to give the business legal standing.",
          "Tax & Local Compliance Filing: Obtaining state-specific licenses such as the Shop & Establishment Act registration.",
          "Current Bank Account Opening: Setting up a dedicated commercial current account using government certificates."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed Company Name" },
          { name: "Identity Proof", desc: "Aadhaar, PAN, Passport-size Photograph, Mobile Number, and Email ID" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed & Latest Utility Bill (Electricity/Water)" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement & Latest Utility Bill (Electricity/Water)" }
        ],
        price: "999"
      },
      {
        title: "Partnership Firm Registration",
        duration: "3 days",
        tag: "POPULAR" as const,
        desc: "A business structure owned by two or more individuals. Ideal for small co-owned businesses.",
        longDesc: "Planning to co-found a business venture with a trusted partner while keeping regulatory compliance simple and dynamic? A Partnership Firm Registration is the ideal framework for co-founders, joint consultants, agency owners, and family-run businesses looking to formally pool their skills, capital, and resources under a shared brand identity.\n\nGoverned by the Indian Partnership Act, 1932, a partnership combines the financial strength and expertise of multiple owners. While the firm is legally recognized as an association of individuals rather than a separate corporate legal entity, registering it with the state's Registrar of Firms (RoF) grants it legal enforceability—ensuring that the business can execute contracts, resolve internal disputes smoothly, and establish credibility with banks and vendors.\n\nEligibility Criteria:\n• Minimum & Maximum Partners: There must be at least two (2) partners to form the business. The maximum limit is capped at fifty (50) partners.\n• Age Limit: All participating partners must be at least 18 years old. Minors cannot become core partners but may be admitted strictly to the benefits of an already existing partnership.\n• Competence: Every partner must be of sound mind and legally capable of entering into a binding commercial contract.\n• Lawful Objective: The shared business activities must be entirely legal and compliant with both Indian central and state-specific regulations.",
        image: "/part.webp",
        highlights: ["Easy setup", "Low compliance costs", "Shared responsibility"],
        steps: [
          "Consultation & Brand Protection: Choosing a unique name and outlining core business objectives.",
          "Drafting the Partnership Deed: Creating the partnership deed detailing partners' rights, profit-sharing, and rules.",
          "Filing with the Registrar of Firms (RoF): Submitting deed and forms to the Registrar of Firms to obtain the legal status.",
          "Post-Registration Tax & Bank Setup: Applying for firm's dedicated PAN and TAN, setting up GST and Udyam MSME, and preparing documents for opening a bank current account."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed Company/Firm Name (Must be unique and not violate existing trademarks) & Core Business Activities / Nature of Trade" },
          { name: "Identity Proof (All Partners)", desc: "Self-attested PAN Card (Mandatory), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Email ID" },
          { name: "Address Proof (All Partners)", desc: "Voter ID, Driving License, or Valid Passport" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed / Property Tax Receipt & Latest Utility Bill (Electricity/Water)" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement, Latest Utility Bill, and a No Objection Certificate (NOC) from the property owner" }
        ],
        benefits: [
          {
            title: "Combined Skills & Capital",
            desc: "A partnership allows co-founders to pool their diverse skills, capital, and resources under a shared brand identity."
          },
          {
            title: "Legal Enforceability",
            desc: "Registering the firm with the state's Registrar of Firms (RoF) grants it legal enforceability to execute commercial contracts and protect assets."
          },
          {
            title: "Dispute Resolution",
            desc: "A well-drafted partnership deed helps in resolving internal disputes and outlining partner responsibilities clearly."
          },
          {
            title: "Credibility & Trust",
            desc: "Official registration enhances the business's credibility with banks, vendors, and institutional clients."
          }
        ],
        faqs: [
          {
            q: "What are the different types of Partnership Firms?",
            a: "In India, partnership businesses follow the rules of the Indian Partnership Act of 1932. This law allows for two types of partnership firms: unregistered and registered. An unregistered firm is created through a partnership deed, while registered firms are also officially registered with the state's Registrar of Firms."
          },
          {
            q: "What are the important details mentioned in a partnership deed?",
            a: "A partnership agreement doesn't have a set format in the law. It can be written in any way, and it has information that partners agree on."
          },
          {
            q: "Can I convert a Partnership Firm into a Private Limited Company or LLP?",
            a: "Yes, you can easily convert a partnership firm into a Limited Liability Partnership (LLP) or a Private Limited Company. The steps for this are outlined in the Partnership Act of 1932."
          },
          {
            q: "Do I have to file the annual return of the Partnership Firm?",
            a: "Unlike a corporation or LLP, you don't have to submit annual reports for a partnership firm."
          },
          {
            q: "Is filing ITR returns and tax audit mandatory for Partnership firms?",
            a: "Yes, partnership firms must file Income Tax Returns every year by the specified deadline. It's compulsory. While there's no obligatory annual tax audit for all firms, if a firm's turnover exceeds Rs. 1 crore for business or Rs. 50 lakhs for professional services in a financial year, a tax audit is required for that particular year only."
          },
          {
            q: "Who makes the managerial decisions in the partnership firm?",
            a: "Well, because ownership and management are not separate in a partnership, the partners themselves are the ones in charge of running and overseeing the business."
          }
        ],
        price: "1,999"
      },
      {
        title: "Limited Liability Partnership (LLP)",
        duration: "8 days",
        tag: "RECOMMENDED" as const,
        desc: "Combines the benefits of a partnership with the limited liability features of a company.",
        longDesc: "Looking to form a business structure that offers the operational flexibility of a traditional partnership but shields your personal assets like a Private Limited company? A Limited Liability Partnership (LLP) Registration is the ultimate hybrid model. It is highly favored by professional consultants, service providers, and bootstrapped startups who want low compliance costs without compromising on legal security.\n\nA Limited Liability Partnership (LLP) is a distinct corporate business structure introduced in India under the Limited Liability Partnership Act, 2008. It is recognized as a separate legal entity from its partners, meaning the LLP can own property, take loans, and enter contracts in its own name. The defining benefit of an LLP is that the liability of each partner is strictly limited to their agreed capital contribution. Unlike a standard partnership, no partner can be held liable for the independent acts, negligence, or misconduct of another partner.\n\nEligibility Criteria:\n• Minimum Partners: A minimum of two (2) partners is required. There is no upper limit on the maximum number of partners.\n• Designated Partners: At least two (2) individuals must act as 'Designated Partners' (similar to company directors) to handle statutory filings. At least one of them must be a resident of India.\n• Age Limit: All partners must be at least 18 years old at the time of incorporation.\n• Lawful Objective: The partners must have a shared intent to carry out a lawful business with a profit-making motive.",
        highlights: ["No partner liability for others", "Flexible internal structure", "No minimum capital limit"],
        steps: [
          "Digital Signature (DSC) & Name Approval (FiLLiP): Securing Class 3 Digital Signatures and applying for the unique name on the centralized web system.",
          "Filing the Incorporation Application (FiLLiP Form): Preparing and submitting the integrated FiLLiP Form to process partner details, assign DPINs, and register the primary office address to receive the Certificate of Incorporation.",
          "PAN and TAN Application: Government allocation of permanent PAN and TAN cards simultaneously with the incorporation approval.",
          "Drafting & Filing the LLP Agreement (Form 3): Customizing and filing the critical LLP Agreement defining mutual rights, duties, profit ratios, and capital guidelines with the MCA within 30 days of incorporation."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed LLP Names (1 or 2 unique names for verification) & Detailed description of the business activities/services" },
          { name: "Identity Proof (All Partners)", desc: "Self-attested PAN Card (Mandatory for Indian Citizens), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Email ID" },
          { name: "Address Proof (All Partners)", desc: "Any one (Not older than 2 months): Bank Statement, Electricity Bill, Telephone Bill, or Gas Bill (Name must match PAN perfectly)" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed & Latest Utility Bill (Electricity/Water)" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement, Latest Utility Bill, and a No Objection Certificate (NOC) from the property owner" }
        ],
        benefits: [
          {
            title: "Limited Personal Liability",
            desc: "The personal assets of the partners are protected. Each partner's liability is strictly limited to their agreed capital contribution."
          },
          {
            title: "No Mutual Liability",
            desc: "Partners are not liable for the independent acts, negligence, or misconduct of other partners, preventing shared legal risks."
          },
          {
            title: "Separate Legal Entity",
            desc: "Recognized as a distinct legal entity that can own assets, sign contracts, and sue or be sued in its own name."
          },
          {
            title: "Lower Compliance Burden",
            desc: "Enjoy the benefits of limited liability without the rigid and expensive annual compliance costs of a Private Limited company."
          }
        ],
        price: "4,499"
      },
      {
        title: "Private Limited Company Registration",
        duration: "10 days",
        tag: "RECOMMENDED" as const,
        desc: "The most popular corporate structure in India, offering limited liability and high credibility for startups.",
        longDesc: "Ready to transform your vision into a globally recognized, highly credible corporate structure? A Private Limited Company (Pvt Ltd) Registration is the gold standard for ambitious entrepreneurs, tech startups, and growing enterprises. It is the preferred choice for founders who want to raise external venture capital, limit personal financial risks, and build a lasting brand legacy.\n\nA Private Limited Company is a separate legal entity incorporated under the Companies Act, 2013 (and managed by the Ministry of Corporate Affairs - MCA). Unlike a proprietorship or partnership, a Pvt Ltd company exists independently of its shareholders and directors. It features 'Perpetual Succession,' meaning the company continues to legally exist even if shareholders change, pass away, or exit. The most powerful attribute of this structure is Limited Liability—the personal assets of the directors and shareholders are completely safe and insulated if the business faces financial losses or debts.\n\nEligibility Criteria:\n• Minimum & Maximum Members: The company must have at least two (2) shareholders and a maximum of two hundred (200) members.\n• Director Requirements: A minimum of two (2) directors is required (the shareholders can also be the directors). At least one director must be an Indian resident.\n• No Minimum Capital: There is no minimum paid-up capital requirement to start. You can launch your company with as little as ₹1,000.\n• Lawful Objective: The business activities must be legally permissible and structured within the predefined framework of the Memorandum of Association (MOA).",
        highlights: ["Limited liability protection", "Separate legal entity", "Easy to raise capital"],
        steps: [
          "Name Approval (RUN - Reserve Unique Name): Submission of preferred names to the Ministry of Corporate Affairs (MCA) to ensure uniqueness and eliminate trademark conflicts.",
          "Digital Signature Certificate (DSC) & DIN Allocation: Procuring Class 3 Digital Signature Certificates (DSC) for paperless electronic execution alongside Director Identification Number (DIN) allocation.",
          "Drafting MOA & AOA and Filing SPICe+ Forms: Meticulously drafting the Memorandum of Association (MOA) and Articles of Association (AOA), and submitting the bundled SPICe+ form for government review.",
          "Certificate of Incorporation, PAN, and TAN Issuance: Upon approval, the MCA issues the official Certificate of Incorporation (COI) along with corporate PAN and TAN to facilitate immediate current account setup."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed Company Names (Provide 1 or 2 unique names in order of preference) & Main business objectives / Industry category" },
          { name: "Identity Proof (All Directors/Shareholders)", desc: "Self-attested PAN Card (Mandatory for Indian Nationals), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Email ID" },
          { name: "Address Proof (All Directors/Shareholders)", desc: "Any one (Not older than 2 months): Bank Statement, Electricity Bill, Mobile Bill, or Gas Bill (Name must match exactly with the PAN card)" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed & Latest Utility Bill (Electricity/Water)" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement, Latest Utility Bill (Electricity/Water), and a No Objection Certificate (NOC) from the property owner" }
        ],
        benefits: [
          {
            title: "Insulated Liability",
            desc: "The personal assets of directors and shareholders are completely safe and insulated if the business faces debts or losses."
          },
          {
            title: "Perpetual Succession",
            desc: "The company's legal existence continues independently of changes, exits, or deaths among shareholders or directors."
          },
          {
            title: "VC Investment Ready",
            desc: "The gold standard corporate structure preferred by institutional VCs and angel investors for raising external capital."
          },
          {
            title: "Separate Legal Status",
            desc: "Operates as a distinct legal person, capable of owning properties, taking bank loans, and executing contracts in its own name."
          }
        ],
        price: "5,999"
      },
      {
        title: "Public Limited Company Registration",
        duration: "15 days",
        tag: "STANDARD" as const,
        desc: "A corporate structure for large organizations planning to offer shares to the general public.",
        longDesc: "Are you preparing to execute a massive business expansion, invite large-scale public investments, or chart a clear path toward an Initial Public Offering (IPO)? A Public Limited Company (PLC) Registration is the ultimate corporate structure for high-growth enterprises. It offers unmatched capital-raising power, institutional credibility, and seamless share transferability to position your brand alongside India's industry leaders.\n\nA Public Limited Company is a premium corporate entity registered and regulated strictly under the Companies Act, 2013, via the Ministry of Corporate Affairs (MCA). Unlike private limited structures, a Public Limited Company is legally permitted to offer its shares to the general public, allowing it to pool immense capital from institutional and retail investors alike. It operates as a separate legal entity with independent financial standing. It maintains Perpetual Succession and provides Limited Liability, securing the personal assets of its shareholders against corporate losses.\n\nEligibility Criteria:\n• Minimum Shareholders: There must be a minimum of seven (7) shareholders or subscribers to initiate the company. There is no upper limit.\n• Minimum Directors: The board must consist of at least three (3) directors (maximum of 15, which can be extended via a special resolution).\n• Resident Director: At least one (1) director must be an Indian resident (stayed in India for 182+ days in the previous calendar year).\n• No Capital Barriers: The statutory minimum paid-up capital requirement has been removed by the MCA, enabling dynamic structuring of authorized capital.",
        highlights: ["Unlimited shareholders", "High capital capability", "Easily transferable shares"],
        steps: [
          "Strategic Name Reservation (RUN Portal): Filing name applications through the RUN portal backed by intensive trademark mapping.",
          "Digital Identity Allotment (DSC & DIN): Procuring Class 3 Digital Signature Certificates (DSC) and handling Director Identification Number (DIN) allotment.",
          "Framing the Corporate Constitution (SPICe+): Drafting the foundational MOA and AOA to layout business objectives and strict internal governance systems via SPICe+ setup.",
          "Incorporation and Statutory Activations: Receiving the official Certificate of Incorporation (COI) along with simultaneous issuance of corporate PAN, TAN, and EPFO/ESIC registrations."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed Corporate Names (Must be unique, distinct, and must end with the suffix 'Limited') & Exhaustive description of core business domains" },
          { name: "Identity Proof (All Directors/Shareholders)", desc: "Self-attested PAN Card (Mandatory for Indian Citizens), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Verified Email ID" },
          { name: "Address Proof (All Directors/Shareholders)", desc: "Any one (Not older than 2 months): Bank Account Statement, Electricity Bill, Telephone Bill, or Gas Bill (Name must precisely match PAN)" },
          { name: "Business Address Proof (If Owned)", desc: "Registered Sale Deed / Property Tax Receipt & Latest Utility Bill" },
          { name: "Business Address Proof (If Rented/Leased)", desc: "Notarized Rent Agreement, Latest Utility Bill (Electricity/Water), and a signed No Objection Certificate (NOC) from the property owner" }
        ],
        benefits: [
          {
            title: "Public Capital Access",
            desc: "Legally permitted to offer shares directly to the general public, retail, and institutional investors to raise massive capital."
          },
          {
            title: "Unmatched Market Credibility",
            desc: "Highly regulated corporate status that projects premium corporate trust, stability, and legal compliance to institutional partners."
          },
          {
            title: "Transferable Shares",
            desc: "Allows seamless and easy transferability of shares, enabling shareholders to buy, sell, or exit without affecting operations."
          },
          {
            title: "Insulated Liability Protection",
            desc: "Fully insulates shareholders and directors from corporate liabilities, keeping personal assets secured during business activities."
          }
        ],
        price: "14,999"
      },
      {
        title: "One Person Company (OPC) Registration",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "A corporate structure that allows a single entrepreneur to operate a corporate entity with limited liability.",
        longDesc: "Are you a solo entrepreneur looking to build a powerful corporate brand without the need for cofounders or partners? A One Person Company (OPC) Registration is the perfect legal structure for individual founders, consultants, and e-commerce sellers. It allows you to enjoy all the premium privileges of a Private Limited company while maintaining 100% ownership and absolute decision-making power.\n\nIntroduced under the Companies Act, 2013, a One Person Company (OPC) is a revolutionary business structure that allows a single individual to form a corporate entity. Unlike a traditional sole proprietorship—where the owner and business are legally treated as the same—an OPC is a separate legal entity. This means the company can own assets, sign contracts, and sue or be sued in its own name. Most importantly, it introduces Limited Liability to solo business owners, ensuring that your personal savings, home, and assets are completely protected against business losses and debts.\n\nEligibility Criteria:\n• Single Promoter Only: Only one (1) natural person can act as the sole shareholder/member.\n• Indian Residency: The founder and the chosen nominee must be citizens of India and legal residents.\n• Nominee Requirement: The sole owner must nominate a secondary individual during incorporation who will take charge of the company in the event of the owner’s death or incapacity.\n• One OPC Per Person: An individual is legally restricted to incorporating or being a nominee for only one (1) OPC at any given time.",
        highlights: ["Single owner control", "Limited liability", "Fewer compliance requirements"],
        steps: [
          "Digital Signature Certificate (DSC) Procurement: Securing Class 3 Digital Signature Certificate (DSC) for secure electronic form signing.",
          "Name Reservation & Nominee Consent: Filing the selected business name for institutional approval and drafting Form INC-3 to record the legal consent of the Nominee.",
          "Drafting MOA & AOA and Filing SPICe+ : Structuring the custom constitutional parameters of the business through MOA & AOA filings inside SPICe+.",
          "Issuance of Incorporation Certificate, PAN, and TAN: Issuance of the official Certificate of Incorporation (COI) complete with unique CIN, corporate PAN, and TAN."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed OPC Names (1 or 2 unique name preferences ending with the suffix 'OPC Private Limited') & Main business objectives / Industry category" },
          { name: "Identity Proof (Owner & Nominee)", desc: "Self-attested PAN Card (Mandatory), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Email ID" },
          { name: "Address Proof (Owner & Nominee)", desc: "Any one (Not older than 2 months): Bank Statement, Electricity Bill, Mobile Bill, or Gas Bill (Name must match PAN card exactly)" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed / Property Tax Receipt & Latest Utility Bill" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement, Latest Utility Bill (Electricity/Water), and a signed No Objection Certificate (NOC) from the landlord" }
        ],
        benefits: [
          {
            title: "100% Solo Ownership",
            desc: "Retain absolute decision-making power and complete ownership control without having to share equity or board seats."
          },
          {
            title: "Limited Asset Liability",
            desc: "Protects your personal savings, home, and personal assets against any business debts or corporate losses."
          },
          {
            title: "Separate Legal Identity",
            desc: "The OPC is a corporate entity that holds property, enters contracts, and runs operations distinct from the owner."
          },
          {
            title: "Simplified Compliance Profile",
            desc: "Enjoys company privileges with fewer corporate audit and annual general meeting (AGM) mandates than a private limited company."
          }
        ],
        price: "4,999"
      },
      {
        title: "Indian Subsidiary Registration",
        duration: "15 days",
        tag: "FAST TRACK" as const,
        desc: "A company setup for foreign parent businesses to establish their presence and operations in India.",
        longDesc: "Is your international enterprise ready to tap into one of the world's fastest-growing economies and access a massive pool of world-class talent? Establishing an Indian Subsidiary is the ultimate gateway for foreign corporations looking to operate dynamically in India. By launching a Wholly Owned Subsidiary (WOS) or a Joint Venture (JV), your parent company gains a fully operational, independent legal entity to drive revenue, execute local contracts, and scale without boundaries.\n\nAn Indian Subsidiary is a corporate entity incorporated in India under the Companies Act, 2013, where a foreign parent company controls more than 50% of the share capital or dominates the composition of its Board of Directors. When the foreign parent company holds 100% of the shares, it is recognized as a Wholly Owned Subsidiary (WOS). Operatively, the Indian subsidiary is treated as a separate legal entity and an independent domestic corporate body. This structure strictly insulates the parent organization by providing Limited Liability, meaning the global parent company's assets are completely protected from any operational or financial liabilities incurred by the Indian entity.\n\nEligibility Criteria:\n• Minimum Shareholders: There must be at least two (2) shareholders or corporate subscribers. For a WOS, the parent company holds 99.9% of the shares, while a nominee holds the remaining nominal fraction.\n• Minimum Directors: The company must have at least two (2) directors.\n• Mandatory Resident Director: At least one (1) director must be an Indian resident (having stayed in India for 182 days or more in the previous calendar year) to manage local statutory accountability.\n• Physical Registered Address: The subsidiary must maintain a physical, legitimate commercial office address located within India.\n• FEMA & RBI Compliance: The inflows of foreign capital must completely comply with the pricing and reporting parameters set by the Foreign Exchange Management Act (FEMA).",
        highlights: ["100% foreign FDI allowed", "Separate Indian entity status", "Strategic local market access"],
        steps: [
          "Global Documentation & Legalization: Apostilling/legalization of foreign parent documents in the home country.",
          "Digital Identity Allotment & Name Reservation: Procuring DSCs for directors and submitting preferred corporate names through the MCA portal (SPICe+ Part A).",
          "Integrated Corporate Filing: Filing the integrated integration forms covering core business objectives, MOA, AOA, and local identity verifications (SPICe+ Part B).",
          "Certificate of Incorporation & RBI FEMA Reporting: Receipt of the formal Certificate of Incorporation alongside mandated compliance declarations and filings to the Reserve Bank of India (RBI) under FEMA rules."
        ],
        documents: [
          { name: "From the Foreign Parent Company", desc: "Certificate of Incorporation / Business Charter, Memorandum & Articles of Association (MOA/AOA), and Certified Board Resolution authorizing expansion & nominating a representative" },
          { name: "From Foreign Directors / Signatories", desc: "Color copy of Passport, Overseas Address Proof (Utility Bill/Bank Statement <= 2 months old), Passport-size photographs, Email, and Phone" },
          { name: "From Indian Resident Director", desc: "Self-attested PAN Card (Mandatory), Aadhaar Card, and Bank Statement or Utility Bill reflecting the current residential address" },
          { name: "Indian Registered Office Proof", desc: "If Rented/Leased: Notarized Lease/Rent Agreement, Latest Utility Bill (Electricity/Water), and a signed No Objection Certificate (NOC) from the property owner" }
        ],
        benefits: [
          {
            title: "Parent Company Protection",
            desc: "Limits liability to the local Indian entity, completely shielding the foreign parent company's global assets from local liabilities."
          },
          {
            title: "100% Foreign Ownership (WOS)",
            desc: "Permits Wholly Owned Subsidiaries where the parent corporation retains full equity ownership and operational command."
          },
          {
            title: "Indian Market Expansion",
            desc: "Establish a direct local presence to sign commercial contracts, issue invoices, hire local talent, and capture domestic market share."
          },
          {
            title: "Separate Corporate Status",
            desc: "Recognized as a distinct Indian domestic company, offering robust legal structure and smooth integration with local tax laws."
          }
        ],
        price: "19,999"
      },
      {
        title: "Section 8 (NGO) Company Registration",
        duration: "12 days",
        tag: "STANDARD" as const,
        desc: "A non-profit company established to promote commerce, art, science, sports, education, and charity.",
        longDesc: "Are you looking to launch a non-profit organization, charitable foundation, or social venture with the highest level of corporate governance and institutional trust? A Section 8 Company Registration is the most trusted and globally recognized framework for NGOs in India. It is the premier choice for social entrepreneurs, philanthropists, and corporate CSR wings who want to drive meaningful change while enjoying limited liability protection and access to corporate funding.\n\nA Section 8 Company is a specialized corporate entity registered under Section 8 of the Companies Act, 2013, via the Ministry of Corporate Affairs (MCA). It is incorporated strictly for promoting non-profit objectives such as commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. Unlike a regular commercial firm, all profits, donations, and incomes generated by a Section 8 company must be used exclusively to further its core social mission. No dividends or profits can be paid or distributed to its members or directors.\n\nEligibility Criteria:\n• Minimum Members & Directors: There must be at least two (2) shareholders/members and a minimum of two (2) directors (the same individuals can fulfill both roles).\n• Non-Profit Mandate: The primary objective of the entity must be entirely non-profit, aimed solely at social development or charitable initiatives.\n• No Profit Diversion: The internal charter must explicitly state that no profit, dividend, or financial benefit will be transferred directly or indirectly to its members.\n• Competent Founders: All promoters must be at least 18 years old, mentally sound, and legally qualified to enter into commercial agreements.",
        highlights: ["Exempt from stamp duty", "High credibility/trust", "Eligible for tax exemptions"],
        steps: [
          "Digital Security Setup & Name Approval: Setting up digital certificates (DSC) and reserving the organizational name via the MCA registry.",
          "Applying for the Section 8 Central License: Filing an explicit petition to the central government outlining social goals to obtain a specialized Section 8 License.",
          "Framing the Constitutional Charters (MOA & AOA): Drafting the strict non-profit guidelines and asset lock-in rules within the MOA and AOA charters.",
          "Final SPICe+ Incorporation & Tax Registration: Submitting the final integrated SPICe+ form for corporate incorporation, tax registrations, and PAN/TAN cards."
        ],
        documents: [
          { name: "Business Details", desc: "Proposed NGO Names (Must include words like Foundation, Forum, Association, Council, or Federation) & A detailed 3-year projection of future social activities and estimated income/expenditure" },
          { name: "Identity Proof (All Directors & Members)", desc: "Self-attested PAN Card (Mandatory for Indian Nationals), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Verified Email ID" },
          { name: "Address Proof (All Directors & Members)", desc: "Any one (Not older than 2 months): Bank Statement, Electricity Bill, Mobile Bill, or Gas Bill (Name must match PAN card exactly)" },
          { name: "Business Address Proof (If Owned)", desc: "Sale Deed / Property Tax Receipt & Latest Utility Bill" },
          { name: "Business Address Proof (If Rented)", desc: "Notarized Rent Agreement, Latest Utility Bill (Electricity/Water), and a signed No Objection Certificate (NOC) from the landlord" }
        ],
        benefits: [
          {
            title: "Limited Liability Security",
            desc: "Protects members' personal assets from the organization's debts or financial responsibilities."
          },
          {
            title: "Corporate Trust & Credibility",
            desc: "Highly respected structure governed by the MCA, ensuring absolute trust for corporate CSR funding and government grants."
          },
          {
            title: "Tax Exemptions",
            desc: "Eligible for significant tax benefits under Sections 12A and 80G of the Income Tax Act for the NGO and donors."
          },
          {
            title: "Stamp Duty Exemption",
            desc: "Exempt from paying high stamp duties during incorporation compared to regular commercial companies."
          }
        ],
        price: "8,999"
      },
      {
        title: "Trust Registration",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "Establish a charitable trust to perform social, educational, and philanthropic activities.",
        longDesc: "Whether you are planning to channel your personal wealth toward a specific charitable cause or looking to protect and manage family assets for future generations, a Trust Registration provides a timeless and deeply respected legal framework. It is the preferred choice for family estates, community schools, religious institutions, and traditional philanthropists who want a dedicated structure to fulfill a lasting, defined purpose.\n\nA Trust is a legal arrangement where an individual (known as the Settlor or Author) transfers the ownership of a specific property or asset to a trusted individual or group (known as the Trustee) for the absolute benefit of another individual or group (known as the Beneficiary). Governed broadly by the Indian Trusts Act, 1882 for private trusts, and specific state public trust acts or common law for public trusts, a Trust ensures that assets are strictly managed according to the rules set out in a legal contract called the Trust Deed.\n• Public/Charitable Trust: Created for the benefit of the general public (e.g., setting up schools, hospitals, or religious spaces).\n• Private Trust: Created strictly for the benefit of private individuals, such as managing a family estate or securing a minor child's financial future.\n\nEligibility Criteria:\n• The Settlor: Must be a competent individual who is at least 18 years old, mentally sound, and owns the property being dedicated to the trust.\n• The Trustees: A minimum of two (2) trustees are required. There is no upper limit. They must agree to actively manage the trust property according to the deed.\n• The Beneficiary: There must be a clearly defined beneficiary or target group (e.g., 'underprivileged students' for a public trust, or 'named family members' for a private trust).\n• Trust Property: There must be an identifiable asset or property (even a small nominal cash amount like ₹1,000) dedicated as the initial 'Trust Fund.'\n• Lawful Objective: The core purpose of the trust must be entirely legal and cannot oppose public policy.",
        highlights: ["Simple legal structure", "Long-term social impact", "Tax benefits for donations"],
        steps: [
          "Consultation & Drafting the Trust Deed: Formulating trust guidelines, rules for trustees, and beneficiary privileges inside a custom Trust Deed.",
          "Stamp Duty & Non-Judicial Stamp Paper Setup: Paying the applicable state-specific stamp duty and printing the deed on non-judicial stamp papers.",
          "Formal Filing at the Sub-Registrar Office: The Settlor, Trustees, and Witnesses present themselves at the local Sub-Registrar Office for formal deed execution.",
          "Certificate Issuance & Post-Registration Tax Setup: Issuance of the registered Trust Deed followed by applying for a dedicated permanent PAN and TAN for the trust."
        ],
        documents: [
          { name: "Business/Trust Details", desc: "Proposed Trust Name (Must be unique and not conflict with existing well-known institutions) & Clearly defined objectives of the trust" },
          { name: "Identity Proof (Settlor & Trustees)", desc: "Self-attested PAN Card (Mandatory), Aadhaar Card, Recent Passport-size Photograph, Active Mobile Number & Email ID" },
          { name: "Address Proof (Settlor & Trustees)", desc: "Voter ID, Valid Passport, or Driving License" },
          { name: "Trust Office Address Proof", desc: "If Owned: Sale Deed / Property Tax Receipt & Latest Utility Bill | If Rented: Notarized Rent Agreement, Latest Utility Bill (Electricity/Water), and a signed No Objection Certificate (NOC) from the landlord" },
          { name: "Witnesses", desc: "Identity proofs of two (2) independent witnesses who will sign the deed during registration" }
        ],
        benefits: [
          {
            title: "Perpetual Preservation of Assets",
            desc: "Allows Settlors to dedicate properties or funds to a lasting, specific social or private purpose controlled by rules."
          },
          {
            title: "Private or Public Setup",
            desc: "Extremely flexible model that can be designed either as a Private Trust for families or a Public Trust for charities."
          },
          {
            title: "Tax Exemption Eligibility",
            desc: "Public and charitable trusts can seek registrations like 12A/80G to gain exemptions on donations and incomes."
          },
          {
            title: "Minimal Governance Oversight",
            desc: "Governed largely by the Trust Deed, allowing high operational autonomy for the trustees."
          }
        ],
        price: "6,999"
      }
    ]
  },
  {
    id: "licensing",
    name: "Licensing & Registration Services",
    services: [
      {
        title: "Shops & Establishment Registration",
        duration: "3 days",
        tag: "MANDATORY" as const,
        desc: "Mandatory license for commercial shops, offices, and establishments operating within state limits.",
        longDesc: "Are you preparing to open a retail storefront, launch a commercial corporate office, set up a local warehouse, or open a restaurant? Securing a Shops & Establishment Registration (often called a Shop Act License or Gumasta) is your mandatory first step. It officially registers your physical place of business with the state labor department, shielding you from heavy legal compliance penalties and establishing your business as a recognized legal entity.\n\nEvery commercial business entity that operates out of a physical commercial premises—including shops, restaurants, hotels, theaters, corporate offices, warehouses, and service centers—must register under this Act within 30 days of commencing operations. The license regulates working conditions, such as mandatory employee working hours, rest intervals, weekly holidays, overtime wages, safety guidelines, and leave policies, ensuring your business adheres to regional labor laws.\n\nEligibility Criteria:\n• Commercial Premises: The business must operate out of a real, physical commercial property, shop, or designated office space located within state boundaries.\n• Timeline Constraint: The application must ideally be filed with the state labor department within 30 days of starting your commercial activities.\n• Nature of Business: The premises must be classified as a commercial establishment, retail shop, theater, restaurant, or service-oriented office.",
        highlights: ["Municipal premises validation", "Avoid local authority penalties", "Essential for bank account opening"],
        steps: [
          "State-Specific Application Preparation: We analyze your business location and map it to your state's specific labor department portal. We compile your employee data, business hours, and location proof to draft your localized application form carefully.",
          "Documentation Upload & Fee Settlement: We upload your identity proofs, rent agreements, and mandatory storefront photographs onto the state government portal. We then calculate and process the required statutory government fees.",
          "Government Review & Certificate Issuance: The local labor inspector reviews your application online. Once approved, the state labor department issues your official, digital Shops & Establishment Registration Certificate."
        ],
        documents: [
          { name: "Business Details", desc: "Name of the Shop/Establishment, number of active employees/workers, and precise category of business (e.g., Retail, IT Office, Food Joint)" },
          { name: "Identity Proof (Owner / Partners / Directors)", desc: "Self-attested PAN Card, Aadhaar Card, recent passport-size photograph, and active mobile number & email ID" },
          { name: "Premises Address Proof", desc: "If Owned: Sale Deed / Property Tax Receipt / Recent Utility Bill | If Rented: Notarized Rent Agreement & Latest Utility Bill (Electricity/Water)" },
          { name: "Visual Proof", desc: "A high-resolution smartphone photograph of the storefront/office entrance showing the business name clearly on the signboard." }
        ],
        price: "1,499"
      },
      {
        title: "CLRA (Contract Labour) License",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "License under the Contract Labour Act for employers hiring contract labour through agencies.",
        longDesc: "Are you a principal employer looking to hire contract workers, or a contractor deploying manpower to corporate clients? Obtaining a CLRA (Contract Labour Regulation and Abolition) License is a strict statutory requirement under Indian labor laws. It ensures structural compliance, transparent working environments, and fair treatment for contract laborers.\n\nThe CLRA framework governs the employment of contract labor to bring their working standards on par with direct employees. Every establishment or contractor that engages a baseline number of contract workers on any single day must secure this authorization. It monitors compliance linked to legal minimum wages, welfare facilities, and mandatory record maintenance.\n\nEligibility Criteria:\n• Principal Employer Registration: Before a contractor can apply for a license, the principal employer must possess a valid CLRA Registration Certificate.\n• Worker Count Threshold: Applicable to any establishment or contractor engaging twenty (20) or more contract workers on any given day.\n• Valid Work Contract: Contractors must have an authentic work order or agreement issued by the principal employer specifying the nature and duration of the contract assignment.",
        highlights: ["Mandatory for 20+ contract staff", "Ensures legal worker protection", "Protects principal employer's liability"],
        steps: [
          "Procurement of Form III: We assist you in coordinating with the principal employer to secure a legally valid Form III, which acts as the foundation for your contract labor application.",
          "Profile Creation on Shram Suvidha Portal: We configure your establishment profile on the centralized Shram Suvidha or state-specific labor department portal, mapping the appropriate codes.",
          "Application Compilation & Security Deposit: We prepare and submit Form IV online, upload all self-attested documents, and process the dynamic application fees alongside the statutory Security Deposit.",
          "Scrutiny & License Grant: The licensing officer validates the workflow and documentation. Once cleared, the department issues your official digital CLRA License."
        ],
        documents: [
          { name: "Entity Details", desc: "Copy of Principal Employer's CLRA Registration Certificate, valid Form III (Certificate of Authorization issued by Principal Employer), and a true copy of the active Work Order / Service Agreement" },
          { name: "Identity & Address Proof", desc: "Self-attested PAN Card and Aadhaar Card, passport-size photographs, active mobile number, corporate email ID, and business registration proof (COI, Partnership Deed, or GST Certificate)" },
          { name: "Labor Welfare Compliance", desc: "Signed declaration promising to provide basic drinking water, washrooms, and creche facilities, and initial details regarding total proposed workers, daily shifts, and wage rates" }
        ],
        price: "4,999"
      },
      {
        title: "Trade License Registration",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "Obtain a local municipal trade license authorizing your business to operate in a specific commercial zone.",
        longDesc: "Are you preparing to launch a retail outlet, a food business, a manufacturing plant, or a commercial establishment that interacts directly with the public or environment? Securing a Trade License Registration is an absolute legal prerequisite. Issued by your local municipal corporation, this vital document grants you the formal authorization to carry out your specific trade safely and legally within municipal limits, ensuring full compliance with health, safety, and environmental standards.\n\nA Trade License is a mandatory certificate or document issued by a local municipal authority that permits an applicant to carry out a specific business or trade at a particular commercial premises. Unlike the Shops & Establishment registration—which primarily focuses on employee working conditions and labor rights—a Trade License ensures that your business activities do not cause a public nuisance, health hazard, or environmental threat to the surrounding residential or commercial locality.\n\nEligibility Criteria:\n• Age Limit: The applicant or business owner must be at least 18 years old.\n• Clean Legal Standing: The applicant must have a clean legal record with no history of serious criminal activities or severe environmental violations.\n• Commercial Zone: The physical premises where the business operates must be located within a commercially approved zone or an area permitted by the local urban planning authority.\n• Lawful and Safe Activity: The specific trade or business category must be entirely legal and safe for the surrounding public community.",
        highlights: ["Municipal zone compliance", "Prevents premises sealing/penalties", "Ensures public health standards"],
        steps: [
          "Strategic Categorization & Application Drafting: We review your business location and map your specific trade to the correct municipal ward and category. We then draft your application on the designated portal with accurate operational data.",
          "Document Verification & Fee Processing: We compile and upload your property deeds, identity proofs, and any required fire or health clearances onto the municipal portal. We calculate and pay the required government trade fees.",
          "Inspection Coordination & License Issuance: If required by your local municipal corporation, an inspector will conduct a routine check of your commercial site to verify safety compliance. Once approved, the municipal corporation issues your Trade License."
        ],
        documents: [
          { name: "Business Details", desc: "Exact Nature of Trade (e.g., Restaurant, Retail Store, General Manufacturing) and total built-up area of the commercial space (in sq. ft. or sq. meters)" },
          { name: "Identity Proof (Applicant / Promoters)", desc: "Self-attested PAN Card, Aadhaar Card, recent passport-size photograph, and active mobile number & valid email ID" },
          { name: "Premises Ownership Proof", desc: "If Owned: Registered Sale Deed, Property Tax Receipt, or Latest Municipal Utility Bill | If Rented: Notarized Rent/Lease Agreement and a signed No Objection Certificate (NOC) from the property owner" }
        ],
        price: "4,999"
      },
      {
        title: "BOCW Registration",
        duration: "12 days",
        tag: "STANDARD" as const,
        desc: "Building and Other Construction Workers registration to protect worker safety and welfare.",
        longDesc: "Are you executing an urban infrastructure project, constructing a commercial real estate property, or undertaking massive structural civil engineering works? Securing a BOCW (Building and Other Construction Workers) Registration is a mandatory operational requirement. It ensures proper health, security, and financial welfare frameworks for construction workers.\n\nThe BOCW framework applies strictly to establishments engaging in construction activities like building projects, roadways, structural alterations, demolitions, or plumbing installations. It mandates that employers register their project sites within sixty days of commencement and contribute a statutory construction welfare cess.\n\nEligibility Criteria:\n• Workforce Threshold: Every construction establishment that employs ten (10) or more workers on any single day over the preceding 12-month window must register.\n• Site Operations: The business must be actively executing structural building or other construction activities within regional state boundaries.\n• Exclusion Clause: Individual owners constructing their own private residential homes are exempt, provided the total capital layout remains within state-exempt thresholds.",
        highlights: ["Construction safety compliance", "Protects construction workforce", "Avoid project halts or fines"],
        steps: [
          "Account Mapping & Jurisdictional Drafting: We register your construction business profile on the state labor department portal, verifying the precise geographic jurisdiction and municipal ward.",
          "Form I Drafting & Document Upload: Our experts carefully prepare Form I (Application for Registration of Establishment), filling in detailed allocations of worker headcounts and safety compliance declarations.",
          "Statutory Fee Settlement: We handle the digital calculation and processing of the application fees. Simultaneously, we assist in setting up proper accounts for the evaluation and future remittance of the construction welfare cess.",
          "Site Inspection & Certificate Issuance: Upon submission, a regional labor inspector may conduct an official audit to verify structural safety protocols on-site. Once approved, the department issues your formal digital BOCW Registration Certificate."
        ],
        documents: [
          { name: "Site & Project Details", desc: "Approved building blueprint plan and construction layout drawings, estimated total cost of construction, projected date of project completion, and nature of specific construction works" },
          { name: "Employer/Contractor Profile", desc: "PAN of the business entity, PAN/Aadhaar of the authorized manager, Certificate of Incorporation, Partnership Deed, or dynamic local Trade License, and complete active headcount data of site laborers and supervisors" },
          { name: "Address Proof of Site", desc: "Legal occupancy proof of the project land (Deed, Allotment Letter, or Rent/Lease Agreement), and the latest local utility bill (Electricity/Water) matching the construction zone premises" }
        ],
        price: "7,999"
      },
      {
        title: "FSSAI (Food License) Registration",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Mandatory food safety license for food manufacturers, distributors, retailers, and restaurants.",
        longDesc: "Are you setting up a cloud kitchen, launching a packaged food brand, opening a fine-dining restaurant, or operating a wholesale food storage warehouse? Obtaining an FSSAI (Food Safety and Standards Authority of India) License is a strict statutory mandate under the Food Safety Act, 2006. It is your business's ultimate badge of hygiene and institutional credibility.\n\nThe FSSAI framework categorizes businesses into a 3-tier structure based strictly on operational scale, annual financial turnover, and daily manufacturing capacities. Operating a food business without a valid FSSAI number can trigger severe legal liabilities, financial penalties, and prompt product seizures.\n\nEligibility Criteria:\n• Basic Registration: For small-scale food business operators (FBOs), petty retailers, and home kitchens with an annual turnover below ₹12 Lakhs.\n• State License: For medium-scale food processors, manufacturers, large restaurants, and distributors with an annual turnover between ₹12 Lakhs and ₹20 Crore.\n• Central License: For multi-state food chains, large-scale manufacturers, importers, exporters, and units operating inside central government zones with an annual turnover exceeding ₹20 Crore.",
        highlights: ["Legal food safety compliance", "Ensures quality standards", "Builds customer trust and brand value"],
        steps: [
          "Tier Identification & Portal Mapping: We analyze your proposed annual turnover and processing metrics to map your business to the exact correct tier on the centralized FoSTaC / FoSCoS portal.",
          "Application Compilation: We draft the comprehensive food safety layout application, assigning the precise food product codes and testing protocols to prevent future application modifications.",
          "Document Upload & Fee Processing: All self-attested identity sheets, safety declarations, and premise proofs are securely uploaded, and the statutory government processing fees are settled.",
          "Vetting, Inspection, & License Allocation: For State and Central tiers, a regional Food Safety Officer (FSO) may execute a physical hygiene audit of the premises. Once cleared, your formal 14-digit FSSAI License Certificate is generated."
        ],
        documents: [
          { name: "Business Operations", desc: "Comprehensive list of food product categories to be manufactured or sold, Form B completely filled and signed (for State & Central categories), and detailed kitchen blueprint layout and list of machinery (for Manufacturers)" },
          { name: "Identity Proof (Authorized Signatory)", desc: "Passport-size Photograph, PAN Card, Aadhaar Card, copy of COI, LLP Agreement, or Partnership Deed (if applicable), and board resolution or authorization letter assigning applicant power" },
          { name: "Premises Setup Proof", desc: "If Owned: Sale Deed / Property Tax Receipt / Recent Utility Bill | If Rented: Notarized Rent Agreement along with an NOC from the owner" },
          { name: "Technical Compliance", desc: "Water test report from a certified laboratory confirming portability status, and a detailed analysis of production capacity, source of raw materials, and raw milk handling parameters" }
        ],
        price: "1,999"
      },
      {
        title: "Digital Signature Certificate (DSC)",
        duration: "1 day",
        tag: "STANDARD" as const,
        desc: "Class 3 Digital Signature Certificate (DSC) for secure and legal online filings with MCA, Income Tax, and GST.",
        longDesc: "Are you planning to incorporate a company, submit digital tenders, sign official corporate contracts, or file statutory GST and Income Tax returns? Securing a Class 3 Digital Signature Certificate (DSC) is an absolute baseline asset. Operating as a highly secure, encrypted electronic key under the IT Act, 2000, it validates your legal identity.\n\nIn modern Indian business operations, physical signatures are entirely replaced by digital signatures for all interactions with the Ministry of Corporate Affairs (MCA), Income Tax Department, and e-tendering portals. The DSC is securely embedded within a physical, cryptographic USB token.\n\nEligibility Criteria:\n• Individual Scope: Any natural individual citizen of India looking to execute personal filings or act as a corporate director.\n• Organization Scope: Any authorized corporate representative, partner, or CEO signing forms on behalf of an established company, LLP, or trust.\n• Hardware Mandate: The certificate must be configured and hosted exclusively inside a secure, physical FIPS-compliant cryptographic USB token.",
        highlights: ["Class 3 secure signing", "2-year validity options", "Video verification support"],
        steps: [
          "CA Selection & Portal Entry: We initiate your registration profile directly on the portal of a licensed government Certifying Authority (such as eMudhra, Capricorn, or Sify).",
          "Data Integration & Aadhaar e-KYC: We leverage Aadhaar-linked OTP profiles to trigger instant electronic verification, completely bypassing long manual document verification processes.",
          "Video Identity Verification: The applicant records a simple 20-second automated video verification clip reading a dynamically generated security code aloud to confirm active physical presence.",
          "Token Encryption & Delivery: Upon successful verification, the electronic credentials are authenticated. We map the signature onto a cryptographic physical USB token and deliver it straight to your desk."
        ],
        documents: [
          { name: "For Individual DSC", desc: "Self-attested PAN Card (Primary identification metric), Aadhaar Card (Must be actively linked to a functional mobile number), recent clear passport-size color photograph, and active verified email address and mobile phone number" },
          { name: "For Organization DSC", desc: "True copy of the Company PAN Card and Certificate of Incorporation (COI), copy of recent bank statement or GST Certificate matching organization name, official Authorization Letter or Board Resolution signed by other directors, and organization ID proof of the authorized applicant" }
        ],
        price: "1,499"
      },
      {
        title: "Import Export Code (IEC)",
        duration: "3 days",
        tag: "STANDARD" as const,
        desc: "Obtain the mandatory 10-digit code required for importing and exporting goods and services from India.",
        longDesc: "Are you expanding your commercial operations internationally, shipping local products to global buyers, or importing specialized raw materials from international vendors? Securing an Import Export Code (IEC) is your absolute legal gateway. Issued directly by the Directorate General of Foreign Trade (DGFT), this permanent 10-digit registration number is mandatory.\n\nAn IEC is directly mapped against your business's PAN card, meaning it requires zero annual compliance updates and features a lifetime validity profile. Without a verified IEC code, custom authorities will block your shipments at ports, and banks will restrict foreign exchange inward and outward transfers.\n\nEligibility Criteria:\n• Legal Entity Base: Available to any style of registered business structure, including Sole Proprietorships, Partnerships, Private Limited Companies, LLPs, NGOs, and Trusts.\n• Dedicated Bank Account: The business must maintain an active current bank account configured to accept and transmit foreign currencies.\n• Valid PAN Mapping: The business or the individual promoter must possess a clean, active Permanent Account Number (PAN).",
        highlights: ["Lifetime validity", "No renewal required", "Mandatory for customs clearance"],
        steps: [
          "DGFT Portal Synchronization: We access the centralized DGFT portal, setting up a secure digital login mapped to the business PAN card via interactive OTP profiles.",
          "ANF-2A Electronic Compilation: Our foreign trade experts carefully draft electronic Form ANF-2A, entering specific details regarding bank parameters, business domains, and promoter shares.",
          "Token/DSC Upload & Payment: All supporting documents are attached to the form. The application is securely signed using a Class 3 Digital Signature Certificate (DSC) or Aadhaar OTP, and the flat government processing fee is settled.",
          "Instant Lifetime Generation: The DGFT system processes the validated application automatically. Once matched, your formal digital IEC Registration Certificate is instantly generated."
        ],
        documents: [
          { name: "Entity Core Data", desc: "Permanent Account Number (PAN) of the business or individual proprietor, digital copy of Certificate of Incorporation, Partnership Deed, or Trade License, and passport-size photograph of the authorized managing individual" },
          { name: "Banking Validation", desc: "Pre-printed cancelled cheque showing the exact business name clearly, and dynamic Bank Certificate / Account Statement confirming the active current account details" },
          { name: "Address Verification", desc: "If Owned: Sale Deed or recent corporate property utility bills | If Rented: Notarized Lease Contract alongside an explicit utility bill copy" }
        ],
        price: "999"
      },
      {
        title: "Drug License",
        duration: "15 days",
        tag: "STANDARD" as const,
        desc: "Mandatory license for selling, distributing, or manufacturing drugs, medicines, and cosmetics.",
        longDesc: "Are you launching a retail pharmacy storefront, distributing bulk pharmaceutical medicines to hospitals, establishing a healthcare diagnostics business, or manufacturing cosmetic products? Securing a Drug License is a non-negotiable legal prerequisite under the Drugs and Cosmetics Act, 1940. It monitors the distribution, storage, and handling of medicines.\n\nThe State Drugs Standard Control Organization regulates the issuance of drug licenses based on your operational model. If your business operates across multiple states, you must secure a dedicated license from each individual state drug control authority.\n\nEligibility Criteria:\n• Retail Drug License: Granted strictly to local pharmacies, chemists, and medical stores interacting directly with everyday retail consumers.\n• Wholesale Drug License: Issued to large-scale distributors, stockists, and traders who sell pharmaceutical formulations to other businesses or hospitals.\n• Manufacturing Drug License: A comprehensive license for units producing allopathic, homeopathic, ayurvedic medicines, or complex medical equipment.",
        highlights: ["Compliance with Drugs & Cosmetics Act", "Authorized storage audit", "Mandatory for wholesale/retail pharmacy"],
        steps: [
          "Structural Mapping & Portal Profile: We analyze your facility dimensions to ensure they meet the minimum statutory space thresholds and create your application profile on the state Drug Controller's portal.",
          "Form Drafting & Technical Mapping: We draft Form 19 (for retail/wholesale distribution) and attach the registered pharmacist profiles, machine calibrations, and cooling charts.",
          "Fee Processing & Documentation Upload: We upload all academic records, blueprints, and property agreements, and process the state-specific statutory license generation fees online.",
          "Physical Site Inspection & License Grant: A regional Drug Inspector (DI) schedules a rigorous physical audit of your premises to verify cold-chain storage and safety layout parameters. Once cleared, your official Drug License Number is formally issued."
        ],
        documents: [
          { name: "Premises Layout & Blueprint", desc: "Detailed architectural layout blueprint plan of the pharmacy storefront/warehouse, and true documentation proving a physical cold-storage system (Refrigerator data loggers)" },
          { name: "Technical Staff Credentials", desc: "Degree/Diploma certificate of a registered, qualified Pharmacist (for Retail), Pharmacy Council Registration Certificate and active appointment letter, and graduation experience certificate of a qualified trader (for Wholesale)" },
          { name: "Identity & Incorporation", desc: "Business PAN card, COI, Partnership Deed, or dynamic LLP Agreement, and identity and address proofs (PAN/Aadhaar) of all directors or partners" },
          { name: "Property Legality", desc: "If Owned: Sale Deed / Registered Property Document / Recent Tax Bill | If Rented: Legal Notarized Lease Agreement and a signed landlord NOC" }
        ],
        price: "11,999"
      },
      {
        title: "ICEGATE Registration",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Register on the Indian Customs Electronic Gateway for online filing of shipping bills and bills of entry.",
        longDesc: "Are you an international logistics provider, a customs broker, or an active importer/exporter aiming to speed up your international maritime or air cargo cargo shipments? Completing an ICEGATE Registration is a vital operational mandate. Functioning as the e-commerce portal of the Central Board of Indirect Taxes and Customs (CBIC), this specialized integration hooks your business directly into customs systems.\n\nICEGATE allows traders to digitally file bills of entry, shipping bills, payment summaries, and track cargo statuses online. It eliminates traditional physical customs handling delays and speeds up the release of overseas goods from international ports.\n\nEligibility Criteria:\n• Active IEC Mapping: The applicant business must already possess a valid and active Import Export Code (IEC) issued by the DGFT.\n• Organization Blueprint: Available to all registered corporate trading entities, customs brokers, shipping lines, and logistics companies.\n• Class 3 DSC Integration: The authorized signatory must possess a valid, personal Class 3 Digital Signature Certificate (DSC) configured for customs portal verification.",
        highlights: ["Direct customs interaction", "Track shipments in real-time", "Electronic duty payments"],
        steps: [
          "Portal Account Structure: We access the official ICEGATE centralized system, initiating a secure custom user registration sequence linked directly to your active IEC profile.",
          "Data Fields Mapping: Our customs compliance team accurately inputs your primary business location codes, sea/air port registration data, and banking data to ensure flawless document processing.",
          "DSC Verification & Document Upload: We execute a secure digital handshake by linking your Class 3 Digital Signature Certificate (DSC) to the ICEGATE identity database and uploading all verified authorization files.",
          "Customs Cell Approval: The central processing team of the customs department reviews the data linkages. Once verified, your ICEGATE User ID and Portal Clearance are activated."
        ],
        documents: [
          { name: "Customs Tracking Data", desc: "Active 10-digit Import Export Code (IEC) issued by the DGFT, and a valid Permanent Account Number (PAN) matching the trade entity name" },
          { name: "Signatory Verification", desc: "Valid Class 3 Digital Signature Certificate (DSC) mapped onto a USB token, and a high-resolution Aadhaar Card / Passport copy of the authorized individual" },
          { name: "Corporate Profiles", desc: "Official Authorization Letter on company letterhead naming the applicant trader, and a valid corporate email address and active mobile number for multi-factor OTP setups" }
        ],
        price: "2,499"
      },
      {
        title: "ISO Certification",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Acquire international ISO standards (like ISO 9001) to validate your quality management systems.",
        longDesc: "Are you looking to scale your business operations, participate in high-value government tenders, or build trust with global international corporate clients? Obtaining an ISO Certification (such as ISO 9001, 14001, or 27001) is your ultimate operational milestone. Serving as a globally recognized symbol of corporate excellence, this certification verifies your standards.\n\nAn ISO certificate proves your organization’s dedication to continuous workflow optimization, operational efficiency, and customer satisfaction. It significantly enhances your brand's competitive advantage in domestic and international markets.\n\nEligibility Criteria:\n• ISO 9001:2015 (QMS): The global benchmark for Quality Management Systems. Ideal for all service, manufacturing, and technology companies.\n• ISO 14001:2015 (EMS): Focuses on Environmental Management Systems for businesses looking to optimize sustainability and minimize waste.\n• ISO 27001:2022 (ISMS): Governs Information Security Management Systems. A mandatory asset for IT firms, cloud platforms, and tech startups.",
        highlights: ["Global quality trust standards", "Qualify for institutional tenders", "Boost organizational productivity"],
        steps: [
          "Gap Analysis & Standard Selection: We analyze your current workflow against your chosen ISO standard to identify operational gaps and help you build efficient Standard Operating Procedures (SOPs).",
          "System Implementation & Document Framing: We guide your management team in implementing necessary quality logs, safety tracking systems, and operational controls to align with international standards.",
          "Internal Quality Audit: We coordinate an initial internal audit review to verify that your workflows match the chosen ISO framework and correct any operational anomalies.",
          "External Audit & ISO Issuance: An accredited external Certification Body (CB) executes a formal audit of your systems. Once satisfied, they formally issue your international ISO Certification."
        ],
        documents: [
          { name: "Corporate Profile", desc: "Certificate of Incorporation, Partnership Deed, or dynamic local Trade License, and a detailed Company Profile outlining the complete scope of business operations" },
          { name: "Operational Blueprint", desc: "Detailed Quality Manual / Standard Operating Procedures (SOPs) for core processes, and the main organizational chart mapping out leadership roles and workflows" },
          { name: "Compliance & Layout", desc: "Copy of active commercial address proofs along with valid GSTIN certificates, and record logs of recent internal quality checks, customer feedback, or safety reviews" }
        ],
        price: "3,499"
      },
      {
        title: "PF Registration",
        duration: "3 days",
        tag: "MANDATORY" as const,
        desc: "Register for the Provident Fund scheme to secure retirement benefits for your employees.",
        longDesc: "Are you expanding your corporate team, onboarding permanent employees, or aiming to establish high human resource standards within your business? Securing an EPFO (Employees' Provident Fund Organisation) Registration is a mandatory legal milestone under the EPF Act. It provides a long-term social security and retirement savings framework.\n\nOnce registered, an employer must deduct a statutory percentage (typically 12% of basic wages) from eligible employees' salaries and contribute an equal matching amount into their dedicated provident fund account monthly. Failure to register or timely deposit monthly PF contributions can lead to severe financial penalties.\n\nEligibility Criteria:\n• Mandatory Workforce Limit: Every business establishment that employs twenty (20) or more individuals on any single day must register within 15 days.\n• Voluntary Option: Small businesses with less than 20 employees can opt for a voluntary PF registration to provide retirement benefits to their team.\n• Universal Application: Applies to all business structures, including factories, retail establishments, IT offices, startups, and consulting firms.",
        highlights: ["Mandatory for 20+ employees", "Social security support", "Tax-deductible contributions"],
        steps: [
          "Shram Suvidha Integration: We access the centralized Shram Suvidha unified labor portal, setting up your corporate account using an authorized signatory's Class 3 DSC or Aadhaar profile.",
          "Form Drafting & Employer Profile Setup: Our corporate HR team drafts the application form, entering specific setup details, main business activities, and your active current bank details.",
          "Document Verification & Electronic Filing: All supporting business deeds, PAN files, and payroll metrics are attached to the portal, and the application is signed using digital security keys.",
          "UAN Generation & Portal Activation: The EPFO system reviews and verifies the application data. Once cleared, your formal EPF Registration Number is issued."
        ],
        documents: [
          { name: "Entity Legal Data", desc: "Permanent Account Number (PAN) of the business entity, Certificate of Incorporation (COI), Partnership Deed, or local Shop License, and active GST Registration Certificate and cross-matched address proofs" },
          { name: "Promoter / Director Details", desc: "PAN Card and Aadhaar Card copies of all active directors or partners, and complete contact data including active mobile numbers and email addresses" },
          { name: "Workforce & Banking Details", desc: "Exact total headcount data along with monthly payroll sheets, copy of a cancelled cheque or bank statement matching the entity's current account, and an initial list of employee names, Aadhaar numbers, and dates of joining" }
        ],
        price: "1,499"
      },
      {
        title: "PSARA Registration",
        duration: "30 days",
        tag: "STANDARD" as const,
        desc: "Mandatory license under the Private Security Agencies Regulation Act to run private security services.",
        longDesc: "Are you planning to launch a private security agency, provide manned guarding services to corporate parks, or deploy cash logistics bouncers to banking networks? Securing a PSARA (Private Security Agencies Regulation Act) License is your mandatory legal requirement. It serves as a strict regulatory shield.\n\nThe PSARA framework is regulated strictly by individual state-appointed Controlling Authorities. Operating an uncertified private guarding business without a valid PSARA license is a serious, non-bailable criminal offense.\n\nEligibility Criteria:\n• Indian Citizenship Base: The principal promoter, CEO, or managing director must be a citizen of India and maintain a clean criminal history.\n• Financial Credibility: The business must possess clean financial records, and the promoters must have a solid credit history without any bankruptcy marks.\n• Mandatory Training Tie-Up: The applicant agency must execute a formal Memorandum of Understanding (MoU) with a state-recognized security training institute to train guards.",
        highlights: ["Legal security agency operations", "Mandatory police verification check", "Standardized guard training model"],
        steps: [
          "Antecedent Verification Filing: We assist you in filing an intense background check application with the local police department to verify the clean legal records of all promoters.",
          "Training MoU Execution: We coordinate with a state-certified security academy to secure your mandatory guard training partnership agreement, ensuring compliance with state regulations.",
          "Application Compilation: We assemble and submit your comprehensive license application to the state's PSARA Controlling Authority, accompanied by uniform blueprints and tax compliance certificates.",
          "Department Inspection & License Grant: A Controlling Officer or senior police inspector performs a physical audit of your office space and training logs. Once cleared, your official PSARA License is generated."
        ],
        documents: [
          { name: "Agency Branding Data", desc: "Distinctive uniform design layout, including shirt, trousers, and batch insignia, detailed character and criminal antecedent verification report of the promoters, and logo design blueprint and formal security training module handbook" },
          { name: "Entity Foundation Info", desc: "Business PAN, Certificate of Incorporation, or registered Partnership Deed, fully executed Training MoU with a state-certified guard training center, and active Shops & Establishment License, PF, and ESIC registration copies" },
          { name: "Premises Authenticity", desc: "If Owned: Sale Deed / Property Tax Document / Latest Office Utility Bills | If Rented: Notarized Lease Contract accompanied by a signed landlord NOC" }
        ],
        price: "24,999"
      },
      {
        title: "ESIC Registration",
        duration: "3 days",
        tag: "MANDATORY" as const,
        desc: "Employee State Insurance provides medical and cash benefits to employees for sickness and maternity.",
        longDesc: "Are you building an operational workforce, managing manufacturing plants, or running an office with multiple entry-level employees? Securing an ESIC (Employees' State Insurance Corporation) Registration is a mandatory statutory obligation under Indian social security laws. It provides a robust, state-backed health insurance framework.\n\nThe ESIC ecosystem ensures that eligible employees receive comprehensive medical care, maternity benefits, sick leave pay, and disability compensation. Employers must contribute a statutory percentage of the monthly payroll, while employees contribute a fractional amount from their basic wages.\n\nEligibility Criteria:\n• Mandatory Employee Baseline: Applicable to any commercial establishment, factory, or office that employs ten (10) or more individuals on any single day.\n• Salary Threshold: Employees whose gross monthly salary is ₹21,000 or below are covered under this scheme.\n• Regional Coverage: The business must be located within an ESIC-implemented geographic zone or municipal territory.",
        highlights: ["Mandatory for 10+ employees", "Medical cover for family", "Maternity benefit security"],
        steps: [
          "Labor Portal Account Integration: We set up your corporate account on the unified Shram Suvidha / ESIC portal using your digital security keys or Aadhaar profiles.",
          "Employer Form Filing: We carefully draft the employer enrollment application, filling in precise operational details, business category classifications, and your current bank details.",
          "Document Stack Attachment: All self-attested payroll sheets, director identity proofs, and property titles are securely uploaded to the system.",
          "TIC Generation & Registration Activation: The automated ESIC framework processes the application data. Once cleared, your formal 17-digit ESIC Registration Number is issued."
        ],
        documents: [
          { name: "Corporate Identity Info", desc: "Permanent Account Number (PAN) of the business entity and all promoters, Certificate of Incorporation (COI), dynamic Partnership Deed, or local Shop License, and a copy of a pre-printed cancelled cheque showing the exact corporate bank account" },
          { name: "Employee Operational Data", desc: "Complete list of working employees along with dates of birth and family structures, individual Aadhaar card copies and recent passport-size photographs of the team, and up-to-date monthly payroll breakdown and employee joining dates" },
          { name: "Premises Verification", desc: "Valid business address proof (Sale deed, Property tax bill, or Rent Agreement)" }
        ],
        price: "1,499"
      },
      {
        title: "Copyright Registration",
        duration: "15 days",
        tag: "STANDARD" as const,
        desc: "Register and protect your original creative works (writing, music, software, design) from infringement.",
        longDesc: "Are you a software developer writing proprietary source code, an author publishing a book, a musician composing original tracks, or an artist designing unique branding graphics? Securing a Copyright Registration is your ultimate legal shield. Governed under the Copyright Act, 1957, this intellectual property right grants you ownership.\n\nA copyright protects the unique expression of an idea rather than the idea itself. It grants creators the exclusive legal authority to reproduce, translate, perform, and distribute their work globally. It serves as an essential protection tool against digital piracy.\n\nEligibility Criteria:\n• Literary Works: Book manuscripts, research articles, website text contents, and proprietary computer software source codes.\n• Artistic Works: Brand logos, commercial graphic designs, architectural blue drawings, and unique paintings.\n• Cinematographic & Sound: Short films, podcast audio files, music compositions, and commercial jingles.",
        highlights: ["Legal ownership certificate", "Protects code, art, and music", "Deterrent against plagiarism"],
        steps: [
          "Classification & Application Filing: We review your creative work and file Form XIV on the centralized Indian Copyright Office portal, meticulously cataloging the author and owner details.",
          "Filing Fee & Diary Number Generation: We process the official government copyright vetting fees. Once submitted, the system generates a unique Diary Number to track your application.",
          "Mandatory 30-Day Waiting Window: The law enforces a strict 30-day waiting period to allow any external parties to file objections against your copyright claim.",
          "Vetting & Registration Issuance: If no objections arise, a copyright examiner reviews your work for uniqueness. Once cleared, the department issues your formal Registration Certificate (ROC)."
        ],
        documents: [
          { name: "Work Artifact Copy", desc: "Three (3) hard or digital copies of the original creative work (Source code, manuscript, or graphics), and a clear description of the work, date of creation, and language used" },
          { name: "Applicant Details", desc: "PAN Card and Aadhaar Card copy of the author/creator, and a Certificate of Incorporation or Partnership Deed if the copyright is owned by a business entity" },
          { name: "Authorizations", desc: "A signed No Objection Certificate (NOC) from the author if the applicant is different from the creator, and a formal Power of Attorney authorizing our legal experts to represent your case" }
        ],
        price: "3,499"
      },
      {
        title: "Startup India DPIIT Recognition",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Get Startup India recognition to unlock tax holidays, patent discounts, and government funding schemes.",
        longDesc: "Are you launching a tech startup, scaling an innovative business model, or developing an original proprietary solution? Getting your business recognized under the Startup India Scheme (DPIIT Recognition) is a major milestone. It unlocks access to tax holidays, patent fast-tracks, and public funds.\n\nThis central government scheme aims to fuel economic growth and generate large-scale employment by supporting innovative, early-stage businesses. It transforms regular startups into highly credible, investment-ready organizations recognized nationally.\n\nEligibility Criteria:\n• Business Structure Type: The startup must be incorporated as a Private Limited Company, a Limited Liability Partnership (LLP), or a registered Partnership Firm.\n• Age of the Entity: The total period of existence from the formal date of incorporation must be under ten (10) years.\n• Turnover Constraints: The total annual financial turnover must not have exceeded ₹100 Crore in any preceding financial year.\n• Innovation Core: The business model must focus on innovation, development, or optimization of products, processes, or services.",
        highlights: ["3-year income tax holiday eligibility", "80% patent filing discounts", "Self-certification compliance rights"],
        steps: [
          "Profile Setup on the Startup India Hub: We build your corporate profile on the unified Startup India digital portal, detailing your industry sector and stage of development.",
          "DPIIT Recognition Application: Our startup consultants carefully draft your recognition application, focusing on your business's innovation aspects, scalability metrics, and market impact.",
          "Document Upload & Self-Certification: We upload your incorporation proofs and pitch deck, and complete the mandatory self-certification forms regarding your startup's eligibility.",
          "Review & DPIIT Certificate Issuance: The Department for Promotion of Industry and Internal Trade (DPIIT) reviews your application. Once approved, they issue your formal Startup India Recognition Certificate."
        ],
        documents: [
          { name: "Incorporation Proofs", desc: "Certificate of Incorporation (COI) or registered Partnership Deed, and the Permanent Account Number (PAN) of the business entity" },
          { name: "Innovation Pitch Deck", desc: "A clean, detailed Write-up / Pitch Deck outlining your innovative product or service, and a brief summary explaining how your startup plans to generate scalable employment or wealth" },
          { name: "IPR Documents", desc: "Copies of any filed or granted Patents, Trademarks, or Copyrights linked to your innovation" }
        ],
        price: "4,999"
      },
      {
        title: "Trademark Registration",
        duration: "3 days",
        tag: "RECOMMENDED" as const,
        desc: "Protect your brand name, logo, or slogan from copycats and establish exclusive intellectual property ownership.",
        longDesc: "Are you launching a brand name, creating a distinct logo, or designing a unique corporate slogan? Securing a Trademark Registration (™) is your most vital step to protect your brand identity. It grants you exclusive legal ownership over your brand elements across India, shielding your business from copycats.\n\nA trademark protects your brand's unique assets—such as your name, logo, or slogan—from being copied or misused by competitors. It ensures customers can easily identify your authentic products or services in the market.\n\nEligibility Criteria:\n• Brand Name: Your unique corporate name, company name, or product line name.\n• Logo Design: Distinct visual marks, symbols, or artistic emblems representing your business identity.\n• Slogan / Tagline: Catchy textual phrases used in your marketing campaigns to define your brand.",
        highlights: ["TM mark usage instantly", "Brand asset legal protection", "10-year validity term"],
        steps: [
          "Comprehensive Trademark Search: We perform an intensive, multi-layered search across the official IP India database to check for any conflicting or similar existing marks before filing.",
          "Class Selection & Form TM-A Filing: We identify your correct trade classes and file Form TM-A on the official Intellectual Property portal, securely signing it with digital verification keys.",
          "Instant '™' Application Status: As soon as the application is successfully submitted, you receive your official filing receipt, allowing you to use the ™ symbol next to your brand name immediately.",
          "Vetting, Examination, & Publication: A government trademark examiner reviews your application. Once cleared, it is published in the official Trademark Journal. If no objections arise, your certificate is generated."
        ],
        documents: [
          { name: "Brand Asset Metadata", desc: "Clear, high-resolution soft copy of the proposed brand name or logo layout, and the exact Trademark Class selection matching your business industry (Classes 1 to 45)" },
          { name: "Applicant Identity", desc: "PAN Card and Aadhaar Card copy of the individual promoter or business owner, and Certificate of Incorporation or Partnership Deed if registered under an organization" },
          { name: "Legal Authorizations", desc: "A signed User Affidavit stating the exact date your brand first started using the mark, and a Power of Attorney authorizing our legal experts to file and manage your application" }
        ],
        price: "1,999"
      },
      {
        title: "Udyam Aadhaar (MSME) Registration",
        duration: "1 day",
        tag: "POPULAR" as const,
        desc: "Register under MSME to qualify for government schemes, subsidies, and lower interest loans.",
        longDesc: "Are you operating a small business, managing a local retail shop, running a consulting agency, or setting up a manufacturing unit? Getting an Udyam Aadhaar (MSME) Registration is a highly valuable step for your business. This free, state-backed registration formally recognizes your business under the MSME Development Act, 2006.\n\nThe Udyam framework automatically classifies your business as Micro, Small, or Medium based strictly on your investment in plant and machinery alongside your annual financial turnover metrics. It maps your enterprise directly into the national economic database.\n\nEligibility Criteria:\n• Micro Enterprise: Investment in plant and machinery under ₹1 Crore, and annual turnover under ₹5 Crore.\n• Small Enterprise: Investment in plant and machinery under ₹10 Crore, and annual turnover under ₹50 Crore.\n• Medium Enterprise: Investment in plant and machinery under ₹50 Crore, and annual turnover under ₹250 Crore.",
        highlights: ["Collateral-free bank loans", "Protection against late payments", "Lower patent/trademark fees"],
        steps: [
          "Aadhaar Validation Sequence: We access the official, centralized Udyam Registration government portal, validating the applicant's Aadhaar number via secure OTP profiles.",
          "Corporate Profile Structuring: We enter your precise business layout parameters, primary industrial classifications (NIC codes), and matching employee headcounts.",
          "Tax & Turnover Integration: The Udyam system securely synchronizes your tax metrics and financial turnover data directly from the Income Tax and GST systems automatically.",
          "Instant Certificate Generation: All data points are validated by the online system. Once processed, your official lifetime-valid Udyam Registration Certificate is instantly generated."
        ],
        documents: [
          { name: "Promoter Base Data", desc: "Aadhaar Card of the individual owner, managing partner, or authorized director, and the Permanent Account Number (PAN) card of the business entity" },
          { name: "Financial Tracking", desc: "Up-to-date GSTIN certificate matching the active business entity, and basic details regarding recent investments in plant, machinery, or equipment" },
          { name: "Operational Details", desc: "Accurate business name, commercial address proof, total active employee headcount, and core bank account number along with valid IFSC codes to facilitate transfers" }
        ],
        price: "499"
      },
      {
        title: "DARPAN Registration (NITI Aayog)",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Register your NGO on the NITI Aayog portal to qualify for government grants and project funding.",
        longDesc: "Are you operating a non-profit organization, managing a registered public charitable trust, running a welfare society, or executing a Section 8 social impact company? Securing a DARPAN Registration (often called an NGO Darpan ID) is your absolute mandatory requirement. Managed directly by the NITI Aayog, this links you to ministries.\n\nThe DARPAN platform enhances the transparency, credibility, and institutional accountability of NGOs across India. Possessing a valid Darpan ID is an essential prerequisite for any non-profit aiming to participate in high-value central government funding projects.\n\nEligibility Criteria:\n• Non-Profit Legal Structure: The applicant body must be legally registered as a Public Charitable Trust, a registered Welfare Society, or a Section 8 Non-Profit Company.\n• Detailed Board Blueprint: The entity must maintain an active, fully functional executive committee or board consisting of a minimum of three distinct non-profit members.\n• Updated Compliance History: The applicant organization must have up-to-date records, transparent financial loggers, and a clean history free of structural non-profit compliance blocks.",
        highlights: ["Mandatory for government grants", "Enhances NGO credibility", "Direct integration with ministry funding"],
        steps: [
          "NITI Aayog Portal Configuration: We access the centralized NGO Darpan portal, building a fresh organizational identity profile directly linked to your business PAN card.",
          "Executive Mapping Sequence: Our compliance experts accurately input the individual identity profiles, Aadhaar numbers, and dynamic contact credentials of all active board members to ensure complete transparency.",
          "Sectoral Activities Specification: We map your specific non-profit activities to the correct government sectors, detailing your primary geographic footprint and active project locations.",
          "Validation & Unique ID Issuance: The NITI Aayog system reviews your attached deeds and board data. Once cleared, your formal NGO DARPAN Unique ID Number is generated."
        ],
        documents: [
          { name: "Entity Registration Foundation", desc: "True copy of the active Trust Deed, Society Registration Certificate, or Section 8 COI, and the Permanent Account Number (PAN) card mapped strictly to the NGO's legal name" },
          { name: "Board Executive Profiles", desc: "Complete PAN Card and Aadhaar Card copies of all active trustees or board members, and valid contact details including verified mobile numbers and email addresses for the board" },
          { name: "Social Impact Profile", desc: "Detailed summary of the NGO's key areas of operations (e.g., Education, Healthcare), and a summary of key achievements, operational states, and active project footprints" }
        ],
        price: "2,999"
      }
    ]
  },
  {
    id: "digital-essentials",
    name: "Digital Essentials & Creative Services",
    services: [
      {
        title: "Website Design & Development",
        duration: "7 days",
        tag: "POPULAR" as const,
        desc: "Responsive, high-performance websites customized for your business.",
        longDesc: "In the modern digital marketplace, your website serves as your company’s virtual corporate headquarters, the anchor of your brand identity, and your primary customer acquisition engine. Our professional Website Design & Development service moves beyond basic web templates to build high-performance, responsive, and secure digital platforms.\n\nWe blend clean user experience (UX) architecture with scalable engineering to maximize conversions, ensure lightning-fast page speeds, and turn casual web traffic into long-term enterprise value.\n\nTrending Digital Tech & Aesthetics:\n• AI-Driven Customer Workflows: Embedding intelligent automated assistants and customer routing engines to capture high-intent leads and resolve operations queries 24/7.\n• Headless & JAMstack Architecture: Utilizing modern decoupled development practices to achieve extreme structural security, lower server costs, and global content delivery.\n• Conversion Rate Optimization (CRO): Designing clear, data-backed landing page layouts, strategic call-to-action (CTA) arrays, and ultra-smooth payment paths.\n• Next-Gen SEO Frameworks: Engineering schema markup, structured site architectures, and Core Web Vitals optimization to rank higher on search engines from day one.",
        highlights: ["SEO-optimized code", "Mobile & tablet responsive", "Integrated contact forms"],
        steps: [
          "Strategic Blueprinting & UI/UX Wireframing: We map out your target user flows, design initial information architectures, and build high-fidelity visual prototypes for your review.",
          "Full-Stack Engineering & Mobile Optimization: Our developers write clean, modular code to transform your visual blueprints into a fast, fully responsive website that looks and runs beautifully across all devices.",
          "Database Setup & Secure API Integrations: We connect and configure your database structures, implement robust security protocols, and set up your core analytical tools and CRM pathways.",
          "Rigorous Quality Check & Live Launch: We execute multi-browser performance checks, optimize your loading speeds, clear your staging protocols, and manage your live server deployment."
        ],
        documents: [
          { name: "Corporate Websites", desc: "Multi-page corporate platforms, service showcase portals, and dynamic content architectures. Tech Options: WordPress, Webflow, React, or custom HTML5/CSS3." },
          { name: "E-Commerce Engines", desc: "Secure online storefronts, inventory management dashboards, and localized multi-currency checkouts. Tech Options: Shopify, WooCommerce, Next.js, or Magento." },
          { name: "Custom Web Apps", desc: "Client dashboards, proprietary service portals, and custom SaaS tools. Tech Options: Full-stack development using Node.js, Python (Django), React, or Vue.js." }
        ],
        price: "9,999"
      },
      {
        title: "Logo & Brand Design",
        duration: "4 days",
        tag: "RECOMMENDED" as const,
        desc: "Custom logo and visual assets defining your unique brand identity.",
        longDesc: "Your logo is the visual signature of your corporation, the face of your enterprise, and the foundation of your entire market identity. A professionally crafted Logo & Brand Design moves beyond standard graphic illustrations to establish an immediate, memorable psychological connection with your target audience.\n\nWe combine strategic color psychology, timeless typography, and clean minimalist layouts to communicate your core values instantly, set you apart from competitors, and build deep brand authority.\n\nTrending Digital Tech & Aesthetics:\n• Adaptive Variable Logo Systems: Designing flexible, responsive logo frameworks that fluidly scale and auto-adjust for pristine clarity across everything from tiny app favicons to massive outdoor billboards.\n• Strategic Minimalism: Eliminating visual clutter to focus entirely on clean vector geometry and deliberate negative space, making your brand highly impactful.\n• Intentional Color Archetypes: Utilizing psychological color mapping to evoke the exact right emotional responses from your target market segment (e.g., trust, innovation, premium luxury).\n• Complete Brand Identity Toolkits: Delivering holistic design assets—including comprehensive brand guidelines, corporate typography hierarchies, and custom asset layouts.",
        highlights: ["3 unique design concepts", "High-res vector source files", "Full commercial copyright ownership"],
        steps: [
          "Brand Strategy & Visual Direction Consultation: We sit down with your leadership team to define your market positioning, research competitor landscapes, and map out a clear artistic direction.",
          "Concept Ideation & Geometric Sketching: Our design team develops multiple distinct visual directions, experimenting with unique typography weights, balances, and symbolic iconography.",
          "Refinement & Interactive Color Iteration: We present our top design directions to your team, redline structural details based on your feedback, and finalize your core corporate color palette.",
          "Master Asset Formatting & Delivery: We construct your complete corporate brand identity package, render your final scalable files across all necessary formats, and deliver your ready-to-use brand asset kit."
        ],
        documents: [
          { name: "Primary Brand Marks", desc: "Master Brand Logo, Secondary Emblem Layouts, Wordmarks, and Favicon assets." },
          { name: "Vector Production Files", desc: "Scalable, print-ready file formats (AI, EPS, SVG, and high-resolution PDF assets) for unlimited reproduction without quality loss." },
          { name: "Digital Asset Package", desc: "Transparent web-optimized file types (High-res PNG, JPEG, and WebP) curated for smooth online, application, and social media display." },
          { name: "Corporate Branding Guide", desc: "Core Identity Manual defining exact brand color codes (HEX/CMYK/Pantone), typefaces, and clear guidelines on logo usage rules." }
        ],
        price: "2,999"
      },
      {
        title: "Billing & Enterprise Software",
        duration: "2 days",
        tag: "STANDARD" as const,
        desc: "Cloud-based GST invoicing and basic bookkeeping software implementation.",
        longDesc: "In modern business, running your operations on un-synchronized spreadsheets or manual paper invoice systems can lead to processing delays, missing balances, tracking errors, and serious tax compliance gaps. Implementing a custom Billing & Enterprise Software Solution is your ultimate path to digital efficiency.\n\nIt automates your daily workflows, tracks your revenue streams in real time, and handles your data safely, giving you complete visibility over your cash flow and operations.\n\nTrending System Capabilities:\n• Automated E-Invoicing Systems: Generating fully compliant electronic invoices that link directly to national tax systems (such as GST e-Invoicing) automatically.\n• Unified Omni-Channel Payments: Integrating secure, global payment processors to accept automated recurring subscriptions, credit cards, UPI transactions, and corporate bank deposits.\n• Real-Time Financial Analytics: Dynamic dashboards that track your accounts receivable, map outstanding payments, monitor aging ledgers, and export clear financial reports.\n• End-to-End ERP Integrations: Syncing your invoicing tools directly with your central inventory trackers, customer relationship management (CRM) systems, and financial ledgers.",
        highlights: ["100% compliant GST invoicing", "Multi-user access & security", "Automated financial reports"],
        steps: [
          "Workflow Audit & Systems Specification: We perform a thorough review of your operational workflows, pinpoint data bottlenecks, and layout the exact architectural blueprints for your software system.",
          "Database Architecture & Code Engineering: Our development team designs a secure database structure and engineers your custom software tool, focusing on processing speed, UI clarity, and data encryption.",
          "API Synchronization & Multi-Platform Testing: We connect your billing platform with your active banks, existing CRMs, and tax portals, running extensive stress-testing cycles to guarantee system reliability.",
          "Data Migration, Staff Training & Go-Live: We import your legacy ledger data into the new platform, lead comprehensive training workshops for your team, and activate your custom enterprise system safely."
        ],
        documents: [
          { name: "Billing & Invoicing Engine", desc: "Automated recurring retainers, customizable invoice design layouts, pro-forma tools, and smart payment reminders." },
          { name: "Inventory & Asset Controls", desc: "Real-time stock level monitoring, low-inventory notifications, multi-warehouse tracking, and automated supplier purchase orders." },
          { name: "Financial Ledger Toolkits", desc: "Automated cash ledger balancing, tax allocation models (GST/TDS), expense tracking, and auditing tools." }
        ],
        price: "3,499"
      },
      {
        title: "Marketing Posters & Videos",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Engaging social media creatives, banner ads, and short marketing videos for business promotion.",
        longDesc: "In today's fast-moving digital world, your target audience scrolls past thousands of pieces of content every single day. Grabbing their attention and keeping them engaged requires a powerful mix of eye-catching design and dynamic storytelling.\n\nOur professional Marketing Posters & Videos creation service builds high-converting visual assets and short-form video content designed to cut through the digital noise, maximize your click-through rates, and drive sales.\n\nTrending System Capabilities:\n• High-Conversion Short-Form Video: Scripting and producing optimized vertical videos (such as Instagram Reels, YouTube Shorts, and TikTok style ads) built to engage audiences in the first 3 seconds.\n• Interactive Dynamic Ad Assets: Creating clean carousel ad structures, thumb-stopping product posters, and engaging layouts built for target social media ad campaigns.\n• Data-Driven Performance Graphics: Transforming complex case studies, business statistics, and product comparisons into highly shareable, clean infographic assets.\n• Holistic Omnichannel Campaigns: Designing a unified set of visual assets cross-optimized to ensure consistent branding across your social feeds, newsletters, and landing pages.",
        highlights: ["Custom social media graphics", "High-retention ad creatives", "Professional stock media selection"],
        steps: [
          "Campaign Briefing & Script Writing: We analyze your target campaign goals, establish your core promotional messaging, and write high-impact scripts and initial storyboard layouts.",
          "Visual Content Creation & Live Filming: Our production crew handles asset design, handles motion graphics rendering, or sets up high-definition studio filming to capture your product elements beautifully.",
          "Premium Post-Production & Color Grading: We edit your video footage, sync background audio tracks, implement motion typography, and run color grading to give your content a pristine, cinematic look.",
          "Platform Optimization & Asset Delivery: We render your visual media into all necessary sizes, optimize file compression settings to guarantee instant loading speeds, and deliver your campaign-ready asset folder."
        ],
        documents: [
          { name: "Social Media Ad Suite", desc: "Optimized static posters, carousel ad layouts, and limited-edition product banners. Sizes: 1:1 Square (Feed), 9:16 Vertical (Stories/Reels), 16:9 Landscape." },
          { name: "Video Production Suite", desc: "High-resolution motion graphics, explainer product videos, customer testimonial reels, and corporate brand films. Render Specs: 4K UHD resolution, professionally edited audio tracks, and custom font overlays." },
          { name: "Print Marketing Package", desc: "Commercial print-ready display layouts, brochures, corporate trade show backdrops, and promotional flyers. Format Slabs: High-res vector PDF files embedded with CMYK color profiles." }
        ],
        price: "1,999"
      }
    ]
  },
  {
    id: "labour-compliance",
    name: "Labour Compliance & Law Advisory",
    services: [
      {
        title: "Provident Fund (EPFO) Filings",
        duration: "Monthly",
        tag: "MANDATORY" as const,
        desc: "Employer PF code registration followed by mandatory monthly return filing and employee contribution submissions.",
        longDesc: "Are you expanding your corporate team, onboarding permanent employees, or aiming to establish benchmark human resource standards within your business? Securing an EPFO (Employees' Provident Fund Organisation) Registration and Filing ecosystem is a critical statutory milestone. It provides a long-term social security and retirement savings framework for your team, keeping your company fully compliant with Indian labor codes and enhancing workforce retention.\n\nThe EPF framework mandates that once an establishment is registered, the employer must deduct a statutory percentage (typically 12% of basic wages) from eligible employees' salaries and contribute an equal matching amount into their dedicated provident fund account monthly. These collections must be filed online month-on-month through an Electronic Challan-cum-Return (ECR); failure to register or timely deposit monthly PF contributions can lead to severe financial penalties and legal action against company management.\n\nEligibility Criteria:\n• Mandatory Workforce Limit: Every factory or business establishment that employs twenty (20) or more individuals on any single day must register within 15 days of reaching this headcount.\n• Voluntary Option: Small businesses with less than 20 employees can opt for a voluntary PF registration to provide retirement benefits to their team and elevate corporate prestige.\n• Salary Ceiling: While registration applies to the whole entity, PF deductions are structurally mandatory for employees earning a basic salary of up to ₹15,000 per month.",
        highlights: ["Complete EPFO compliance", "Error-free monthly ECR returns", "Provident fund dispute resolution"],
        steps: [
          "Shram Suvidha Registration: We access the centralized Shram Suvidha unified labor portal, setting up your corporate account using an authorized signatory's Class 3 DSC or Aadhaar profile.",
          "Profile Setup & Code Allocation: Our corporate HR compliance team drafts the application, entering specific setup details, primary industrial classifications (NIC codes), and your active current bank details to obtain your unique 15-digit PF Establishment Code.",
          "Monthly ECR Generation & Filing: Every month, our team processes your payroll data, drafts the Electronic Challan-cum-Return (ECR), calculates the mandatory employer-employee contributions, and generates the online payment challan.",
          "Annual & Event-Based Compliances: We manage structural event-based updates, including generating Universal Account Numbers (UAN) for new hires, processing employee KYC verifications, handling online transfers, and executing exit regularizations."
        ],
        documents: [
          { name: "Entity Legal Data", desc: "Permanent Account Number (PAN) of the business entity, Certificate of Incorporation (COI), Registered Partnership Deed, or local Shop License, and active GST Registration Certificate and cross-matched office address proofs" },
          { name: "Promoter / Director Details", desc: "PAN Card and Aadhaar Card copies of all active directors, partners, or proprietors, and complete contact data including active mobile numbers and email addresses" },
          { name: "Workforce & Banking Details", desc: "Exact total headcount data along with monthly payroll/salary sheets, copy of a cancelled cheque or bank statement matching the entity's current account, and initial list of employee names, Aadhaar numbers, and dates of joining" }
        ],
        price: "1,999/mo"
      },
      {
        title: "ESI Filings",
        duration: "Monthly",
        tag: "MANDATORY" as const,
        desc: "Employer ESI code registration, monthly staff contribution filings, and health scheme benefit management.",
        longDesc: "Are you building an operational workforce, managing manufacturing plants, or running an office with multiple entry-level employees? Securing an ESIC (Employees' State Insurance Corporation) Registration and Filing framework is a mandatory statutory obligation under Indian social security laws. It provides a robust, state-backed health insurance and medical benefit framework for your team, protecting your business from immense workplace accident liabilities.\n\nThe ESIC ecosystem ensures that eligible employees and their dependents receive comprehensive medical care, maternity benefits, sick leave pay, and disability compensation. Employers must contribute a statutory percentage (3.25% of gross wages) of the monthly payroll, while employees contribute a fractional amount (0.75%) from their basic wages. All data, employee additions, and monthly financial contributions must be filed digitally via the ESIC portal before the 15th of every subsequent month.\n\nEligibility Criteria:\n• Mandatory Employee Baseline: Applicable to any commercial establishment, factory, or office that employs ten (10) or more individuals on any single day (this threshold is twenty in certain states).\n• Salary Threshold: Employees whose gross monthly salary is ₹21,000 or below are legally covered under this scheme.\n• Physical Coverage: The business premises must be located within an ESIC-implemented geographic zone or municipal territory.",
        highlights: ["Full ESIC compliance", "Employee IP number generation", "Avoid late fee penalties"],
        steps: [
          "Labor Portal Account Integration: We set up your corporate account on the unified Shram Suvidha / ESIC portal using your digital security keys or Aadhaar profiles.",
          "Employer Code Generation: We carefully draft the employer enrollment application, filling in precise operational details, business category classifications, and your current bank details to secure your permanent ESIC registration code.",
          "Monthly Workforce Filing & Challans: Every month, we upload your employee attendance and wage sheets to the portal, compute the dynamic monthly contributions, and generate the mandatory online payment challans before the monthly deadlines.",
          "Employee Onboarding & Temporary Cards: Our team manages the online registration of new employees, updates nomadic family health records, and generates their Temporary Identification Cards (TIC) so your team can access medical care instantly."
        ],
        documents: [
          { name: "Corporate Identity Info", desc: "Permanent Account Number (PAN) of the business entity and all promoters, Certificate of Incorporation (COI), dynamic Partnership Deed, or local Shop License, and a copy of a pre-printed cancelled cheque showing the exact corporate bank account" },
          { name: "Employee Operational Data", desc: "Complete list of working employees along with dates of birth and family structures, individual Aadhaar card copies and recent passport-size photographs of the team, and up-to-date monthly payroll breakdown and employee joining dates" },
          { name: "Premises Verification", desc: "Valid business address proof (Sale deed, Property tax bill, or Rent Agreement)" }
        ],
        price: "1,999/mo"
      },
      {
        title: "Professional Tax (PT) Registration & Filing",
        duration: "Monthly",
        tag: "MANDATORY" as const,
        desc: "State Professional Tax registration, monthly salary deductions, and local state tax department filings.",
        longDesc: "Are you expanding your business operations across multiple Indian states, opening regional branches, or employing professionals earning a salary? Securing a Professional Tax (PT) Registration and Filing infrastructure is an absolute statutory prerequisite. Regulated at the state government level under Article 276 of the Constitution of India, this tax is levied on professions, trades, callings, and employments.\n\nProfessional Tax compliance requires a dual-structured registration based on your business dynamic: Professional Tax Enrollment Certificate (PTEC), which authorizes the business entity itself to pay its annual tax, and Professional Tax Registration Certificate (PTRC), which mandates the employer to deduct tax from employees' monthly salaries and file returns.\n\nEligibility Criteria:\n• Employer Purview (PTRC): Every business entity that employs one or more individuals earning a salary above the minimum state-exempt slab must register for PTRC.\n• Corporate Entity Purview (PTEC): Every corporate entity, including Private Limited companies, LLPs, registered Partnerships, and Sole Proprietorships, must register for PTEC to clear their corporate tax liabilities.\n• Director/Partner Mandate: Individual directors, designated partners, and independent practicing consultants are individually liable to maintain active PT compliance.",
        highlights: ["State PT compliance assured", "Accurate salary deductions", "Timely state-wise filings"],
        steps: [
          "State-Specific Portal Configuration: We register your business on the respective state's commercial tax department portal based on your operational address.",
          "PTEC & PTRC Code Procurement: Our tax compliance experts draft and submit the localized application forms along with required property proofs to secure your PTEC and PTRC identification numbers.",
          "Salary Deduction & Monthly Retainer Filing: We audit your monthly payroll to execute accurate slab deductions and handle your monthly or annual PTRC returns.",
          "Annual PTEC Payment Settlement: We calculate your business's structural corporate PT liabilities and ensure the timely online payment of your annual PTEC fees to protect you from heavy late-filing interest penalties."
        ],
        documents: [
          { name: "Business Foundation Data", desc: "Certificate of Incorporation, Partnership Deed, or local Shop Act License, Permanent Account Number (PAN) card of the business entity and all directors, and current Bank Account Statement along with valid canceled cheque copies" },
          { name: "Employee & Payroll Data", desc: "Detailed list of employees along with state-specific gross salary breakdowns, and month-on-month staff payroll logs and active employee headcount metrics" },
          { name: "Address Proof", desc: "If Owned: Sale Deed / Property Tax Receipt / Recent Corporate Utility Bill. If Rented: Notarized Lease Contract accompanied by a recent utility bill" }
        ],
        price: "1,499/mo"
      },
      {
        title: "Labour Welfare Fund (LWF) Filings",
        duration: "Monthly",
        tag: "MANDATORY" as const,
        desc: "Periodic filings and contributions under State Labour Welfare Fund acts to support worker welfare.",
        longDesc: "Are you managing an enterprise with a growing employee base, running retail chains, or operating a manufacturing unit across implemented states? Maintaining active Labour Welfare Fund (LWF) Filings is an essential statutory labor law compliance metric. Operating under state-specific boards, this fund provides financial aid, health amenities, and welfare schemes to workers.\n\nThe LWF compliance architecture requires a joint financial contribution from both the employer and the employee, with the specific contribution ratios and filing frequencies (monthly, half-yearly, or annual) varying widely across state jurisdictions. Failure to compute or remit these funds can lead to severe audits by labor inspectors, blocking your corporate clean compliance certificates.\n\nEligibility Criteria:\n• State Implementation: The business premises or branch offices must be physically located within an Indian state that has enacted the Labour Welfare Fund Act.\n• Workforce Count Threshold: This compliance typically kicks in for establishments employing five (5) or more, or ten (10) or more individuals depending strictly on regional state rules.\n• Employee Exclusion Scope: Applies broadly to manual, clerical, and technical workers; however, managerial and highly paid supervisory personnel are often excluded based on state salary caps.",
        highlights: ["State-specific compliance check", "Deduct and file welfare dues", "Avoid statutory labor disputes"],
        steps: [
          "State LWF Board Mapping: We analyze your regional office locations and map your business to the correct state-specific Labour Welfare Fund Board portal.",
          "Slab Evaluation & Deduction Management: Our labor compliance experts review your payroll data during the respective state's contribution periods to extract the precise employee deductions and match them with the required employer share.",
          "Online Return Filing & Challans: We compile the required statutory data sheets, file the localized LWF returns online, and generate the electronic payment receipts before the state-mandated due dates.",
          "Statutory Audit Maintenance: We ensure that all historical LWF payment vouchers and employee deduction logs are systematically formatted, keeping your business ready for routine labor department inspection reviews."
        ],
        documents: [
          { name: "Entity Credentials", desc: "Copy of the main Shops & Establishment License, Factory License, or COI, Permanent Account Number (PAN) card and active GSTIN certificate of the firm, and registered EPF and ESIC establishment code allocations" },
          { name: "Payroll Records", desc: "Detailed employee payroll sheets indicating exact headcounts and designations, and month-on-month attendance records, gross salary metrics, and employee joining logs" }
        ],
        price: "999/mo"
      },
      {
        title: "POSH Compliance",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Establish POSH policies, draft internal guidelines, and form the Internal Complaints Committee (ICC).",
        longDesc: "Are you looking to build a secure, progressive, and highly respected workspace for your corporate team while satisfying strict statutory mandates? Setting up full POSH Compliance (Prevention of Sexual Harassment of Women at Workplace Act, 2013) is a non-negotiable legal requirement for every modern business entity in India.\n\nPOSH compliance requires businesses to establish a formal framework to address workplace harassment. This includes drafting an explicit internal gender-neutral policy, setting up a mandatory Internal Committee (IC) to handle grievances, organizing regular employee sensitization workshops, and filing an annual compliance report with district officers.\n\nEligibility Criteria:\n• Internal Committee (IC) Mandate: Every corporate office or branch with ten or more employees must form an Internal Committee to handle harassment complaints.\n• External Member Integration: The IC must be headed by a senior woman employee and must include an independent external member (such as an experienced NGO representative or legal expert specialized in POSH).\n• Annual Filing Obligation: The entity must compile and submit an annual progress report detailing the number of cases received, actions taken, and awareness workshops conducted to the District Officer.",
        highlights: ["Legal anti-harassment policy", "Mandatory ICC establishment format", "Annual POSH compliance report filing"],
        steps: [
          "POSH Policy Drafting & IC Setup: Our corporate lawyers draft a comprehensive, compliant POSH policy for your company and assist you in selecting and appointing the required members for your Internal Committee.",
          "External Member Tie-Up: We connect your business with certified, experienced external POSH experts to fulfill your statutory IC composition mandates.",
          "Employee Sensitization & Training Workshops: We organize mandatory, interactive awareness and sensitization training modules for your employees and leadership team to ensure widespread workplace alignment.",
          "Annual Reporting & External Filing: Every calendar year, we audit your IC's activities, draft the mandatory Annual POSH Report, and assist in filing it with the local District Officer to keep your entity fully compliant."
        ],
        documents: [
          { name: "Policy & Committee Blueprints", desc: "Customized POSH Workplace Policy Document tailored to your company culture, formal Constitution Matrix of the Internal Committee (IC) with official order letters, and Bio data and written consent forms of the designated External Member" },
          { name: "Training & Report Assets", desc: "Documentation of regular employee training sessions and leadership sensitization logs, standardized formats for filing complaints, maintaining minutes, and case tracking, and Annual POSH Compliance Report draft prepared for submission to the local authorities" }
        ],
        price: "5,999"
      },
      {
        title: "Maintenance of Statutory Registers",
        duration: "Ongoing",
        tag: "RECOMMENDED" as const,
        desc: "Digitally maintaining mandatory labor registers (wages, attendance, fines, overtime) as per labor rules.",
        longDesc: "Are you running a registered company, managing factories, or operating corporate offices that face regular labor department audits? Systematically organizing the Maintenance of Statutory Registers is an absolute operational necessity under Indian labor laws.\n\nGoverned under various central acts—such as the Minimum Wages Act, Payment of Wages Act, Contract Labour Act, and state-specific Shop Act guidelines—these registers act as the primary evidence of compliance during a labor inspector's visit. Our firm transitions your compliance ecosystem into a perfectly formatted digital structure.\n\nEligibility Criteria:\n• Register of Wages / Muster Roll: Combines daily employee attendance logs with comprehensive wage calculations, deductions, and net payouts.\n• Register of Fines & Deductions: Records any operational deductions made from employee salaries, ensuring they stay within legal limits.\n• Register of Overtime & Leave Accounts: Tracks overtime hours worked, applicable premium wages, and accurate employee leave allocations (earned, casual, and sick leaves).",
        highlights: ["Labor audit-ready books", "Compliant registers formats", "Saves time on manual records"],
        steps: [
          "Labor Law Mapping & Framework Setup: We review your business category, headcount, and state location to map the exact set of statutory registers your entity is legally required to maintain.",
          "Digital Register Configuration: Our compliance team designs and configures your digital statutory registers, linking them with your active HRMS or payroll tools to ensure seamless tracking.",
          "Periodic Maintenance & Verification: We execute continuous monthly reviews of your muster rolls, wage registers, leave trackers, and overtime records to eliminate compliance mismatches.",
          "Audit Readiness & Inspector Facing: We ensure your entire historical register stack is up to date, accurately signed, and formatted to easily pass unexpected labor department audits and inspections."
        ],
        documents: [
          { name: "Master Employee Metadata", desc: "Full list of workers along with employee codes, Aadhaar, PAN, emergency contact details, official appointment letters, employment contracts, and exact dates of joining/exit" },
          { name: "Operational & Payroll Inputs", desc: "Monthly attendance logs, shift rosters, approved overtime records, and comprehensive salary sheets outlining basic pay, allowances, and statutory deductions (PF/ESI)" }
        ],
        price: "2,499/mo"
      },
      {
        title: "Labour Law Advisor",
        duration: "Ongoing",
        tag: "RECOMMENDED" as const,
        desc: "Professional advisory on complex labor disputes, industrial relations, wages, and trade union issues.",
        longDesc: "Are you managing a rapidly growing corporate enterprise, executing complex restructuring, or handling tricky employee relations? Appointing a dedicated Labour Law Advisor is your ultimate strategic asset to prevent major legal issues.\n\nIndian labor regulations are complex, and with the rolling out of the new consolidated Labour Codes, having a specialized legal advisor is essential to protect your business from major non-compliance fines, labor court disputes, and operational disruptions. Our service operates as an extension of your leadership and internal HR teams.\n\nEligibility Criteria:\n• New Labour Codes Transition: Guiding your business through transitions into the new unified Labor Codes (Wages, Social Security, Industrial Relations, and Occupational Safety).\n• Compliance Health Audits: Conducting deep-dive corporate audits to identify compliance gaps in your payroll, contractor management, and onboarding workflows.\n• Dispute Resolution & Legal Representation: Crafting formal legal responses to show-cause notices from labor departments and representing your business interests during conciliation proceedings.",
        highlights: ["Experienced labor law lawyers", "Minimize employee legal disputes", "Optimize CTC compliance structures"],
        steps: [
          "Initial Compliance Health Check: We execute a comprehensive compliance audit across all your operational branches, identifying areas of high regulatory or financial risk.",
          "Policy Realignment & Standard Drafting: Our labor lawyers update your internal employment policies, contractor agreements, and salary structures to ensure complete legal alignment.",
          "Daily Consultation & Notice Management: We provide your management team with immediate access to expert legal counsel for daily operational questions, employee issues, and handling official government communications.",
          "Strategic Audit Reports & Continuous Updates: We conduct periodic compliance reviews and provide your executive board with detailed risk reports and strategies to protect your business as labor laws evolve."
        ],
        documents: [
          { name: "Corporate Foundation Files", desc: "Active Certificate of Incorporation, Partnership Deeds, main Trade Licenses, and current state-specific corporate tax filings and compliance certificates (PF, ESI, PT)" },
          { name: "Internal HR & Vendor Blueprints", desc: "Standard Employee Handbook, Onboarding Templates, Non-Disclosure Agreements, and Master service agreements with third-party vendors and manpower supply contractors" }
        ],
        price: "4,999/mo"
      }
    ]
  },
  {
    id: "taxation",
    name: "Taxation Services",
    services: [

      {
        title: "Income Tax Filing (ITR-1 to ITR-7)",
        duration: "3 days",
        tag: "POPULAR" as const,
        desc: "Accurate filing of annual income tax returns for individuals, partnerships, companies, and trusts.",
        longDesc: "Every individual, Hindu Undivided Family (HUF), corporate firm, and legal entity earning an income in India is required to report their earnings annually to the Income Tax Department. Income Tax Filing involves submitting the correct form—ranging from ITR-1 to ITR-7—based on the nature of your income, financial volume, and legal structure, ensuring absolute compliance with the Income Tax Act, 1961.\n\nFiling your Income Tax Return (ITR) before the statutory deadlines is not just a legal obligation; it is a prerequisite for maintaining financial credibility. A clean track record of ITR filings is mandatory when applying for corporate bank loans, seeking premium credit lines, routing foreign remittances, or processing international visa applications.\n\nForm Classifications:\n• ITR-1 (Sahaj): For resident individuals having income from salaries, one house property, or other sources with a total income up to ₹50 Lakhs.\n• ITR-2: For individuals and HUFs not having income from profits and gains of business or profession (capital gains, foreign assets, etc.).\n• ITR-3: For individuals and HUFs earning income from a proprietary business or carrying out a profession (consultants, freelancers, traders).\n• ITR-4 (Sugam): For individuals, HUFs, and firms opting for the Presumptive Taxation Scheme under Sec 44AD/44ADA/44AE with business turnover up to ₹2 Crores.\n• ITR-5: For partnership firms, Limited Liability Partnerships (LLPs), Association of Persons (AOPs), and Body of Individuals (BOIs).\n• ITR-6: For companies incorporated under the Companies Act (other than companies claiming exemption under Section 11).\n• ITR-7: For persons, trusts, political parties, and institutions required to file returns under Sections 139(4A) to 139(4D) (NGOs and charitable trusts).",
        highlights: ["Avoid late filing penalties", "Crucial for visa/loan approval", "Optimize tax liability deductions"],
        steps: [
          "Data Gathering & Tax Profile Mapping: We compile your financial data from bank statements, investment receipts, and asset purchase files. We then cross-verify this data against your official AIS, TIS, and Form 26AS profiles.",
          "Tax Liability Computation: Our tax consultants compute your total gross income, apply available deductions under the appropriate tax regime, and calculate your exact net tax liability or tax refund.",
          "Form Selection & Schema Preparation: We select the correct ITR form matching your entity type and draft the digital return schema, ensuring complete disclosure of domestic and foreign assets.",
          "Filing & e-Verification: The prepared return is uploaded directly onto the centralized Income Tax e-filing portal. We complete the mandatory electronic verification via Aadhaar OTP or Digital Signature Certificate (DSC)."
        ],
        documents: [
          { name: "Salary & Personal Income Data", desc: "Form 16 (Part A & Part B) issued by the employer, Annual Information Statement (AIS) and Taxpayer Information Summary (TIS), and Form 26AS highlighting tax credits and advance tax payments" },
          { name: "Business & Banking Data", desc: "Audited or compiled Balance Sheet and Profit & Loss Statement (for ITR-3, 5, 6), comprehensive bank statements for the entire financial year for all active accounts, and asset-liability logs, capital accounts, and major vendor ledgers" },
          { name: "Investment & Capital Gains", desc: "Capital gains tax statements from stockbrokers, mutual fund houses, or property sale deeds, and tax-saving investment receipts under Section 80C, 80D, 80G, etc." }
        ],
        price: "999"
      },
      {
        title: "Income Tax Assessment",
        duration: "15 days",
        tag: "STANDARD" as const,
        desc: "Handling and representing your business in formal income tax scrutiny and assessments under Section 143(3).",
        longDesc: "An Income Tax Assessment is the formal process by which the Income Tax Department reviews and verifies the validity of the return filed by a taxpayer. Governed under various sections of the Income Tax Act, 1961, an assessment checks for completeness, catches under-reported income or excessive deduction claims, and determines the final tax liability or refund due.\n\nAssessments can range from automated electronic processing to deep-dive manual reviews. Navigating an assessment requires an expert understanding of changing tax laws, proper accounting practices, and clear evidence mapping to satisfy the questions raised by the Assessing Officer (AO).\n\nAssessment Framework:\n• Summary Assessment (Section 143(1)): An automated, electronic processing of the filed ITR. The portal checks for arithmetical errors and incorrect tax claims, sending an automated 'Intimation' sheet.\n• Scrutiny Assessment (Section 143(3)): A detailed, face-to-face or faceless review where the case is selected for a thorough audit. The taxpayer is required to provide complete books of accounts.\n• Best Judgment Assessment (Section 144): Initiated if the taxpayer fails to file their return, respond to notices, or produce books. The Assessing Officer computes the tax liability based on available data.\n• Income Escaping Assessment (Section 147): Initiated if the Assessing Officer has reason to believe that any taxable income has escaped assessment in previous financial years, re-opening historical cases.",
        highlights: ["Scrutiny assessment representation", "Ledger reconciliation checks", "Avoid tax inflation assessments"],
        steps: [
          "Notice Analysis & Scope Mapping: We review the formal assessment notice to identify the exact transactional variations or risk parameters flagged by the department's algorithms.",
          "Reconciliation & Evidence Compilation: Our tax defense experts reconcile your internal ledgers, banking lines, and invoicing registers, preparing a robust file of supporting evidence.",
          "Drafting Submissions & Legal Backing: We draft professional, comprehensive written responses to the Assessing Officer, backing our explanations with relevant case laws and past CBDT circulars.",
          "Portal Upload & Order Tracking: We submit the entire evidence file through the government's online portal. We track your case through subsequent queries until the final Assessment Order is issued."
        ],
        documents: [
          { name: "Accounting Records", desc: "Complete books of accounts, including general ledgers, cash books, bank books, itemized sales register, purchase invoices, business expense vouchers, and inventory valuation certificates with physical stock-taking logs" },
          { name: "Tax Certificates", desc: "Direct correlation charts linking the audited balance sheet numbers to the filed ITR fields, complete copies of TDS certificates (Form 16/16A), and advance tax payment receipts" },
          { name: "Financial Declarations", desc: "Copy of the formal notice received from the tax department under Section 143(2) or 142(1), and written legal submissions with cross-matched expense explanations" }
        ],
        price: "9,999"
      },
      {
        title: "Income Tax Notice Handling & Resolution",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Expert drafting and representation in response to notices received for mismatch, under-reporting, or default.",
        longDesc: "Receiving an official communication from the Income Tax Department can feel stressful, but most Income Tax Notices are simply standard requests for clarification driven by automated data matching. Handling the notification properly and within state-mandated timelines is critical to preventing severe financial penalties, asset freezes, or prosecution.\n\nThe department matches your ITR disclosures against third-party data reporting channels (like banks, credit card firms, and sub-registrar offices). Any variation can trigger an automated system alert. Our specialized notice resolution service steps in to draft clear, legally sound responses that resolve these disputes smoothly.\n\nKey Classifications:\n• Section 139(9) (Defective Return Notice): Issued if the return is filed with structural omissions, such as mismatched tax audit details, missing schedules, or unpaid self-assessment taxes.\n• Section 142(1) (Inquiry Notice): A formal directive asking the taxpayer to produce specific documents, accounts, or file their return if they have missed the deadline.\n• Section 143(1)(a) (Prima Facie Adjustments): An automated notice identifying clear variations or mismatches between the income reported in your ITR and data appearing in Form 26AS or AIS.\n• Section 148 (Income Escaping Assessment Notice): A serious legal notice issued when the department has solid evidence that taxable income was left un-reported in previous years.",
        highlights: ["Notice verification & analysis", "Expert legal drafting response", "Avoid heavy penalty escalations"],
        steps: [
          "DIN Authentication & Classification: We verify the authenticity of the notice via the e-filing portal using its unique Document Identification Number (DIN) and assess the level of legal risk involved.",
          "Data Gaps Auditing: Our tax experts analyze the variations between your filed return and the data flagged by the department's systems.",
          "Drafting Legal Explanations: We write a formal, structured response providing a clear explanation for each flagged transaction, backing our response with relevant banking logs and property records.",
          "Portal Submission & Resolution Tracking: We upload the legal response and supporting files onto the income tax portal within the mandated response window. We monitor your case status until the department accepts the explanation."
        ],
        documents: [
          { name: "Notice Metadata", desc: "Complete copy of the original notice showing the unique Document Identification Number (DIN), and copy of the original ITR acknowledgment receipt and ITR form schema for that year" },
          { name: "Financial Proofs", desc: "Comprehensive bank account statements explaining the source of high-value deposits, real estate purchase/sale deeds, asset valuation reports, or loan disbursement cards, and Form 26AS, AIS, TIS, and internal accounting ledger books matching the notice period" }
        ],
        price: "3,499"
      },
      {
        title: "TDS and TCS Return Filing",
        duration: "Quarterly",
        tag: "MANDATORY" as const,
        desc: "Quarterly filing of Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) returns.",
        longDesc: "To ensure steady, continuous tax collection throughout the financial year, the government leverages two regulatory mechanisms: Tax Deducted at Source (TDS) and Tax Collected at Source (TCS). Entities making specific payments must deduct a percentage of tax at the source and remit it to the government. Similarly, sellers of specified high-value goods must collect tax from buyers.\n\nEvery deductor and collector must file quarterly TDS/TCS returns using specialized forms (Form 24Q, 26Q, 27Q, or 27EQ) to pass tax credits to the respective beneficiaries. Failure to file on time or deducting tax at incorrect rates can lead to severe late-filing fees (₹200 per day under Section 234E), high interest penalties, and expense disallowance.\n\nForm Classifications:\n• Form 24Q: Quarterly return for tax deducted at source from Salary payments made to employees.\n• Form 26Q: Quarterly return for tax deducted at source on Non-Salary domestic payments (professional fees, rent, etc.).\n• Form 27Q: Quarterly return for tax deducted at source on payments made to Non-Resident Indians (NRIs) or foreign corporations.\n• Form 27EQ: Quarterly return detailing Tax Collected at Source (TCS) on specified items like scrap sales, liquor sales, or car purchases above ₹10 Lakhs.",
        highlights: ["Avoid late filing fees", "Accurate PAN validations", "Form 16/16A generation support"],
        steps: [
          "Challan Mapping & Verification: We extract and verify all your monthly ITNS 281 challans from the databases, ensuring the tax deposited matches your internal accounts perfectly.",
          "PAN Validation & Slab Extraction: Our data engines run automated validations against the deductees' PAN cards to confirm active status and check that correct deduction rates were applied.",
          "Drafting the Return via FVU Engine: We compile your transaction data into the standard electronic format, run it through the government's File Validation Utility (FVU) tool, and resolve any structural errors.",
          "Filing Submission & Certificate Generation: We submit your validated TDS/TCS file to the central registry. Once processed, we generate your official Form 16 / 16A / 27D Certificates to distribute to your team."
        ],
        documents: [
          { name: "Entity Setup Base", desc: "Valid 10-digit Tax Deduction and Collection Account Number (TAN) of the deductor, and Permanent Account Number (PAN) of the business entity and the authorized signatory" },
          { name: "Transaction & Challan Data", desc: "Paid ITNS 281 Challan receipts featuring unique BSR codes, challan serial numbers, and payment dates, and consolidated monthly statement mapping deductor transactions to individual PANs" },
          { name: "Deductee Profiles", desc: "Complete list of deductees with their correct PAN cards, gross transaction values, and date of payments" }
        ],
        price: "1,499"
      },
      {
        title: "Revised ITR Return / Updated Return (ITR-U)",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "File updated returns (ITR-U) to correct errors, declare missed income, and avoid tax notices.",
        longDesc: "What happens if you accidentally leave out an active source of income, claim an incorrect deduction, or discover your Income Tax Return has already been filed and processed? The Income Tax Act provides two distinct pathways to correct your tax records: filing a Revised Return (Section 139(5)) for recent errors, or filing an Updated Return (ITR-U under Section 139(8A)) to correct errors in returns up to two years old.\n\nFiling an updated return (ITR-U) allows taxpayers to voluntarily correct their tax filings and avoid severe penalties. ITR-U can be used to report additional income, correct tax slab selections, or reduce a previously claimed refund, provided the update results in a payment of additional tax.\n\nAssessment Framework:\n• Revised Return (Section 139(5)): Can be filed at any time before December 31st of the assessment year, allowing you to correct any type of error with zero additional penalty.\n• Updated Return (ITR-U): Can be filed within twenty-four (24) months from the end of the relevant assessment year, requiring the payment of an additional tax penalty (25% or 50% additional tax fee).\n• Exclusion Constraints: ITR-U cannot be filed if it results in a net loss return, increases your tax refund amount, or reduces overall tax liability. It is also unavailable during active tax audits/searches.",
        highlights: ["Correct past errors legally", "Filing allowed up to 24 months", "Avoid re-assessment notices"],
        steps: [
          "Error Analysis & Eligibility Review: We review your original ITR filing against your financial statements to identify omissions and ensure your case meets the legal conditions for a Revised Return or an Updated ITR-U return.",
          "Recalculating Tax Liabilities: We update your financial model, calculate your new gross total income, incorporate the missing revenue elements, and determine your final tax balance along with interest.",
          "Processing Additional Tax Payments: We help you generate the correct payment challans to clear any additional tax dues and statutory penalties via the online portal.",
          "Filing the Updated Return Scheme: We draft the corrected return file, choose the appropriate revision/update section codes, and upload the return onto the Income Tax portal, validating with a Class 3 DSC."
        ],
        documents: [
          { name: "Original Filing Context", desc: "Copy of the original ITR filing acknowledgment receipt showing the 15-digit E-filing Acknowledgement Number, and copy of the past processed return schema along with any Section 143(1) intimation sheets" },
          { name: "New Financial Data", desc: "Corrected bank statements, revised profit & loss books, or missing capital gains statements, and comprehensive AIS, TIS, and Form 26AS profiles matching the target financial year" },
          { name: "Tax Clearance Proofs", desc: "Fresh Challan ITNS 280 payment receipts clearing the additional tax liabilities along with the mandatory 25% or 50% ITR-U statutory penalties" }
        ],
        price: "2,499"
      },
      {
        title: "GST New Registration",
        duration: "3 days",
        tag: "RECOMMENDED" as const,
        desc: "Mandatory tax registration for selling goods and services online or exceeding turnover limits.",
        longDesc: "Are you looking to expand your business horizons, sell your products across state lines, onboard onto e-commerce platforms, or have your business turnover cross national limits? Securing a GST (Goods and Services Tax) Registration is your mandatory structural step. This single, unified 15-digit registration number integrates your business into India's national value chain.\n\nOperating an eligible business without an active GSTIN number can lead to severe financial penalties and operational shutdowns. Our expert onboarding service handles the entire application process on the centralized GST common portal, helping you secure your registration smoothly and avoid rejections or delays.\n\nAssessment Framework:\n• Service Providers: Mandatory registration kicks in if your annual aggregate turnover crosses ₹20 Lakhs (or ₹10 Lakhs for North-Eastern states).\n• Goods Suppliers: Mandatory registration applies if your annual aggregate turnover crosses ₹40 Lakhs (or ₹20 Lakhs for specialized state categories).\n• Compulsory Registration Cases: Turnover limits are entirely waived if your business engages in inter-state sales, operates an e-commerce portal, acts as an ISD, or falls under the Reverse Charge Mechanism (RCM).",
        highlights: ["Allows inter-state sales", "Avail input tax credits", "Legally invoice customers"],
        steps: [
          "TRN Generation & Profile Setup: We access the centralized GST portal to complete Part-A of the registration, validating your business PAN, email address, and mobile numbers to secure a Temporary Reference Number (TRN).",
          "Compiling Part-B Application: We log in using the TRN to draft the comprehensive Part-B application, mapping your precise HSN codes or SAC codes and uploading all property deeds.",
          "Aadhaar Authentication Linkage: We initiate the mandatory online Aadhaar Authentication link for the primary promoters, allowing for fast-track verification and bypassing initial physical site inspections.",
          "Clarification Resolution & GSTIN Issuance: We track your application. If the tax officer raises an inquiry (Form GST REG-03), we draft and file a prompt response (REG-04) to secure your official GST Registration Certificate."
        ],
        documents: [
          { name: "Entity Foundation Info", desc: "Permanent Account Number (PAN) card of the business entity or individual proprietor, Certificate of Incorporation (COI), registered Partnership Deed, or LLP Agreement, and Passport-size photographs and PAN/Aadhaar cards of all active promoters/directors" },
          { name: "Business Address Proof", desc: "If Owned: Registered Sale Deed / Property Tax Receipt / Recent Corporate Utility Bill. If Rented: Notarized Rent Agreement, latest utility bill (Electricity/Water), and a signed landlord No Objection Certificate (NOC)" },
          { name: "Banking Data", desc: "Copy of a pre-printed cancelled cheque or bank statement showing the exact legal name, account number, and valid IFSC details" }
        ],
        price: "1,499"
      },
      {
        title: "GST Filings (GSTR-1, GSTR-3B & CMP-08)",
        duration: "3 days",
        tag: "MANDATORY" as const,
        desc: "Monthly, quarterly, and annual return filings (GSTR-1, GSTR-3B) to keep your GST status active.",
        longDesc: "Securing your GSTIN is just the first step; maintaining regular, timely GST Filings is an ongoing operational requirement for every registered business in India. Under the dual GST framework, businesses must regularly declare their outward sales distributions, record inbound purchases eligible for tax credits, and remit collected indirect taxes.\n\nMissing GST filing deadlines can lead to daily late fees, cumulative interest penalties, and the blocking of your E-Way Bill generation portal. More importantly, delayed filings can cause your clients to lose out on their Input Tax Credits (ITC), which can quickly damage your corporate reputation.\n\nForm Classifications:\n• GSTR-1 (Outward Supplies Return): A monthly or quarterly return detailing all your outbound business-to-business (B2B) and business-to-consumer (B2C) sales invoices, debit notes, and credit notes.\n• GSTR-3B (Summary Self-Assessment Return): A mandatory monthly summary return used to declare total sales value, claim available Input Tax Credit (ITC) from GSTR-2B logs, and pay net GST dues online.\n• Form CMP-08: A simple quarterly statement used by small traders registered under the Composition Scheme to declare total turnover and pay a flat percentage of tax.",
        highlights: ["Clean compliance record", "Pass tax credits to clients", "Timely interest savings"],
        steps: [
          "Invoice Formatting & Data Check: Every month or quarter, our compliance team reviews your sales registers, formats the data into standard schemas, and cross-checks details to eliminate layout errors.",
          "ITC Reconciliations: We perform a thorough digital reconciliation, matching your inbound purchase ledgers against your official GSTR-2B statement to identify missing vendor uploads and maximize your valid ITC claims.",
          "Form GSTR-1 Drafting & Portal Upload: We upload your outward sales data to the GST portal, map the invoices to the correct client GSTINs, and file your GSTR-1 return using secure e-verification tools.",
          "Tax Calculation & GSTR-3B Submission: We calculate your final net GST liability by offsetting your collected sales tax against your verified input tax credits, handle payments, and file your summary GSTR-3B return."
        ],
        documents: [
          { name: "Outward Sales Invoices", desc: "Itemized sales register containing tax invoices, B2B distributions, and B2C sales totals, along with detailed logs of HSN/SAC codes, applicable tax rates (5%, 12%, 18%, 28%), and total tax collected" },
          { name: "Inward Purchase Ledgers", desc: "Inward purchase register detailing raw materials sourced or business assets purchased, and reconciled GSTR-2B / 2A data logs extracted from the portal to verify valid ITC claims" },
          { name: "Payment Records", desc: "Corporate bank statement history showing tax payment logs and active electronic cash ledger balances" }
        ],
        price: "799"
      },
      {
        title: "GST Annual Return (GSTR-9 & GSTR-9C)",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "Filing GSTR-9 (Annual return) and GSTR-9C (Reconciliation statement) for GST compliance.",
        longDesc: "At the close of every financial year, the GST department requires registered taxpayers to file a comprehensive summary statement known as the GST Annual Return (GSTR-9), often accompanied by a self-certified reconciliation statement (GSTR-9C). This process acts as a final year-end consolidation.\n\nFiling the GST Annual Return requires careful accounting reconciliation, as it pulls data from your audited balance sheets, GSTR-1 filings, GSTR-3B submissions, and Input Tax Credit books. Failing to complete this year-end filing on time can trigger significant automatic late fees and audit risks.\n\nAssessment Framework:\n• Form GSTR-9: The standard annual return form that must be filed by all regular taxpayers. Mandatory for entities with an annual aggregate turnover above ₹2 Crores in a financial year.\n• Form GSTR-9C: A specialized reconciliation statement matching figures in your audited annual balance sheet against values reported in your GSTR-9 return. Mandatory above ₹5 Crores turnover.",
        highlights: ["Complete annual reconciliation", "Audit Input Tax Credit records", "Avoid audit notices and interest dues"],
        steps: [
          "Multi-Layered Data Reconciliation: Our indirect tax experts execute a complete, three-way data reconciliation matching your Audited Books vs. GSTR-1 vs. GSTR-3B to catch any variations.",
          "Input Tax Credit Vetting: We perform a thorough audit of your annual input tax credits, matching purchase ledgers against portal records to identify unclaimed credits or catch ineligible ITC that needs reversal.",
          "Drafting Form GSTR-9 & 9C: We compile your consolidated data into the annual return forms, accounting for any delayed tax payments made via Form DRC-03 during the year.",
          "Portal Verification & Final Submission: The completed annual forms are reviewed with your financial leadership team, signed using a Class 3 DSC, and uploaded onto the GST common portal."
        ],
        documents: [
          { name: "Year-End Financial Books", desc: "Audited Balance Sheet, Profit & Loss Statement, and Trial Balance for the financial year, and complete copies of the statutory Tax Audit Report (Form 3CD) if applicable" },
          { name: "Consolidated Return Logs", desc: "Full history of GSTR-1 and GSTR-3B returns filed for the targeted financial year, and annual GSTR-2A and GSTR-2B ledger logs highlighting total available tax credits" },
          { name: "Reconciliation Sheets", desc: "Internal reconciliation registers cross-matching your accounting ledger sales against your filed GST return values" }
        ],
        price: "4,999"
      },
      {
        title: "GST Cancellation and Revocation",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Legal surrender of GST registration or revocation of suspended GSTIN numbers.",
        longDesc: "If your registered business has shut down its operations, underwent a legal restructure, or no longer meets legal turnover thresholds, keeping an un-used GSTIN active can create unnecessary compliance costs. Executing a formal GST Cancellation is the clean legal mechanism used to close out your tax profile safely.\n\nConversely, if the GST department has unilaterally suspended or cancelled your registration due to a failure to file returns for consecutive tax periods, we initiate a fast-track Revocation of Cancellation process. This service involves filing Form GST REG-21 within the mandated timelines to restore your registration.\n\nAssessment Framework:\n• Cancellation by Taxpayer (Voluntary): Initiated via Form GST REG-16 when a business is closing down, changing its structure, or selling operations, requiring a final settlement of tax on remaining inventory.\n• Suo-Motu Cancellation (By Tax Officer): Triggered if a regular taxpayer fails to file returns for a continuous period of six months, resulting in an immediate block on business operations.\n• Revocation Window: A formal application to reverse a department cancellation must be filed within ninety (90) days from the date the cancellation order was served.",
        highlights: ["Close registration legally", "Revoke department suspensions", "Avoid penal actions"],
        steps: [
          "Voluntary Cancellation Filing (REG-16): We audit your remaining business stock, calculate input tax credit reversals on inventory, prepare final filings, and submit Form GST REG-16.",
          "Filing Final Return Form GSTR-10: Within three months of a voluntary cancellation order, we draft and file your mandatory Final Return (GSTR-10) to formally conclude your indirect tax profile.",
          "Suo-Motu Defense & Revocation Application: For department-cancelled profiles, we identify filing gaps, calculate outstanding late fees, and file Form GST REG-21 to request formal restoration.",
          "Officer Clarification Resolution: We coordinate directly with the regional tax office, responding promptly to any notices (REG-23) to secure an order restoring your profile to an 'Active' status."
        ],
        documents: [
          { name: "Corporate Identity Info", desc: "Valid GSTIN registration credentials, primary PAN card, business foundation files, and identity/address proof documents of the primary authorized director or partner" },
          { name: "Financial & Inventory Logs", desc: "Detailed list of remaining raw material stock, semi-finished goods, and capital assets held on the cancellation date, along with calculation sheets showing input tax credit reversal values" },
          { name: "For Revocation Cases", desc: "Official copy of the department's cancellation order (Form GST REG-17 / REG-19), and receipt copies showing payment of all past overdue taxes, late fees, and interest penalties" }
        ],
        price: "2,499"
      },
      {
        title: "GST Notice Handling & Resolution",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Drafting responses and representing your business in GST notices for ITC mismatches, audit, or default.",
        longDesc: "As the GST department increasingly leverages automated machine learning algorithms to audit tax compliance, businesses face a growing number of automated GST Notices. Handling these communications quickly and accurately is essential to protecting your business from heavy fines, asset freezes, and disruptions.\n\nFailing to respond to a GST notice within the mandated timelines can lead to a unilateral tax demand order, unexpected asset attachments, and the suspension of your GSTIN. Our dedicated notice resolution service steps in to perform a deep-dive analysis of your data and draft clear legal responses.\n\nKey Classifications:\n• Form GST ASMT-10 (Scrutiny Notice): Issued by a tax officer to highlight variations or mismatches between your GSTR-1 sales data, GSTR-3B filings, and portal-generated GSTR-2B credit logs.\n• Form GST DRC-01 / SCN (Show Cause Notice): A formal legal notice outlining a proposed tax demand, interest calculations, and penalty charges, requiring a robust written legal response.\n• Form GST REG-03 (Registration Clarification Notice): Issued during the initial application phase if a tax officer finds defects, missing descriptions, or unverified property documents in your registration file.",
        highlights: ["Expert ITC reconciliation", "Advocate-vetted replies", "Avoid tax demand inflations"],
        steps: [
          "Notice Analysis & Scope Mapping: We perform a thorough review of the notice to pinpoint the exact transaction discrepancies or input tax credit variations flagged by the systems.",
          "Reconciling Data Discrepancies: Our indirect tax experts cross-match your internal sales registers, purchase ledgers, and portal logs to identify the root cause of the discrepancy.",
          "Drafting Legal Explanations: We write a formal, structured response providing a clear explanation for each flagged transaction, backing arguments with relevant statutory guidelines and circulars.",
          "Filing Form Replies & Case Closure: We file your formal response online (using forms like ASMT-11) and track your case status through subsequent hearings until the tax officer officially closes the file."
        ],
        documents: [
          { name: "Notice Metadata", desc: "Complete copy of the original notice showing its unique Reference Number and Date, and filed copies of the GSTR-1, GSTR-3B, and GSTR-9 returns matching the notice period" },
          { name: "Data Reconciliation Sheets", desc: "Comprehensive GSTR-1 vs GSTR-3B and GSTR-3B vs GSTR-2B reconciliation registers, and itemized sales ledgers, e-way bill transaction summaries, and matching tax invoice files" },
          { name: "Property & Legal Credentials", desc: "Legitimate property deeds, updated rent agreements, and valid Class 3 DSC tokens" }
        ],
        price: "4,999"
      }
    ]
  },
  {
    id: "mca-corporate",
    name: "MCA & Corporate Services",
    services: [
      {
        title: "Company, LLP & OPC Compliance Management",
        duration: "5 days",
        tag: "MANDATORY" as const,
        desc: "Mandatory annual filing of financial statements and returns with the Registrar of Companies.",
        longDesc: "Running a registered corporate entity in India requires strict adherence to annual statutory timelines managed by the Ministry of Corporate Affairs (MCA). Annual Compliance Management is a comprehensive service designed to ensure your Private Limited Company, Limited Liability Partnership (LLP), or One Person Company (OPC) remains active, highly credible, and completely free from heavy late-filing penalties or threat of striking-off by the Registrar of Companies (RoC).\n\nFor companies, this includes executing mandatory annual board meetings, drafting financial statements, and filing forms like AOC-4 (Financial Statements) and MGT-7 (Annual Return) every financial year. For LLPs, it involves the submission of Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return). Maintaining up-to-date annual filings is an absolute prerequisite to attracting venture capital investment, securing bank credit lines, and protecting the limited liability status of your business promoters.\n\nEligibility Criteria:\n• Active Corporate Status: The company, LLP, or OPC must hold an \"Active\" status on the MCA portal (not currently struck off or in liquidation).\n• Director/Partner Verifications: All active directors must complete their annual DIR-3 KYC verification, and designated partners must maintain verified credentials.\n• Financial Reporting Base: The entity must compile its books of accounts, balance sheets, and profit & loss statements at the close of every financial year (ending March 31st).",
        highlights: ["Maintain active company status", "Avoid high daily penalties", "Build corporate transparency"],
        steps: [
          "Financial Vetting & Auditor Coordination: We assist your accounting teams in organizing raw ledger accounts, balancing sheets, and coordinating with statutory auditors to secure your formal Auditor's Report.",
          "Secretarial Drafting & Approvals: Our corporate secretarial experts draft the mandatory Director's Report, notice of Annual General Meeting (AGM), and official board resolutions to validate your annual corporate proceedings.",
          "Form Packaging & DSC Authentication: We compile your audited numbers into specialized MCA forms (AOC-4, MGT-7, Form 8, or Form 11), perform pre-scrutiny checks, and authenticate them using the directors' Class 3 DSC keys.",
          "RoC Filing & Corporate Maintenance: We upload the completed form stack directly to the MCA portal, clear the required government filing fees, track processing milestones, and deliver the formal corporate approval receipts."
        ],
        documents: [
          { name: "Financial & Accounting Data", desc: "Audited Balance Sheet and Profit & Loss Statement for the financial year, and Director's Report, Auditor's Report, and corporate cash flow statements" },
          { name: "Corporate Credentials", desc: "Certificate of Incorporation (COI), active PAN card, updated MOA & AOA, and valid Class 3 Digital Signature Certificates (DSC) for all authorized directors/partners" },
          { name: "Operational Trackers", desc: "Fixed assets registers, dynamic bank current account statements, major loan ledgers, and up-to-date registers of board meetings, annual general meetings (AGM), and share allocations" }
        ],
        price: "3,499"
      },
      {
        title: "Change of Company Name",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "Complete corporate name change process including MCA approval and alteration of MOA/AOA.",
        longDesc: "As your business grows, alters its core market offerings, executes a corporate rebrand, or shifts into an entirely new sector, your original legal identity may no longer represent your brand. Executing a formal Change of Company Name is a structured statutory mechanism governed under Section 13 of the Companies Act, 2013, enabling your business to adopt a fresh corporate identity safely and legally.\n\nAltering your company's name requires complete clearance from the Ministry of Corporate Affairs (MCA) to ensure the proposed name is completely unique and does not violate any pre-existing corporate names or active trademarks. It involves passing a special resolution by shareholders, altering your Memorandum of Association (MOA) and Articles of Association (AOA), and securing a fresh Certificate of Incorporation from the Registrar of Companies (RoC).\n\nEligibility Criteria:\n• Compliance Clean Record: The company must have up-to-date MCA annual filings (AOC-4 and MGT-7) and have cleared all due corporate taxes or structural returns.\n• No Default Profiles: The entity must not have defaulted on paying matured deposits, debentures, or interest payments to creditors.\n• Distinct Name Suitability: The new name must follow strict MCA naming guidelines—possessing a unique prefix, an appropriate objects-defining middle word, and ending with suffixes like \"Private Limited\" or \"OPC Private Limited\".",
        highlights: ["Complete brand transition", "RUN portal name reservation", "Fresh Certificate of Incorporation"],
        steps: [
          "Trademark Search & Name Mapping: We run a rigorous search across the trademark registry and MCA directories to ensure your preferred corporate names are completely clear of conflict.",
          "Name Reservation via RUN Portal: We submit your preferred business names to the MCA through the centralized web system for official name approval and reservation.",
          "Drafting Resolutions & MOA/AOA Alteration: Once the name is approved, we assist in organizing an Extraordinary General Meeting (EGM) to pass the mandatory Special Resolution and draft the newly updated clauses inside your MOA and AOA.",
          "Filing Form MGT-14 & INC-24: We file Form MGT-14 to register the special resolution, followed by Form INC-24 to secure formal central government approval. Upon validation, the RoC issues your fresh Certificate of Incorporation."
        ],
        documents: [
          { name: "Corporate Identity Info", desc: "Copy of the current Certificate of Incorporation (COI), PAN Card, active MOA & AOA, and copy of the company's up-to-date active client list and corporate website link" },
          { name: "Proposed Name Records", desc: "Formulated nomenclature preferences (1 or 2 new name choices in order of preference) and comprehensive description of the exact business domain mapping to the name prefix" },
          { name: "Legal Authorizations", desc: "Valid Class 3 Digital Signature Certificate (DSC) of the authorized director, and Board Resolution copy authorizing the director to file name reservation forms" }
        ],
        price: "4,999"
      },
      {
        title: "Change in Registered Office Address",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Legal process to change the company's registered address within or outside state boundaries.",
        longDesc: "Every registered company in India must maintain a functional, physical place of business known as its Registered Office Address to receive official communications from government departments, court systems, and shareholders. If your business is expanding to larger office facilities, consolidating operations, or relocating across city or state boundaries, you must legally update your official corporate address with the Ministry of Corporate Affairs (MCA).\n\nThe statutory compliance process for changing your address varies based on the geographic distance of the move: shifting within the same city/municipality, moving outside local limits but under the same Registrar of Companies (RoC), relocating between different RoC jurisdictions within the same state, or relocating an inter-state transfer. Moving across RoC boundaries or shifting states requires extensive public notice, newspaper advertisements, and formal approval from the Regional Director (RD).\n\nEligibility Criteria:\n• Board Approval Base: Every level of address modification must be backed by a formal resolution passed during a meeting of the Board of Directors.\n• Clean Real Estate Title: The new commercial space, rented office, or virtual space must possess legitimate property ownership proofs and utility link authorizations.\n• Compliance Continuity: The entity must maintain up-to-date structural corporate filings on the MCA platform before seeking location transfers.",
        highlights: ["Official address updates", "ROC filings approval", "Legal jurisdiction changes"],
        steps: [
          "Board Meeting Execution: We assist you in organizing a Board Meeting to pass the resolution approving the office relocation and specifying the exact effective date of the change.",
          "Filing Form INC-22: For standard office relocations within the same city or RoC jurisdiction, we compile the new property deeds and landlord NOCs to file Form INC-22 online within 30 days of the board resolution.",
          "Regional Director Petitions: If you are moving between different RoC jurisdictions or crossing state lines, we handle the publication of mandatory notices in newspapers, draft formal petitions to the Regional Director, and handle the filing of Form MGT-14 and Form INC-23.",
          "RoC Update Tracking: The MCA verifies the physical property records. Once approved, the new corporate office location is officially updated on the public master data system."
        ],
        documents: [
          { name: "New Address Verification", desc: "If Owned: Registered Sale Deed / Property Tax Receipt / Current Utility Bill. If Rented: Notarized Lease/Rent Agreement and a signed No Objection Certificate (NOC) from the landlord matching the utility bill exactly" },
          { name: "Corporate Records", desc: "Certified copy of the Board Resolution authorizing the change in office address, and Special Resolution copy along with newspaper print proofs (for inter-RoC/inter-state moves)" },
          { name: "Signatory Verification", desc: "Valid Class 3 Digital Signature Certificate (DSC) of the managing corporate director" }
        ],
        price: "2,999"
      },
      {
        title: "Transfer of Shares",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Process to transfer company shares from existing shareholders to new investors or promoters.",
        longDesc: "Are you inviting fresh equity investors into your company, onboarding strategic co-founders, or executing an exit strategy for an existing shareholder? A formal Transfer of Shares is the legal process used to reallocate stock ownership in a Private Limited Company from an existing shareholder (Transferor) to an onboarding buyer (Transferee), strictly following the rules outlined in the Companies Act, 2013, and your company's internal Articles of Association (AOA).\n\nUnlike public enterprises, a Private Limited Company has structural restrictions on the free transferability of its equity to protect the closely-held nature of the organization. A share transfer requires executing a formal Form SH-4 (Securities Transfer Form), paying the required state-specific stamp duties, securing explicit board approval, updating internal share registers, and issuing newly endorsed share certificates to the incoming shareholder.\n\nEligibility Criteria:\n• AOA Alignment Check: The proposed share reallocation must align with all pre-emption rights, restriction clauses, and transfer conditions outlined inside the company's Articles of Association.\n• Consent Framework: Both the existing shareholder and the incoming buyer must execute clear, mutual financial and legal consent via a signed transfer instrument.\n• No Lien Status: The equity shares targeted for transfer must be fully paid up and free of any liens, pledges, or structural corporate constraints.",
        highlights: ["Official share transfer deed (SH-4)", "Stamp duty compliance", "Updated register of members"],
        steps: [
          "AOA Review & Notice of Intention: We perform an audit of your Articles of Association to confirm your company's precise share transfer rules and help the exiting shareholder file their formal Notice of Intention to transfer equity.",
          "Executing Form SH-4 & Stamp Duty Settlement: We draft your formal Form SH-4 transfer instrument, calculate the required state-specific stamp duty (typically 0.015% of the total market value), and ensure the physical stamp certificates are securely attached to the form.",
          "Board Review & Resolution Passage: The completed Form SH-4 along with physical share certificates are submitted to the company board. We compile the board minutes and draft the official resolution approving the transfer.",
          "Register Updating & Certificate Endorsement: Once approved, we update your internal Register of Transfers and Register of Members (Form MGT-1). We then endorse the reverse side of the physical share certificates to formally complete the equity allocation."
        ],
        documents: [
          { name: "Transfer Instrument", desc: "Executed Form SH-4 (Securities Transfer Form) signed by both transferor and transferee, and physical Share Certificates matching the exact allocation numbers being transferred" },
          { name: "Corporate Approvals", desc: "Certified true copy of the Board Resolution approving the transfer of shares, and signed Notice of Transfer issued by the transferor to the company board" },
          { name: "Identity & Tax Proofs", desc: "Self-attested PAN and Aadhaar copies of both the Transferor and Transferee, and proof of payment of appropriate share transfer stamp duty (calculated on market value)" }
        ],
        price: "3,499"
      },
      {
        title: "Alteration of MOA & AOA",
        duration: "6 days",
        tag: "STANDARD" as const,
        desc: "Process to modify the Memorandum and Articles of Association to alter company objectives or bylaws.",
        longDesc: "The Memorandum of Association (MOA) and Articles of Association (AOA) serve as the twin pillars of your company's legal constitution. The MOA defines the boundary lines of your corporate power, capital limits, and business scope, while the AOA dictates internal governance, voting dynamics, and management structures. If you are scaling operations into new industries, expanding your equity base, or reshaping your board's powers, an Alteration of MOA & AOA is a mandatory statutory requirement.\n\nAn alteration requires a formal meeting of your board of directors, passing a special resolution by a three-fourths majority of shareholders at an Extraordinary General Meeting (EGM), and securing official electronic validation from the Ministry of Corporate Affairs (MCA). Any business activities conducted outside the scope defined in your MOA are legally considered ultra vires (beyond corporate power) and are completely invalid.\n\nEligibility Criteria:\n• Object Clause Alteration: Modifying or adding new primary business lines when diversifying your corporate product or service offerings.\n• Capital Clause Alteration: Increasing your company's Authorized Share Capital limit to issue fresh equity to angel investors or venture capital funds.\n• Management Realignment (AOA): Amending internal clauses to introduce specialized voting rights, change share transfer rules, or adjust director powers.",
        highlights: ["Adapt to new business lines", "Update company regulations", "Legal compliance filing"],
        steps: [
          "Board Authorization & EGM Notice: We assist you in organizing a Board Meeting to pass a resolution approving the proposed amendments and authorize a notice to be sent to shareholders for an EGM.",
          "Special Resolution Passage: We draft the formal minutes and resolutions for the Extraordinary General Meeting (EGM), ensuring the mandatory 75% shareholder approval is met.",
          "Form Packaging & Filing: For standard text amendments, we file Form MGT-14 with the RoC within 30 days of the resolution. If you are increasing your authorized capital, we also prepare and file Form SH-7.",
          "RoC Verification & Certification: The Registrar of Companies reviews the amended clauses against the Companies Act framework. Once approved, the altered copies of your MOA and AOA are officially registered."
        ],
        documents: [
          { name: "Current Constitutional Set", desc: "True copy of the active Certificate of Incorporation, current PAN, original MOA & AOA, and up-to-date list of shareholders along with their exact equity allocation details" },
          { name: "Drafted Amendments", desc: "Copy of the newly formulated, altered clauses for the MOA or Articles of Association, and certified true copy of the Board Minutes and formal EGM Special Resolution" },
          { name: "Administrative Files", desc: "Formal notice of the Extraordinary General Meeting accompanied by the required Explanatory Statement, and Class 3 Digital Signature Certificates (DSC) of the managing corporate director" }
        ],
        price: "2,499"
      },
      {
        title: "Appointment / Removal of Directors",
        duration: "3 days",
        tag: "RECOMMENDED" as const,
        desc: "Appoint new directors or remove existing directors, filing Form DIR-12 with the ROC.",
        longDesc: "The Board of Directors forms the core leadership team responsible for steering your company's strategy, managing executive operations, and ensuring strict statutory compliance. If you are bringing on fresh industry experts to guide your scaling strategy, onboarding institutional investor representatives, or managing a director's resignation or removal, completing a formal Appointment or Removal of Directors via the Ministry of Corporate Affairs (MCA) portal is an absolute legal mandate.\n\nAn appointment requires checking eligibility criteria, securing a unique Director Identification Number (DIN), and ensuring your onboarding director completes their annual DIR-3 KYC verifications. Conversely, removing a director requires strict adherence to corporate governance rules under Section 169 of the Companies Act, 2013, including providing a reasonable opportunity for the director to be heard before shareholders pass an ordinary resolution.\n\nEligibility Criteria:\n• Age & Sound Mind Base: The proposed director must be an individual who is at least 18 years old, mentally sound, and free from any court-ordered bankruptcy or insolvency marks.\n• No Disqualification Profile: The individual must not stand disqualified under Section 164 of the Companies Act, 2013 (e.g., must not be linked to other non-compliant entities).\n• DIN Possession: The onboarding director must possess a valid, active Director Identification Number (DIN) allocated by the MCA.",
        highlights: ["Board expansion/growth", "Filing Form DIR-12 within 30 days", "DIN application assistance"],
        steps: [
          "Securing DIN & Verifying Consent: For new directors without an existing identity number, we apply for a fresh DIN via the MCA portal. We then assist in compiling the mandatory consent documents (DIR-2) and financial disclosures (MBP-1).",
          "Passing the Corporate Resolution: We organize the required Board Meeting or Extraordinary General Meeting (EGM) to pass the formal resolution approving the appointment or tracking the removal/resignation.",
          "Filing Form DIR-12 with the RoC: Our team compiles the resolution documents, consent letters, and identity papers to file Form DIR-12 on the MCA portal within 30 days of the effective change date.",
          "Updating Internal Statutory Registers: Once the MCA issues its electronic approval receipt, we update your internal Register of Directors and Key Managerial Personnel to ensure complete compliance."
        ],
        documents: [
          { name: "For Onboarding Director", desc: "Form DIR-2 consent letter to act as director, Form MBP-1 & DIR-8 financial interest disclosures / non-disqualification certificate, and self-attested PAN, Aadhaar, Passport, and recent utility bills" },
          { name: "For Resignation / Removal", desc: "Signed formal Resignation Letter or official Notice of Removal with statement profiles, and copy of special notice or proof of serving notice to the director being removed" },
          { name: "Corporate Approvals", desc: "Certified true copies of the Board Resolution or EGM Ordinary Resolution, and valid Class 3 DSC of the company's existing authorized managing director" }
        ],
        price: "1,999"
      },
      {
        title: "Winding Up of Company",
        duration: "30 days",
        tag: "STANDARD" as const,
        desc: "Official legal closure of a company or LLP to strike off its name from the ROC register.",
        longDesc: "If your registered company has accomplished its original commercial goals, faced irreversible business losses, has zero active operations, or the promoters prefer to close down the business structure, keeping it alive can create unnecessary annual compliance tracking costs and legal liabilities. Executing a formal Winding Up of a Company (specifically via the Fast Track Exit - STK-2 mechanism managed by the MCA) is the clean legal pathway.\n\nThe STK-2 Fast Track Exit process is ideal for defunct private limited companies looking for a low-cost, hassle-free closure mechanism. It requires closing all active business bank accounts, completely settling all outstanding corporate liabilities, securing clear affidavits from directors, and compiling a clean Statement of Accounts reflecting zero assets and zero liabilities.\n\nEligibility Criteria:\n• Operational Inactivity: The company must have completely ceased all commercial business operations for a continuous period of at least one (1) or two (2) years before filing.\n• Zero Asset & Liability Profile: The company's balance sheet must reflect absolute zero assets and zero outstanding financial liabilities or dues toward third parties.\n• No Pending Litigation: The company must not have any active, unresolved lawsuits or pending investigations from tax or labor departments.",
        highlights: ["Eliminate annual compliances", "Settle assets and liabilities", "Official legal dissolution"],
        steps: [
          "Closing Bank Accounts & Settling Dues: We assist you in clearing out any remaining business assets, settling all pending creditor claims, and securing your formal Bank Account Closure Certificate.",
          "Compiling Financial Statements & Affidavits: Our compliance experts work with practicing CAs to draft your final Statement of Accounts. Simultaneously, we prepare the required STK-3 Affidavits and STK-4 Indemnity Bonds on appropriate stamp papers.",
          "Filing Form STK-2 with the MCA: We bundle the financial statements, director indemnities, closure approvals, and board resolutions to file Form STK-2 on the MCA portal along with the flat government closure fees.",
          "Public Notice & Final Dissolution: The RoC reviews your application and publishes a public notice for 30 days to invite any potential objections from the public or tax departments. If no objections are raised, the RoC officially strikes off your company name."
        ],
        documents: [
          { name: "Financial Closure Assets", desc: "Statement of Accounts: Financial snapshot certified by a practicing Chartered Accountant (CA) dated within 30 days of filing, and Official Bank Account Closure Certificate from your corporate current account managers" },
          { name: "Director Affidavits", desc: "Form STK-4: Individual indemnity bonds executed by all active directors on stamp paper, and Form STK-3: Notarized affidavits from directors confirming zero liabilities and operations" },
          { name: "Corporate Resolutions", desc: "Certified true copy of the Board Resolution or 75% Shareholder Consent special resolution, and valid Class 3 Digital Signature Certificates (DSC) of all active directors" }
        ],
        price: "9,999"
      },
      {
        title: "Revival of Company",
        duration: "20 days",
        tag: "STANDARD" as const,
        desc: "Revive a struck-off company by filing a petition before the National Company Law Tribunal (NCLT).",
        longDesc: "Has the Registrar of Companies (RoC) struck off your company's name from the official register due to a failure to file annual statutory returns (AOC-4 and MGT-7) for two consecutive financial years? Having your company struck off can freeze your business bank accounts, disqualify your active directors from serving on other boards, and put a halt to your day-to-day operations. Undertaking a formal Revival of a Company by filing an appeal with the National Company Law Tribunal (NCLT) is the only legal avenue.\n\nUnder Section 252 of the Companies Act, 2013, an appeal for revival can be filed before the NCLT within a statutory limit of 20 years from the publication date of the striking-off notice. The revival process requires drafting detailed legal petitions, presenting your case at formal NCLT hearings, paying structural government costs or penalties, and filing all your historically pending annual financial returns with the RoC.\n\nEligibility Criteria:\n• Proved Active Status: You must present clear evidence proving the company was actively conducting business operations or owning real estate assets at the time it was struck off.\n• Locus Standi Base: The petition for revival must be filed by an eligible person, such as an active shareholder, a director, or a creditor of the struck-off entity.\n• Commitment to Compliance: The promoters must give a clear commitment to compile, sign, and file all historically overdue financial statements and returns immediately upon activation.",
        highlights: ["NCLT petition representation", "Access locked bank accounts", "Restore active corporate status"],
        steps: [
          "Drafting and Serving the NCLT Petition: We draft a comprehensive legal petition (Form NCLT-1) outlining the business's active operations. Copies of the petition are formally served to the regional Registrar of Companies (RoC) and the Income Tax department for their review.",
          "NCLT Hearings & Representation: Our experienced corporate advocates represent your business interests during the formal NCLT bench hearings, answering questions from the tribunal and presenting evidence of active operations.",
          "Securing the NCLT Restoration Order: Upon review of the evidence, the NCLT bench issues a formal order directing the RoC to restore the company's status from \"Struck Off\" to \"Active,\" subject to processing fees and outstanding penalties.",
          "Filing Form INC-28 & Overdue Returns: We file the physical NCLT Restoration Order with the RoC using Form INC-28 within 30 days to officially reactivate your company code. Once active, we upload all your pending annual financial returns to ensure full compliance."
        ],
        documents: [
          { name: "Evidence of Active Operations", desc: "Up-to-date bank account statements (reflecting active transaction histories prior to freezing), copies of sales invoices, commercial contracts, purchase orders, active GST returns, and property lease deeds or utility bills proving the active maintenance of the registered office" },
          { name: "NCLT Petition Stack", desc: "Comprehensive Revival Petition (Form NCLT-1) with detailed explanatory statements, certified copies of the official RoC strike-off notice (Form STK-7), and up-to-date compiled copies of all pending financial returns (AOC-4 & MGT-7)" },
          { name: "Identity Verification", desc: "Self-attested PAN and Aadhaar copies of the petitioning shareholder or director" }
        ],
        price: "24,999"
      },
      {
        title: "Maintenance of Secretarial Registers",
        duration: "Ongoing",
        tag: "RECOMMENDED" as const,
        desc: "Maintain mandatory secretarial records under Section 88 of the Companies Act, 2013 — the official master records of your company's internal governance.",
        longDesc: "Are you running an active registered company looking to maintain strong corporate governance standards and stay fully prepared for sudden statutory inspections? Organizing the Maintenance of Secretarial Registers is a strict statutory requirement under Section 88 of the Companies Act, 2013. These registers serve as your company's official master records, providing clear evidence of your internal management.\n\nMaintaining accurate secretarial records is no longer an afterthought or a manual task handled on loose sheets of paper. Our corporate secretarial team establishes and maintains a secure, centralized digital register system for your company, ensuring every share transfer, director appointment, board meeting, and financial interest disclosure is tracked in precise compliance with Indian corporate law.\n\nEligibility Criteria:\n• Register of Members (Form MGT-1): Tracks the complete list of shareholders, their exact equity allocations, dates of share acquisition, and distinct folio details.\n• Register of Directors & KMP: Records personal identification metrics, DIN numbers, joining dates, and exit timelines for all directors and key managers.\n• Register of Charges (Form CHG-7): Logs comprehensive details regarding any bank loans, corporate mortgages, or assets hypothecated against financial credit lines.\n• Register of MBP-1 Disclosures: Compiles annual conflict-of-interest declarations filed by directors regarding their shareholdings and positions in other external business entities.",
        highlights: ["Audit-ready digital secretarial books", "Real-time event maintenance within 7 days", "Register of Members, Directors & Charges managed", "Annual certification & audit support included"],
        steps: [
          "Corporate Structure Audit: We execute a detailed audit of your historical incorporation papers, filing receipts, and meeting minutes to ensure your current registers accurately match the official records on the MCA portal.",
          "Digital Register Configuration: Our corporate secretarial team designs and configures your digital secretarial registers, organizing them into the mandated statutory formats (MGT-1, MGT-2, CHG-7, etc.).",
          "Real-Time Event Maintenance: Whenever your business undergoes a change — such as a director shift, equity issuance, or securing a bank loan — we update the corresponding registers within the state-mandated timelines (typically within 7 days).",
          "Annual Certification & Audit Support: At the close of the financial year, we audit your complete register stack, extract clean verification files, and prepare your compliance folders to easily pass your annual statutory audits."
        ],
        documents: [
          { name: "Equity & Share Data", desc: "Allocation ledgers, share application forms, and complete histories of share transfers; up-to-date share capitalization tables matching your authorized and paid-up limits" },
          { name: "Meeting & Leadership Records", desc: "Signed minutes of all past Board of Directors meetings, AGM proceedings, and EGMs; signed copies of director consent letters (DIR-2) and interest disclosures (MBP-1)" },
          { name: "Loan & Charge Instruments", desc: "Sanction letters from commercial banks and verified Form CHG-1/CHG-4 filing sheets" }
        ],
        price: "2,499/mo"
      }
    ]
  },
  {
    id: "legal-services",
    name: "Corporate Legal Services",
    services: [
      {
        title: "Contract Drafting Services",
        duration: "4 days",
        tag: "RECOMMENDED" as const,
        desc: "Customized, legally binding contracts designed to protect your business interests, define partner roles, and prevent costly commercial litigation.",
        longDesc: "In modern commercial operations, a clear, legally binding contract is the single most important tool used to protect your business interests, secure high-value transactions, define partner roles, and prevent costly commercial litigation. Our Contract Drafting Service designs customized, robust contracts tailored to your exact operational goals.\n\nMoving away from generic templates that leave your business exposed to legal gaps, our corporate lawyers structure every contract from scratch. We ensure complete clarity regarding asset allocations, payment milestones, intellectual property rights, indemnification limits, termination triggers, and modern dispute resolution pathways.\n\nStrategic Protective Clauses:\n• Scope of Deliverables: Clear definitions outlining the exact operational performance targets, service standards, and product metrics required from both parties.\n• Financial & Payment Milestones: Structured breakdowns detailing pricing models, invoicing frequencies, late payment interest terms, and tax allocation splits (such as GST responsibilities).\n• Limitation of Liability & Indemnity: Protective caps that limit your business's financial liability if a breach occurs, paired with strong indemnity clauses to shield your firm.\n• Dispute Resolution & Jurisdiction: Setting up multi-stage dispute resolution systems, prioritizing fast-track mediation/arbitration and defining clear geographic court jurisdictions.",
        highlights: ["Drafted from scratch by corporate lawyers", "Complete IP & indemnity protection", "Stamp duty advisory included", "Collaborative review & revision round"],
        steps: [
          "Initial Strategic Consultation: We meet with your leadership team to understand your business goals, identify industry-specific operational risks, and lay out the core architecture of the agreement.",
          "First Draft Formulation: Our corporate lawyers draft the contract from scratch, carefully structuring all commercial definitions, operational milestones, and protective indemnity clauses.",
          "Collaborative Review & Revision: We present the initial draft to your team, walk you through the protective clauses, and execute necessary revisions to match your feedback.",
          "Final Delivery & Execution Support: We deliver the finalized, print-ready contract complete with clear signing templates and signature guidelines. We also advise on appropriate stamp duties."
        ],
        documents: [
          { name: "Party Onboarding Profiles", desc: "Complete legal names, registered office addresses, and corporate identifiers (CIN/PAN) of all entering parties; valid identification copies of the authorized individuals signing the agreement" },
          { name: "Commercial Intent Summary", desc: "Detailed summary of the business arrangement, project milestones, and delivery timelines; complete financial details, fee structures, profit-sharing models, or royalty calculations" },
          { name: "Special Protective Targets", desc: "Specific details regarding non-disclosure restrictions, intellectual property ownership transfers, or non-compete geographic bounds" }
        ],
        price: "2,499"
      },
      {
        title: "Legal Notices & Demand Letters",
        duration: "5 days",
        tag: "STANDARD" as const,
        desc: "Formally notify defaulting parties via a registered advocate's letterhead — for payment recovery, breach of contract, IP infringement, or employment disputes.",
        longDesc: "When a commercial partner breaches a signed contract, a client defaults on payment milestones, or an intellectual property infringement occurs, taking immediate and formal action is essential. Issuing a professionally drafted Legal Notice or Demand Letter is your primary legal tool used to formally notify the defaulting party.\n\nA legal notice serves as an official warning printed on a registered advocate's letterhead. It establishes a formal legal record of the dispute, prevents the other party from claiming ignorance in future court proceedings, and encourages fast out-of-court settlements to avoid heavy reputational damage.\n\nOperational Structure & Types:\n• Payment Default & Debt Recovery: Formally demanding immediate settlement of unpaid invoices, past-due contractual milestones, or outstanding commercial balances.\n• Breach of Contract Performance: Notifying a service provider, vendor, or contractor of a failure to meet their agreed operational targets or service standards.\n• Trademark & Copyright Infringement: Issuing an immediate Cease and Desist Notice to block copycats from misusing your brand assets, logo layouts, or copyrighted materials.\n• Employer-Employee Disputes: Issued to address violations of active employment agreements, non-compete clauses, or a failure to return corporate property upon exit.",
        highlights: ["Printed on registered advocate's letterhead", "Dispatched via Registered Post (AD)", "Covers debt recovery, IP & employment disputes", "Negotiation support if party responds"],
        steps: [
          "Case Review & Strategy Mapping: We review your signed agreements, invoice logs, and communication histories to evaluate the strength of your claim and map out a notification strategy.",
          "Drafting the Legal Notice: Our experienced dispute resolution lawyers draft a precise, highly impactful legal notice, detailing the facts of the breach and referencing contractual terms.",
          "Formal Dispatch: We print the notice on our formal legal letterhead and dispatch it via Registered Post with Acknowledgement Due (AD) and secure electronic email channels.",
          "Tracking & Negotiation Support: We monitor the delivery status and manage the mandatory response window. If the defaulting party reaches out to settle, we guide you through the negotiations."
        ],
        documents: [
          { name: "Defaulter Profile", desc: "Complete legal name, active physical residential or corporate office address, and contact details of the defaulting party" },
          { name: "Evidence Foundation", desc: "Copies of original signed agreements, purchase orders, or work orders establishing the relationship; outstanding unpaid invoices, statement ledgers, email strings, or chat receipts proving default" },
          { name: "Claim Matrix", desc: "Exact financial amount to be recovered, applicable interest calculations, or specific actions required from the defaulting party" }
        ],
        price: "3,999"
      },
      {
        title: "Bond Drafting",
        duration: "3 days",
        tag: "STANDARD" as const,
        desc: "Formal Indemnity, Performance, and Employee Training Bonds drafted from scratch — legally enforceable commitments to protect your business from financial and operational risk.",
        longDesc: "Whether you are protecting your company's investments in specialized employee training, securing financial commitments during commercial leases, or setting up performance guarantees for long-term vendor relationships, a formal Indemnity or Performance Bond is an essential tool used to manage corporate risk.\n\nA bond operates as an unconditional commitment where one party (the Obligor) promises to pay a specified financial penalty to your business if they fail to fulfill an agreed operational milestone. Our corporate lawyers carefully structure these documents to ensure they meet all conditions for enforceability.\n\nOperational Structure & Types:\n• Employee Training Bonds: Used to recover specialized training costs, travel expenses, and certifications if an employee exits before completing a specified minimum service period.\n• Performance Bonds: Guarantees issued by contractors or vendors ensuring they will execute a project according to your agreed design standards and timelines.\n• Indemnity Bonds: Unilateral legal commitments ensuring a party will compensate your business for any financial losses, tax pass-through liabilities, or legal damages arising from a specific transaction.",
        highlights: ["Covers training, performance & indemnity bonds", "Absolute indemnity structures drafted from scratch", "Guarantor joint-and-several liability clauses", "State-specific stamp duty & notarization advice"],
        steps: [
          "Risk Assessment & Slab Structuring: We meet with your HR or project operations teams to assess your investments, identify potential breach risks, and determine a reasonable, legally enforceable penalty value.",
          "Drafting the Legal Framework: Our corporate lawyers draft the bond document from scratch, incorporating strong, absolute indemnity structures and clear definitions of what constitutes a default.",
          "Guarantor Integration Setup: If your risk strategy requires an external guarantor, we incorporate strong joint-and-several liability clauses that allow direct recovery from the guarantor.",
          "Execution & Stamp Duty Advice: We deliver the print-ready bond file accompanied by explicit guidelines regarding appropriate state-specific non-judicial stamp papers and notarization requirements."
        ],
        documents: [
          { name: "Obligor & Surety Profiles", desc: "Complete legal names, identity proofs, and residential or business addresses of the person signing the bond; co-signatory or Guarantor profiles (if an external surety is backing the bond)" },
          { name: "Investment Details", desc: "Detailed description of the specific training program, corporate project, or asset being secured; itemized breakdown proving the actual costs or expenses incurred by your business" },
          { name: "Penalty Matrix", desc: "Exact financial penalty amount (Liquidated Damages) to be paid if a breach occurs, along with the specified tenure limits" }
        ],
        price: "1,999"
      },
      {
        title: "Employment Contract Drafting",
        duration: "3 days",
        tag: "STANDARD" as const,
        desc: "Professionally written Employment Contracts for every level of your organization — from standard executive offer letters to complex C-suite employment agreements.",
        longDesc: "Your workforce is the engine that drives your business growth, but an un-structured onboarding workflow can leave your company exposed to major intellectual property leaks, data theft, and expensive labor court disputes. Securing a professionally written Employment Contract is an essential step to protect your business.\n\nOur employment drafting service designs customized onboarding agreements for every level of your organization — ranging from standard executive offer letters to complex C-suite employment agreements. We ensure complete protection for your business by incorporating clear, robust clauses.\n\nStrategic Protective Clauses:\n• IP Assignment / Work-for-Hire: A critical protective clause ensuring that all source codes, product designs, customer databases, and innovations created belong 100% to your company.\n• Confidentiality & Data Protection: Strong non-disclosure restrictions that block employees from leaking or misusing your trade secrets, pricing models, or client lists.\n• Non-Compete & Non-Solicitation: Restrictive covenants that prevent exiting employees from joining direct competitors or poaching your active clients within reasonable geographic limits.\n• Termination & Notice Layout: Clear parameters outlining mandatory notice periods, garden leave choices, severance terms, and summary dismissal triggers for gross misconduct.",
        highlights: ["IP assignment & work-for-hire clauses", "Non-compete & non-solicitation covenants", "Tiered templates for all management levels", "Delivery & onboarding integration support"],
        steps: [
          "Onboarding Risk Consultation: We review your company's HR workflows and operational structure to identify your key data protection priorities and compliance needs.",
          "Formulating the Employment Framework: Our labor lawyers draft the agreement from scratch, balancing clear operational instructions with strong data protection and IP ownership clauses.",
          "Tiered Template Customization: We revise the drafts to align with different levels of management, delivering distinct, optimized agreements for entry-level staff, core developers, and C-suite executives.",
          "Delivery & Onboarding Integration: We deliver your finalized, print-ready employment templates accompanied by clear signing guidelines, helping you integrate these legal protections seamlessly."
        ],
        documents: [
          { name: "Company & Employee Basics", desc: "Registered corporate name, brand identifiers, and corporate office address details; full legal name, permanent address, and academic/professional background data of the employee" },
          { name: "Operational & Compensation Profiles", desc: "Specific job designation, core duties, reporting hierarchy, and office location mapping; comprehensive cost-to-company (CTC) salary breakdown, bonus metrics, and provident fund allocations" },
          { name: "Special Restrictions", desc: "Predefined lengths for probation periods, required notice periods, and specific non-compete restrictions" }
        ],
        price: "2,499"
      },
      {
        title: "Non-Disclosure Agreement (NDA) Drafting",
        duration: "2 days",
        tag: "STANDARD" as const,
        desc: "Customized, legally binding NDAs drafted from scratch — covering unilateral, mutual, and multilateral structures to protect your source codes, financial secrets, and product roadmaps.",
        longDesc: "Data has become a highly valuable corporate asset, and protecting your proprietary source codes, financial secrets, and product roadmaps is essential to maintaining your market edge. Securing a customized, legally binding Non-Disclosure Agreement (NDA) is your absolute primary defense line.\n\nGeneric, internet-sourced templates often fail to provide real protection because they lack precise definitions of what information is confidential. Our corporate lawyers draft customized NDAs from scratch, ensuring your business is fully protected with clear definitions of data boundaries.\n\nOperational Structure & Types:\n• Unilateral NDA (One-Way): Used when only one party is disclosing highly sensitive proprietary data (such as a company sharing source code with an external software developer).\n• Mutual NDA (Two-Way): Used during joint venture discussions, merger evaluations, or deep strategic partnerships where both organizations share confidential data.\n• Multilateral NDA: A specialized agreement used when three or more independent organizations are coordinating on a complex commercial project, keeping all shared data secure.",
        highlights: ["Unilateral, mutual & multilateral NDA structures", "Injunctive relief & financial penalty clauses", "Precise confidential data scope definitions", "State stamp duty advisory on final delivery"],
        steps: [
          "Data Risk Assessment: We analyze your data sharing workflows to identify your most vulnerable proprietary assets and understand the exact context of your business discussions.",
          "Drafting the NDA Framework: Our corporate lawyers build the agreement from scratch, incorporating broad yet precise definitions of what constitutes confidential information and setting out handling protocols.",
          "Incorporating Enforcement Clauses: We embed strong, absolute injunctive relief clauses, data return requirements, and clear financial penalty frameworks to ensure immediate damages if a leak occurs.",
          "Final Delivery: We deliver the finalized, print-ready NDA file complete with clear signing templates and signature guidelines. We also advise on appropriate state stamp duties."
        ],
        documents: [
          { name: "Entering Parties Info", desc: "Complete legal names, corporate office addresses, and entity types of all signing parties; names and titles of the authorized executives signing the agreement" },
          { name: "Data Scope Definitions", desc: "Detailed summary of the specific project, commercial transaction, or technology discussion taking place; exhaustive list of what information must be protected (source codes, client lists, financial records)" },
          { name: "Protection Tenure Limits", desc: "Predefined length of the protection period (e.g., 3 years, 5 years, or permanent lifetime limits for core trade secrets)" }
        ],
        price: "1,499"
      },
      {
        title: "Memorandum of Understanding (MOU) Drafting",
        duration: "3 days",
        tag: "STANDARD" as const,
        desc: "Formal MOU drafted from scratch to establish primary business terms, mutual expectations, and legally binding exclusivity clauses before committing to a full contract.",
        longDesc: "Before corporate entities commit to long-term commercial contracts or invest heavy capital into asset acquisitions, they often need to lay out primary business terms and mutual expectations. Drafting a formal Memorandum of Understanding (MOU) is the professional way to establish this initial blueprint.\n\nWhile an MOU can be structured as a flexible, non-binding expression of mutual intent, specific sections — such as confidentiality protections, exclusivity terms, cost-sharing allocations, and court jurisdictions — must be explicitly written as legally binding clauses to shield your business from early-stage risks.\n\nOperational Structure & Types:\n• Statement of Common Purpose: A clear summary detailing the primary goals, target milestones, and commercial scope of the partnership.\n• Roles & Contribution Splits: Clear definitions detailing the exact capital, technology, infrastructure, or human resources each party must bring to the table.\n• Exclusivity & Non-Disclosure: Legally binding clauses that prevent your partner from negotiating with direct competitors during the discussion window, keeping shared data secure.\n• Termination & Transition Layout: Clear rules mapping out how a party can safely exit the discussions if the arrangement faces terminal bottlenecks, including rules for sharing early project costs.",
        highlights: ["Non-binding intent with legally binding exclusivity", "Roles, capital & contribution splits defined", "Confidentiality & non-compete during discussions", "Clear exit & termination transition rules"],
        steps: [
          "Deal Structuring Consultation: We meet with your business development team to review the commercial deal, identify potential operational bottlenecks, and outline core goals.",
          "Formulating the MOU Draft: Our corporate lawyers draft the agreement from scratch, carefully separating non-binding statements of intent from legally binding exclusivity and non-disclosure clauses.",
          "Collaborative Review & Revision: We present the initial draft to your team, walk you through the protective clauses, and execute necessary revisions to match your feedback and negotiation strategy.",
          "Final Delivery: We deliver the finalized, print-ready MOU file complete with clear signing templates and signature guidelines, helping you move forward with complete confidence."
        ],
        documents: [
          { name: "Partner Identity Profiles", desc: "Complete legal corporate names, registered business addresses, and corporate identifiers (CIN/PAN) of all entering organizations; names and titles of the authorized executives signing the agreement" },
          { name: "Operational Blueprint", desc: "Detailed summary of the proposed project, joint service model, or asset development venture; expected contribution timelines, budget guidelines, and management responsibility splits" }
        ],
        price: "2,999"
      },
      {
        title: "Franchise & Licensing Agreements",
        duration: "7 days",
        tag: "STANDARD" as const,
        desc: "Customized Franchise and IP Licensing Agreements protecting your brand, trademarks, and proprietary systems as you scale across new territories and partners.",
        longDesc: "Expanding your successful business model across new territories via franchising or monetizing your proprietary software and trademarks through licensing is an excellent scaling strategy. However, an un-structured expansion can expose your brand to severe quality dilutions and identity theft.\n\nOur legal secretarial team designs customized agreements that protect your intellectual property assets while setting out clear, enforceable operational rules for your franchisees or licensees. We ensure complete protection for your brand by incorporating strict, legally binding guardrails.\n\nStrategic Protective Clauses:\n• IP Grant & Territory Limits: Explicitly defining the exact trademarks, proprietary technologies, or software systems being shared, paired with strict geographic boundary lines.\n• Quality Control & Operations Audit: Legally binding clauses granting your company the absolute power to perform unannounced site audits and monitor operational standards.\n• Royalty & Financial Fee Architecture: Clear breakdowns detailing initial upfront franchise fees, ongoing monthly royalty percentages, marketing fund contributions, and late penalties.\n• De-Branding & Termination Protocols: Strict rules mapping out how to immediately revoke brand permissions if a material breach occurs, forcing the partner to completely remove your signage within 48 hours.",
        highlights: ["IP grant & strict territory boundary clauses", "Unannounced site audit & quality control rights", "Full royalty & financial fee architecture", "48-hour de-branding & termination protocols"],
        steps: [
          "Expansion Model Consultation: We analyze your business model, operational risks, and expansion goals to determine the safest legal structure for your franchise or licensing network.",
          "Formulating the Agreement Framework: Our corporate lawyers draft the agreement from scratch, balancing clear operational guidelines with strong intellectual property and brand protection clauses.",
          "Customizing Commercial Clauses: We adjust the agreement to match your specific network requirements, incorporating custom territory limits, marketing contribution rules, and dispute resolution mechanisms.",
          "Delivery & Network Onboarding Integration: We deliver your finalized, print-ready franchise or licensing templates complete with clear signature guidelines, helping you scale your business network confidently."
        ],
        documents: [
          { name: "Brand Owner & Partner Basics", desc: "Registered corporate names, brand identifiers, and corporate office address details of both parties; valid identification copies of the authorized individuals signing the agreement" },
          { name: "Operational & Financial Profiles", desc: "Detailed list of trademarks, software patents, or operations manuals being licensed; comprehensive financial details, upfront fee structures, ongoing royalty percentages, and payment schedules" },
          { name: "Territory & Performance Metrics", desc: "Predefined geographic boundaries, exclusivity rights, and minimum performance targets" }
        ],
        price: "7,999"
      },
      {
        title: "Shareholder & Joint Venture Agreements",
        duration: "10 days",
        tag: "STANDARD" as const,
        desc: "Robust Shareholder and Joint Venture Agreements drafted from scratch — protecting founders from deadlock, hostile takeovers, and unfair equity dilution.",
        longDesc: "Inviting external angel investors into your company, closing institutional venture capital rounds, or partnering with another corporation to execute a joint venture are major business milestones. However, entering these without a professionally written agreement can leave founders exposed to deadlock and hostile takeovers.\n\nOur corporate legal team drafts customized, robust agreements from scratch to protect your business interests. We ensure complete clarity and security for founders and corporations by incorporating clear clauses covering board seats, specialized voting controls, and structured exit pathways.\n\nStrategic Protective Clauses:\n• Board Composition & Veto Rights: Defining the exact process used to assign board seats, paired with clear lists of critical corporate actions that require absolute founder or majority consent.\n• Pre-Emption Rights & Anti-Dilution: Protective clauses giving existing shareholders the primary option to purchase fresh stock issuances, protecting your team from being unfairly diluted.\n• Tag-Along & Drag-Along Clauses: Tag-Along rights protect minority shareholders by allowing them to join in a majority stock sale, while Drag-Along clauses empower majority owners to compel minority partners to join in a total sale.\n• Deadlock Resolution Mechanisms: Clear, multi-stage resolution paths designed to break management loglays instantly and prevent operational shutdowns.",
        highlights: ["Board composition & veto rights defined", "Pre-emption & anti-dilution protection", "Tag-along & drag-along clauses included", "Multi-stage deadlock resolution mechanisms"],
        steps: [
          "Term Sheet Audit & Risk Review: We perform a thorough audit of your term sheet or commercial joint venture brief to identify potential operational risks and layout a clear structural strategy.",
          "Formulating the Contract Blueprint: Our corporate lawyers draft the agreement from scratch, translating complex financial terms into clear, enforceable clauses covering board control and voting weights.",
          "Collaborative Review & Revision: We present the initial draft to your leadership team, walk you through the protective clauses, and execute necessary revisions to match your feedback.",
          "Final Delivery & Execution Support: We deliver the finalized, print-ready agreement complete with clear signature templates. We also handle subsequent updates to your company's internal Articles of Association (AOA)."
        ],
        documents: [
          { name: "Corporate Identity Info", desc: "Copy of the current Certificate of Incorporation (COI), PAN Card, and active MOA & AOA; up-to-date share capitalization table highlighting authorized capital, paid-up limits, and current investor splits" },
          { name: "Deal & Investment Terms", desc: "Complete Term Sheet summarizing the total investment value, share pricing models, and equity class definitions; detailed summary of the proposed joint venture's management structure, operational roles, and profit-sharing models" }
        ],
        price: "12,999"
      },
      {
        title: "Legal Document Review & Modification",
        duration: "3 days",
        tag: "STANDARD" as const,
        desc: "Line-by-line legal audit and active rewriting of third-party contracts — eliminating hidden liabilities, unfair termination triggers, and weak dispute clauses before you sign.",
        longDesc: "Entering into agreements using a client's custom contract, reviewing an international vendor's standard service agreement, or reusing an old corporate template can expose your business to significant hidden risks. Our professional Legal Document Review and Modification service acts as your ultimate safety filter.\n\nOur corporate lawyers systematically review your documents to identify legal traps, eliminate vague language, and rewrite clauses to align with your business goals. We ensure your agreements are legally sound, match current statutory codes, and provide a fair balance of rights and protections for your business.\n\nCore Target Framework:\n• Identifying Hidden Liabilities: We catch and remove vague indemnity clauses, uncapped liability traps, or unfair warranty waivers that expose your business to un-backed third-party damages.\n• Balancing Termination Terms: We eliminate one-sided termination triggers, ensuring your company enjoys fair exit options, reasonable notice periods, and full payment for services delivered.\n• Verifying Compliance Alignment: We ensure your contracts match all current Indian statutory codes, including the Information Technology Act, GST rules, labor regulations, and specific sector guidelines.\n• Optimizing Dispute Formulations: We rewrite weak dispute clauses into strong, multi-stage systems that prioritize cost-effective mediation and fast-track arbitration, while securing clear local jurisdictions.",
        highlights: ["Hidden liability & warranty trap removal", "One-sided termination clause rebalancing", "Indian statutory compliance verification", "Strong multi-stage dispute clause rewriting"],
        steps: [
          "Initial Risk Briefing: We meet with your business operations team to review the background of the transaction and identify your key commercial goals and non-negotiable terms.",
          "Comprehensive Redline Audit: Our corporate lawyers perform a thorough line-by-line review of the document, inserting detailed comments to explain hidden risks and highlighting clauses requiring modification.",
          "Active Clause Modification: We directly rewrite problematic text, inserting strong liability caps, clean payment terms, and balanced termination rules to shift the contract into a fair, secure legal balance.",
          "Final Delivery & Consultation: We deliver a fully redlined version showing all tracked changes alongside a clean, execution-ready copy. We review updates with your team to ensure you are fully prepared."
        ],
        documents: [
          { name: "Target Document Stack", desc: "Editable digital copy (MS Word format preferred) of the target contract, lease deed, or vendor agreement to be audited" },
          { name: "Commercial Context Brief", desc: "Brief summary explaining your position in the deal (e.g., Supplier vs. Buyer), key commercial goals, and critical deal-breaker terms" },
          { name: "Historical Precedents", desc: "Copies of any past addendums, initial term sheets, or corporate guidelines that must be incorporated into the final contract" }
        ],
        price: "2,499"
      }
    ]
  }
];

export default function ServicesPage({ theme: _theme, onGoHome }: { theme?: "light" | "dark"; onGoHome?: () => void }) {
  const [selectedService, setSelectedService] = useState<string>("Proprietorship Registration");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("company-registration");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Reset FAQ expansion when service changes
  useEffect(() => {
    setExpandedFaq(null);
  }, [selectedService]);

  // Sync hash routing (e.g. #services?service=GST%20Registration)
  useEffect(() => {
    const customSmoothScrollTo = (targetId: string, duration: number = 1200) => {
      const target = document.getElementById(targetId);
      if (!target) return;
      
      const startPosition = window.scrollY || window.pageYOffset;
      const targetPosition = target.getBoundingClientRect().top + startPosition - 96;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing: easeInOutCubic
        const easeInOutCubic = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#services")) {
        const urlParams = new URLSearchParams(hash.split("?")[1] || "");
        const serviceParam = urlParams.get("service");
        if (serviceParam) {
          // Find if this service exists in our data
          const exists = CATEGORIES_DATA.some(cat => 
            cat.services.some(serv => serv.title.toLowerCase() === serviceParam.toLowerCase())
          );
          if (exists) {
            // Find and set correct title casing
            let matchedTitle = serviceParam;
            CATEGORIES_DATA.forEach(cat => {
              const found = cat.services.find(serv => serv.title.toLowerCase() === serviceParam.toLowerCase());
              if (found) {
                matchedTitle = found.title;
                // Auto expand parent category (close others)
                setExpandedCategory(cat.id);
              }
            });
            setSelectedService(matchedTitle);
            setTimeout(() => {
              customSmoothScrollTo("services-dashboard", 1250);
            }, 100);
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Find currently active service object
  const activeService = useMemo(() => {
    let matchedServ = null;
    let parentCat = null;
    
    for (const cat of CATEGORIES_DATA) {
      const serv = cat.services.find(s => s.title === selectedService);
      if (serv) {
        matchedServ = serv;
        parentCat = cat;
        break;
      }
    }
    
    const baseService = matchedServ || CATEGORIES_DATA[0].services[0];
    const catId = parentCat ? parentCat.id : CATEGORIES_DATA[0].id;
    const catName = parentCat ? parentCat.name : CATEGORIES_DATA[0].name;
    
    // Determine fallback image based on category
    let defaultImg = "/BSS.webp";
    if (catId === "licensing") defaultImg = "/BRL.webp";
    else if (catId === "taxation") defaultImg = "/ITG.webp";
    else if (catId === "mca-corporate") defaultImg = "/CLC.webp";
    else if (catId === "labour-compliance") defaultImg = "/CLC.webp";
    else if (catId === "legal-services") defaultImg = "/CLC.webp";
    else if (catId === "digital-essentials") defaultImg = "/BSS.webp";
    
    return {
      ...baseService,
      categoryId: catId,
      categoryName: catName,
      image: (baseService as any).image || defaultImg,
      longDesc: (baseService as any).longDesc || baseService.desc
    };
  }, [selectedService]);

  // Toggle category expansion (accordion mode: open one, close others)
  const toggleCategory = (id: string) => {
    setExpandedCategory(prev => prev === id ? null : id);
  };

  // Select service from sidebar (also expand its parent category)
  const handleSelectServiceFromSidebar = (servTitle: string) => {
    setSelectedService(servTitle);
    // Find and expand parent category
    const parentCat = CATEGORIES_DATA.find(cat =>
      cat.services.some(s => s.title === servTitle)
    );
    if (parentCat) setExpandedCategory(parentCat.id);
    setSearchQuery("");
  };

  // Filtered services based on search query
  const filteredCategoriesData = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES_DATA;
    
    return CATEGORIES_DATA.map(cat => {
      const filteredServices = cat.services.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        services: filteredServices
      };
    }).filter(cat => cat.services.length > 0);
  }, [searchQuery]);

  // Auto-expand the only matching category when searching
  useEffect(() => {
    if (!searchQuery.trim()) return;
    if (filteredCategoriesData.length === 1) {
      setExpandedCategory(filteredCategoriesData[0].id);
    }
  }, [filteredCategoriesData, searchQuery]);

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* SECTION 2: Full Width Services Dashboard */}
      <div id="services-dashboard" className="w-full bg-[#fafafa] dark:bg-black">
        <div className="w-full flex flex-col lg:flex-row min-h-[700px]">
          
          {/* 1. LEFT SIDEBAR: SERVICES OUTLINE */}
          <div className="w-full lg:w-80 border-r border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-black flex flex-col shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:self-start">
            
            {/* Sidebar Header */}
            <div className="p-4 border-b border-neutral-200 dark:border-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-neutral-800 dark:text-neutral-200 text-sm">
                <BookOpen className="w-4 h-4 text-[#2545F3]" />
                <span>Services Outline</span>
              </div>
              <div className="bg-[#2545F3]/15 text-[#2545F3] dark:text-[#60a5fa] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                Live
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-3 border-b border-neutral-200 dark:border-neutral-900">
              <div className="relative flex items-center">
                <Search className="absolute left-3 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services outline..."
                  className="w-full pl-9 pr-4 py-2 bg-neutral-100 dark:bg-zinc-900 border border-neutral-200 dark:border-zinc-800 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-[#2545F3] transition-colors"
                />
              </div>
            </div>

            {/* Service Outline Scroll Area */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar max-h-[300px] lg:max-h-none">
              {filteredCategoriesData.map((cat) => {
                const isExpanded = expandedCategory === cat.id;
                
                return (
                  <div key={cat.id} className="rounded-xl border border-neutral-200 dark:border-zinc-900 bg-neutral-105/30 dark:bg-zinc-900/10 overflow-hidden">
                    {/* Category Header */}
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full p-3.5 flex items-center justify-between hover:bg-neutral-200/30 dark:hover:bg-zinc-900/30 text-left transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-neutral-850 dark:text-neutral-250 text-[12px] leading-tight pr-4">
                        {cat.name}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0" />
                      )}
                    </button>

                    {/* Sub-services Accordion Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-neutral-200 dark:border-zinc-900"
                        >
                          <ul className="py-1 bg-white dark:bg-black/50">
                            {cat.services.map((serv, index) => {
                              const isSelected = selectedService === serv.title;
                              const indexStr = `${(CATEGORIES_DATA as any[]).indexOf(cat) + 1}.${index + 1}`;
                              
                              return (
                                <li key={serv.title}>
                                  <button
                                    onClick={() => {
                                      handleSelectServiceFromSidebar(serv.title);
                                    }}
                                    className={`w-full text-left py-2.5 px-4 flex items-center justify-between text-xs transition-colors cursor-pointer border-l-2 ${
                                      isSelected 
                                        ? "bg-[#2545F3]/10 text-[#2545F3] dark:bg-[#2545F3]/20 dark:text-[#60a5fa] border-l-[#2545F3] font-semibold" 
                                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-zinc-900/40 hover:text-neutral-900 dark:hover:text-white border-l-transparent"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 min-w-0 pr-2">
                                      <span className="text-neutral-400 shrink-0 font-mono text-[10px]">
                                        {indexStr}
                                      </span>
                                      <span className="truncate pr-1">{serv.title}</span>
                                    </div>
                                    
                                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 bg-neutral-200/50 dark:bg-zinc-900 px-1.5 py-0.5 rounded font-medium shrink-0">
                                      {serv.duration}
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              {filteredCategoriesData.length === 0 && (
                <div className="py-8 text-center text-xs text-neutral-400">
                  No services found matching query
                </div>
              )}
            </div>
          </div>

          {/* 2. MIDDLE CONTENT AREA: VIEWER */}
          <div className="flex-1 bg-white dark:bg-black flex flex-col overflow-y-auto custom-scrollbar">
            
            {/* Top Navigation Header inside Content Area */}
            <div className="h-12 border-b border-neutral-200 dark:border-neutral-900 px-6 flex items-center justify-between shrink-0 bg-neutral-50/50 dark:bg-black/30">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <span className="hover:text-neutral-700 dark:hover:text-neutral-250 cursor-pointer">Services</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="hover:text-neutral-700 dark:hover:text-neutral-255 cursor-pointer">{activeService.categoryName}</span>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-neutral-800 dark:text-neutral-200">{activeService.title}</span>
              </div>
              {/* Top Nav Action Tools */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <button className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-850 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-255 cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (onGoHome) {
                        onGoHome();
                      } else {
                        window.location.hash = '';
                      }
                    }}
                    title="Back to Home"
                    className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-neutral-855 text-neutral-400 hover:text-[#2545F3] dark:hover:text-[#60a5fa] transition-colors cursor-pointer"
                  >
                    <Home className="w-4 h-4" />
                  </button>
                </div>
                <span className="h-4 w-px bg-neutral-200 dark:bg-zinc-800" />
                <div className="flex items-center gap-1 text-[11px] font-bold text-neutral-500">
                  <span className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-zinc-800 text-[#2545F3] dark:text-[#60a5fa] text-[10px]">EN</span>
                </div>
              </div>
            </div>

            {/* Large Service Title Banner */}
            <div className="relative p-6 border-b border-neutral-200 dark:border-neutral-900 overflow-hidden bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-200/50 dark:from-black dark:via-black dark:to-zinc-950/20 select-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(115,66,226,0.08),transparent_40%)]" />
              <div className="relative z-10 flex flex-col gap-3 max-w-2xl">
                {/* Badge */}
                <span className={`self-start text-[9px] font-extrabold px-2.5 py-1 rounded-md tracking-wider border uppercase shadow-sm ${
                  activeService.tag === "POPULAR" 
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                    : activeService.tag === "RECOMMENDED"
                    ? "bg-[#2545F3]/10 text-[#2545F3] dark:text-[#60a5fa] border-[#2545F3]/20"
                    : activeService.tag === "MANDATORY"
                    ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                    : activeService.tag === "FAST TRACK"
                    ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20"
                    : "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20"
                }`}>
                  {activeService.tag}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-855 dark:text-white leading-tight">
                  {activeService.title}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-450 leading-relaxed font-medium">
                  {activeService.desc}
                </p>
                
                {/* Clean Professional Pricing Badge */}
                <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600 dark:text-neutral-300 font-semibold">
                  <span className="text-neutral-400 font-normal">Filing Fee starts at:</span>
                  <span className="text-[#2545F3] dark:text-[#60a5fa] text-sm font-bold bg-[#2545F3]/10 px-2 py-0.5 rounded-md">
                    ₹{activeService.price}
                  </span>
                </div>
              </div>
            </div>

            {/* 2-Column Description & Image Section (Checklist & Documents) */}
            <div className="p-6 md:p-10 border-b border-neutral-200 dark:border-zinc-900 bg-white dark:bg-black">
              <div className="flex flex-col md:flex-row gap-10 items-start max-w-7xl mx-auto">
                {/* Left Column: Description */}
                <div className="flex-1 space-y-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                    Checklist & Documents
                  </h3>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-4 font-normal text-justify">
                    {activeService.longDesc.split("\n\n").map((p: string, i: number) => (
                      <p key={i} className="whitespace-pre-line">{p}</p>
                    ))}
                  </div>
                </div>

                {/* Right Column: Certificate Image */}
                <div className="w-full md:w-[45%] shrink-0 max-w-[500px] mx-auto md:mx-0">
                  <img 
                    src={activeService.image} 
                    alt={`${activeService.title} Visual`} 
                    className="w-full h-auto object-contain bg-transparent border-0 shadow-none rounded-none" 
                  />
                </div>
              </div>
            </div>

            {/* Stacked details content stream (No tabs, all visible vertically) */}
            <div className="p-6 space-y-10">
              

              {/* SECTION 2: Required Documents */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100 dark:border-zinc-900">
                  <FileText className="w-5 h-5 text-[#2545F3]" />
                  <h3 className="text-sm font-bold text-neutral-855 dark:text-neutral-200 uppercase tracking-wider">
                    Required Checklist Documents
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {activeService.documents.map((doc, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl border border-neutral-200 dark:border-zinc-900 bg-neutral-50/30 dark:bg-zinc-950/20 flex gap-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="w-6 h-6 rounded-lg border border-emerald-500 bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-neutral-850 dark:text-neutral-100">
                          {doc.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                          {doc.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: Registration Process Timeline (Commented Out)
              {activeService.steps && activeService.steps.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100 dark:border-zinc-900">
                    <Zap className="w-5 h-5 text-[#2545F3]" />
                    <h3 className="text-sm font-bold text-neutral-855 dark:text-neutral-200 uppercase tracking-wider">
                      Registration Process
                    </h3>
                  </div>
                  
                  <div className="relative border-l border-neutral-200 dark:border-zinc-800 ml-4 pl-6 space-y-6">
                    {activeService.steps.map((step, idx) => {
                      const colonIdx = step.indexOf(":");
                      const title = colonIdx !== -1 ? step.slice(0, colonIdx).trim() : step;
                      const desc = colonIdx !== -1 ? step.slice(colonIdx + 1).trim() : "";
                      
                      return (
                        <div key={idx} className="relative group">
                          <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border border-neutral-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-center group-hover:border-[#2545F3] transition-colors duration-300">
                            <div className="w-2 h-2 rounded-full bg-[#2545F3]/30 group-hover:bg-[#2545F3] transition-colors duration-300" />
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-[#2545F3] dark:text-[#60a5fa] tracking-wider uppercase">
                              Step {idx + 1}
                            </span>
                            <h4 className="text-xs font-bold text-neutral-855 dark:text-neutral-200">
                              {title}
                            </h4>
                            {desc && (
                              <p className="text-[10px] text-neutral-450 leading-relaxed max-w-2xl text-justify">
                                {desc}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              */}

              {/* SECTION 4: Frequently Asked Questions */}
              {(activeService as any).faqs && (
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-100 dark:border-zinc-900">
                    <BookOpen className="w-5 h-5 text-[#2545F3]" />
                    <h3 className="text-sm font-bold text-neutral-855 dark:text-neutral-200 uppercase tracking-wider">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {(activeService as any).faqs.map((faq: any, idx: number) => {
                      const isOpen = expandedFaq === idx;
                      return (
                        <div 
                          key={idx}
                          className="border border-neutral-200 dark:border-zinc-900 rounded-xl overflow-hidden bg-neutral-50/20 dark:bg-zinc-950/10"
                        >
                          <button
                            onClick={() => setExpandedFaq(isOpen ? null : idx)}
                            className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-xs md:text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-zinc-900/40 transition-colors cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown 
                              className={`w-4 h-4 text-neutral-400 dark:text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-4 pt-1 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-zinc-900/60 mt-1 text-justify">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
