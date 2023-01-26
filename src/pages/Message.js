import React from 'react'
import twitter from '../imgs/twitter.svg';
const Message = () => {
  return (
    <div className="message_container">
      <div className="left">
        <div className="header">
          <h3>Messages</h3>
          <div>
            <img src={twitter} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="msg_searchbox">
          <div>
            <img src={twitter} alt="" />
            <h4>Search Direct Message</h4>
          </div>
        </div>
        <div className="contact_container">


          <div className="contact_item">
            <img src={twitter} alt="" />
            <div className='infos'>
              <div className='name_info'>
                <h4><span>Markhor Worker</span></h4>
                <h4>@markhorworker</h4>
                <h4>2m</h4>
              </div>
              <h4 className="sms">
                Hello
              </h4>
            </div>
            
          </div>
          <div className="contact_item">
            <img src={twitter} alt="" />
            <div className='infos'>
              <div className='name_info'>
                <h4><span>Markhor Worker</span></h4>
                <h4>@markhorworker</h4>
                <h4>2m</h4>
              </div>
              <h4 className="sms">
                Markhor is here
              </h4>
            </div>
            
          </div>
          <div className="contact_item">
            <img src={twitter} alt="" />
            <div className='infos'>
              <div className='name_info'>
                <h4><span>Markhor Worker</span></h4>
                <h4>@markhorworker</h4>
                <h4>2m</h4>
              </div>
              <h4 className="sms">
                Full stack Developer
              </h4>
            </div>
            
          </div>

        </div>
      </div>
      <div className='right'>
        <div className="person">
          <img src={twitter} alt="" />
          <h4><span>Markhor Worker</span></h4>
          <h4>@fullstackweb&appdeveloper</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magnam, obcaecati, debitis alias hic quod id assumenda
            accusamus quos rem maiores dolor illum iusto! Reprehenderit.
            </p>
            <div>
              <h5>Joined Januray 2023</h5>
              <h5>3130 Followers</h5>
            </div>
        </div>
        <div className="messagebox">
          <div className="personsms">
            <p className="text">
              Hey! <br />
              Hasnat I need your Help.
            </p>
            <p className='timestamp'>
              Jan 21, 2023, 10:00 AM
            </p>
          </div>
          <div className="mysms">
            <p className="text">
              Yes Sure. <br />
              I am Full stack Web Developer and I am here to Develop for you. <br />
              Let me know which kind of work you want ?
            </p>
            <p className='timestamp'>
              Jan 21, 2023, 10:00 AM
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Message