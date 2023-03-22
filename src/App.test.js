import { render, screen } from '@testing-library/react';
import Testimonials from './components/Testimonials'

test('render HeroSection', () => {
  render(<Testimonials />);
  const heading = screen.getByText("Testimonials");
  expect(heading).toBeInTheDocument();
})