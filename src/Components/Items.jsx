const Items = ({title, description,price,img,quantity}) => {
    return ( 
        <>
        <div className="items-info">
                            <div className="product-img">
                                <img src={img} alt="" />
                            </div>

                            <div className="title">
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>

                            <div className="add-minus-quantity">
                                <img src="./images/minus.png" alt=""  className="minus"/>
                            <input type="text" placeholder="2" />
                            <img src="./images/Plus.png" alt=""  className="minus"/>
                            </div>

                            <div className="price">
                                <h3>{price}</h3>
                                <img src="./images/delete.png" alt=""  className="minus-a"/>

                            </div>
                        </div>

<hr />
                      

                        
                     
                       

                         
                       
        </>
     );
}
 
export default Items;