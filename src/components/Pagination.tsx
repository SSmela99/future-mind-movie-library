import { useCallback } from "react";
import {
  URLSearchParamsInit,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import ReactPaginate from "rc-pagination";

interface PaginationProps {
  pages: number;
}

const Pagination = ({ pages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleClick = useCallback(
    (page: number) => {
      if (page === 1) {
        searchParams.delete("page");
        return navigate({ search: searchParams.toString() });
      }

      return setSearchParams((): URLSearchParamsInit => {
        const params = Object.fromEntries(searchParams.entries());
        return { ...params, page: page.toString() };
      });
    },
    [navigate, searchParams, setSearchParams]
  );

  return (
    <ReactPaginate
      total={Math.ceil(pages)}
      pageSize={10}
      onChange={(page) => handleClick(page)}
      defaultCurrent={parseInt(searchParams.get("page") as string) || 1}
      current={parseInt(searchParams.get("page") as string) || 1}
    />
  );
};

export default Pagination;
