import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";


describe('CustomHeader', () => {
    const title = 'title 1';
    const desc = 'desc 1';

    test('should render the title correctly', () => {
        // const { container } = render(<CustomHeader title={title} />);
        // const h1 = container.textContent;
        // expect(h1).toContain(title);

        render(<CustomHeader title={title} />);
        expect(screen.getByText(title)).toBeDefined();

    });

    test('should render the description when provided', () => {
        const { container } = render(<CustomHeader title={title} description={desc} />);
        const description = container.textContent;
        expect(description).toContain(desc);
    });

    test('should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        expect(container.textContent).not.toContain(desc);
    });
});