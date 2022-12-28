import React, { Component } from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner7.jpg";
import '../font-awesome/css/font-awesome.min.css'
import Popup from 'reactjs-popup';
import banner2 from "../images/banner2.png"
import CreateAccount from './AdminForm/CreateAccount';
import DeleteAccount from './AdminForm/DeleteAccount';
import UpdateAccount from './AdminForm/UpdateAccount';

const Admin = () => {
    return (
        <>
            {/*end*/}
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner + ")" }}
            >
                <div className="inner-wrapper">
                    <h1>WELCOME TO BIG CORP CENTER</h1>
                </div>
            </section>
            <div className="clearfix" />
            {/*dinning*/}
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <h2 className="blog-title-head">BIG CORP MANAGEMENT CENTER</h2>

                            <div className="clearfix" />


                            {/*------------------------------------------- */}
                            <div
                                className="modal fade"
                                id="modalAddUserForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <CreateAccount />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalUpdateUserForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <UpdateAccount />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalDeleteUserForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <DeleteAccount />
                                    </div>

                                </div>
                            </div>
                            <section className="blog">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-9 col-sm-8 col-xs-12">
                                            <h2 className="blog-title-head">ADMIN CENTER OF BIG CORD</h2>

                                            <div className="blog-image-single margin-top-small">
                                                <img src={banner2} className="img-responsive" />
                                            </div>
                                            <p className="blog-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                                            </p>


                                        </div>
                                        <aside className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="blog-list">
                                                <h4>PRODUCT LINE MANAGEMENT

                                                </h4>
                                                <ul>
                                                    <li>

                                                        <a href="/admin/products">
                                                            <i className="fa fa-caret-right"> </i>Xem tất cả sản phẩm
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a href="/admin/products">
                                                            <i className="fa fa-caret-right"> </i>Xem danh sách dòng sản phẩm
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a href='/admin/factories'>
                                                            <i className="fa fa-caret-right"> </i>Xem danh sách nhà máy
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a href='/admin/stores'>
                                                            <i className="fa fa-caret-right" > </i>Xem danh sách đại lý
                                                        </a>
                                                    </li>

                                                    <li>

                                                        <a href='/admin/warranty_centers'>
                                                            <i className="fa fa-caret-right"> </i>Xem danh sách trung tâm bảo hành
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo nhà máy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo đại lý phân phối
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo trung tâm bảo hành
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo trạng thái
                                                        </a>
                                                    </li>


                                                </ul>
                                                <div className="clearfix"> </div>
                                            </div>
                                            <div className="blog-list">
                                                <h4>USER MANAGEMENT

                                                </h4>
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalAddUserForm">
                                                                <i className="fa fa-caret-right"></i>Thêm tài khoản mới</a>
                                                        </div>

                                                    </li>

                                                    <li>
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalUpdateUserForm">
                                                                <i className="fa fa-caret-right"></i>Cập nhật thông tin tài khoản</a>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalDeleteUserForm">
                                                                <i className="fa fa-caret-right"></i>Xóa tài khoản</a>
                                                        </div>

                                                    </li>



                                                </ul>
                                                <div className="clearfix"> </div>
                                            </div>

                                        </aside>
                                    </div>
                                </div>
                            </section>

                        </div>
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

export default Admin;