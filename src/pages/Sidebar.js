import React from 'react'
import mbpng from '../imgs/mbpng.png';
import twitter from '../imgs/twitter.svg';
import home from '../imgs/svg/twitter-home.svg';
import notification from '../imgs/svg/twitter-alert.svg';
import message from '../imgs/svg/twitter-message.svg';
import hashtag from '../imgs/svg/twitter-hashtag.svg';
import lists from '../imgs/svg/twitter-lists.svg'
import profile from '../imgs/svg/twitter-profile.svg'
import book from '../imgs/svg/twitter-book.svg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-logo'>
                <img src={twitter} alt="" srcset="" />
            </div>
            <div className='menu'>
                <div className='menu-item'>
                    <a href="/">
                    <div className='icon' >
                        <img src={home} alt="" srcset="" />
                    </div>
                    <h3>Home</h3>
                    </a>
                </div>

                <div className='menu-item'>
                    <a href='/explore'>
                        <div className='icon'>
                            <img src={hashtag} alt="" srcset="" />
                        </div>
                        <h3>Expolre</h3>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="/">
                    <div className='icon'>
                        
                        <img src={notification} alt="" srcset="" />
                    </div>
                    <h3>Notifications</h3>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="/message">
                    <div className='icon'>
                        <img src={message} alt="" srcset="" />
                    </div>
                    <h3>Messages</h3>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="/">
                    <div className='icon'>
                        <img src={book} alt="" srcset="" />
                    </div>
                    <h3>Bookmarks</h3>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="/">
                    <div className='icon'>
                        <img src={lists} alt="" srcset="" />
                    </div>
                    <h3>Lists</h3>
                    </a>
                </div>
                <div className='menu-item'>
                    <a href="/profile">
                    <div className='icon'>
                        <img src={profile} alt="" srcset="" />
                    </div>
                    <h3>Profile</h3>
                    </a>
                </div>

                <div className='menu-item'>
                    <a href="/">
                    <div className='icon'>
                        <img src={twitter} alt="" srcset="" />
                    </div>
                    <h3>More</h3>
                    </a>
                </div>

            </div>
            <div className='tweet-btn'>
                <button type='button'>Tweet</button>
            </div>
            <div className='google-icon' >
                <div className='logo'>
                    <img src={twitter} alt="" srcset="" />
                </div>
                <div className='text'>
                    <h2>
                        Markhor Worker
                    </h2>
                    <h4>
                        @markhorworker
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default Sidebar

