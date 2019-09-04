import React, { useState, useEffect } from "react";

// COMPONENTS
import { Header } from "../../components/UI/header";
import { Container, Layout } from "./style";
import Profile from "../../components/containers/profile";
import TabContainer from "../../components/UI/tabs";
// CONTEXT
import { ProfileData } from "./context";
// SERVICES
import DataLayer from "../../../core/services/dataLayer";

const ProfilePage = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await DataLayer.overview(130591);

    console.log(resp);
    setOverview(resp.data);
  };

  return (
    <>
      <Header />
      <Container>
        <Layout>
          <ProfileData.Provider value={overview}>
            <Profile />
            <TabContainer />
          </ProfileData.Provider>
        </Layout>
      </Container>
    </>
  );
};

export default ProfilePage;
