import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root";
import SlidingTile from "./pages/challenges/sliding-tile/SlidingTile";
import ChallengeList from "./pages/challenge-list/ChallengeList";
import ErrorPage from "./components/error-page/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "challenges",
          element: <ChallengeList />,
        },
        {
          path: "challenge/sliding-tile",
          element: <SlidingTile />,
        },
      ],
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
