import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaterialsList } from "./materials/MaterialsList";
import { MaterialsCreate } from "./materials/MaterialsCreate";
import { MaterialsEdit } from "./materials/MaterialsEdit";
import { MaterialsShow } from "./materials/MaterialsShow";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { OrdersList } from "./orders/OrdersList";
import { OrdersCreate } from "./orders/OrdersCreate";
import { OrdersEdit } from "./orders/OrdersEdit";
import { OrdersShow } from "./orders/OrdersShow";
import { ServiceProvidersList } from "./serviceProviders/ServiceProvidersList";
import { ServiceProvidersCreate } from "./serviceProviders/ServiceProvidersCreate";
import { ServiceProvidersEdit } from "./serviceProviders/ServiceProvidersEdit";
import { ServiceProvidersShow } from "./serviceProviders/ServiceProvidersShow";
import { ListingsList } from "./listings/ListingsList";
import { ListingsCreate } from "./listings/ListingsCreate";
import { ListingsEdit } from "./listings/ListingsEdit";
import { ListingsShow } from "./listings/ListingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MarketplaceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Materials"
          list={MaterialsList}
          edit={MaterialsEdit}
          create={MaterialsCreate}
          show={MaterialsShow}
        />
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Orders"
          list={OrdersList}
          edit={OrdersEdit}
          create={OrdersCreate}
          show={OrdersShow}
        />
        <Resource
          name="ServiceProviders"
          list={ServiceProvidersList}
          edit={ServiceProvidersEdit}
          create={ServiceProvidersCreate}
          show={ServiceProvidersShow}
        />
        <Resource
          name="Listings"
          list={ListingsList}
          edit={ListingsEdit}
          create={ListingsCreate}
          show={ListingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
