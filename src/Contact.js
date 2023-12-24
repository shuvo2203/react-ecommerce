import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container'>
        <h2 className='text-center py-5'>Fell Free To Contact Us</h2>
        <div className='row'>
          <div className='col-md-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.854351003774!2d90.41434306668955!3d23.795123787218593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72380b3f8e7%3A0xfc12dba96edc2217!2sUY%20Systems%20Ltd.!5e1!3m2!1sbn!2sbd!4v1703397946318!5m2!1sbn!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div className='container py-5'>
        <div className='row py-5'>
          <div className='col-md-4 mx-auto'>
            <h3 className='py-3 text-center'>Contact Form</h3>
            <form action='https://formspree.io/f/xnqeawdg' method='POST'>
              <div>
                <input type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control' />
              </div><br />
              <div>
                <input type='text'
                  placeholder='Email'
                  name='email'
                  className='form-control' />
              </div><br/>
              <div>
                <textarea 
                  name='message'
                  id=''
                  color='50'
                  rows='5'
                />
              </div><br />
              <button className='btn btn-info'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact