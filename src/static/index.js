import ads from '../assets/course.svg'
import managment from '../assets/managment.svg'
import hr from '../assets/HR.svg'
import marketinggirl from '../assets/girlmarketing.svg'
import managmentgirl from '../assets/girlmanag.svg'
import design from '../assets/design.svg'

export const LINKS = ['About Us', 'Courses', 'Events', 'Blog', 'Contacts']

export const CREATEX = [
    "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
    "Vulputate placerat amet pulvinar lorem nisl.",
    "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
    "Etiam duis lobortis in fames ultrices commodo nibh.",
    "Tincidunt sagittis neque sem ac eget.",
    "Ultricies amet justo et eget quisque purus vulputate dapibus tortor."
]

export const USERS = [
    {
        id: 1,
        url: ads,
        profession: {
            title: "Marketing",
            bg: "#03CEA4"
        },
        title: "The Ultimate Google Ads Training Course",
        price: 100,
        name: " | by Jerome Bell"
    },
    {
        id: 2,
        url: managment,
        profession: {
            title: "Management",
            bg: "#5A87FC"
        },
        title: "Prduct Management Fundamentals",
        price: 480,
        name: " | by Marvin McKinney"
    },
    {
        id: 3,
        url: hr,
        profession: {
            title: "HR & Recruting",
            bg: "#F89828"
        },
        title: "HR  Management and Analytics",
        price: 200,
        name: " | by Leslie Alexander Li"
    },
    {
        id: 4,
        url: marketinggirl,
        profession: {
            title: "Marketing",
            bg: "#03CEA4"
        },
        title: "Brand Management & PR Communications",
        price: 530,
        name: " | by Kristin Watson"
    },
    {
        id: 5,
        url: managmentgirl,
        profession: {
            title: "Management",
            bg: "#5A87FC"
        },
        title: "Business Development Management",
        price: 400,
        name: " | by Dianne Russell"
    },
    {
        id: 6,
        url: design,
        profession: {
            title: "Design",
            bg: "#F52F6E"
        },
        title: "Graphic Design Basic",
        price: 500,
        name: " | by Guy Hawkins"
    }
]
