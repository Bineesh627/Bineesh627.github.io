import { render, screen } from '@testing-library/react';
import App from './App';
import { NavBar } from './components/NavBar'; // Import your NavBar component

test('renders the NavBar component', () => {
  render(<App />);
  // Use a role or text to find the NavBar element.
  // You might need to adjust this based on how your NavBar is structured.
  const navigationElement = screen.getByRole('navigation');
  expect(navigationElement).toBeInTheDocument();
});

// You can remove or comment out the original test if it's still there
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });