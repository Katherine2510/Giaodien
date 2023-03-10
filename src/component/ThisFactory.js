import React, {Component} from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";

 
const ThisFactory =() => {
    return (
       <>
                {/*end*/}
                <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner +")" }}
            >
                <div className="inner-wrapper">
                <h1 >WELCOME TO FACTORY CENTER</h1>
                </div>
            </section>
                <div className="clearfix" />
                {/*dinning*/}
                <section className="blog">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                        <h2 className="blog-title-head">FACTORY MANAGEMENT CENTER</h2>
                        
                      
                        <div className="clearfix" />
                        {/*your form nhap *
                        <div className="single-bottom comment-form">
                            <h3>Leave your Comment</h3>
                            <form action="#" method="post">
                            <input
                                type="text"
                                className="form-control"
                                name="Name"
                                placeholder="Name"
                                required=""
                            />
                            <input
                                type="email"
                                className="form-control"
                                name="Email"
                                placeholder="Email"
                                required=""
                            />
                            <textarea
                                className="form-control"
                                name="Message"
                                placeholder="Message Here...."
                                required=""
                                defaultValue={""}
                            />
                            <input type="submit" className="submit-btn" defaultValue="Send" />
                            </form>
                        </div>
                        */}
                         <div 
                            className="modal fade"
                            id="modalAddProductForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">NH???P S???N PH???M M???I</h4>
                                    <button 
                                    type="button"
                                    className="submit-btn"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    > 
                                    <span aria-hidden="true">Exit</span>
                                    </button>
                                </div>
                                <div className="modal-body mx-3">
                                    <div className="">
                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email"
                                    >
                                        Product code
                                    </label>
                                    <input
                                        name='product_code'
                                        type="text"
                                        id="defaultForm-email"
                                        className="form-control validate"
                                    />
                                 
                                   
                                    
                                    <i className=" prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Product name
                                    </label>

                                    <input
                                        name="product_name"
                                        type="text"
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />

                                    <i className=" prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Product line
                                    </label>

                                    <input
                                        name="product_line"
                                        type="text"
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />

                                    
                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Brand
                                    </label>
                                    
                                    <input
                                        name='brand'
                                        type="text"
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />
                                    
                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Place code
                                    </label>
                                    <input
                                        name='place_code'
                                        type="text"
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />
                                    
                                    </div>
                                    
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">ADD</button>
                                </div>
                            </div>
                                
                            </div>
                            </div>

                            <div 
                            className="modal fade"
                            id="modalMoveToStoreForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">XU???T S???N PH???M ?????N ?????I L??</h4>
                                    <button 
                                    type="button"
                                    className="submit-btn"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    > 
                                    <span aria-hidden="true">Exit</span>
                                    </button>
                                </div>
                                <div className="modal-body mx-3">
                                    <div className="">
                                    <i className="prefix grey-text" />
                                    <label

                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email"
                                    >
                                        Product code
                                    </label>
                                    <input
                                        name='product_code'
                                        type="text"
                                        id="defaultForm-email"
                                        className="form-control validate"
                                    />
                                    </div>

                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email"
                                    >
                                        Store code
                                    </label>
                                    <input
                                    name='store_code'
                                        type="text"
                                        id="defaultForm-email"
                                        className="form-control validate"
                                    />

                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email"
                                    >
                                        Factory Code
                                    </label>
                                    <input
                                    name='factory_code'
                                        type="text"
                                        id="defaultForm-email"
                                        className="form-control validate"
                                    />
                                    
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">ADD</button>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                        
                        
                        </div>
                        <div 
                            className="modal fade"
                            id="modalProductBackForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">NH???N S???N PH???M B??? L???I</h4>
                                    <button 
                                    type="button"
                                    className="submit-btn"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    > 
                                    <span aria-hidden="true">Exit</span>
                                    </button>
                                </div>
                                <div className="modal-body mx-3">
                                    <div className="">
                                    <i className="prefix grey-text" />
                                    <label

                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-email"
                                    >
                                        Product code
                                    </label>
                                    <input
                                        name='product_code'
                                        type="text"
                                        id="defaultForm-email"
                                        className="form-control validate"
                                    />
                                    </div>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">ADD</button>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                        
                        <aside className="col-md-3 col-sm-4 col-xs-12">
                        <div className="blog-list">
                            <h4>PRODUCT MANAGEMENT

                            </h4>
                            <ul>
                            <li>
                                <a>
                                <i className="fa fa-caret-right"> </i>Xem t???t c??? s???n ph???m c???a nh?? m??y
                                </a>
                            </li>
                            <li>
                            <div>
                                <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                <i className="fa fa-caret-right"></i>Nh???p c??c l?? s???n ph???m m???i</a>
                                </div>
                                
                            </li>
                            <li>
                            <div>
                                <a href="" data-toggle="modal" data-target="#modalMoveToStoreForm">
                                <i className="fa fa-caret-right"></i>Xu???t s???n ph???m cho ?????i l??</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                <a href="" data-toggle="modal" data-target="#modalProductBackForm">
                                <i className="fa fa-caret-right"> </i>Nh???n c??c s???n ph???m l???i v??? t??? c??c trung t??m b???o h??nh
                                </a>
                                </div>
                            </li>
                            
                            <li>
                                <a>
                                <i className="fa fa-caret-right"> </i>Th???ng k?? s???n ph???m theo th???i gian
                                </a>
                            </li>
                            <li>
                                <a>
                                <i className="fa fa-caret-right"> </i>Ph??n t??ch s??? l?????ng
                                </a>
                            </li>
                            
                           
                            </ul>
                            <div className="clearfix"> </div>
                        </div>
                       
                        </aside>
                    </div>
                    </div>
                </section>
</>

    )

/*  
    
    return (
        
    
       Records.map( record => 
        {
            return(
                <div>
                    <p>{record.address}</p>
                </div>
            )
        })

     
    )
  
};*/
}
 
export default ThisFactory;