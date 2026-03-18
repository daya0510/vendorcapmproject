namespace VendorSchema;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Vendor : managed {
    key RequestId          : Integer64;
        RequestNumber      : String(100) not null;
        VendorCode         : String(100);
        VendorName         : String(500);
        RegistrationDetail : Composition of RegistrationData
                                 on RegistrationDetail.RequestId = $self.RequestId;

}

entity RegistrationData : managed {
    key ChildId         : Integer64 @cds.autoIncrement;
        RequestId       : Integer64;
        SupplierName    : String(100);
        Email           : String(100);
        MobileNumber    : String(15);
        Vertical        : String(100);
        AccountGroup    : String(10);
        Country         : String(10);
        TypeOfSuppliers : String(20);
        BPNo            : String(50);
        parent          : Association to Vendor
                              on parent.RequestId = RequestId;
}
