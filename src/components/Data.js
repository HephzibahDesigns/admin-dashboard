import{
  UilEstate,
   UilClipboardAlt,
   UilUsersAlt,
   UilPackage,
   UilChart,
   UilSignOutAlt,
   UilMoneyWithdrawal,
   UilUsdSquare,
}
from '@iconscout/react-unicons'

import Tom from '../images/Tom.jfif';
import James from '../images/James.jfif';
import IronMan from '../images/Iron-Man-1.jpg';



export const SideBarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },

  {
    icon: UilPackage,
    heading: "Customers",
  },

  {
    icon: UilUsersAlt,
    heading: "Products",
  },

  {
    icon:  UilChart,
    heading: "Analytic",
  },

  {
    icon:UilSignOutAlt,
    heading: "Sign-Out",
  }
]

export const cardData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },

    barValue: 70,

    value: "25,978",

    png: UilUsdSquare,

    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      }
    ]
  },

  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0px 10px 20px 0px #fdc0c7",
    },

    barValue: 80,

    value: "14,270",

    png: UilMoneyWithdrawal,

    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      }
    ]
  },

  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #f9d59b",
    },

    barValue: 60,

    value: "25,978",

    png: UilClipboardAlt,

    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      }
    ]
  },
]




export const UpdateData = [
  {
    img:  Tom,
    name: "Andrew Thomas",
    notif: "has ordered Apple smart watch 2500ah battery",
    time: "25 seconds ago" 
  },

  {
    img: James,
    name: "James Bond",
    notif: "has recieved the car he requested for ",
    time: "30 minutes ago" 
  },

  {
    img: IronMan,
    name: "Iron Man",
    notif: "has ordered for the equipments needed to complete his iron man suit ",
    time: "2 hours ago" 
  }
]