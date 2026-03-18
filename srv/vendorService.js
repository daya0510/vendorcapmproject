const cds = require("@sap/cds");

module.exports = async function () {
    const { Vendor, RegistrationData } = this.entities;

    this.before("CREATE", Vendor, req => {
        req.data.createdAt = new Date();
    });

    this.before("CREATE", Vendor, req => {
        if (!req.data.RequestNumber) {
            req.error(400, "Request Number is mandatory.!");
        }
    })
}