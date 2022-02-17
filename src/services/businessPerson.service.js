import axios from "config/axios";

const businessUrl = "/business";

export const getBusinessTeam = async (businessId) => {
  const { data } = await axios.get(`${businessUrl}/${businessId}/persons`);
  return data;
};

export const createBusinessPerson = async (businessId, businessPerson) => {
  const { data } = await axios.post(
    `${businessUrl}/${businessId}/persons`,
    businessPerson
  );
  return data;
};

export const editBusinessPerson = async (businessId, businessPerson) => {
  const { data } = await axios.put(
    `${businessUrl}/${businessId}/persons/${businessPerson.personId}`,
    businessPerson
  );
  return data;
};

export const deleteBusinessPerson = async (businessId, businessPersonId) => {
  const { data } = await axios.delete(
    `${businessUrl}/${businessId}/persons/${businessPersonId}`
  );
  return data;
};
