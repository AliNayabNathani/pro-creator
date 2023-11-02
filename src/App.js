import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import WhoUses from './Components/WhoUses/WhoUses';
import PricingAndFaq from './Components/PricingAndFaq/PricingAndFaq';
import Blogs from './Components/Blogs/Blogs';
import BlogDetail from './Components/Blogs/BlogDetails/BlogDetails';
import Login from './Components/Auth/Login/Login';
import VerifyCode from './Components/Auth/VerificationCode/VerifyCode';
import Signup from './Components/Auth/Signup/Signup';
import UploadVideo from './Components/UploadVideo/UploadVideo';
import CreateTeam from './Components/CreateTeam/CreateTeam';
import VideoEdit from './Components/VideoEdit/VideoEdit';
import DownloadVideo from './Components/DownloadVideo/DownloadVideo';
import ScriptFeatures from './Components/ScriptFeatures/ScriptFeatures';
import ShortVideoFeatures from './Components/ShortVideoFeatures/ShortVideoFeatures';
import Subscription from './Components/Subscription/Subscription';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import HallOfFame from './Components/HallOfFame/HallOfFame';
import NotFound from './Components/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error } = useSelector(
    state => state.user
  );

  const renderHeader = element => (
    <>
      <Header isAuthenticated={isAuthenticated} />
      {element}
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={renderHeader(<WhoUses />)} />
        <Route path="/pricing" element={renderHeader(<PricingAndFaq />)} />
        <Route path="/blogs" element={renderHeader(<Blogs />)} />
        {/* <Route
          path="/blogs"
          element={<PrivateRoute>{renderHeader(<Blogs />)}</PrivateRoute>}
        /> */}
        <Route path="/blog/:id" element={renderHeader(<BlogDetail />)} />
        <Route
          path="/verify/:code/:unicode"
          element={renderHeader(<VerifyCode />)}
        />
        <Route path="/signup" element={renderHeader(<Signup />)} />
        <Route path="/uploadvideo" element={renderHeader(<UploadVideo />)} />
        <Route path="/create-team" element={renderHeader(<CreateTeam />)} />
        <Route path="/video-edit" element={renderHeader(<VideoEdit />)} />
        <Route
          path="/download-video"
          element={renderHeader(<DownloadVideo />)}
        />
        <Route
          path="/script-features"
          element={renderHeader(<ScriptFeatures />)}
        />
        <Route
          path="/short-video-features"
          element={renderHeader(<ShortVideoFeatures />)}
        />
        <Route path="/subscription" element={renderHeader(<Subscription />)} />
        {/* <Route
          path="/update-profile"
          element={renderHeader(<UpdateProfile />)}
        /> */}
        <Route
          path="/update-profile"
          element={
            <PrivateRoute>{renderHeader(<UpdateProfile />)}</PrivateRoute>
          }
        />
        <Route path="/hall-of-fame" element={renderHeader(<HallOfFame />)} />

        <Route path="*" element={renderHeader(<NotFound />)} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
