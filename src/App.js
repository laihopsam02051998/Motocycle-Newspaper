import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import AboutUs from "./containers/AboutUs";
import ModelProduct from "./containers/ModelProduct";
import News from "./containers/News";
import Advertisement from "./containers/Advertisement";
import Contact from "./containers/Contact";
// import ManagementUser from "./containers/ManagementUser";
import VideoPost from "./containers/VideoPost";
import Biker from "./containers/Biker";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import { Fragment } from "react";
import DriverSkill from "./containers/DriverSkill";
import DetailCar from "./containers/Details/DetailCar";
import NewDetail from "./containers/News/NewDetail";
import DetailAccessory from "./containers/Details/DetailAccessory";
import ScrollToTop from "./Services/ScrollToTop";
function App() {
  return (
    <Router history={history}>
      <Fragment>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/ModelProduct" component={ModelProduct} />
            <Route path="/News" component={News} />
            <Route path="/Advertisement" component={Advertisement} />
            <Route path="/Contact" component={Contact} />
            <Route path="/BookingService" component={VideoPost} />
            <Route path="/Biker" component={Biker} />
            <Route path="/PaintProtection" component={DriverSkill} />
            <Route path="/DetailAccessory" component={DetailAccessory} />
            <Route path="/DetailCar/:Id" component={DetailCar} />
            <Route path="/NewDetail/:Id" component={NewDetail} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
