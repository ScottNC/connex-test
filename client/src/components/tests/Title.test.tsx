import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Title } from '../Title';

describe('Title', () => {
	test('renders form title', () => {	
		render(
			<MemoryRouter>
				<Title />
			</MemoryRouter>
		);

		const title = screen.getByText(/Epoch Counter/i);
		expect(title).toHaveAttribute('href', '/');
	});
	}
);
