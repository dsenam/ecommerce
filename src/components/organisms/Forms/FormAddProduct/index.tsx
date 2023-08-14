import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Input from "../../../atoms/Input";
import Span from "../../../atoms/Span";
import Button from "../../../atoms/Button";
import { FormContainerStyled } from "./styles";
import { useEditProduct } from "../../../../hooks/requests/useProduct";
import { successToast } from "../../../../utils/toasts.utils";
import { DICTIONARY } from "../../../../constants/dictionary.constant";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes.constants";

export type Inputs = {
  title: string;
};

const schema = yup
  .object({
    title: yup.string().required(),
  })
  .required();

const FormEditProduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const { productId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isLoading } = useEditProduct({ productId });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      successToast(DICTIONARY.SUCCESS_EDIT_PRODUCT);
      queryClient.refetchQueries();
      navigate(ROUTES.HOME);
    }
  }, [isSuccess, queryClient]);

  return (
    <FormContainerStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        {...register("title")}
        placeholder="Nome do produto"
        onChange={(e) => setValue("title", e.target.value)}
      />
      {errors.title && <Span error label={`O campo nome é obrigatório`} />}

      <Button disabled={isLoading} primary type="submit" label="Enviar" />
    </FormContainerStyled>
  );
};

export default FormEditProduct;
