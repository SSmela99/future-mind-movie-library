import { afterEach, describe, expect, test } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import MoviesList from "@/components/MoviesList";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

afterEach(() => {
  cleanup();
});

describe("App", () => {
  const queryClient = new QueryClient();
  const router = createMemoryRouter([{ path: "*", element: <MoviesList /> }]);

  test("renders properly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
    expect(screen.getByText("Movie library - Future Mind")).toBeDefined();
  });

  test("form render", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );
    const titleInput = screen.getAllByRole("textbox")[0];
    expect(titleInput).toBeDefined();

    const inputValues = {
      title: "test",
    };

    fireEvent.change(titleInput, { target: { value: "test" } });
    expect(titleInput.value).toEqual(inputValues.title);

    const cleanupButton = screen.getByText("Wyczyść");
    expect(cleanupButton).toBeDefined();
  });

  test("showup of list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    const titleInput = screen.getAllByRole("textbox")[0];
    fireEvent.change(titleInput, { target: { value: "test" } });
    fireEvent.click(screen.getByText("Wyszukaj"));

    const loader = screen.getByTestId("three-dots-loading");
    expect(loader).toBeDefined();

    await waitFor(() => {
      const value = screen.getByText("Beta Test, 2016");
      expect(value).toBeDefined();
    });
  });
});
