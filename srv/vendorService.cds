using {VendorSchema as db} from '../db/vendorSchema';

//@(requires: 'authenticated-user')
service VendorService //@(requires: 'authenticated-user')
{
    entity Vendor           as projection on db.Vendor;
    entity RegistrationData as projection on db.RegistrationData;
}
