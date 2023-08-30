import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>





          Privacy Policy<br></br>

Last Updated: [August 11, 2023]<br></br>

At Ecom, we value your privacy. This policy explains how we collect, use, and protect your information.

Information We Collect: We gather your name, email, address, and payment details for orders, and use cookies for a better experience.<br></br>
*How We Use Your Info: We process orders, provide support, and send promotions (you can opt out).<br></br>
*Sharing: We share data with partners for payments, shipping, and analytics.<br></br>
*Data Security: We secure your info but cannot guarantee internet transmission safety.<br></br>
*Your Choices: Access, correct, or delete data, opt out of marketing, and manage cookies.<br></br>
*Updates: This policy may change; review the date above.

<br></br>For questions, contact us at [1800-0000-0000 ].

</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
