import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'A Revolutionary Marketplace for Security Professonals',
    text: 'SentinelSync connects clients with screened security professionals who can work on independent contract basis. With the app not only do you get access to a plethora of prospects but also get to skip effort and money on getting someone to manage and administer this wing of your operations. ',
    image: '/images/hero-image.webp',
    alt: 'Hero Image'
}


export const brandFeaturesContent = {
    heading: 'Hire Your New Security Staff Today!',
    subHeading: 'FIND CONTRACTORS ANYTIME, ANYWHERE',
    features: [
        {
            title: 'SIA Authorised Badge',
            description: 'Find reliable and certified personnel with the SIA badge marked on their profiles.',
            icon: 'star-badge'
        },
        {
            title: 'Time Tracker',
            description: 'No need to bring in your own admin, SentinelSync tracks the hours worked for you.',
            icon: 'time-tracking'
        },
        {
            title: 'Payment Feature',
            description: 'The app calculates how much you owe the contractor according to the hours they log. ',
            icon: 'card-payment'
        },
        {
            title: 'Location Oriented',
            description: 'Find security personnel who is available to work in the area you are looking for as well as the time slot you are looking to fill.',
            icon: 'location-on-map'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'SentinelSync offers its clients a list of contractors who have gone through the verification process via the mobile app team. Every profile will clearly outline the certifications, skills, experience, as well as a highly noticeable badge next to it indicating whether a security personnel has received their Security Industry Authority (SIA) by the Government. Clients can also save cost without compromising on quality when skipping the hassle of dealing with corporate staffing agencies. ',
        'For security contractors it is the one stop marketplace that manages their contracts, rolls out agreed u.',
    ],
}

export const benefitsContent = {
    heading: 'Find Your Next Gig On SentinelSync',
    text: 'SentinelSync is accumulating the market for security personnel and people looking to hire. With ensured hourly market rates, here is your chance to show your profile and skills and reach out to hundreds of prospective clients who may just be looking for someone like you at the very time that is convenient for you.',
    heading02: 'Bystander Intervention',
    text02: 'To ask for help is only the first step to ensure that a user receives the appropriate support they require the app guides what more bystanders can do to safely and effectively tackle a situation.',
    benefits: [
        {
            title: 'Flexibility',
            description: 'Negotiate the job and terms you prefer as an independent contractor.',
            icon: 'flexibility'
        },
        {
            title: 'More Control',
            description: 'Accept or reject a proposal after getting in touch with  a prospective client.',
            icon: 'control-settings'
        },
        {
            title: 'Network',
            description: 'Make your own connections as you network with clients who would love you to work for them again',
            icon: 'people-networking'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Sign Up And Stay Updated on New Happenings at SentinelSync',
    text: 'Compatible for downloading in iOS and Android devices',
    faqs: [
        {
            question: 'Is ICU Compatible with Android or iOS?',
            answer: 'ICU is available on both Android and iOS devices.',

        },
        {
            question: 'Do I need a smartphone to make ICU work?',
            answer: 'No the ICU button does not need pairing to a phone and will simply alert any smartphone with the free app downloaded.',

        },
        {
            question: 'Is the ICU button and app secure?',
            answer: 'Yes the ICU button only transmits a notification sonar ping and an “I Feel Unsafe” message to nearby phones. It does not have any personal information on it and it’s location is not tracked. ',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'A Unique Learning and Gaming Experience Every Time You Play',
    text: 'Download the LearnedApp app and embark on an enlightening journey today'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    accent: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
