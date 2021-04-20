import App from '../App';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

  render(<App />)

  it('should render main title', () => {
     expect(screen.getByText("Insert a cep valid!")).toBeTruthy();

  });
