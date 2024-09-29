import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

import Gen from './generaten/gen';
import Shipping from './shipping/shipping';
import Modal from './Modal/modal';
// import Carousel from '../src/carasoul/carasoul'
// import Home from './Home/home';
import Notfound from './Notfound/Notfound';
import Home from './Home/home';
import Footer from './footer/footer';
// import Earn from './Earn/earn';
import Call from './callback/callback';
import UpdateEnumForm from './enum/enum';
import Header from './header/header';
import Earning from './Earning/earning';
import AboutUs from './about us/About';
import PrivacyPolicy from './private/private';
import Addcart from './addcart/page';
import RefundPolicy from './Refund/Refund';
import ShippingPolicy from './shipping us/shipping us';
import Last from './last/last';
import Terms from './Terms/terms';
// import AddCart from './addcart/page';
import CartItems from './shopingcart/CartItems';
import SearchProduct from './Searchproduct/SearchProduct';
import SearchProductType from './SearchproductType/SearchProductType';
import Search from './Search/Search';
import AllProduct from './AllProduct/AllProduct';
import AddCartItems from './AddCartItems/AddCartItems';

import AccountDetails from './component/AccountDetails';
import Checkout from './component/checkout';
import CheckoutNext from './component/checkoutNext';
import ListofProducts from './component/ListofProducts';
import Login from './component/login';
import SingleProducts from './component/SingleProducts';
import ViewCart from './component/ViewCart';
import ViewOrder from './component/ViewMyOrder';

import ResponsiveMenu from './component/ResponsiveMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-page" element={<Modal />} />
        <Route path="/card" element={<CartItems />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/header" element={<Header />} />
        <Route path="/call-back" element={<Call />} />
        <Route path="/earn-with-us" element={<Earning />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Refund" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/products" element={<SearchProduct />} />
        <Route path="/productsType" element={<SearchProductType />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/AddCartItems" element={<AddCartItems />} />

        <Route path="/ListofProducts" element={<ListofProducts />} />
        <Route path="/SingleProducts" element={<SingleProducts />} />

        <Route path="/ViewCart" element={<ViewCart />} />

        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/CheckoutNext" element={<CheckoutNext />} />
        <Route path="/ViewOrder" element={<ViewOrder />} />

        <Route path="/AccountDetails" element={<AccountDetails />} />
        <Route path="/ResponsiveMenu" element={<ResponsiveMenu />} />
      </Routes>

      <ToastContainer /> {/* Add ToastContainer here */}
    </Router>
  );
}

export default App;
