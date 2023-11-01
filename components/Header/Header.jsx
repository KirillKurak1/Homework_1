import React from "react"
import '../Header/Header.scss'
import pict1 from '../public/acc.svg'


function App(){
    const Header= 'Header'
  
    return(

        <>
         <div className='AllBoxes'>
      <div className='box1'>
     <p className='head_p'>
     MNTN
     </p>

    </div>
<div className="flexible_box">

<div className='Box2'>
      <p className='head_p_1'>
      Equipment
      </p>
    </div>

    <div >
    <p className='head_p_1'>
      About us
      </p>
    </div>

    <div>
      <p className='head_p_1'>
        Blog
      </p>
    </div>

</div>
    

<div className='icon_withText'>
<img className='img_1' src={pict1} alt="" />
<p className='acc'>
Account 
</p>



</div>

//       </div>
        
        </>


    )
}