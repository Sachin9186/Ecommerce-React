import React from 'react'

export default function Blog() {
  return (
    <>
    <div className="blog_section">
    <h4 className='cate_heading'>Featured Posts</h4>
    <p className='cate_para'>Catchup with the latest trends in food</p>

    <div className="container text-center blogs">
  
  <div className="row">
    <div className="col-sm"><img src="/Shop/ab.jpg" alt="" />
    <div className="blogcontent">
      <p className='datetim'>Jan 22, 2019</p>
      <p className='blogdiscrip'>The chicken feast: an ultimate ode to chicken</p>
    </div>
    </div>
    <div className="col-sm"><img src="/Shop/r2.jpg" alt="" />
    <div className="blogcontent">
    <p className='datetim'>May 02, 2020</p>
      <p className='blogdiscrip'>5 foods to keep you warm this winter</p>
    </div></div>
    <div className="col-sm"><img src="/Shop/r3.jpg" alt="" />
    <div className="blogcontent">
    <p className='datetim'>July 17, 2021</p>
      <p className='blogdiscrip'>The real truth behind the most important meal of the day!</p>
    </div></div>
    <div className="col-sm"><img src="/Shop/r5.jpg" alt="" />
    <div className="blogcontent">
    <p className='datetim'>Des 30, 2021</p>
      <p className='blogdiscrip'>Benefits of omega 3 fatty acids</p>
    </div></div>
  </div>
 
</div>
</div>
    </>
  )
}
