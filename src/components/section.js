import React from 'react';



function Section() {
    return (
     <div>
  {/* <!-- main area --> */}
  <section className="products">
    <div className="container" >
      <h2>
  You May Like One Of Our Dishes
      </h2>
      {/* <!-- <div className="card-group"> --> */}
      <center>
        <div className="row row-cols-3 row-cols-md-4 row-cols-sm-6">
          <div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rYMfEECKYBDwAtRmDIASXVuLmOk-GShvbg&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
             
            </div>
          </div>

          <div className="card">
            <img width="10rem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMIPLo3nKUf2vov2ku0tRcJq5qEI42iMq-Q&usqp=CAU"
              className="card-img-top" alt="..."/>
            <div className="card-body">
             
            </div>
          </div>


          <div className="card">
            <img src="https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
             
            </div>
          </div>


          <div className="card">
            <img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_39/3027176/190926-chicken-tikka-masala-se-405p.jpg"
              className="card-img-top" alt="..."/>
            <div className="card-body">
           
            </div>
          </div>



       

         
        </div>
      </center>
    </div>
  </section>

     </div>
    )
}

export default Section