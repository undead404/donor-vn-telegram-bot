import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DonorsBoard from './pages/DonorsBoard';
import SingleDonor from './pages/SingleDonor';
import { store } from './store/store';

import { StyledWrapper } from './styles/App.styled';

export const App = () => (
  <StyledWrapper>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donors-board" element={<DonorsBoard />} />
          <Route path="/donors-board/:userId" element={<SingleDonor />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StyledWrapper>
);
