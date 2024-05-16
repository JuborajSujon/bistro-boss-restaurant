import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);

export default router;
