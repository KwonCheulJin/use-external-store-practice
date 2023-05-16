import { fireEvent, render, screen } from '@testing-library/react';
import { container } from 'tsyringe';
import App from './App';

const context = describe;

describe('App', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  it('render', () => {
    render(<App />);
  });

  context('counter', () => {
    it('increase 버튼을 한 번 눌렀을 때', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count: 1')).toHaveLength(2);
    });
  });
  context('counter', () => {
    it('increase 버튼을 두 번 눌렀을 때', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      expect(screen.getAllByText('Count: 2')).toHaveLength(2);
    });
  });
});
