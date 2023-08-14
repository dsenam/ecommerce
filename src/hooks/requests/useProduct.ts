import { UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../constants/api.constants";
import { getData, putData } from "../../services/request.service";
import { QUERY_KEYS } from "../../constants/query.constants";

interface NewProductDataProps {
  title: string;
  
}

export interface IGetProducts {
  id: string;
  data: {
    imageSrc: string;
    title: string;
    price: string;
    stripe_id: string;
  };
}

interface IParamsPut {
  productId?: IGetProducts["id"];
}

export const useEditProduct = (params: IParamsPut) => {
  return useMutation(async (data: NewProductDataProps) => {
    const url = API.PRODUCT.PUT;
    const response = await putData(url, data, [String(params.productId)]);
    return response;
  });
};

export const useGetProducts = (): UseQueryResult<IGetProducts[]> => {
  return useQuery([QUERY_KEYS.getProducts], async () => {
    const response = await getData(`${API.PRODUCT.GET}`);

    return response;
  });
};

export const useGetProductById = ({
  id,
}: IGetProducts): UseQueryResult<IGetProducts> => {
  return useQuery([QUERY_KEYS.getProductsById], async () => {
    const response = await getData(`${API.PRODUCT.GET_BY_ID}`, [id]);

    return response;
  });
};
