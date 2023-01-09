import React from 'react';

export default function Iconbox() {
  return (
    <>
    <div className="featuresection">
    <h4 className='cate_heading'>Our Feature</h4>
    <p className='cate_para'>We have Amazing Features For You!</p>
    <div className="row features">
      <div className="container boxx">
      <div className="col-md">
        <div className="iconbox">
            <img className="svgimg" src="/savgs/chemical-pollution.svg" alt="" />
            <h3>Chemical Free</h3>
        </div>
      </div>
      
      <div className="col-md">
      <div className="iconbox">
            <img className="svgimg" src="/savgs/two.svg" alt="" />
            <h3>Freshness Guranteed</h3>
        </div>
      </div>

      <div className="col-md">
      <div className="iconbox">
            <img className="svgimg" src="/savgs/three.svg" alt="" />
            <h3>Certified Food</h3>
        </div>
      </div>

      <div className="col-md">
      <div className="iconbox">
            <img className="svgimg" src="/savgs/leaf.svg" alt="" />
            <h3>Zero Preservatives</h3>
        </div>
      </div>
      </div> 
      </div>
      </div>
    </>
  
  )
}
