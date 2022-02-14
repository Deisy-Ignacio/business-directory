import axios from "config/axios";

const businessUrl = "/business";

export const getBusiness = async () => {
  const { data } = await axios.get(businessUrl);
  return data;
};

export const createBusiness = async (business) => {
  const { data } = await axios.post(businessUrl, business);
  return data;
};

export const editBusiness = async ({ businessId, name }) => {
  const { data } = await axios.put(`${businessUrl}/${businessId}`, { name });
  return data;
};

export const deleteBusiness = async (businessId) => {
  const { data } = await axios.delete(`${businessUrl}/${businessId}`);
  return data;
};
