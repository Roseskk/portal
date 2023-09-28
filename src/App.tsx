import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import withRedux from "./hoc/withRedux";
import MainLayout from "./layouts/mainLayout";
import withAppLoader from "./hoc/withAppLoader";
import {ModalProvider} from "./hooks/useModal";
import {MenuProvider} from "./hooks/useMenu";

function App() {
  const routesController = useRoutes(routes)
  return (
      <>
          <MenuProvider>
              <ModalProvider>
                  <MainLayout>
                      <main>{routesController}</main>
                  </MainLayout>
              </ModalProvider>
          </MenuProvider>
      </>
  );
}

export default withRedux(withRouter(withAppLoader((App))));
