import { ServiceProviders as TServiceProviders } from "../api/serviceProviders/ServiceProviders";

export const SERVICEPROVIDERS_TITLE_FIELD = "name";

export const ServiceProvidersTitle = (record: TServiceProviders): string => {
  return record.name?.toString() || String(record.id);
};
