import { useMutation } from "@tanstack/react-query";
import { API } from "../../constants/api.constants";
import { postData } from "../../services/request.service";



interface NewProductDataProps {
  name: string;
  price: string;
}

export const useCreateNewProduct = () => {
  return useMutation(async (data: NewProductDataProps) => {
    const url = API.PRODUCT.POST;
    const response = await postData(url, data);
    return response;
  });
};
