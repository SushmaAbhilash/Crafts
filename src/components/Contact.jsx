import React from 'react'
 


const Contact = () => {
  return (
    

    
    <div className='contact'>
      
      <main>
        <h1>Contact Us</h1>

        <form>


          <div>
            <label>Name</label>
            <input type="text" required placeholder='Enter your name' />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder='Ex: Abc@gmail.com' />
          </div>

          <div>
            <label>Query</label>
            <input type="text" required placeholder='Enter your query here....' />
          </div>

          <button className="submit">Submit</button>
        </form>
      </main>
      
    </div>
    
  )
}

export default Contact