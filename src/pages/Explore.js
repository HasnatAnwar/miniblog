import React from 'react'
import search from '../imgs/svg/twitter-search.svg'
import retweet from '../imgs/svg/twitter-retweet.svg'
import reply from '../imgs/svg/twitter-reply-outline.svg'
import like from '../imgs/svg/twitter-like-outline.svg'
import twitter from '../imgs/twitter.svg';

const Explore = () => {
  return (
    <div className='explore_container'>
      <div className="left">
        <div className="header">
          <img src={twitter} alt="" srcset="" />
          <div>
            <img src={twitter} alt="" srcset="" />
            <h3>#markhorworker</h3>
          </div>
          <img src={twitter} alt="" srcset="" />
        </div>
        <div className='main'>
          <div className='menu'>
            <p>Top</p>
            <p>Latest</p>
            <p>People</p>
            <p>Photos</p>
            <p>Videos</p>
          </div>
          <div className='follow'>
            <div className='follow_heading'>
              Peoples
            </div>
            <div>
              <div className='follow_item'>
                <img src={twitter} alt="" srcset="" />
                <div>
                  <h3>Hasnat Anwar</h3>
                  <h4>@hasnatanwar</h4>
                </div>
                <button>Follow</button>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. At, quia! Temporibus fugit voluptate magni
                sit labore! Dolor voluptatem esse adipisci cumque ipsum obcaecati nihil?
              </p>
            </div>
            <div>
              <div className='follow_item'>
                <img src={twitter} alt="" srcset="" />
                <div>
                  <h3>Hasnat Anwar</h3>
                  <h4>@hasnatanwar</h4>
                </div>
                <button>Follow</button>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. At, quia! Temporibus fugit voluptate magni
                sit labore! Dolor voluptatem esse adipisci cumque ipsum obcaecati nihil?
              </p>
            </div>
            <div>
              <div className='follow_item'>
                <img src={twitter} alt="" srcset="" />
                <div>
                  <h3>Hasnat Anwar</h3>
                  <h4>@hasnatanwar</h4>
                </div>
                <button>Follow</button>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. At, quia! Temporibus fugit voluptate magni
                sit labore! Dolor voluptatem esse adipisci cumque ipsum obcaecati nihil?
              </p>
            </div>
            <div>
              <div className='follow_item'>
                <img src={twitter} alt="" srcset="" />
                <div>
                  <h3>Hasnat Anwar</h3>
                  <h4>@hasnatanwar</h4>
                </div>
                <button>Follow</button>

              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. At, quia! Temporibus fugit voluptate magni
                sit labore! Dolor voluptatem esse adipisci cumque ipsum obcaecati nihil?
              </p>
            </div>
            <h3 className='seemore_text'>
              VIew All
            </h3>

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

export default Explore