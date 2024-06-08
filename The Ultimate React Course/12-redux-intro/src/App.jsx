import "./App.css";
import AccountOperations from "./componenets/AccountOperations";
import Customer from "./componenets/CreateCustomer";
import BalanceDisplay from "./componenets/BalanceDisplay";
import CreateCustomer from "./componenets/CreateCustomer";
function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
