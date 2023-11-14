import React from 'react'
import { BiLocationPlus ,BiPhoneCall ,BiTimeFive} from 'react-icons/bi';

const Contact = () => {
  return (
    <>
        <section className='row section-padding px-5'>
            <div className='col-md-6'>
              <h2>Contact</h2>
              <p>Lorem ipsum dolor sit amet, consect turuam ipiscing elit, do eiusmod tempor incid eduvn.</p>
              <ul className="detail">
                <li><BiLocationPlus/>Ajay Tiwari</li>
                <li><BiPhoneCall/>Ajay Tiwari</li>
                <li><BiTimeFive/>Ajay Tiwari</li>
              </ul>
            </div>
            <div className='col-md-6'>
              <form id='contactForm' action="">
                <div className='d-flex gap-3'>
                  <div className="form-floating p-0 w-100">
                    <input type="text" className="form-control p-2" id="floatingInput" placeholder="name@example.com"/>
                    <label  htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating w-100  p-0">
                    <input type="email" className="form-control p-2" id="floatingEmail" placeholder="Email"/>
                    <label  htmlFor="floatingEmail">Email</label>
                  </div>
                </div>
                <div className="form-floating w-100 mt-3 p-0">
                  <input type="text" className="form-control p-2" id="floatingSubject" placeholder="Subject"/>
                  <label  htmlFor="floatingSubject">Subject</label>
                </div>
                <div className="form-floating mt-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                <input className="btn mt-3" type="submit" value="Submit"></input>
              </form>
            </div>
        </section>
    </>
  )
}

export default Contact
