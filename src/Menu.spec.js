import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React from 'react';
import Menu from './Menu';

describe('Testing Menu', () => {
    test('defaults to coffee tab', () => {
        render(<Menu/>)
        expect(screen.getByRole('tab', { name: /Coffee/u })).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByRole('heading', { name: /Coffee/u })).toBeVisible();
    });

    test('can switch to another tab', async () => {
        render(<Menu/>)
        userEvent.click(screen.getByRole('tab', { name: /Tea/u }))
        await waitFor(() => {
            expect(screen.getByRole('tab', { name: /Coffee/u })).toHaveAttribute('aria-selected', 'false');
        })
        expect(screen.getByRole('tab', { name: /Tea/u })).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByRole('heading', { name: /Tea/u })).toBeVisible();
    })
})
