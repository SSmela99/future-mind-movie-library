import { FormEvent, useCallback, useEffect, useState } from "react";
import {
  URLSearchParamsInit,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { isString } from "lodash";
import DatePicker from "react-datepicker";
import Select from "react-select";

import {
  Container,
  Form,
  Input,
  InputWrapper,
  Label,
} from "@/components/Filter/styles";
import Button from "@/components/Button";

import { FilterDataValues } from "@/types";
import { filterEmptyValues } from "@/utils";
import useMobileScreen from "@/hooks/useMobileScreen";

import "react-datepicker/dist/react-datepicker.css";

export const movieTypes = [
  { label: "Film", value: "movie" },
  { label: "Serial", value: "series" },
  { label: "Epizod", value: "episode" },
];

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isMobile } = useMobileScreen();

  const params = Object.fromEntries(searchParams.entries());

  const [filterData, setFilterData] = useState<Omit<FilterDataValues, "page">>({
    date: searchParams.get("date") ?? "",
    title: searchParams.get("title") ?? "",
    type: searchParams.get("type") ?? "",
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const values = filterData;

      if (values.date)
        values.date = isString(values.date)
          ? values.date
          : (values.date as Date).getFullYear().toString();

      const filtered = filterEmptyValues(values);
      navigate("/");
      return setSearchParams((): URLSearchParamsInit => {
        const params = Object.fromEntries(searchParams.entries());

        return { ...params, ...filtered };
      });
    },
    [filterData, navigate, searchParams, setSearchParams]
  );

  const clearForm = useCallback(() => {
    setFilterData({ date: null, title: "", type: "" });

    return setSearchParams((): URLSearchParamsInit => {
      return {};
    });
  }, [setSearchParams]);

  useEffect(() => {
    if (filterData.title.length === 0) clearForm();
  }, [clearForm, filterData.title]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Tytuł</Label>
          <Input
            value={filterData.title}
            defaultValue={searchParams.get("title") as string}
            onChange={(value) =>
              setFilterData((prev) => ({
                ...prev,
                title: value.target.value,
              }))
            }
          />
        </InputWrapper>

        {filterData.title.length > 0 && (
          <>
            <InputWrapper>
              <Label>Typ</Label>
              <Select
                data-testid="type-select"
                placeholder="Typ..."
                instanceId={"react-select-1"}
                options={movieTypes}
                defaultValue={movieTypes.find(
                  (type) => type.value === params.type
                )}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    width: isMobile ? "100%" : "120px",
                  }),
                }}
                onChange={(value) =>
                  setFilterData((prev) => ({
                    ...prev,
                    type: value?.value as string,
                  }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Rok</Label>
              <DatePicker
                selected={filterData.date as Date}
                onChange={(date) =>
                  setFilterData((prev) => ({
                    ...prev,
                    date: date,
                  }))
                }
                showYearPicker
                dateFormat="yyyy"
                enableTabLoop={false}
              />
            </InputWrapper>
          </>
        )}

        <Button type="submit">Wyszukaj</Button>
        {filterData.title.length > 0 && (
          <Button type="button" onClick={clearForm}>
            Wyczyść
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Filters;
