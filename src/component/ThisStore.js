import React, {Component} from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";

 
const ThisStore =() => {
    return (
       <>
                {/*end*/}
                <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner +")" }}
            >
                <div className="inner-wrapper">
                <h1>WELCOME TO STORE CENTER</h1>
                </div>
            </section>
                <div className="clearfix" />
                {/*dinning*/}
                <section className="blog">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                        <h2 className="blog-title-head">STORE MANAGEMENT</h2>
                        
                      
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
                                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM</h4>
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
                        
                        {/*---------------------------- */}
                        <div 
                            className="modal fade"
                            id="modalAddProduct1Form"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM ĐẾN TRUNG TÂM BẢO HÀNH</h4>
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
                                 
                                   
                                    
                                    <i className=" prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        WARRANTY CENTER CODE
                                    </label>

                                    <input
                                        name='warranty_code'
                                        type="text"
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />

                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">ADD</button>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                        

                        <div 
                            className="modal fade"
                            id="modalAddProduct2Form"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">LẤY SẢN PHẨM TỪ TRUNG TÂM BẢO HÀNH</h4>
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
                                 
                                </div>   
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button className="btn btn-default">ADD</button>
                                </div>
                            </div>
                                
                            </div>
                        </div>
                        {/**----------------------ban san pham */}
                        
                        <div 
                            className="modal fade"
                            id="modalSaleForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM ĐÃ BÁN</h4>
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
                                        htmlFor="defaultForm-pass"
                                    >
                                        Product code was saled
                                    </label>
                                    <input
                                        name='product_code'
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
                                        Customer code
                                    </label>
                                    <input
                                    name='customer_code'
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
                                        Customer name
                                    </label>
                                    <input
                                    name='customer_name'
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
                                        Address
                                    </label>
                                    <input
                                        name='address'
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
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name='phone_number'
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />
                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Order Number
                                    </label>
                                    <input
                                        type="text"
                                        name='order_number'
                                        id="defaultForm-pass"
                                        className="form-control validate"
                                    />
                                    <i className="prefix grey-text" />
                                    <label
                                        data-error="wrong"
                                        data-success="right"
                                        htmlFor="defaultForm-pass"
                                    >
                                        Store code
                                    </label>
                                    <input
                                        name='store_code'
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
                        
                        
                        </div>

                        {/**---------------------thong ke theo nam */}
                        <div 
                            className="modal fade"
                            id="modalYearForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">THỐNG KÊ SẢN PHẨM THEO NĂM</h4>
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
                                        htmlFor="defaultForm-pass"
                                    >
                                        Year
                                    </label>
                                    <input
                                        type="password"
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
                        
                       
                        <aside className="col-md-3 col-sm-4 col-xs-12">
                        <div className="blog-list">
                            <h4>PRODUCT MANAGEMENT

                            </h4>
                            <ul>
                            
                            <li>
                                <div>
                                    <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                        <i className="fa fa-caret-right"></i>Thêm sản phẩm vào kho </a>
                                </div>
                                
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalSaleForm">
                                        <i className="fa fa-caret-right"></i>Bán sản phẩm</a>
                                </div>
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalAddProduct1Form">
                                        <i className="fa fa-caret-right"></i>Thêm sản phẩm vào cần bảo hành </a>
                                </div>
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalAddProduct2Form">
                                        <i className="fa fa-caret-right"></i>Thêm sản phẩm vào đã bảo hành </a>
                                </div>
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalYearForm">
                                        <i className="fa fa-caret-right"></i>Thống kê sản phẩm theo năm </a>
                                </div>
                            </li>
                            <li>
                                <a>
                                <i className="fa fa-caret-right"> </i>Phân tích số lượng
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
 
export default ThisStore;