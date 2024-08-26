import {people01, people02, people03, location,calendar,coupon,airbnb,booking_com,expedia,tripadvisor,orbitz ,instagram, facebook,twitter} from "../assets";

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "discover",
      title: "Discover",
    },
    {
      id: "special deals",
      title: "Special deals",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];


  export const footerLinks = [
    {
      title: "Company",
      links: [
        {
          name: "About",
          link: "#",
        },
        {
          name: "Career",
          link: "#",
        },
        {
          name: "Mobile",
          link: "#",
        },
        
        
      ],
    },
    {
      title: "Contact",
      links: [
        {
          name: "Why travlog",
          link: "#",
        },
        {
          name: "Partner with us",
          link: "#",
        },
        {
          name: "FAQ's",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        
      ],
    },
    {
      title: "Meet us",
      links: [
        {
          name: "+00 92 1234 56789",
          link: "#",
        },
        {
          name: "info@travlog.com",
          link: "#",
        },
        {
            name: "205. R Street, New York",
            link: "#",
        },
          
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    
  ];

  export const features = [
    {
      id: "feature-1",
      icon: location,
      title: "We offer best services",
      color: "bg-tertiary",
      content:
        "Lorem Ipsum is not simply random text.",
    },
    {
      id: "feature-2",
      icon: calendar,
      title: "Schedule your trip",
      color: "bg-yellow-400",
      content:
        "Lorem Ipsum is not simply random text.",
    },
    {
      id: "feature-3",
      icon: coupon,
      title: "Get discounted coupons",
      color: "bg-secondary",
      content:
        "Lorem Ipsum is not simply random text.",
    },
  ];

  export const clients = [
    {
      id: "client-1",
      logo: tripadvisor,
    },
    {
      id: "client-2",
      logo: expedia,
    },
    {
      id: "client-3",
      logo: booking_com,
    },
    {
      id: "client-4",
      logo: airbnb,
    },
    {
        id: "client-5",
        logo: orbitz,
      },
  ];
  export const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];