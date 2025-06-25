import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remote_app/Button"));
const Dashboard = React.lazy(() => import("remote_app/Dashboard"));
const List = React.lazy(() => import("remote_app_2/List"));

const App = () => (
  <div>
    <h1>Host App (Port 3000)</h1>
    <Suspense fallback={<div>Loading remote button...</div>}>
      <Dashboard />
      <RemoteButton />
      <List />
    </Suspense>
  </div>
);

export default App;
