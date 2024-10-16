import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NewsFeed from "./NewsFeed";
import NewsFeedContent from "./NewsFeedContent";
import FollowingList from "./FollowingList";
import FollowerList from "./FollowerList";
import Profile from "./Profile";
import MyProfile from "./MyProfile";
import AllAccounts from "./AllAccounts";
import UnauthorizedPage from "./UnauthorizedPage";
//import MealPlan from "./MealPlan";
import MealPlanContent from "./MealPlanContent";

function AppContainer() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/** */}
        <Route path="/newsfeed" element={<NewsFeed />}>
          <Route path="" element={<NewsFeedContent />} />
          {/* Missing closing angle bracket and closing tag for Route */}
          <Route path="" element={<MealPlanContent />} />
          <Route path="following" element={<FollowingList />} />
          <Route path="follower" element={<FollowerList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="allaccounts" element={<AllAccounts />} />
          <Route path="mealplan" element={<MealPlanContent />}/>
        </Route>
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
          <Route path="*" element={<NotFoundPage />} />
       
      </Routes>
    </HashRouter>
  );
}

export default AppContainer;
