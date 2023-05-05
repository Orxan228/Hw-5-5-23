import React from 'react'
import "./Header.css"
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
    <section className='Header'>
        <div className="Header___hero">
            <div className="Header___hero___left">
                <a className='Header___hero___left--a' href="#">SUBSCRIBE</a>
            </div>
            <div className="Header___hero___middle">
                <h2 className='Header___hero___middle--h2'>Blog</h2>
            </div>
            <div className="Header___hero___right">
                <SearchIcon className="Header___hero___right--icon" /> <Button className="Header___hero___right--btn" variant="outlined">SIGN UP</Button>
            </div>
        </div>
        <div className="Header___nav">
            <ul className='Header___nav---list'>
                <li className='Header___nav---list--item'>Technology</li>
                <li className='Header___nav---list--item'>Design</li>
                <li className='Header___nav---list--item'>Culture</li>
                <li className='Header___nav---list--item'>Business</li>
                <li className='Header___nav---list--item'>Politics</li>
                <li className='Header___nav---list--item'>Opinion</li>
                <li className='Header___nav---list--item'>Science</li>
                <li className='Header___nav---list--item'>Health</li>
                <li className='Header___nav---list--item'>Style</li>
                <li className='Header___nav---list--item'>Travel</li>
            </ul>
        </div>
        <div className="Header___gallery">
            <div className="Header___gallery___top">
                <div className="Header___gallery___top___inner">
                    <p className='Header___gallery___top--p1'>Title of a longer featured blog post</p>
                    <p className='Header___gallery___top--p2'>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                    <a className='Header___gallery___top--a' href="#">Continue reading…</a>
                </div>
            </div>
            <div className="Header___gallery___bottom">
                <div className="Header___gallery___bottom___inner">
                    <div className="Header___gallery___bottom___inner___left">
                        <div className="Header___gallery___bottom___inner___left--left">
                            <p className='Header___gallery___bottom--p1'>Featured Post</p>
                            <p className='Header___gallery___bottom--p2'>Nov 12</p>
                            <p className='Header___gallery___bottom--p3'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a className='Header___gallery___bottom--a' href="#">Continue reading...</a>
                        </div>
                        <div className="Header___gallery___bottom___inner___left--right">
                            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmxvZy98fHx8fHwxNjgzMjM2Njkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
                        </div>
                    </div>
                    <div className="Header___gallery___bottom___inner___right">
                        <div className="Header___gallery___bottom___inner___right--left">
                            <p className='Header___gallery___bottom--p1'>Post Title</p>
                            <p className='Header___gallery___bottom--p2'>Nov 11</p>
                            <p className='Header___gallery___bottom--p3'>This is a wider card with supporting text below as a natural lead-in to additional content.</p>     
                            <a className='Header___gallery___bottom--a' href="#">Continue reading...</a>               
                        </div>
                        <div className="Header___gallery___bottom___inner___right--right">
                            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmxvZy98fHx8fHwxNjgzMjM2Njkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  )
}

export default Header

