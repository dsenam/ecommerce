import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../constants/api.constants";
import { getData, postData } from "../../services/request.service";
import { QUERY_KEYS } from "../../constants/query.constants";

interface NewProductDataProps {
  name: string;
  price: string;
}

export interface IGetProducts {
  id: string;
  data: {
    imageSrc: string;
    title: string;
    description: string;
  };
}

export const useCreateNewProduct = () => {
  return useMutation(async (data: NewProductDataProps) => {
    const url = API.PRODUCT.POST;
    const response = await postData(url, data);
    return response;
  });
};

export const useGetProducts = (): UseQueryResult<IGetProducts[]> => {
  return useQuery([QUERY_KEYS.getProducts], async () => {
    /* const success = status ? `&success=${status}` : '';
    const canceled = status ? `&canceled=${status}` : ''; */


    const response = await getData(`${API.PRODUCT.GET}`);

    return response;
  });
};

