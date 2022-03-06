import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import ReactDOM from "react-dom";
import { apiUrl } from "../url/url";
import axios from "axios";

const AddEmp = () => {

return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="8">
      <form>
        <table> <tr> <td>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text mx-3">
          NAME
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br /> </td> <td>
         <label htmlFor="defaultFormRegisterNameEx" className="grey-text mx-4">
          ID
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control mx-3" />
        <br /> </td>   </tr>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          GENDER
        </label>
        {/* <input type="text" id="defaultFormRegisterNameEx" className="form-control" /> */}
        <div>
        <input type="radio" value="Male" name="gender" /> Male <br/>
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          DATE OF BIRTH
        </label>
        <input type="date" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
         ADDRESS
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          CITY
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
         COUNTRY
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
         PINCODE
        </label>
        <input type="number" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          EMAIL
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
         MOBILE
        </label>
        <input type="number" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          AADHAR NUMBER
        </label>
        <input type="number" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          DATE OF JOINING
        </label> 
        <input type="date" id="defaultFormRegisterPasswordEx" className="form-control" />
        <br/>
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          DESIGNATION
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          ROLE
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <div className="text-center mt-4">
        
        
{/*           
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn> */}
        </div>
        </table>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

);
};

export default AddEmp;
