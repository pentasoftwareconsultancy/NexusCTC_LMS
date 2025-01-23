// sectionsData.js

import { BiSolidHappy } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";
import { BsJournalRichtext } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";

export const sectionsData = {
  heroSection: {
    // videoUrl: 'https://v.ftcdn.net/01/44/48/54/700_F_144485402_GCjV0x5TXlukewbLYyDge7Bb01f7hQ5n_ST.mp4', 
    image:"https://media.istockphoto.com/id/1772396051/photo/lms-learning-management-system-teacher-using-laptop-for-online-lesson-and-online-education.jpg?s=2048x2048&w=is&k=20&c=EiPJYS4PPwKro-de_VD2souXX9UJgA-71kJ-EpemKuE=",
    altText: 'AboutUsPage Hero image',
    title: 'About Nexus',
    //   subTitle: 'Xus', // 'X' part with special styling
  },


  aboutUsSection: {
    title: 'About Us',
    content: 'Nexus Corporate Training Center LLP is Pune’s most innovative IT no.1 training institute, offering a wide range of specialized courses like Medical Coding, Power BI, AWS, Software Testing, AWS Administrator, Dev-Ops, Data Science, Full Stack Devloper, Big Data, AR Caller/RCM, Java, C# and .NET, Business Analyst, Sales Force Adm/Dev, SQL, Scrum Master, Digital Marketing and Soft Skills courese other software courses with placement assistance with live sessions. Our mission is to provide learners with industry-relevant skills through hands-on training, led by experienced IT instructors. We focus on delivering the best software courses in Pune (online and offline) with placement, ensuring our students are job-ready upon course completion. With a strong emphasis on practical knowledge, Nexus equips learners to excel in the competitive IT landscape and secure promising careers in top companies.'
    // Add more fields as needed for the About Us section
  },



  successStorySection: {
    title: 'Success Stories',
    stories: [
      {
        img: "https://www.nexusctc.com/assets/Rushikeshtupekar-DJur6iSe.jpg",
        name: 'John Doe',
        story: 'I achieved great things thanks to the help of NeXus...',
        // Add more details for each success story
      },
      {
        img: "https://www.nexusctc.com/assets/LokeshJadhav-CM99s36Q.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },

      {
        img: "https://www.nexusctc.com/assets/AshishAarya-B-CGwPId.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },

      {
        img: "https://www.nexusctc.com/assets/ArayanGiri-Bm85FP-z.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },

      {
        img: "https://www.nexusctc.com/assets/BhushanDeshkar-CQztXB_z.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },

      {
        img: "https://www.nexusctc.com/assets/Sneha-BQpxWHkh.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },


      {
        img: "https://www.nexusctc.com/assets/SushilShelar-CFDLzrcD.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },

      {
        img: "https://www.nexusctc.com/assets/MilindPatil-BqhDiAum.jpeg",
        name: 'Jane Smith',
        story: 'My career took off after partnering with NeXus...',
      },


      // More success stories as needed
    ],
  },


  visionMission: {
    visionMissionImage:"https://lms.paarl.org.ph/pluginfile.php/51/course/overviewfiles/SPOT%20RDA%20banner%206.png",
    Vision: [
      {
        title: "Our Vision",
        vision: "At Nexus Corporate Training Center LLP, our vision is to deliver accessible, high-quality IT education with placement support, empowering learners in Pune and beyond. We aim to build an inclusive global community that equips students with the skills and connections needed to excel in the dynamic IT industry.",
        // visionImage: "https://www.kgbvjamshedpur.com/img/vision_mission/mission.jpg", // Path to image for the Vision section
        visionBackgroundColor: " rgb(234, 247, 251)", 


      }
    ],
    Mission: [
      {
        title: "Our Mission",
        mission: "Our mission at Nexus Corporate Training Center LLP is to empower learners with job-focused software skills through tailored programs for all experience levels. We aim to equip each student with the knowledge and hands-on training needed to thrive in the IT industry and excel in their careers.",
        // missionImage: "https://t4.ftcdn.net/jpg/00/88/53/01/360_F_88530117_yIEF3FLZlxRPEdwgDLmTMH7fcdTnH7D6.jpg",
        missionBackgroundColor: " rgb(251, 220, 236)", 
      }
    ],

    Value: [
      {
        title: "Our Value",
        value: "At Nexus Corporate Training Center LLP, our values focus on a learner-centered approach, career success with 100% placement support, continuous improvement through feedback, and a collaborative, inclusive community for students and professionals alike.",
        // valueImage: "https://i.ytimg.com/vi/kr43VrFnOaE/maxresdefault.jpg",
        valueBackgroundColor: " rgb(223, 229, 244)", 
      }
    ]
  },

  WhyChooseUs: [
    {
      // image: "https://media.licdn.com/dms/image/v2/D4E12AQE9PynghwnfBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703624413744?e=2147483647&v=beta&t=flmY42TR1WDPtydBudSjguuucBXVawcu5ijGOgSA8bA",
      // heading: "Extensive Industry Experience",
      // stars: "★★★★★",
      WhyChooseUsLogo:<FaThumbsUp size={70}/>,
      student_counting:"12+",
      content:"year of indusrty experience",
      description:
        "We have over 20 years of experience providing high-quality corporate training solutions across various industries, helping companies enhance employee skills and productivity.",
    },

    {
      // image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c1a0b8c4-aa4f-42aa-8b5a-aa723dabc7f6/95279c53-ae4c-44a8-9b72-e9850dcc4143.png",
      // heading: "Customized Training Programs",
      // stars: "★★★★★",
      
      WhyChooseUsLogo:<BiSolidHappy size={70} />,
      student_counting:"700+",
      content:"Happy Clients",
      description: "Our training programs are tailored to meet the specific needs of your organization, ensuring that your employees gain the most relevant and impactful skills.",
    },

    {
      // image: "https://media.licdn.com/dms/image/D4D12AQFXf7wr7dGDpQ/article-cover_image-shrink_720_1280/0/1705431516441?e=2147483647&v=beta&t=u2I9cw0zwgM2hecJX0Y_HbFdwhY2n3PUZCTuB4rFjNc",
      // heading: "Certified and Experienced Trainers",
      // stars: "★★★★★",

      WhyChooseUsLogo:<BsJournalRichtext size={70}/>,
      student_counting:"800+",
      content:"Project Done",
      description: "Our trainers are industry experts with certifications and hands-on experience in their respective fields, ensuring top-notch training quality.",
    },

    {
      // image: "https://media.licdn.com/dms/image/D4D12AQFXf7wr7dGDpQ/article-cover_image-shrink_720_1280/0/1705431516441?e=2147483647&v=beta&t=u2I9cw0zwgM2hecJX0Y_HbFdwhY2n3PUZCTuB4rFjNc",
      // heading: "Certified and Experienced Trainers",
      // stars: "★★★★★",

      WhyChooseUsLogo:<LiaIndustrySolid size={70} />,
      student_counting:"40+",
      content:"year of indusrty experience",
      description: "Our trainers are industry experts with certifications and hands-on experience in their respective fields, ensuring top-notch training quality.",
    },
  ],



    TeamData: [
      {
        name: "Rajiv Khade",

        imageUrl: "https://www.nexusctc.com/assets/Rajeev%20Khade-BwwdYO-k.webp", // Example image URL

      },
      {
        name: "Aditi Khade",

        imageUrl: "https://www.nexusctc.com/assets/Aditi%20Mam-CyvavQcW.jpeg", // Example image URL

      },
      {
        name: "Sagar Solanke",

        imageUrl: "https://www.nexusctc.com/assets/Sagar%20Sir-DL_QcaJa.jpeg", // Example image URL

      },
      {
        name: "Bhagyshree Patil",

        imageUrl: "https://www.nexusctc.com/assets/Bhagyshree%20Mam-BaeSY0sP.jpeg",

      },
      {
        name: "Lekhraj Patil",

        imageUrl: "https://www.nexusctc.com/assets/Sumit%20Sir-9G-VamcF.jpeg",

      },
      {
        name: "Abhijeet Kumar",
        imageUrl: "https://www.nexusctc.com/assets/Abhijit%20Kumar-D5TIXzF_.webp", // Example image URL
      },
      {
        name: "Vaibhav Jadhav",

        imageUrl: "https://www.nexusctc.com/assets/Vaibhav%20Jadav-DsR6XUNq.jpeg", // Example image URL

      },
    ],



};
