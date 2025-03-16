import { Clock, MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import React from 'react'

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode
}

const data: Props[] = [
  {
    title: 'Visit Us',
    subtitle: 'Katraj, Pune',
    icon: (<MapPin className='w-5 h-5'/>)
  },
  {
    title: 'Contact Us',
    subtitle: '+91 - 9673929867',
    icon: (<PhoneIcon className='w-5 h-5'/>)
  },
  {
    title: 'Email Us',
    subtitle: 'adkaneb@gmail.com',
    icon: (<MailIcon className='w-5 h-5'/>)
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon-Sat : 9AM - 6PM',
    icon: (<Clock className='w-5 h-5'/>)
  }
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b'>
      {data.map((item, index) => (<ContactItem key={index}
        icon={item?.icon} title={item?.title} subtitle={item?.subtitle}
      />))}
    </div>
  )
}

const ContactItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className='flex items-center gap-4 p-4 group hover:bg-blue-500/10 transition-colors hoverEffect'>
      <span className='text-blue-500 group-hover:text-blue-700'>{icon}</span>
      <div>
        <h3 className='font-semibold text-gray-800 group-hover:text-black transition-colors'>{title}</h3>
        <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 transition-colors'>{subtitle}</p>
      </div>
    </div>
  )
}

export default FooterTop;