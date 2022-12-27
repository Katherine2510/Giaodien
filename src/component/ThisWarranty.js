import React, {Component} from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";

 
const ThisWarranty =() => {
    return (
       <>
                {/*end*/}
                <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner +")" }}
            >
                <div className="inner-wrapper">
                <h1>WELCOME TO WARRANTY CENTER</h1>
                </div>
            </section>
                <div className="clearfix" />
                {/*dinning*/}
                <section className="blog">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                        <h2 className="blog-title-head">WARRANTY MANAGEMENT CENTER</h2>
                        
                      
                        <div className="clearfix" />
                       
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
                                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM CÂN BẢO HÀNH</h4>
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
                                        Store code
                                    </label>

                                    <input
                                        name='store_code'
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
                        
                        {/**------------------------------- */}
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
                                    <h4 className="modal-title w-100 font-weight-bold">TRẢ SẢN PHẨM</h4>
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
                                        Store
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

                        {/**---------- */}
                        <div 
                            className="modal fade"
                            id="modalMoveToFactoryForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                            >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">CHUYỂN NHỮNG SẢN PHẨM KHÔNG THỂ SỬA VỀ NHÀ MÁY</h4>
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
                                        type="email"
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
                                        Factory code
                                    </label>

                                    <input
                                        name='factory_code'
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
                        
                        
                        
                        
                        </div>
                        <aside className="col-md-3 col-sm-4 col-xs-12">
                        <div className="blog-list">
                            <h4>PRODUCT MANAGEMENT

                            </h4>
                            <ul>
                            <li>
                                     <div>
                                    <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                        <i className="fa fa-caret-right"></i>Xem tất cả các sản phẩm có trong nhà máy</a>
                                </div>
                               
                            </li>
                            <li>
                                     <div>
                                    <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                        <i className="fa fa-caret-right"></i>Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý</a>
                                </div>
                               
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalMoveToStoreForm">
                                        <i className="fa fa-caret-right"></i>Trả sản phẩm đã sửa chữa xong cho đại lý</a>
                                </div>
                            </li>
                            <li>
                            <div>
                                    <a href="" data-toggle="modal" data-target="#modalMoveToFactoryForm">
                                        <i className="fa fa-caret-right"></i>Chuyển sản phẩm bảo hành lỗi không thể sửa chữa về cơ sở sản xuất</a>
                                </div>
                              
                            </li>
                            
                            <li>
                                <a>
                                <i className="fa fa-caret-right"> </i>Thống kê sản phẩm theo thời gian
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
 
export default ThisWarranty;