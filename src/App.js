import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Slide from './component/Slide';
import ServiceHome from './component/ServiceHome';
import GalleryHome from './component/GalleryHome';
import OfferBlock from './component/OfferBlock';
import Review from './component/Review';
import BlogHome from './component/BlogHome';
import Blog from './component/Blog';
import Footer from './component/Footer';
import Cars from './component/Cars';
import Store from './component/Store'
import {Routes, Route} from 'react-router-dom'
import ThisStore from './component/ThisStore';
import Warranty from './component/Warranty';
import News from './component/News';
import Contact from './component/Contact';
import Cars1 from './component/Cars1';
import Admin from './component/Admin';
import ThisFactory from './component/ThisFactory';
import ThisWarranty from './component/ThisWarranty';
import Products from './component/Products';
import AdminDo from './component/AdminDo';
import Factories from './component/Factories'
import Warranty_centers from './component/Warranty_centers';
import Stores from './component/Stores'
import Aproducts from './component/Aproducts'
import Login from './component/Login';
import ProductLines from './component/ProductLines'
import ViewProductsByStatus from './component/ViewProductsByStatus'
import ViewProductsByFactory from './component/ViewProductsByFactory'
import ViewProductsByStore from './component/ViewProductsByStore'
import ViewProductsByWarranty from './component/ViewProductsByWarranty'



const App = () => {
  return (
    
  <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path='/' element={
          <div>
             <Slide />
            <ServiceHome />
            <GalleryHome />
            <OfferBlock />
            <Review />
            <BlogHome />
            <Blog />
          </div>
          
        }>
          
        </Route>
      </Routes>
     
     
      <Routes>
        <Route path='/cars' element={
          <div>
            <Cars />
            <Cars1 />
          </div>
          
        }> 
        </Route>
      </Routes>

      <Routes>
        <Route path='/store' element={
          <div>
            <Store />
            
          </div>
          
        }> 
        </Route>
      </Routes>


      <Routes>
        <Route path='/warranty' element={
          <div>
            <Warranty />
            
          </div>
          
        }> 
        </Route>
      </Routes>

      <Routes>
        <Route path='/news' element={
          <div>
            <News />
            
          </div>
          
        }> 
        </Route>
      </Routes>

      <Routes>
        <Route path='/contact' element={
          <div>
            <Contact />
            
          </div>
          
        }> 
        </Route>
      </Routes>
      <Routes>
        <Route path='/thisstore' element={
          <div>
            <ThisStore />
          </div>
          
        }> 
        </Route>
      </Routes>
      <Routes>
        <Route path='/admin' element={
          <div>
            <Admin />
           
            
          </div>
          
        }> 
        </Route>
      </Routes>

      <Routes>
                    <Route path='/admin/products' element={
                    <div>
                      <Admin />
                      <Products />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
         <Routes>
                    <Route path='/admin/view_by_status' element={
                    <div>
                      <Admin />
                      <ViewProductsByStatus />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
         <Routes>
                    <Route path='/admin/product_lines' element={
                    <div>
                      <Admin />
                      <ProductLines />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
         <Routes>
                    <Route path='/admin/view_by_factory' element={
                    <div>
                      <Admin />
                      <ViewProductsByFactory />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>

         <Routes>
                    <Route path='/admin/view_by_store' element={
                    <div>
                      <Admin />
                      <ViewProductsByStore />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>

         <Routes>
                    <Route path='/admin/view_by_warranty' element={
                    <div>
                      <Admin />
                      <ViewProductsByWarranty />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
      
      
         <Routes>
                    <Route path='/admin/factories' element={
                    <div>
                      <Admin />
                      <Factories />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>

         <Routes>
                    <Route path='/admin/warranty_centers' element={
                    <div>
                      <Admin />
                      <Warranty_centers />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
         <Routes>
                    <Route path='/admin/stores' element={
                    <div>
                      <Admin />
                      <Stores />
                     
                     
                    </div>  
                    }>
                    
                    </Route>       
         </Routes>
      
      <Routes>
        <Route path='/thisfactory' element={
          <div>
            <ThisFactory />
          </div>
          
        }> 
        </Route>
      </Routes>
      <Routes>
        <Route path='/thiswarranty' element={
          <div>
            <ThisWarranty />
          </div>
          
        }> 
        </Route>
      </Routes>
      <Routes>
        <Route path='/aproducts' element={
          <div>
            <Aproducts />
          </div>
          
        }> 
        </Route>
      </Routes>


      <Footer />
      </>
      

  
  )
    
}

export default App;
