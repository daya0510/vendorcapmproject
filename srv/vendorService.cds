using {VendorSchema as db} from '../db/vendorSchema';

service VendorService {
    entity Vendor           as projection on db.Vendor;
    entity RegistrationData as projection on db.RegistrationData;
}
