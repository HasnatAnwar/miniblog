import React from 'react'
import twitter from '../imgs/twitter.svg';
import mbpng from '../imgs/mbpng.png';
import threedots from '../imgs/threedots.svg';
import share from '../imgs/share.svg';
import search from '../imgs/svg/twitter-search.svg'
import retweet from '../imgs/svg/twitter-retweet.svg'
import reply from '../imgs/svg/twitter-reply-outline.svg'
import like from '../imgs/svg/twitter-like-outline.svg'

const Profile = () => {
    return (
        <div className='profile_container'>
            <div className="left">
                <div className="header">
                    <img src={twitter} alt="" srcset="" />
                    <div>

                        <h3>
                            Markhor Worker
                        </h3>
                        <h5>
                            0 Tweets

                        </h5>

                    </div>
                </div>
                <div className='main'>
                    <div className='cover-photo'>
                        <img src={mbpng} alt="" />
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-photo'>
                            <img src={mbpng} alt="" />
                        </div>
                        <button className='edit-profile'>
                            Edit Profile
                        </button>
                    </div>
                    <div className="profile-infos">
                        <div className="name-info">
                            <h3>Markhor Worker</h3>
                            <h5>@markhorworker</h5>
                        </div>
                        <div className='work-info'>
                            Full Stack Web Developer.
                            Using React Js for front end and Django for back end.
                        </div>
                        <div className="date-info">
                            <img src={mbpng} alt="" />
                            <p>Joined  June 2022</p>
                        </div>
                        <div className='follower-info'>
                            <p>2 Following</p>
                            <p>2 Follower</p>
                        </div>
                    </div>
                    <div className="tweet-menu">
                        <div className='tweet-header'>
                            <p>Tweets</p>
                            <p>Tweets and Reply</p>
                            <p>Media</p>
                            <p>Likes</p>
                        </div>
                        <div className="tweets">
                            <div className="post">
                                <img className="profile" src={mbpng} alt="" />
                                <div className='post_inside'>
                                    <div>
                                        <h3 className='display_name'>Hasnat Anwar </h3>
                                        <h3 className='display_id'>@hasnatAnwar</h3 >
                                        <h3 className='time'> .22h</h3>
                                        <img className='threedots' src={threedots} alt="" srcset="" />
                                    </div>
                                    <p>
                                        Asslam o Allikum!

                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user

                                    </p>
                                    <img className='postimg' src={mbpng} alt="" />

                                </div>


                            </div>
                            <div className="post_share">
                                <div>
                                    <img src={reply} alt="" />
                                    <p>313k</p>
                                </div>
                                <div>
                                    <img src={like} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={retweet} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={share} alt="" />

                                </div>

                            </div>
                            <div className="post">
                                <img className="profile" src={mbpng} alt="" />
                                <div className='post_inside'>
                                    <div>
                                        <h3 className='display_name'>Hasnat Anwar </h3>
                                        <h3 className='display_id'>@hasnatAnwar</h3 >
                                        <h3 className='time'> .22h</h3>
                                        <img className='threedots' src={threedots} alt="" srcset="" />
                                    </div>
                                    <p>
                                        Asslam o Allikum!

                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user

                                    </p>
                                    <img className='postimg' src={mbpng} alt="" />

                                </div>


                            </div>
                            <div className="post_share">
                                <div>
                                    <img src={reply} alt="" />
                                    <p>313k</p>
                                </div>
                                <div>
                                    <img src={like} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={retweet} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={share} alt="" />

                                </div>

                            </div>
                            <div className="post">
                                <img className="profile" src={mbpng} alt="" />
                                <div className='post_inside'>
                                    <div>
                                        <h3 className='display_name'>Hasnat Anwar </h3>
                                        <h3 className='display_id'>@hasnatAnwar</h3 >
                                        <h3 className='time'> .22h</h3>
                                        <img className='threedots' src={threedots} alt="" srcset="" />
                                    </div>
                                    <p>
                                        Asslam o Allikum!

                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user

                                    </p>
                                    <img className='postimg' src={mbpng} alt="" />

                                </div>


                            </div>
                            <div className="post_share">
                                <div>
                                    <img src={reply} alt="" />
                                    <p>313k</p>
                                </div>
                                <div>
                                    <img src={like} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={retweet} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={share} alt="" />

                                </div>

                            </div>
                            <div className="post">
                                <img className="profile" src={mbpng} alt="" />
                                <div className='post_inside'>
                                    <div>
                                        <h3 className='display_name'>Hasnat Anwar </h3>
                                        <h3 className='display_id'>@hasnatAnwar</h3 >
                                        <h3 className='time'> .22h</h3>
                                        <img className='threedots' src={threedots} alt="" srcset="" />
                                    </div>
                                    <p>
                                        Asslam o Allikum!

                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user

                                    </p>
                                    <img className='postimg' src={mbpng} alt="" />

                                </div>


                            </div>
                            <div className="post_share">
                                <div>
                                    <img src={reply} alt="" />
                                    <p>313k</p>
                                </div>
                                <div>
                                    <img src={like} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={retweet} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={share} alt="" />

                                </div>

                            </div>
                            <div className="post">
                                <img className="profile" src={mbpng} alt="" />
                                <div className='post_inside'>
                                    <div>
                                        <h3 className='display_name'>Hasnat Anwar </h3>
                                        <h3 className='display_id'>@hasnatAnwar</h3 >
                                        <h3 className='time'> .22h</h3>
                                        <img className='threedots' src={threedots} alt="" srcset="" />
                                    </div>
                                    <p>
                                        Asslam o Allikum!

                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user
                                        Here is text for the Tweet for the user

                                    </p>
                                    <img className='postimg' src={mbpng} alt="" />

                                </div>


                            </div>
                            <div className="post_share">
                                <div>
                                    <img src={reply} alt="" />
                                    <p>313k</p>
                                </div>
                                <div>
                                    <img src={like} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={retweet} alt="" />
                                    <p>212</p>
                                </div>
                                <div>
                                    <img src={share} alt="" />

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="right">
                <div className="search">
                    <div className='searchbar'>
                        <img src={search} alt="" srcset="" />
                        <h3>Search Tweeter</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="trendings">
                        <h3 className='trendings_heading'>Trendings</h3>
                        <div className="trend">
                            <h3 className="trend_region">Trending in Pakistan</h3>
                            <h3 className="trend_hashtag">#markhorworker</h3>
                            <h4 className="trend_count">334 tweet</h4>
                        </div>
                        <div className="trend">
                            <h3 className="trend_region">Trending in Pakistan</h3>
                            <h3 className="trend_hashtag">#markhorworker</h3>
                            <h4 className="trend_count">334 tweet</h4>
                        </div>
                        <div className="trend">
                            <h3 className="trend_region">Trending in Pakistan</h3>
                            <h3 className="trend_hashtag">#markhorworker</h3>
                            <h4 className="trend_count">334 tweet</h4>
                        </div>

                        <h3 className='seemore_text'>
                            See More
                        </h3>
                    </div>

                    <div className='follow'>
                        <div className='follow_heading'>
                            Who to Follow
                        </div>
                        <div className='follow_item'>
                            <img src={twitter} alt="" srcset="" />
                            <div>
                                <h3>Hasnat Anwar</h3>
                                <h4>@hasnatanwar</h4>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className='follow_item'>
                            <img src={twitter} alt="" srcset="" />
                            <div>
                                <h3>Hasnat Anwar</h3>
                                <h4>@hasnatanwar</h4>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div className='follow_item'>
                            <img src={twitter} alt="" srcset="" />
                            <div>
                                <h3>Hasnat Anwar</h3>
                                <h4>@hasnatanwar</h4>
                            </div>
                            <button>Follow</button>
                        </div>
                        <h3 className='seemore_text'>
                            See More
                        </h3>

                    </div>
                    <div className='text'>
                        Terms and Services
                        Privacy Policy
                        Cookies Policy
                        Accessibily
                        Ads info
                        More ...
                        <br />
                        &copy; 2022 Tweeter Inc.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile