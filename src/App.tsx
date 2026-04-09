import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Analytics from './pages/Analytics';
import AgentConfig from './pages/AgentConfig';
import LinkTree from './pages/LinkTree';
import Upgrade from './pages/Upgrade';
import MockGoogleAuth from './pages/MockGoogleAuth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/oauth/google" element={<MockGoogleAuth />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/analytics" replace />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="agent" element={<AgentConfig />} />
          <Route path="linktree" element={<LinkTree />} />
          <Route path="upgrade" element={<Upgrade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
