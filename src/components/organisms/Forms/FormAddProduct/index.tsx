import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../../../atoms/Input";
import Span from "../../../atoms/Span";
import CurrencyInputField from "../../../molecules/CurrencyInputController";
import { Button } from "../../../atoms/Button";
import { FormContainerStyled } from "./styles";
import { useCreateNewProduct } from "../../../../hooks/requests/useProduct";
import { successToast } from "../../../../utils/toasts.utils";
import { DICTIONARY } from "../../../../constants/dictionary.constant";
import { useQueryClient } from "@tanstack/react-query";

export type Inputs = {
  name: string;
  price: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.string().required(),
  })
  .required();

const FormAddProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useCreateNewProduct();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      successToast(DICTIONARY.SUCCESS_ADD_PRODUCT);
      queryClient.refetchQueries();
    }
  }, [isSuccess, queryClient]);

  return (
    <FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register("name")}
        placeholder="Nome do produto"
        onChange={(e) => setValue("name", e.target.value)}
      />
      {errors.name && <Span error label={`O campo nome é obrigatório`} />}

      <CurrencyInputField
        {...register("price")}
        name="price"
        control={control}
        setValue={setValue}
      />
      {errors.price && <Span error label={`O campo preço é obrigatório`} />}

      <Button primary type="submit" label="Enviar" />
    </FormContainerStyled>
  );
};

export default FormAddProduct;
