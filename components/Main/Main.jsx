
import React from "react"
import'../Main/Main.scss'
import pict5 from '../public/instagram.svg'
import pict6 from '../public/twitter.svg'





function App(){
    const Main= 'Main'
  
    return(

        <>

         
<main>
<div className="main_heading">


<div className='Main_t'>

<div className='Main_up'>
    <p className='line'>
     _
    </p>
    <p className='Hike'>
    A Hiking guide
    </p>

   </div>



<p className='Main_t'>

Be prepared for the Mountains and beyond!
</p>
</div>
  
</div>

<p className='follow'>
  Follow us
</p>
<div className="log_net">

<img className='img_5' src={pict5} alt="" />
<img className='img_6' src={pict6} alt="" />
</div>

</main>
 
 
        </>
       



    )
    }


export default Main