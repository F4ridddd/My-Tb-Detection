import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./routes/Index";
import { Toaster } from '@/components/ui/sonner'
import Upload from "./routes/Upload";
import Result from "./routes/Result";
import NotFound from "./routes/NotFound";



const App = () => (
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  
);

export default App;
