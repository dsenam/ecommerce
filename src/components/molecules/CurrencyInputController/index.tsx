import React from "react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";

import { CurrencyInputStyled } from "./styles";
import { Inputs } from "../../organisms/Forms/FormAddProduct";

interface CurrencyInputProps {
  name: "name" | "price";
  control: Control<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}

const CurrencyInputField: React.FC<CurrencyInputProps> = ({
  name,
  control,
  setValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CurrencyInputStyled
          placeholder="R$"
          className="currency-input"
          prefix="R$ "
          decimalSeparator=","
          groupSeparator="."
          allowNegativeValue={false}
          value={field.value}
          onValueChange={(value, name) => {
            field.onChange(name, value);
            setValue("price", value as string);
          }}
        />
      )}
    />
  );
};

export default CurrencyInputField;
