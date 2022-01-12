import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Expenses from './Expenses';
import { HomePage } from "./HomePage";
import Invoice from "./Invoice";
import Invoices from './Invoices'

const App = () =>  {  
  return (
    <div>
      <HashRouter>
      <Routes>
          <Route path="/" element={ <HomePage /> } >
            <Route path="expenses" element={ <Expenses /> } />
            <Route path="invoices" element={ <Invoices /> }>
            <Route index element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              } />
              <Route path=":invoiceId" element={ <Invoice /> } />
            </Route>
            <Route path="*" element={
               <main style={{ padding: "1rem" }}>
                  <p>THere´s nothinng here!</p>
               </main> 
              }
            />
          </Route>
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
