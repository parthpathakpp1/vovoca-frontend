import React from 'react'
import style from './Footer.module.css'
import Link from 'next/link'
import {AiFillGithub ,AiFillTwitterCircle ,AiFillLinkedin ,AiFillInstagram,AiFillFacebook} from "react-icons/ai"
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
  <div className={style.footer}>
   <div className={style.container}>
      
        <div className={style.contents}>
          
          <div className={style.contents_item}>
          <div class={style.contents_item_Head}>Quick Links</div>
          <ul className={style.u_list}>
           <li className={style.quick_links_list}>
            <Link href="/" className={style.link_item}>Home</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="/#about" className={style.link_item}>About Us</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="/testimonial" className={style.link_item}>Testimonials</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="/developers" className={style.link_item}>Team</Link>
           </li>
           </ul>
           </div>
          
          <div className={style.contents_item2}>
            <div className={style.contents_item_Head}>Community</div>
            <ul className={style.u_list}>
            <li className={style.quick_links_list}>
            <Link href="https://github.com/Deveimer/"  className={style.link_item}><AiFillGithub className={style.icons} />Github</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="https://twitter.com"  className={style.link_item}><AiFillTwitterCircle className={style.icons} />Twitter</Link>
           </li>

           <li className={style.quick_links_list}>
            <Link href="https://linkedin.com"  className={style.link_item}><AiFillLinkedin className={style.icons} />Linkedin</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="https://instagram.com"  className={style.link_item}><AiFillInstagram className={style.icons} />Instagram</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="https://facebook.com"  className={style.link_item}><AiFillFacebook className={style.icons} />Facebook</Link>
           </li>
            </ul>
          </div>

          <div className={style.contents_item2}>
          <div class={style.contents_item_Head}>Help</div>
          <ul className={style.u_list}>
           <li className={style.quick_links_list}>
            <Link href="https://github.com/Deveimer/vovoca-frontend/issues" className={style.link_item}>Github Issues</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="https://github.com/Deveimer" className={style.link_item}>Contribution</Link>
           </li>
           <li className={style.quick_links_list}>
            <Link href="https://github.com/Deveimer" className={style.link_item}>Github Discussions</Link>
           </li>
           </ul>
           </div>
        </div>
        <div className={style.copyright_section}>
        <div class={style.logo_link}>
        <Link scroll={true} href="/">
          <div className={style.neon}>VOVOCA</div>
        </Link>
    </div>
    <p className={style.copyright}>© {currentYear}. All rights reserved.</p>
    </div>  
        </div>
        
   </div>
  )
}

export default Footer