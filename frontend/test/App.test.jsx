import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<App />);
        const heading = screen.getByText(/entry point/i);
        expect(heading).toBeInTheDocument()
    });
});